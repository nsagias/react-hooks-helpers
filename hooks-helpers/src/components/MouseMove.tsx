import { useEffect, useState } from "react";
import useMouseMove from "../hooks/useMouseMove";

const MouseMove = () => {
  const { mousePosition } = useMouseMove();


  return (
    <div>
      <h2>useMousePosition</h2>
      <h2>X: {mousePosition.x}  Y:{mousePosition.y}</h2>
    </div>
  )
};

export default MouseMove;