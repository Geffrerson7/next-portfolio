import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/details-icon-javascript.png';
import Node from '../public/assets/skills/details-icon-node.png';
import Express from '../public/assets/skills/details-icon-express.png';
import Python from '../public/assets/skills/details-icon-python.png';
import Flask from '../public/assets/skills/details-icon-flask.png';
import Django from '../public/assets/skills/details-icon-django.png'
import AWS from '../public/assets/skills/details-icon-aws.png';
import Bootstrap from '../public/assets/skills/details-icon-bootstrap.png'
import Docker from '../public/assets/skills/details-icon-docker.png'
import Linux from '../public/assets/skills/details-icon-linux.png'
import Mongodb from '../public/assets/skills/details-icon-mongodb.png'
import MySQL from '../public/assets/skills/details-icon-mysql.png'
import Git from '../public/assets/skills/details-icon-git.png'
import Typescript from '../public/assets/skills/details-icon-typescript.png'
import PostgreSQL from '../public/assets/skills/details-icon-postgresql.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do?</h2>
        <div className='grid grid-cols-2 lg:grid-cols-6 gap-2'>
          <div className='p-6 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-1 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Html} width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-6 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-1 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Css} width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-1 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Bootstrap} width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Bootstrap</h3>
              </div>
            </div>
          </div>
          <div className='p-6 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-1 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Javascript} width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-1 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Typescript} width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>TypeScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-1 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Node} width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Node.js</h3>
              </div>
            </div>
          </div>
          <div className='p-6 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-1 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Express} width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Express.js</h3>
              </div>
            </div>
          </div>
          <div className='p-6 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-1 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Python} width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Python</h3>
              </div>
            </div>
          </div>
          <div className='p-6 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-1 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Flask} width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Flask</h3>
              </div>
            </div>
          </div>
          <div className='p-6 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-1 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Django} width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Django</h3>
              </div>
            </div>
          </div>
          <div className='p-6 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-1 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Git} width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Git</h3>
              </div>
            </div>
          </div>
          <div className='p-6 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-1 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={MySQL} width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>MySQL</h3>
              </div>
            </div>
          </div>
          <div className='p-6 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-1 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={PostgreSQL} width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>PostgreSQL</h3>
              </div>
            </div>
          </div>
          <div className='p-6 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-1 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Mongodb} width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
          <div className='p-6 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-1 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={AWS} width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>AWS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-1 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Docker} width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Docker</h3>
              </div>
            </div>
          </div>
          <div className='p-6 hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-1 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Linux} width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Linux</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;