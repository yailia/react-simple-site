import clsx from "clsx";
import { useState } from "react";
import { Button } from "../Button";
import { TextInput } from "../TextInput";
import style from "./Modal.module.scss";
import { Radio } from "./Radio";

interface ModalProps {
  handleClick: ()=>void;
}

export function Modal(props: ModalProps) {
  const [second, setSecond] = useState(false);
  const [authorized, setAuthorized] = useState<null | boolean>(null);
  return (
    <div className={style.modal}>
      <div className={style.modal__content}>
        <div className={style.modal__header}>
          <button
            aria-label="close modal"
            className={style.modal__closeBtn}
            onClick={props.handleClick}
          />
        </div>
        <div className={style.modal__progress}>
          <div className={clsx(style.modal__progressBar, {[style.modal__progressBar_full]: second})}/>
        </div>

        <form className={style.modal__form}>
          <div className={style.form__grid}>
            <h3 className={style.modal__title}>
              {
                second
                  ? "Who should I prepare this estimate for?"
                  : "Are you homeowner or authrized to make property changes?"
              }
            </h3>
            {
              second && (
                <div className={style.modal__desc}>
                  Your choice:&nbsp;
                  <span className={style.modal__choise}>
                    {authorized ? "Yes" : "No"}
                  </span>
                </div>
              )
            }
            <div className={style.form__form}>
              {
                second
                  ? (
                    <div className={style.modal__inputs}>
                      <TextInput
                        name="Full Name"
                      />
                      <TextInput
                        name="Email address"
                      />
                    </div>
                  )
                  : (
                    <Radio 
                      authorized={authorized}
                      setAuthorized={setAuthorized}
                    />
                  )
              }

            </div>

            <div className={style.modal__btn}>
              {
                second
                  ? (
                    <>
                      <Button
                        text="Next"
                        onClick={props.handleClick}
                      />
                    </>
                  ) : (
                    <Button
                      text="Next"
                      onClick={() => setSecond(true)}
                    />
                  )
              }
            </div>
            {
              second && (
                <div className={clsx(style.modal__desc, style.modal__desc_btn)}>
                    Safe, Secure and Confidential
                </div>
              )
            }
          </div>
        </form>
      </div>
    </div>
  );
}
