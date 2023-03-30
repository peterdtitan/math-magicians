import React from 'react';

export default function Calculator() {
  const genButtons = 'bg-slate-200 hover:bg-slate-300 cursor-pointer w-[100px] h-[50px] border-slate-300 border border-[0.5px] text-black font-thin';
  const arithmeticButtons = 'bg-orange-500 hover:bg-orange-400 cursor-pointer border-slate-300 border border-[0.5px] w-[100px] h-[50px] text-black font-thin';
  return (
    <div className="flex flex-col items-center justify-center mt-5">
      {/* <h1 className="text-3xl font-bold">Let&apos;s do some math!</h1> */}

      {/* For Output Display */}
      <div className="flex bg-slate-600 w-[400px] h-[50px] items-center justify-end pr-4 text-white font-medium">
        <p>0</p>
      </div>

      {/* For Input Entry */}
      <div className="w-[400px]">
        <div className="grid grid-rows-4">
          <div className="row-start-1">
            <button type="button" className={genButtons}>AC</button>
            <button type="button" className={genButtons}>+/-</button>
            <button type="button" className={genButtons}>%</button>
            <button type="button" className={genButtons}>7</button>
            <button type="button" className={genButtons}>8</button>
            <button type="button" className={genButtons}>9</button>
            <button type="button" className={genButtons}>4</button>
            <button type="button" className={genButtons}>5</button>
            <button type="button" className={genButtons}>6</button>
            <button type="button" className={genButtons}>1</button>
            <button type="button" className={genButtons}>2</button>
            <button type="button" className={genButtons}>3</button>
            <button type="button" className="bg-slate-200 w-[200px] h-[50px] border-slate-300 border-[0.5px] hover:bg-slate-300 cursor-pointer text-black font-thin">0</button>
            <button type="button" className="bg-slate-200 w-[100px] h-[50px] border-slate-300 border-[0.5px] hover:bg-slate-300 cursor-pointer text-black font-thin">.</button>
          </div>
          <div className="row-start-1">
            <div className="flex flex-col">
              <button type="button" className={arithmeticButtons}>÷</button>
              <button type="button" className={arithmeticButtons}>x</button>
              <button type="button" className={arithmeticButtons}>-</button>
              <button type="button" className={arithmeticButtons}>+</button>
              <button type="button" className={arithmeticButtons}>=</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
