import React from 'react'
import { useRef } from 'react';

function Manager() {
    const ref=useRef()
    const showPassword= ()=>{
        if(  ref.current.src==="/icons/eyecross.png" ){
            ref.current.src="/icons/eye.png";
        }else{
            ref.current.src="/icons/eyecross.png";
        }
    }
  return (
        <>
        {/* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}
        <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#3dd_100%)]"></div> 

        <div className="  mycontainer">
            <h1 className=' text-4xl text font-bold text-center'>
                <span className="text-green-500"> &lt; </span>Pass<span className="text-green-500">OP /&gt;</span>
                </h1>
            <p className=' text-green-500 text-lg text-center'>Your Password Manager</p>

        <div className=' text-black flex flex-col p-4 gap-8 items-center'>
            <input placeholder='Enter website URL' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="" id="" />
        <div className="flex w-full gap-8 justify-between ">
            <input placeholder='Enter Username' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="" id="" />
            <div className="relative">

            <input placeholder='Enter Password' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="" id="" />
            <span className="absolute right-[3px] top-[3px] cursor-pointer" onClick={showPassword}>
                <img ref={ref} className=' p-1' width={30} src="/icons/eye.png" alt="eye" />
            </span>
            </div>
        </div>
        
            <button className=' flex justify-center items-center bg-green-500 gap-2 hover:bg-green-400 rounded-full px-8 py-2 w-fit border border-green-700'> 
                
            <lord-icon
            src="https://cdn.lordicon.com/jgnvfzqg.json"
            trigger="hover">
            </lord-icon>
        Add Password</button>
        </div>
        </div>
        
        </>
  )
}

export default Manager