import React, { useState } from "react";

export default function (props) {
  
  const[myStyle, setMyStyle] = useState(
    {
      color : "black",
      backgroundColor : "white",
    }
  )

  const [btn , setBtnText] = useState("enable dark mode")

    const toggleStyle = () =>{
      if(myStyle.color === "white"){
        setMyStyle({
          color : "black",
          backgroundColor : "white"
        })
        setBtnText("Enable dark Mode")
      }else{
        setMyStyle({
          color : "white",
          backgroundColor : "black"
        })
        setBtnText("Enable light Mode")
      }
    }

  return (
    <>
      <div className="m-2 space-y-2">
        <div
          className="group flex flex-col rounded-lg p-5 border-b-2 border-slate-400"
          style={myStyle}
          tabIndex={1}
        >
          <div className="flex justify-between items-center cursor-pointer ">
            <span>HTML</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
              alt=""
              className="h-2 w-3 transition-all duration-500 group-open:rotate-180"
            />
          </div>
          <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus: duration-100 group-open:animate-fadeIn">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            distinctio nihil expedita, magnam laudantium aliquam mollitia
            dolores totam pariatur culpa nulla quas sapiente nisi consectetur,
            earum eius repellat labore enim!
          </div>
        </div>
        <div
          className="group flex flex-col rounded-lg p-5 border-b-2 border-slate-400"
          style={myStyle}
          tabIndex={2}
        >
          <div className="flex justify-between items-center cursor-pointer">
            <span>CSS</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
              alt=""
              className="h-2 w-3 transition-all duration-500 group-open:rotate-180 p-2"
            />
          </div>
          <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus: duration-100">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            distinctio nihil expedita, magnam laudantium aliquam mollitia
            dolores totam pariatur culpa nulla quas sapiente nisi consectetur,
            earum eius repellat labore enim!
          </div>
        </div>
        <div
          className="group flex flex-col bg-white text-black rounded-lg p-5 border-b-2 border-slate-400"
          tabIndex={3}
          style={myStyle}
        >
          <div className="flex justify-between items-center cursor-pointer">
            <span>JavaScript</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
              alt=""
              className="h-2 w-3 transition-all duration-500 group-focus:rotate-180"
            />
          </div>
          <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus: duration-100">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            distinctio nihil expedita, magnam laudantium aliquam mollitia
            dolores totam pariatur culpa nulla quas sapiente nisi consectetur,
            earum eius repellat labore enim!
          </div>
        </div>
      </div>
      <button
            className="bg-blue-600 text-white p-2 rounded-xl capitalize mx-1"
            onClick={toggleStyle}
          >
            {btn}
          </button>
    </>
  );
}
