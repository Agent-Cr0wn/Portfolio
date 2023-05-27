import React, { useState, useEffect } from 'react'
import { AiOutlineCloseSquare, AiOutlineMenu} from "react-icons/ai"

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    };

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 768) {
            setNav(false);
          }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleClick = (e, target) => {
        e.preventDefault();
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
        setNav(false);
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-5xl font-bold text-[#0981bd]'>Ernst Stoltz</h1>
                <ul className='hidden md:flex fixed top-6 right-5 bg-[#2b2b30]'>
                    <li className='p-4'><a href="#Main" onClick={(e) => handleClick(e, '#Main')}>Home</a></li>
                    <li className='p-4'><a href="#About" onClick={(e) => handleClick(e, '#About')}>About</a></li>
                    <li className='p-4'><a href="#Skills" onClick={(e) => handleClick(e, '#Skills')}>Skills</a></li>
                    <li className='p-4'><a href="#Projects" onClick={(e) => handleClick(e, '#Projects')}>Projects</a></li>
                    <li className='p-4'><a href="#Links" onClick={(e) => handleClick(e, '#Contact')}>Contact</a></li>
                </ul>
            <div onClick={handleNav} className='block md:hidden fixed top-10 right-8 bg-[#2b2b30]'>
                 {nav ? <AiOutlineCloseSquare size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#2b2b30] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#0981bd] m-4'>Ernst Stoltz</h1>
                <ul>
                    <li className='p-4 border-b border-gray-600'><a href="#Main" onClick={(e) => handleClick(e, '#Main')}>Home</a></li>
                    <li className='p-4 border-b border-gray-600'><a href="#About" onClick={(e) => handleClick(e, '#About')}>About</a></li>
                    <li className='p-4 border-b border-gray-600'><a href="#Skills" onClick={(e) => handleClick(e, '#Skills')}>Skills</a></li>
                    <li className='p-4 border-b border-gray-600'><a href="#Projects" onClick={(e) => handleClick(e, '#Projects')}>Projects</a></li>
                    <li className='p-4'><a href="#Links" onClick={(e) => handleClick(e, '#Contact')}>Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
