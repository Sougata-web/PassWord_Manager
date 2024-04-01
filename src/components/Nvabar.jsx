import React from 'react'

function Nvabar() {
  return (
    <nav className=' bg-slate-700 text-white'>
      <div className="mycontainer  flex justify-between items-center px-4 py-5 h-12 ">

        <div className="logo font-bold text-white text-2xl">
          <span className="text-green-500"> &lt; </span>Pass<span className="text-green-500">OP /&gt;</span>

        </div>
        <ul>
          {/* <li className=' flex gap-4'>
            <a className=' hover:font-bold' href="/">Home</a>
            <a className=' hover:font-bold' href="#">About</a>
            <a className=' hover:font-bold' href="#">Contact</a>
          </li> */}

        </ul>
        <button className=' text-white bg-green-800 my-4 rounded-full flex gap-4 justify-between items-center ring-1 ring-white'>
          <img className=" invert w-10 p-1 " src="/icons/github.svg" alt="" />
          <span className=' font-bold p-1'>GitHub</span>
        </button>

      </div>
    </nav>
  )
}

export default Nvabar