import { Container } from "@shared/Container/Container";
import { Logo } from "@shared/Logo";
import style from "./Footer.module.scss";

interface LinkProps {
  text: string;
  href: string;
}

const navLinks: Array<LinkProps> = [
  {
    text: "Terms of Use",
    href: "/?",
  },
  {
    text: "Privacy Policy",
    href: "/?",
  },
  {
    text: "Cookie Policy",
    href: "/?",
  },
  {
    text: "Do Not Sell My Personal Information",
    href: "/?",
  },
  {
    text: "Contact us",
    href: "/?",
  },
];

export function Footer() {
  return (
    <footer className={style.footer}>
      <Container flex wrap>
        <Logo footer/>
        <nav className={style.footer__nav}>
          <ul className={style.footer__list}>
            {navLinks.map((i, idx) => (
              <li key={idx} className={style.footer__item}>
                <a href={i.href} className={style.footer__link}>{i.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
