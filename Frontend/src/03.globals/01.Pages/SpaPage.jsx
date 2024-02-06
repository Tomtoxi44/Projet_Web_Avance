import React from 'react';
import Navbar from '../03.Components/Navbar';
import Home from '../03.Components/Home';

const SpaPage = () => {
    return (
        <>
            <div className='relative'>
                <Navbar /></div>
            <div className='min-h-screen h-full bg-[#1f1f1d] border-8 border-[#292927] flex justify-center items-center sukui-contentDashboard translate-x-[224px]' >
                
                    <Home />
                
            </div>
        </>
    );
};

export default SpaPage;