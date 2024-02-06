import React from 'react';
import logo from '../../01.assets/img/logo-perplexity.svg'

const Navbar = () => {
    return (
        <div className='bg-[#292927] h-screen w-56 absolute top-0 left-0 py-5 px-5'>
            <p className='text-neutral-100 hover:text-cyan-400 duration-200 text-[26px] tracking-tight font-medium'>perplexity</p>
            <input type="text" className='sukui-input' id="" />
            <div>
                <div className='py-3 px-4 bg-blue-400'>
                    <p className='sukui-link'>Home</p>
                </div>
                <div>
                    <p className='sukui-link'>Discover</p>
                </div>
                <div>
                    <p className='sukui-link'>Library</p>
                </div>
            </div>
           <p>heyehy</p> 
        </div>
    );
};

export default Navbar;