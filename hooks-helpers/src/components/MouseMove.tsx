import { useEffect } from "react";

const MouseMove = () => {

  useEffect(() => {
    const mouseMoveHander = () => {};
    document.addEventListener('mousemove', mouseMoveHander);
  }, []);

  return (
    <div>
      <h2>useMousePosition</h2>
      <h2>x: 0, y: 0</h2>
    </div>
  )
};

export default MouseMove;