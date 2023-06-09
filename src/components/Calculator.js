import React from 'react';
import Calculate from '../logic/calculate';

export default function Calculator() {
  const genButtons = 'bg-slate-200 hover:bg-slate-300 cursor-pointer w-[80px] md:w-[100px] h-[50px] border-slate-300 border border-[0.5px] text-black font-thin';
  const arithmeticButtons = 'bg-orange-500 hover:bg-orange-400 cursor-pointer border-slate-300 border border-[0.5px] w-[60px] md:w-[100px] h-[50px] text-black font-thin';

  const [state, setState] = React.useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleButtonClick = (event) => {
    setState((state) => Calculate(state, event.target.innerText));
  };

  const { total, next } = state;
  const output = next || total || '0';

  return (
    <div className="flex flex-col md:flex-row items-center gap-y-10 md:items-start justify-evenly mt-[50px] md:mt-[100px]">
      <h1 className="text-2xl md:text-3xl ml-2 md:ml-0 w-[300px] md:w-[600px] md:p-4 text-slate font-montserrat font-thin md:font-normal rounded-xl bg-orange-500 p-2">Let&apos;s do some maths magic!</h1>

      {/* For Output Display */}
      <div className="flex flex-col items-center justify-center ">
        <div className="flex bg-slate-600 rounded-tl-xl rounded-tr-xl w-[300px] md:w-[400px] h-[50px] items-center justify-end pr-4 text-white font-medium">
          <p>{output}</p>
        </div>

        {/* For Input Entry */}
        <div className="w-[300px] md:w-[400px]">
          <div className="grid gird-rows-3 md:grid-rows-4 h-[300px]">
            <div className="row-start-1">
              <button type="button" className={genButtons} onClick={handleButtonClick}>AC</button>
              <button type="button" className={genButtons} onClick={handleButtonClick}>+/-</button>
              <button type="button" className={genButtons} onClick={handleButtonClick}>%</button>
              <button type="button" className={genButtons} onClick={handleButtonClick}>7</button>
              <button type="button" className={genButtons} onClick={handleButtonClick}>8</button>
              <button type="button" className={genButtons} onClick={handleButtonClick}>9</button>
              <button type="button" className={genButtons} onClick={handleButtonClick}>4</button>
              <button type="button" className={genButtons} onClick={handleButtonClick}>5</button>
              <button type="button" className={genButtons} onClick={handleButtonClick}>6</button>
              <button type="button" className={genButtons} onClick={handleButtonClick}>1</button>
              <button type="button" className={genButtons} onClick={handleButtonClick}>2</button>
              <button type="button" className={genButtons} onClick={handleButtonClick}>3</button>
              <button type="button" className="bg-slate-200 w-[160px] md:w-[200px] h-[50px] border-slate-300 border-[0.5px] hover:bg-slate-300 cursor-pointer text-black font-thin rounded-bl-xl">0</button>
              <button type="button" className="bg-slate-200 w-[80px] md:w-[100px] h-[50px] border-slate-300 border-[0.5px] hover:bg-slate-300 cursor-pointer text-black font-thin">.</button>
            </div>
            <div className="row-start-1">
              <div className="flex flex-col">
                <button type="button" className={arithmeticButtons} onClick={handleButtonClick}>÷</button>
                <button type="button" className={arithmeticButtons} onClick={handleButtonClick}>x</button>
                <button type="button" className={arithmeticButtons} onClick={handleButtonClick}>-</button>
                <button type="button" className={arithmeticButtons} onClick={handleButtonClick}>+</button>
                <button type="button" className={`${arithmeticButtons} rounded-br-xl`} onClick={handleButtonClick}>=</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
