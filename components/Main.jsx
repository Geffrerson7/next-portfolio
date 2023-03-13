import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter, FaFacebook } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

export const Main = () => {
    return (
        <div id='main' className='w-full h-screen text-center'>
            
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                
                <div>
                    <p className='uppercase text-sm tracking-widest text-[#FFFFFF]'>
                        LET&#39;S BUILD SOMETHING TOGETHER
                    </p>
                    <h1 className='py-4 text-[#FFFFFF]'>
                        Hi, I&#39;m <span className='text-[#FFFFFF]'> Gefferson</span>

                    </h1>
                    
                    <TypeAnimation
                        sequence={[
                            "a Backend Developer", 
                            2000, 
                            "a Electronic Engineer", 
                            2000, 
                        ]}
                        wrapper="h2"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '3em' }}
                        className='py-2 text-[#FFFFFF]'
                    />
                    <br />
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-8'>
                        <a
                            href='https://www.linkedin.com/in/gefferson-casasola/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg p-2 cursor-pointer hover:scale-110 ease-in duration-300 bg-cyan-100'>
                                <FaLinkedinIn className='text-[#006BFF]' size='30'/>
                            </div>
                        </a>
                        <a
                            href='https://github.com/Geffrerson7'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg p-2 cursor-pointer hover:scale-110 ease-in duration-300 bg-cyan-100'>
                                <FaGithub className='text-[#006BFF]' size='30'/>
                            </div>
                        </a>
                        <a
                            href="https://twitter.com/gcasasolah"
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg p-2 cursor-pointer hover:scale-110 ease-in duration-300 bg-cyan-100'>
                                <FaTwitter className='text-[#006BFF]' size='30'/>
                            </div>
                        </a>
                        <a
                            href="https://www.facebook.com/gefferson.casasola"
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg p-2 cursor-pointer hover:scale-110 ease-in duration-300 bg-cyan-100'>
                                <FaFacebook className='text-[#006BFF]' size='30'/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
