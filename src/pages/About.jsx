import React from 'react'
import { useEffect } from 'react'

const About = () => {
  useEffect(() => {
    fetchApi();
  }, [])
  const fetchApi =async()=>{
  }
  return (
    <>
        <div className=' bg-white'>
            <h1>ABOUT</h1>
        </div>
    </>
  )
}

export default About