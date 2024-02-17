import React from "react";
import search from "../../assets/search.svg";
import { User } from "./User";
import Skeleton from "./Skeleton";

export const Items = ({
  searchVallue,
  onChangeSearchVallue,
  Items,
  isLoading,
  invites,
  onClickInvite,
  onClickButtonInvite,
}) => {
  console.log(searchVallue);
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-cyan-100 w-96 min-h-96 p-6 rounded shadow-xl relative flex flex-col justify-between">
        <div className="flex items-center justify-center w-full p-2 rounded border-2 bg-white border-gray-500 mb-4 ">
          <img src={search} className="w-4 h-4 mr-4" alt="" />
          <input
            value={searchVallue}
            onChange={onChangeSearchVallue}
            placeholder="Найти пользователя"
            className="w-full pl-2"
            type="text"
          />
        </div>
        {isLoading ? (
          <Skeleton />
        ) : (
          <ul>
            {Items.filter((obj) => {
              const fullName = (
                obj.first_name +
                " " +
                obj.last_name
              ).toLowerCase();
              return (
                fullName.includes(searchVallue.toLowerCase()) ||
                obj.email.toLowerCase().includes(searchVallue.toLowerCase())
              );
            }).map((obj) => (
              <User
                isInvited={invites.includes(obj.id)}
                onClickInvite={onClickInvite}
                key={obj.id}
                {...obj}
              />
            ))}
          </ul>
        )}
        <button
          onClick={onClickButtonInvite}
          className="w-full bg-lime-400 rounded mt-4 p-2 hover:bg-lime-500 duration-500"
        >
          Пригласить
        </button>
      </div>
    </div>
  );
};
