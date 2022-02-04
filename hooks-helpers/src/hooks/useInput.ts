import { useState } from "react";

interface IOnChange {
  (event: React.ChangeEvent): void;
}

interface IClearSetValue {
  (valueDefault: any): void;
}


const useInput = (initialvalue: any) => {
  const [value, setValue] = useState(initialvalue);

  const onChange: IOnChange = (event:any) => {
    setValue(event.target.value);
  };

  const clearSetValue: IClearSetValue = (valueDefault: any) => {
    setValue(valueDefault);
  };

  return { 
    value, 
    onChange,
    clearSetValue 
  };
};

export default useInput;