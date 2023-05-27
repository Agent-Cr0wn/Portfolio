import React from 'react';

import C from '../Assets/c.png';
import CSS from '../Assets/css3.png';
import FLASK from '../Assets/flask.png';
import HTML from '../Assets/html5.png';
import JAVASCRIPT from '../Assets/javascript.png';
import NODEJS from '../Assets/node-js.png';
import PYCHARM from '../Assets/pycharm.png';
import PYTHON from '../Assets/python.png';
import REACT from '../Assets/react.png';
import SQL from '../Assets/sqlite.png';
import TAILWIND from '../Assets/tailwind.png';
import VSCODE from '../Assets/visualStudio.png';


const Skills = () => {
    return (
        <div id='Skills' className='w-full h-screen'>
            <div className='max-w-[1240] mx-auto p-4 flex flex-col justify-center w-full h-full text-center'>
                <h2 className='font-bold text-4xl text-[#0981bd] py-4'>Skills / Experience</h2>
                <p className='font-bold text-white py-4'>Here is a list of technologies that I have learned and used!</p>

                <div className='flex flex-wrap justify-center'>
                    <img className='max-w-[300px] mx-4 my-2 hover:scale-110 duration-500' src={C} alt='C' title='C' />
                    <img className='max-w-[300px] mx-4 my-2 hover:scale-110 duration-500' src={CSS} alt='CSS' title='CSS' />
                    <img className='max-w-[300px] mx-4 my-2 hover:scale-110 duration-500' src={FLASK} alt='FLASK' title='FLASK' />
                    <img className='max-w-[300px] mx-4 my-2 hover:scale-110 duration-500' src={HTML} alt='HTML' title='HTML' />
                    <img className='max-w-[300px] mx-4 my-2 hover:scale-110 duration-500' src={JAVASCRIPT} alt='JAVASCRIPT' title='JAVASCRIPT' />
                    <img className='max-w-[300px] mx-4 my-2 hover:scale-110 duration-500' src={NODEJS} alt='NODE.JS' title='NODE.JS' />
                    <img className='max-w-[300px] mx-4 my-2 hover:scale-110 duration-500' src={PYCHARM} alt='PYCHARM' title='PYCHARM' />
                    <img className='max-w-[300px] mx-4 my-2 hover:scale-110 duration-500' src={PYTHON} alt='PYTHON' title='PYTHON' />
                    <img className='max-w-[300px] mx-4 my-2 hover:scale-110 duration-500' src={REACT} alt='REACT.JS' title='REACT.JS' />
                    <img className='max-w-[300px] mx-4 my-2 hover:scale-110 duration-500' src={SQL} alt='SQL' title='SQL' />
                    <img className='max-w-[300px] mx-4 my-2 hover:scale-110 duration-500' src={TAILWIND} alt='TAILWIND' title='TAILWINDCSS' />
                    <img className='max-w-[300px] mx-4 my-2 hover:scale-110 duration-500' src={VSCODE} alt='VSCODE' title='VS CODE' />
                </div>
            </div>
        </div>
    )
}

export default Skills