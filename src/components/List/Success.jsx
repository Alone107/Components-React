import React from "react";
import galka from "../../assets/galka.png";

export const Success = ({ invites, onClickReset }) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-cyan-100 w-96 min-h-96 p-6 rounded shadow-xl flex flex-col justify-around items-center">
        <img src={galka} alt="" />
        <p className="text-2xl font-bold">Успешно</p>
        <p>Вы отправили {invites.length} приглашения</p>
        <button
          onClick={onClickReset}
          className="w-full bg-lime-400 rounded mt-4 p-2 hover:bg-lime-500 duration-500"
        >
          Вернуться назад
        </button>
      </div>
    </div>
  );
};
