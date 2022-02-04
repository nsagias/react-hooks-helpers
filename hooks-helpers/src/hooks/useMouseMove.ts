import { useState, useEffect } from "react";

interface IMousePosition {
  x: number;
  y: number;
}

const useMouseMove = () => {
  const MOUSE_START_DEFAULT: IMousePosition = {x: 0, y: 0};
  const [mousePosition, setMousePosition] = useState<IMousePosition>(MOUSE_START_DEFAULT);
  
  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
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
  return {mousePosition}
}
export default useMouseMove;