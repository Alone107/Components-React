import React from "react";

export const Result = (props, question, correct) => {
  const allQuest = props.question.length;
  return (
    <div className="h-screen  flex flex-col items-center justify-center ">
      <div className=" bg-slate-300 py-8 px-2 rounded min-h-72 w-1/3 shadow-cyan-500 shadow-lg flex  flex-col items-center justify-center gap-12">
        <p className=" text-3xl text-center">Congrutalation</p>
        <p className=" text-xl text-center">
          You correct answer : {props.correct} out of {allQuest}
        </p>
        <a href="/">
          <button className="p-2 bg-yellow-300 rounded">
            Попробывать снова :)
          </button>
        </a>
      </div>
    </div>
  );
};
