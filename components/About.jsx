import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
                        About
                    </p>
                    <h2 className='py-4'>Who I Am?</h2>
                    <p className='py-2 text-gray-600'>
                        Hello! I'm Gefferson. I'm a junior programmer who loves to build things with code.
                        My first experience with programming was when I was 22 years old at university while I was studying electronic engineering, but it didn't last long: I was a big fan of video games, and one day I saw in a university lecture how to create a pacman video game with C++ and decided to do it. At first it was difficult for me because I did not understand the logic and syntax but after watching tutorials and asking friends for advice I was able to do it. Then I learned Matlab and I liked the graphs I made for the Linear and Discrete Control Systems course. On March 1, 2023, I graduated from the 18-week Beca Bicentenario Scholarship Intensive Bootcamp 3.0: Backend Developer and am looking for a full-time position where I can help a company achieve their
                        goals.
                    </p>



                    <Link href='/#projects'>
                        <p className='py-2 text-gray-600 underline cursor-pointer'>
                            &#10145;Check out some of my latest projects.
                        </p>
                    </Link>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image src={AboutImg} className='rounded-xl' alt='/' />
                </div>
            </div>
        </div>
    );
};

export default About;