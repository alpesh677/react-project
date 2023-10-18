import React, { useState } from 'react'

const ColorArray = [
    {
        index: 1,
        color: 'red',
        bgColor: 'bg-red-700',
        textColor: "text-red-100"
    },
    {
        index: 2,
        color: 'green',
        bgColor: 'bg-green-700',
        textColor: "text-green-100"
    },
    {
        index: 3,
        color: 'teal',
        bgColor: 'bg-teal-700',
        textColor: "text-teal-100"
    },
    {
        index: 4,
        color: 'gray',
        bgColor: 'bg-gray-700',
        textColor: "text-gray-100"
    },
    {
        index: 5,
        color: 'yellow',
        bgColor: 'bg-yellow-700',
        textColor: "text-yellow-100"
    },
    {
        index: 6,
        color: 'pink',
        bgColor: 'bg-pink-700',
        textColor: "text-pink-100"
    },
    {
        index: 7,
        color: 'purple',
        bgColor: 'bg-purple-700',
        textColor: "text-purple-100"
    },
    {
        index: 8,
        color: 'indigo',
        bgColor: 'bg-indigo-700',
        textColor: "text-indigo-100"
    },
    {
        index: 9,
        color: 'white',
        bgColor: 'bg-white',
        textColor: "text-black"
    },
    {
        index: 10,
        color: 'black',
        bgColor: 'bg-black',
        textColor: "text-white"
    },
]

export default function BgChanger() {
    const [color, setColor] = useState("bg-white");
    return (
        <div className={`w-full h-screen duration-100 ${color}`}>
            <div className='fixed flex  flex-wrap bottom-14 inset-x-0 justify-center px-2'>
                <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
                    {
                        ColorArray.map((color) => (
                            <button
                                key={color.index}
                                className={`outline-none px-4 py-1 ${color.bgColor} rounded-full ${color.textColor} shadow-lg font-bold`} onClick={() => setColor(color.bgColor)}>
                                {color.color}
                            </button>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}
