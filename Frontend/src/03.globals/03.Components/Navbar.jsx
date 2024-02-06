import React from 'react';
import logo from '../../01.assets/img/logo-perplexity.svg'
import { FiSearch  } from "react-icons/fi";
import { FiCompass } from "react-icons/fi";
import { FiLayers } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";




const Navbar = () => {
    return (
        <div className='bg-[#292927] h-screen w-56 absolute top-0 left-0 py-5 px-5'>
            <div className='flex flex-col gap-5'>
                <p className='text-neutral-100 hover:text-cyan-400 duration-200 text-[26px] tracking-tight font-normal'>perplexity</p>
                <div className='py-2 rounded-full px-2 bg-[#1f1f1d] border-2 border-solid border-[#3b3b3b] hover:border-[#1FB8CD] duration-150 cursor-pointer flex justify-between items-center'>
                    <p className='text-base font-medium text-[#858584]'>New Thread</p>
                    <div className='flex gap-1'>
                        <kbd className='text-base text-neutral-500 font-medium tracking-tight border border-solid border-neutral-700 rounded px-1 w-fit h-fit'>Ctrl</kbd>
                        <kbd className='text-base text-neutral-500 font-medium tracking-tight border border-solid border-neutral-700 rounded px-1 w-fit h-fit'>I</kbd>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='py-2 px-2 cursor-pointer hover:bg-[#333331] duration-150 rounded'>
                        <p className='sukui-link flex items-center gap-1'><span><FiSearch /></span>Home</p>
                    </div>
                    <div className='py-2 px-2 cursor-pointer hover:bg-[#333331] duration-150 rounded'>
                        <p className='sukui-link flex items-center gap-1'><span><FiCompass /></span>Discover</p>
                    </div>
                    <div className='py-2 px-2 cursor-pointer hover:bg-[#333331] duration-150 rounded'>
                        <p className='sukui-link flex items-center gap-1'><span><FiLayers /></span>Library</p>
                    </div>
                    <div className='py-2 px-2 cursor-pointer hover:bg-[#333331] duration-150 rounded'>
                        <p className='sukui-link flex items-center gap-1'><span><FiLogIn /></span>Sign In</p>
                    </div>
                </div>
                <button className='bg-[#1FB8CD] rounded-full py-2 font-semibold text-base text-[#1f1f1d] tracking-tight active:scale-95 hover:bg-[#3e9fac] duration-300'>Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;