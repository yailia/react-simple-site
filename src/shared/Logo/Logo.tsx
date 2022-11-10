import clsx from "clsx";
import style from "./Logo.module.scss";

interface LogoProps {
  desc?: string;
  footer?: boolean;

}
export function Logo(props: LogoProps) {
  return (
    <div className={clsx(style.logo, {[style.logo_footer]: props.footer})}>
      <div className={style.logo__main}>HomeBuddy<span className={style.logo__dot}>.</span></div>
      {
        props.desc && <div className={style.logo__desc}>{props.desc}</div>
      }
    </div>
  );
}
