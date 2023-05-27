import React from 'react';
import myImage from '../Assets/me.png';

const About = () => {
    return (
        <div id='About' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2 text-center'>
                    <p className='text-xl font-bold tracking-widest text-blue-300'>About</p>
                    <h2 className='text-[#0981bd] font-extrabold text-3xl'>My name is Ernst Stoltz</h2>
                    <p className='font-bold tracking-widest text-white py-4'>
                    Over the past five years, I have been transitioning into the field of programming while working a full-time job. This journey has been challenging, but I am proud of the progress I have made.
                    I started by investing my free time into taking online courses and reading books on programming. After gaining a solid foundation, I moved on to practicing coding challenges and building small personal projects.
                    Despite the demands of my full-time job, I made sure to set aside specific times for studying and practicing programming. This helped me stay focused and make steady progress.
                    As I continued to learn and grow, I became more comfortable with programming languages and tools. I also began attending meetups and networking events to connect with other programmers and learn from their experiences. These events helped me build a supportive community of like-minded individuals who were also passionate about programming.
                    Although I am not yet employed in the field of computers, I am excited to continue growing and developing my skills in programming. I am confident that with hard work and dedication, I can achieve my goals and establish myself as a successful programmer in the industry.
                    </p>
                </div>
                <div className='w-full h-auto m-auto flex items-center justify-center p-4 hover:scale-110 ease-in duration-300'>
                    <img className='max-w-[300px]' src={myImage} alt='Ernst' />
                </div>
            </div>
        </div>
    );
};

export default About