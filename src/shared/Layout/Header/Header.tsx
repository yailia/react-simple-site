import { Container } from "@app/shared/Container/Container";
import { Logo } from "@shared/Logo/Logo";
import style from "./Header.module.scss";


export function Header() {
  return (
    <header className={style.header}>
      <Container flex>
        <Logo desc="for homeowners"/>
        <a href="#form" className={style.header__link}>Link to form</a>
      </Container>
    </header>
  );
}
