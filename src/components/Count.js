import React, { useState } from "react";

export default function Count() {
  const [counter, setCounter] = useState(10);

  const addValue = () => {
    if (counter < 20) {
      console.log(counter);
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      console.log(counter);
      setCounter((perv) => perv - 1);
    }
  };
  return (
    <>
      <div className="container flex justify-center items-center min-h-screen min-w-full flex-col bg-white">
        <h1 className="text-5xl m-2">Count</h1>

        <h2 className="text-4xl m-2">Count Value : {counter}</h2>
        <div className="buttons flex flex-row gap-2 capitalize">
          <button onClick={addValue} className="bg-green-600 p-2 rounded-2xl ">
            Add Value
          </button>
          <br />
          <button onClick={removeValue} className="bg-red-600 p-2 rounded-2xl ">
            Remove Value
          </button>
        </div>
      </div>
    </>
  );
}
