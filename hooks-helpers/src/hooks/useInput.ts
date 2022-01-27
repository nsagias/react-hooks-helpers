import { useState } from "react";

const useInput = (initialvalue: string) => {
  const [value, setValue] = useState(initialvalue);

  return { value }
};

export default useInput;