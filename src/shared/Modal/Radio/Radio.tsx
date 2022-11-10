import { No, Yes } from "@shared/icons";
import clsx from "clsx";
import style from "./Radio.module.scss";

interface RadioProps {
  authorized: null | boolean;
  setAuthorized: (el:boolean) => void;
}

export function Radio(props: RadioProps) {
  return (

    <div className={style.radio}>
      <label className={clsx(style.label, {[style.label_checked]: props.authorized})}>
        <input 
          type="radio"
          name="radio"
          className={style.input}
          onChange={() => props.setAuthorized(true)}
        />
        <Yes />
          Yes
      </label>
      <label className={clsx(style.label, {[style.label_checked]: props.authorized === false})}>
        <input 
          type="radio"
          name="radio"
          className={style.input}
          onChange={() => props.setAuthorized(false)}
        />
        <No/>
          No
      </label>
    </div>
  );
}
