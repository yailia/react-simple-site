import { Container } from "@app/shared/Container/Container";
import clsx from "clsx";
import style from "./Hero.module.scss";
import imgSrc from "@assets/img/hero/main.webp";
import imgSrcX2 from "@assets/img/hero/main@x2.webp";

export function Hero() {
  return (
    <section className={style.hero}>
      <Container flex className={style.hero__container}>
        <div className={style.hero__textContent}>
          <h1 className={style.hero__title}>
            How&nbsp;
            <span className={clsx(style.hero__title, style.hero__title_marked)}>
              Over 410,000 Americans
            </span><br />
            Increased Their Property Value<br />
            <span className={clsx(style.hero__title, style.hero__title_marked)}>
              In Under 6 Hours*
            </span>&nbsp;With This Simple Upgrade.
          </h1>
          <p className={style.hero__desc}>
              Ideal for detached and semi-detached homes with sloped roofs. 
          </p>

        </div>
        <div className={style.hero__img}>
          <img 
            srcSet={`${imgSrc} 1x, ${imgSrcX2} 2x`}
            src={imgSrc}
            alt="the Gutter Guards on a wall" 
          />
          <a 
            href="https://google.com"
            className={clsx(style.logo__link, style.logoLink)}
            rel="noreferrer noopener"
            target="_blank"
          >
            <span className={style.logoLink__content}>As seen on</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
