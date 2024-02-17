import React from "react";
import { useState } from "react";
import { Quest } from "./Quest";
import { Result } from "./Result";

const questions = [
  {
    title:
      "Какое заклинание использовал Гарри, чтобы убить лорда Волан-де-Морта?",
    variants: ["Экспеллиармус", "Экспекто патронум", "Авада Кедавра", "Accio"],
    correct: 0,
  },
  {
    title: "Заклинание «Фелифорс» превращает кошку во что?",
    variants: ["Шапка", "Летучая мышь", "Спичечная коробка", "Котел"],
    correct: 3,
  },
  {
    title: "Какой патронус принадлежит Луне Лавгуд?",
    variants: ["лань", "кролик", "Собака", "Лошадь"],
    correct: 1,
  },
  {
    title:
      "Кто написал серию из 7 книг под названием «Стандартная книга заклинаний»?",
    variants: [
      "Кеннилуорти Висп",
      "Рита Скитер",
      "Батильда Бэгшот",
      "Миранда Ястреб-тетеревятник",
    ],
    correct: 3,
  },
  {
    title: "Как называется магазин приколов Фреда и Джорджа?",
    variants: [
      "Магазин шуток Уизли",
      "Хрипы волшебника Уизли",
      "Чудесный торговый центр Фреда и Джорджа",
      "Магазин анекдотов Зонко",
    ],
    correct: 1,
  },
];

export const Quiz = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const question = questions[step];

  const onClickVariants = (index) => {
    setStep(step + 1);

    if (index == question.correct) {
      setCorrect(correct + 1);
    }
  };

  const percentage = Math.round((step / questions.length) * 100);

  return (
    <>
      {step !== questions.length ? (
        <Quest
          percentage={percentage}
          step={step}
          onClickVariants={onClickVariants}
          question={question}
        />
      ) : (
        <Result question={questions} correct={correct} />
      )}
    </>
  );
};
