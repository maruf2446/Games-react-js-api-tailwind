import React, { useContext, useEffect, useState } from 'react';
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";
import logo from '../assets/images/logo.png'
import { ThmemeContext } from './Context/ThemeContext';

const Header = () => {
    const [toggle, setToggle] = useState(true)
    const {theme,setTheme}= useContext(ThmemeContext)

    useEffect(()=>{
        console.log("Theme",theme)
    },[])
    return (
        <div className='flex items-center p-3'>
            <img src={logo} width={60} height={60} alt="" />
            <div className='flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full'>
                <HiOutlineMagnifyingGlass />
                <input type="text" placeholder='Search Games' className='px-2 bg-transparent dark:bg-cyan-500 outline-none' />
            </div>
            <div>
                {theme=='light' ? (<HiMoon
                    onClick={() => {setTheme('dark');localStorage.setItem('theme','dark')}}
                    className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer' />) : 
                    
                    (<HiSun onClick={() => {setTheme('light');localStorage.setItem('theme','light')}}
                        className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer' />)}
            </div>
        </div>
    );
};

export default Header;