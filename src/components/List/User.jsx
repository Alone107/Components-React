import React from "react";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";

export const User = ({
  id,
  email,
  first_name,
  last_name,
  avatar,
  onClickInvite,
  isInvited,
}) => {
  return (
    <div className="flex items-center gap-8 mb-2 border-b-slate-400/20 border-b-2 pb-2">
      <img className="rounded-full bg-black w-16 h-16" src={avatar} alt="" />
      <div className=" w-3/4">
        <p className="text-xl text-blue-700 mb-1">
          {first_name} {last_name}
        </p>
        <p className="text-base text-gray-500 italic">{email}</p>
      </div>
      <img
        src={isInvited ? minus : plus}
        className="w-8 h-8 hover:opacity-50 duration-300 cursor-pointer"
        onClick={() => onClickInvite(id)}
        alt=""
      />
    </div>
  );
};
