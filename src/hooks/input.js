import React, {useState} from "react";
import { useValidation } from "./validation";

export const useInput = (initialValue,validations) =>{
  const [value,setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false)
  const valid = useValidation(value,validations) 
  
  
  const onChange = (e) => {  // обрабатывает изменения в input
    setValue(e.target.value)
  }

  const onBlur = (e) => {   //отрабатывает когда пользователь покинул input
    setIsDirty(true);
  }
  return{
    value,
    setValue,
    onChange,
    onBlur,
    isDirty,
    ...valid
  }
}