import React from "react";

export const Quest = (props) => {
  return (
    <div className="h-screen  flex flex-col items-center justify-center ">
      <div className=" bg-slate-100 py-8 px-2 rounded min-h-72 w-1/3 shadow-cyan-500 shadow-lg">
        <div className="h-5 relative bg-slate-300 p-1 shadow-sm rounded ">
          <span
            style={{ width: `${props.percentage}%` }}
            className={`block rounded h-full bg-cyan-500`}
          ></span>
        </div>
        <h2 className="my-4 text-2xl">{props.question.title}</h2>
        <ul className="text-xl flex flex-col gap-4 bg-slate-200 p-3 rounded">
          {props.question.variants.map((quest, index) => (
            <li
              onClick={() => props.onClickVariants(index)}
              key={quest}
              className="border-slate-400 border-2 p-1 px-4 rounded bg-slate-300 hover:bg-slate-400 cursor-pointer"
            >
              {quest}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
