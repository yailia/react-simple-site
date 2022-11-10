import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import style from "./Layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

export function Layout(props: LayoutProps) {
  return (
    <>
      <Header />
      <main className={style.main}>
        {props.children}
      </main>
      <Footer />
    </>
  );
}
