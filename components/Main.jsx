import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter, FaFacebook } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

export const Main = () => {
    return (
        <div className='w-full h-screen text-center'>
            
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                
                <div>
                    <p className='uppercase text-sm tracking-widest text-[#5651e5]'>
                        LET&#39;S BUILD SOMETHING TOGETHER
                    </p>
                    <h1 className='py-4 text-[#5651e5]'>
                        Hi, I&#39;m <span className='text-[#2174FF]'> Gefferson</span>

                    </h1>
                    
                    <TypeAnimation
                        sequence={[
                            'a Backend Developer', 
                            2000, 
                            'a Electronic Engineer', 
                            2000, 
                        ]}
                        wrapper="h2"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '3em' }}
                        className='py-2 text-[#00A3FF]'
                    />
                    <p className='py-4 text-[#1654BD] sm:max-w-[70%] m-auto'>
                        I develop scalable and functional web applications using Python with Django, JavaScript and TypeScript with Node.js for the backend and React and Bootstrap for the frontend.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <a
                            href='https://www.linkedin.com/in/gefferson-casasola/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg shadow-green-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                        </a>
                        <a
                            href='https://github.com/Geffrerson7'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg shadow-green-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub />
                            </div>
                        </a>
                        <a
                            href="https://twitter.com/gcasasolah"
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg shadow-green-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaTwitter />
                            </div>
                        </a>
                        <a
                            href="https://www.facebook.com/gefferson.casasola"
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg shadow-green-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaFacebook />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
