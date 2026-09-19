"use client";

import Image from "next/image";

import type { ReactNode } from "react";
import { useState } from "react";

import styles from "./FrequentlyAskedQuestions.module.css";

const SERVICE_ANSWER = (
  <>
    <p>
      Платформа «Каштанка» — это профессиональный сервис по продаже породистых щенков от ведущих
      заводчиков. Мы предлагаем только элитных малышей с полным пакетом документов: родословной,
      ветеринарным паспортом, прививками по возрасту и клеймом или чипом. Все щенки проходят
      племенной отбор, получают качественный уход, правильное кормление и социализацию, что
      гарантирует их здоровье и крепкую психику.
    </p>
    <p>
      В нашем каталоге представлены разные породы — от популярных до редких. Каждый питомец вырастает
      в любви и заботе, а мы помогаем новым владельцам на всех этапах: консультируем по содержанию,
      воспитанию и адаптации щенка в доме. Найдите верного друга, который станет полноценным членом
      вашей семьи!
    </p>
  </>
);

function Question({ title, answer, defaultOpen = false }: { title: string; answer?: ReactNode; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [isClosing, setIsClosing] = useState(false);

  const toggleQuestion = () => {
    if (isOpen) {
      setIsClosing(true);
      window.setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 350);
      return;
    }

    setIsOpen(true);
  };

  return (
    <details className={`${styles.item}${isClosing ? ` ${styles.closing}` : ""}`} open={isOpen}>
      <summary onClick={(event) => {
        event.preventDefault();
        toggleQuestion();
      }}>
        <span>{title}</span>
        <span className={styles.chevrons}>
          <Image src="/images/faq/chevron-closed.svg" alt="Развернуть ответ" width={22} height={22} className={styles.closedChevron} />
          <Image src="/images/faq/chevron-open.svg" alt="Свернуть ответ" width={22} height={22} className={styles.openChevron} />
        </span>
      </summary>
      <div className={styles.answerAnimation}>
        <div className={styles.answer}>{answer ?? SERVICE_ANSWER}</div>
      </div>
    </details>
  );
}

const QUESTIONS = Array.from({ length: 12 }, () => "О чем сервис?");

export default function FrequentlyAskedQuestions() {
  return (
    <section className={styles.section}>
      <h2>Частые вопросы</h2>
      <div className={styles.columns}>
        <div className={styles.column}>
          <Question title="О чем сервис?" answer={SERVICE_ANSWER} defaultOpen />
          <Question title="Чем полезен сервис?" />
        </div>
        <div className={styles.column}>
          {QUESTIONS.slice(0, 6).map((question, index) => <Question key={index} title={question} />)}
        </div>
        <div className={styles.column}>
          {QUESTIONS.slice(6).map((question, index) => <Question key={index} title={question} />)}
        </div>
      </div>
    </section>
  );
}
