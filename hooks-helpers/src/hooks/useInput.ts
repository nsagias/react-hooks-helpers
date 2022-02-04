import React, { useState } from "react";


interface IOnChangeTarget  {
  target: HTMLInputElement;
}

interface IOnChange {
  (event: IOnChangeTarget): void;
}

interface IClearSetValue {
  (valueDefault: any): void;
}


const useInput = (initialvalue: any) => {
  const [value, setValue] = useState(initialvalue);

  const onChange: IOnChange = (event: IOnChangeTarget) => {
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