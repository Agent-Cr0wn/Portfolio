import React from 'react';

const Contact = () => {
  return (
    <div id='Contact' className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#0981bd] font-bold p-2 text-3xl'>
          Contact Me
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Let's get in touch!
        </h1>
        <div className='flex justify-center items-center'>
          <ul>
            <li className='md:text-5xl sm:text-4xl text-xl font-bold text-orange-300 py-2'>
              <a href='mailto:rstoltz20@gmail.com'>rstoltz20@gmail.com</a>
            </li>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold text-orange-300 py-2'>
              (+27) 82-791-9726
            </p>
            <li className='md:text-5xl sm:text-4xl text-xl font-bold text-orange-300 py-2'>
              <a href='https://www.linkedin.com/in/ernst-stoltz-0b169512b/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
            </li>
            <li className='md:text-5xl sm:text-4xl text-xl font-bold text-orange-300 py-2'>
              <a href='https://github.com/Agent-Cr0wn' target='_blank' rel='noopener noreferrer'>GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
