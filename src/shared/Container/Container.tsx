import clsx from "clsx";
import { ReactNode } from "react";
import style from "./Container.module.scss";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  flex?: boolean;
  center?: boolean;
  wrap?: boolean;
}

export function Container(props: ContainerProps) {
  return (
    <div 
      className={
        clsx(style.container,
          props.className, 
          {
            [style.container_flex]: props.flex,
            [style.container_center]: props.center,
            [style.container_wrap]: props.wrap,
          }
        )}>
      {props.children}
    </div>
  );
}