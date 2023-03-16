import React from 'react'
import ProjectItem from './ProjectItem';
import moviesDjangoImg from '../public/assets/projects/API-MOVIES-PYTHON.png'
import moviesNodeImg from '../public/assets/projects/API-MOVIES-TS.png'
import inventoryImg from '../public/assets/projects/inventario.png'
import playlistImg from '../public/assets/projects/playlist-api.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built?</h2>
        <div className='grid md:grid-cols-4 gap-8'>
          <ProjectItem
            title='Api Movies with DRF'
            backgroundImg={moviesDjangoImg}
            projectUrl='/moviesDjango'
            tech='Django Rest Framework'
          />
          <ProjectItem
            title='Api Movies with Node'
            backgroundImg={moviesNodeImg}
            projectUrl='/moviesNode'
            tech='Node.js, Express.js, Prisma and TypeScript'

          />
          <ProjectItem
            title='Iventory System'
            backgroundImg={inventoryImg}
            projectUrl='/inventorySystem'
            tech='TypeScript, Prisma, Express.js, Node.js, Angular, Pusher, Twilio and Supabase'

          />
          <ProjectItem
            title='Api Playlist'
            backgroundImg={playlistImg}
            projectUrl='/playlistNode'
            tech='Node.js, Express.js, Typescript and Prisma'

          />
        </div>
      </div>
    </div>
  )
}

export default Projects