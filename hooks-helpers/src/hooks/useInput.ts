import { useState } from "react";

interface IOnChange {
  (event:any): void;
}


const useInput = (initialvalue: any) => {
  const [value, setValue] = useState(initialvalue);

  const onChange: IOnChange = (event:any) => {
    setValue(event.target.value);
  }

  return { 
    value, 
    onChange 
  };
};

export default useInput;