import clsx from "clsx";
import { useState } from "react";
import style from "./TextInput.module.scss";

interface TextInputProps {
  name: string;
  helperText?: string;
  type?: string;
}

export function TextInput({type = "text", ...props}: TextInputProps) {
  const [touched, setTouched] = useState(false);
  return (
    <>
      <div className={style.textInput}>
        <input 
          className={style.textInput__input}
          type={type}
          id={props.name}
          placeholder={props.name}
          onChange={() => setTouched(true)}
        />
        <label 
          className={clsx(style.textInput__label, {
            [style.textInput__label_touched]: touched
          })}
          htmlFor={props.name}
        >
          {props.name}
        </label>
      </div>
      {
        props.helperText && <div className={style.textInput__helperText}>{props.helperText}</div>
      }
    </>
  );
}
