import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  children: ReactNode;
}

export function Portal(props: PortalProps) {
  const node = document.getElementById("portal") as HTMLElement;
  return (
    ReactDOM.createPortal(
      props.children,
      node
    )
  );
}
