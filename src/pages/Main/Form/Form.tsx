import { Button } from "@shared/Button";
import { Portal } from "@shared/Layout/Portal/Portal";
import { Modal } from "@shared/Modal";
import { TextInput } from "@shared/TextInput";
import clsx from "clsx";
import { useEffect, useState } from "react";
import style from "./Form.module.scss";

export function Form() {

  const [open, setOpen] = useState(false);
  useEffect(() => {
    if(open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [
    open
  ]);

  return (
    <>
      <div className={clsx(style.formSection__bage, style.bage, style.bage_mob)}>
        <div className={style.bage__img} />
        <div className={style.bage__text}>You will be surprised how affordable gutter guards are!</div>
      </div>
      <section id="form" className={style.formSection}>
        <div className={clsx(style.formSection__bage, style.bage, style.bage_dt)}>
          <div className={style.bage__img} />
          <div className={style.bage__text}>You will be surprised how affordable gutter guards are!</div>
        </div>
        <h2 className={style.formSection__title}>See How Much Gutter Guards Cost In The XX, XXX Area</h2>
        <div className={clsx(style.formSection__form, style.form)}>
          <div className={style.form__container}>
            <h3 className={style.form__title}>What is your ZIP Code?</h3>
            <div className={style.form__input}>
              <TextInput 
                name="Enter ZIP Code"
                helperText="Free, no-obligation estimates."
              />
            </div>
            <div className={style.form__button}>
              <Button 
                text="Get estimate"
                onClick={() => setOpen(true)}
              />
            </div>
          </div>
        </div>
      </section>
      {
        open && (
          <Portal>
            <Modal
              handleClick={() => setOpen(false)}
            />
          </Portal>
        )
      }
    </>
  );
}
