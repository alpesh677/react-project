import React, { useRef } from "react";
import { useState,useCallback,useEffect } from 'react'

export default function () {
    const [length,setLength] = useState(8);
    const [numberAllowed , setNumberAllowed] = useState(false)
    const [characterAllowed , setCharacterAllowed] = useState(false);
    const [password, setPassword] = useState("")

    const passwordRef = useRef(null);

    const passwordGenerator = useCallback(()=>{
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(numberAllowed) str+= "0123456789"
        if(characterAllowed) str+= "!@#$%^&*-_+=[]{}~"

        for (let i = 1; i <= length; i++) {
            let char1 = Math.round(Math.random() * str.length + 1)
            pass+= str.charAt(char1);
        }
        setPassword(pass);
    },[length, numberAllowed, characterAllowed, setPassword])


    useEffect(() => {
        passwordGenerator()
      }, [length, numberAllowed, characterAllowed, passwordGenerator])


      const handleCopy = useCallback(()=>{
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0,999);
        window.navigator.clipboard.writeText(password);
      },[password])
  return (
    <>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-700'>
            <h1 className='text-center text-4xl p-3 '>Password Generator</h1>

            <div className='flex shadow-md rounded-lg overflow-hidden mb-3'>
                <input 
                type="text" 
                value = {password}
                className='w-full py-1 px-3 outline-orange-400  rounded-md'
                placeholder='password'
                readOnly
                ref={passwordRef}
                />

                <button 
                className='mx-1 outline-none rounded-lg bg-blue-600 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800'
                onClick={handleCopy}
                >
                    Copy
                </button>
            </div>

            <div className='flex text-base gap-x-2'>
                <div className='flex items-center gap-x-2'>
                    <input 
                    type="range" 
                    min={6}
                    max={99}
                    value={length}
                    className='cursor-pointer'
                    onChange={(e) => {setLength(e.target.value)}}
                    />
                    <label>Length: {length}</label>
                </div>

                <div className='flex items-center gap-x-2'>
                    <input
                    type="checkbox" 
                    defaultChecked = {numberAllowed}
                    id='numberAllowed'
                    onChange= {() => {
                        setNumberAllowed((prev) => !prev);
                    }}
                    />

                    <label htmlFor="numberInput">Numbers</label>
                </div>


                <div className='flex items-center gap-x-2'>
                    <input 
                    type="checkbox" 
                    defaultChecked = {characterAllowed}
                    onChange={() => {
                        setCharacterAllowed((prev) => !prev);
                    }}
                    />

                    <label htmlFor='characterInput'>Characters</label>

                </div>
            </div>
        </div>
    </>
  )
}
