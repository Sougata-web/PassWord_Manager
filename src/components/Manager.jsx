import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function Manager() {


    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" });
    const [passwordArray, setPasswordArray] = useState([]);

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");

        if (passwords) {
            setPasswordArray(JSON.parse(passwords));
        }
    }, [])

    const copyText = (text) => {
        toast('Copied To Clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            
            });
        navigator.clipboard.writeText(text)
    }

    const showPassword = () => {
        passwordRef.current.type = "text"
        if (ref.current.src.includes("/icons/eyecross.png")) {
            ref.current.src = "/icons/eye.png";
            passwordRef.current.type = "password"

        } else {
            ref.current.src = "/icons/eyecross.png";
            passwordRef.current.type = "text"

        }
    }

    const savePassword = () => {
        setPasswordArray([...passwordArray, form])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
    }
    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition= "Bounce" />
            {/* Same as */}
            <ToastContainer />

            <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#3dd_100%)]"></div>

            <div className="  mycontainer">
                <h1 className=' text-4xl text font-bold text-center'>
                    <span className="text-green-500"> &lt; </span>Pass<span className="text-green-500">OP /&gt;</span>
                </h1>
                <p className=' text-green-500 text-lg text-center'>Your Password Manager</p>

                <div className=' text-black flex flex-col p-4 gap-8 items-center'>
                    <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="site" id="" />
                    <div className="flex w-full gap-8 justify-between ">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="username" id="" />
                        <div className="relative">

                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-500 w-full p-4 py-1' type="password" name="password" id="" />
                            <span className="absolute right-[3px] top-[3px] cursor-pointer" onClick={showPassword}>
                                <img ref={ref} className=' p-1' width={30} src="/icons/eye.png" alt="eye" />
                            </span>
                        </div>
                    </div>

                    <button onClick={savePassword} className=' flex justify-center items-center bg-green-500 gap-2 hover:bg-green-400 rounded-full px-8 py-2 w-fit border border-green-700'>

                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        Add Password</button>
                </div>

                <div className="passwords">
                    <h2 className=' font-bold text-xl py-4'>
                        Your Passwords
                    </h2>
                    {passwordArray.length === 0 && <div> No Passwords To show</div>}
                    {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden">
                        <thead className='  bg-green-800 text-white'>
                            <tr>
                                <th className=' py-1'>Site</th>
                                <th className=' py-1'>Username</th>
                                <th className=' py-1'>Passwords</th>
                            </tr>
                        </thead>
                        <tbody className=' bg-green-100'>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>
                                    <td className='gap-2 border border-white py-1 text-center '>
                                        <div className=' flex items-center justify-center '>
                                            <a href="{item.site}" target="_blank"> {item.site} </a>
                                            <div className='lordIconCopy size-7' onClick={() => { copyText(item.site) }}>

                                                <img className=' cursor-pointer' src="/icons/copy.png" alt="" trigger="hover" />
                                            </div>
                                        </div>

                                    </td>
                                    <td className='border justify-center border-white py-1 text-center '>
                                        <div className=' flex items-center justify-center '>
                                            <span>{item.username}</span>
                                            <div className='lordIconCopy size-7' onClick={() => { copyText(item.username) }}>

                                                <img className=' cursor-pointer' src="/icons/copy.png" alt="" trigger="hover" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className='border justify-center border-white py-1 text-center '>
                                        <div className=' flex items-center justify-center '>
                                            <span>{item.password}</span>
                                            <div className='lordIconCopy size-7' onClick={() => { copyText(item.password) }} >

                                                <img className=' cursor-pointer' src="/icons/copy.png" alt="" trigger="hover" />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>}
                </div>
            </div>

        </>
    )
}

export default Manager