import style from "./Button.module.scss"; 


interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}

export function Button({type = "button", ...props}: ButtonProps) {

  return (
    <button
      type={type}
      onClick={props.onClick}
      className={style.button}
    >
      {props.text}
    </button>
  );
}
