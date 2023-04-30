import React from 'react'
import { useEffect } from 'react'

const About = () => {
  return (
    <>
      <div className='ml-24 mr-24 mt-5 mb-5 max-[850px]:ml-5 max-[850px]:mr-5'>
        <div className='font-gloria bg-green-400 border-yellow-500 border-4 shadow-md shadow-orange-300 mt-5 p-3 rounded-md'>
          <h1 className='text-center text-3xl font-bold mb-5'>About</h1>
          <p>My name is Andrés Murillo. I am still learning but I am eager to be a developer soon. My teacher is Alvaro, a good old friend of mine who is a Fullstack developer right now. Following his teachings, I got told to do this Hackathon project as it may help me quite a lot to reinforce and reasure everything I learnt through different curses in Udemy and Platzi. <br></br>
          You may think this is just a copy/paste of one of thousands of videos and tutorials out there about this project... My teacher did :c <br></br>
          I am not liying when I tell you this came fully out of my head and my vague knowledge on Rick and Morty. <br />
          Whoever is looking at this project, take your time to visit my Git to see my progress through this crazy thing of creating and programming something from scratch, designing, coding and testing is something I really like. <br />
          This project was made using React JS, Tailwind CSS, JavaScript, Axios and Vite. <br /> <br />

          Andrés Murillo Cortázar, Front-End Developer
          </p>
        </div>
      </div>
    </>
  )
}

export default About