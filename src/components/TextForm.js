import React, { useState } from "react";

export default function (props) {
  const [text, setText] = useState("");

  const handleUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handlelower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClear = ()=>{ 
    let newText = '';
    setText(newText);
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="flex items-center justify-center flex-col my-3">
        <h1 className="text-2xl my-2 font-bold">{props.heading}</h1>
        <div>
          <textarea
            className="form-control h-[35vh] w-[35vw] border border-black border-solid p-2 dark:bg-slate-900 dark:text-white"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            placeholder="write here..."
          ></textarea>
        </div>
        <div className="flex flex-row my-2">
          <button
            className="bg-blue-600 text-white p-2 rounded-xl capitalize mx-1"
            onClick={handleUp}
          >
            convert to uppercase
          </button>
          <button
            className="bg-blue-600 text-white p-2 rounded-xl capitalize mx-1"
            onClick={handlelower}
          >
            convert to lowercase
          </button>
          <button
            className="bg-blue-600 text-white p-2 rounded-xl capitalize mx-1"
            onClick={handleClear}
          >
            clear
          </button>
        </div>
      </div>
      <div
        className="my-3 text-center border text-white"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2 className="text-3xl text-white">Your text summary</h2>
        <p className="text-white">
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2 className="text-3xl ">Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
