import React from "react";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const minusCount = () => {
    setCount(count - 1);
  };

  const plusCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="p-12 rounde border-2 bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <p className="text-4xl pb-10">Счетчик : {count}</p>
        <div>
          <button
            onClick={minusCount}
            className="bg-red-500 p-4 rounded text-xl mr-8 hover:scale-110 duration-500"
          >
            Минус
          </button>
          <button
            onClick={plusCount}
            className="bg-green-500 p-4 rounded text-xl hover:scale-110 duration-500"
          >
            Плюс
          </button>
        </div>
      </div>
    </div>
  );
};
