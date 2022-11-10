import { Homes, Ratings, Savings, Stars, Warranty } from "@shared/icons";
import { Container } from "@shared/Container/Container";
import clsx from "clsx";
import { ReactNode } from "react";
import style from "./Bullets.module.scss";



interface BulletsList {
  img: ReactNode;
  content: ReactNode;
  extras?: ReactNode;
}

const bulletsList: Array<BulletsList> = [
  {
    img: <Warranty />,
    content: "Lifetime warranty with 100% no\u2011clog guarantee"
  },
  {
    img: <Homes />,
    content: "Fits most homes"
  },
  {
    img: <Savings />,
    content: "Installs over existing gutters saving you thousands"
  },
  {
    img: <Ratings />,
    content: "Сustomer rating",
    extras: <Stars />
    
  },
];

export function Bullets() {
  return (
    <section className={style.bullets}>
      <h2 className={clsx(style.bullets__title)}>summaries</h2>
      <Container>
        <ul className={style.bullets__list}>
          {
            bulletsList.map((i, idx) => (
              <li key={idx} className={clsx(style.bullets__item, style.bulletsItem)}>
                <div className={style.bulletsItem__pic}>{i.img}</div>
                <div className={style.bulletsItem__content}>
                  {i.extras && <div className={style.bulletsItem__extras}>{i.extras}</div>}
                  {i.content}
                </div>
              </li>
            ))
          }
        </ul>
      </Container>
    </section>
  );
}
