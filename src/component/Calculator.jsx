import React from "react";
import { useState } from "react";
function Calculator() {
  const [result, setresult] = useState("");

  const clickhandle = (e) => {
    setresult(result.concat(e.target.value));
  };
  const clearscreen = () => {
    setresult(" ");
  };
const calculate=()=>{
  setresult(eval(result).toString());
  
}
  return (
    <div className="bg-gray-800 text-white w-screen h-screen flex justify-center items-center shadow-xl">
      <div className="main h-auto w-72 bg-gray-950 rounded-xl border-4 border-orange-100">
        <div className="screen p-3 via-blue-50  ">
          <input
            type="text"
            placeholder="0"
            value={result}
            className="w-full rounded-lg text-black outline-none px-2 pt-12 placeholder-black bg-gray-400 text-right text-2xl "
          />
        </div>
        <div className="brand mb-2">
          <h1 className="bg-gray-100 text-gray-900 font-bold text-center">
            Dhiraj Raj
          </h1>
        </div>

        <div className="button">
          <div className="key flex justify-around mb-2">
            <input
              type="button"
              value="c"
              onClick={clearscreen}
              className="w-12 h-12 text-center rounded-lg text-black text-2xl bg-red-400"
            />
            <input
              type="button"
              value="<"
              onClick={clickhandle}
              className="w-12 h-12 text-center rounded-lg text-black text-2xl bg-gray-300"
            />
            <input
              type="button"
              value="%"
              onClick={clickhandle}
              className="w-12 h-12 text-center rounded-lg text-black text-2xl bg-gray-300"
            />
            <input
              type="button"
              value="/"
              onClick={clickhandle}
              className="w-12 h-12 text-center rounded-lg text-black text-2xl bg-pink-400"
            />
          </div>

          <div className="key flex justify-around mb-2 ">
            <input
              type="button"
              onClick={clickhandle}
              value="7"
              className="w-12 h-12 text-center rounded-lg text-black text-2xl bg-gray-200"
            />
            <input
              type="button"
              value="8"
              onClick={clickhandle}
              className="w-12 h-12 text-center rounded-lg text-black text-2xl bg-gray-300"
            />
            <input
              type="button"
              value="9"
              onClick={clickhandle}
              className="w-12 h-12 text-center rounded-lg text-black text-2xl bg-gray-300"
            />
            <input
              type="button"
              value="*"
              onClick={clickhandle}
              className="w-12 h-12 text-center rounded-lg text-black text-2xl bg-green-400"
            />
          </div>

          <div className="key flex justify-around mb-2">
            <input
              type="button"
              value="4"
              onClick={clickhandle}
              className="w-12 h-12 text-center rounded-lg text-black text-2xl bg-gray-200"
            />
            <input
              type="button"
              value="5"
              onClick={clickhandle}
              className="w-12 h-12 text-center rounded-lg text-black text-2xl bg-gray-200"
            />
            <input
              type="button"
              value="6"
              onClick={clickhandle}
              className="w-12 h-12 text-center rounded-lg text-black text-2xl bg-gray-300"
            />
            <input
              type="button"
              value="-"
              onClick={clickhandle}
              className="w-12 h-12 text-center rounded-lg text-black text-2xl bg-red-600"
            />
          </div>

          <div className="key flex justify-around mb-2">
            <input
              type="button"
              value="1"
              onClick={clickhandle}
              className="w-12 h-12 text-center rounded-lg text-black text-2xl bg-gray-200"
            />
            <input
              type="button"
              value="2"
              onClick={clickhandle}
              className="w-12 h-12 text-center rounded-lg text-black text-2xl bg-gray-300"
            />
            <input
              type="button"
              value="3"
              onClick={clickhandle}
              className="w-12 h-12 text-center rounded-lg text-black text-2xl bg-gray-200"
            />
            <input
              type="button"
              value="+"
              onClick={clickhandle}
              className="w-12 h-12 text-center rounded-lg text-black text-2xl bg-orange-200"
            />
          </div>

          <div className="key flex justify-around mb-2">
            <input
              type="buttont"
              value="0"
              onClick={clickhandle}
              className="w-12 h-12 text-center rounded-lg text-black text-2xl bg-gray-400"
            />
            <input
              type="button"
              value="00"
              onClick={clickhandle}
              className="w-12 h-12 text-center rounded-lg text-black text-2xl bg-gray-400"
            />
            <input
              type="buttot"
              value="."
              onClick={clickhandle}
              className="w-12 h-12 text-center rounded-lg text-black text-2xl bg-gray-400"
            />
            <input
              onClick={calculate}
              type="button"
              value="="
              className="w-12 h-12 text-center rounded-lg text-black text-2xl bg-yellow-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
