import { useEffect, useState } from "react";

interface IMousePosition {
  x: number;
  y: number;
}

const MouseMove = () => {
  const MOUSE_START_DEFAULT: IMousePosition = {x: 0, y: 0};
  const [mousePosition, setMousePosition] = useState<IMousePosition>(MOUSE_START_DEFAULT);

  useEffect(() => {
    const mouseMoveHandler = (event:any) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });
    };
    document.addEventListener<"mousemove">("mousemove", mouseMoveHandler);
    // clean up after use
    return () => {
      document.removeEventListener<"mousemove">("mousemove", mouseMoveHandler)
    };
  }, []);

  return (
    <div>
      <h2>useMousePosition</h2>
      <h2>X: {mousePosition.x}  Y:{mousePosition.y}</h2>
    </div>
  )
};

export default MouseMove;