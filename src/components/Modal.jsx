import React from "react";
import { useState } from "react";

export const Modal = () => {
  const [modal, setModal] = useState(false);
  const [button, setButton] = useState(true);

  const onOpenModal = () => {
    setModal(true);
    setButton(false);
  };

  const onCloseModal = () => {
    setModal(false);
    setButton(true);
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {button && (
        <button
          onClick={onOpenModal}
          className="bg-cyan-500 hover:bg-cyan-600 p-3 rounded mb-8"
        >
          Открыть окно
        </button>
      )}

      {modal && (
        <div className="bg-gray-300 w-96 p-10 flex flex-col items-center rounded border-4 border-blue-300">
          <q className="text-xl mb-4 text-center">
            Сложнее всего начать действовать, все остальное зависит только от
            упорства.
          </q>
          <cite className="mb-4">Амелия Эрхарт</cite>
          <button
            onClick={onCloseModal}
            className="bg-cyan-500 hover:bg-cyan-600 p-3 rounded"
          >
            Закрыть окно
          </button>
        </div>
      )}
    </div>
  );
};
