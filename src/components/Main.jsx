import React from 'react';
import Typed from 'react-typed';

const Main = () => {
    return (
        <div id='Main' className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#0981bd] font-bold p-2 text-3xl'>
                    Welcome to my portfolio
                </p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                    How can I help you?
                </h1>
                <div className='flex justify-center items-center'>
                    <Typed
                        className='md:text-5xl sm:text-4xl text-xl font-bold text-orange-300'
                        strings={['Problem Solving', 'Research', 'Hard Work', 'Dedication', 'Team Work']}
                        typeSpeed={10}
                        backSpeed={14}
                        loop
                    />
                </div>
            </div>
        </div>
    );
};

export default Main