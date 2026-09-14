"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import styles from "./CollaborationForm.module.css";

/** Reusable lead form for partnership pages. */
export default function CollaborationForm({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [consentAccepted, setConsentAccepted] = useState(true);
  const [phone, setPhone] = useState("");

  function formatPhone(value: string) {
    const digits = value.replace(/\D/g, "");
    const subscriberNumber = (digits.startsWith("7") ? digits.slice(1) : digits).slice(0, 9);

    if (!subscriberNumber) return digits ? "+7" : "";

    return `+7 ${subscriberNumber.slice(0, 3)}${subscriberNumber.length > 3 ? ` ${subscriberNumber.slice(3, 6)}` : ""}${subscriberNumber.length > 6 ? ` ${subscriberNumber.slice(6, 9)}` : ""}`;
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className={`${styles.form}${variant === "mobile" ? ` ${styles.mobile}` : ""}`} aria-labelledby="collaboration-title">
      <h2 id="collaboration-title">ЗАЯВКА НА СОТРУДНИЧЕСТВО</h2>
      <form onSubmit={submit}>
        <div className={styles.fields}>
          <label><span className={styles.visuallyHidden}>Ваше имя</span><input name="name" placeholder="Ваше Имя" required /></label>
          <label><span className={styles.visuallyHidden}>Телефон</span><input name="phone" type="tel" inputMode="tel" placeholder="+7 900 000 000" value={phone} maxLength={14} onFocus={() => setPhone((value) => value || "+7")} onChange={(event) => setPhone(formatPhone(event.target.value))} required /></label>
          <label><span className={styles.visuallyHidden}>Электронная почта</span><input name="email" type="email" placeholder="E-mail" /></label>
          <label className={styles.message}>
            <span className={styles.visuallyHidden}>Опишите ваше предложение</span>
            <textarea name="message" placeholder="Опишите ваше предложение" maxLength={3000} value={message} onChange={(event) => setMessage(event.target.value)} />
            <span className={styles.counter}><span>3000 / </span><span>{message.length}</span></span>
          </label>
        </div>
        <div className={styles.footer}>
          <label className={styles.consent}>
            <span className={styles.checkbox}>
              <input type="checkbox" checked={consentAccepted} onChange={(event) => setConsentAccepted(event.target.checked)} required />
              {consentAccepted && <Image src="/images/bloggers/consent-checkbox.svg" alt="" width={20} height={20} />}
            </span>
            <span>Нажимая на кнопку «Запросить», вы даете согласие на обработку своих <a href="#">персональных данных.</a></span>
          </label>
          <button type="submit" className={styles.submit}>{submitted ? "Отправлено" : "Запросить"}</button>
        </div>
      </form>
    </section>
  );
}
