import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

//Componentes

//Imagenes
import Banner from "../img/banner.png"
import Header from "../img/header.png"
import Facebook from "../img/facebook.png"
import Instagram from "../img/instagram.png"
import Git from "../img/git.png"

const Layout = () => {
  const location = useLocation();
  return (
    <>
        <div className='flex justify-center overflow-hidden'>
            <Link to='/'><img src={Header} className=" max-w-sm max-h-40" /></Link>
            <Link to='/'><img src={Banner} className=" max-w-sm max-h-40 max-[850px]:hidden" /></Link>
        </div>
        <div>
            <aside className=' ml-24 mr-24 mt-5 flex justify-around bg-green-800 rounded-md shadow-md shadow-yellow-400'>
              <Link to='/' className='enlaces'>Home</Link>
              <Link to='/characters' className='enlaces'>Characters</Link>
              <Link to='/episodes' className='enlaces'>Episodes</Link>
              <Link to='/locations' className='enlaces'>Locations</Link>
              <Link to='/about' className='enlaces' >About</Link>
            </aside>
        </div>
        <Outlet/>
        <div>
          <aside className='ml-24 mr-24 mt-5 flex bg-green-800 rounded-md shadow-md shadow-yellow-400'>
            <div className='w-1/2'>
              <p>Designed by Andrés Murillo</p>
              <p>Forbidden any direct reproduction of the code used in this project.</p>
            </div>
            <div className='w-1/2 flex'>
              <img src={Facebook} className=" max-h-8 "/>
              <img src={Instagram} className=" max-h-8 "/>
              <img src={Git} className=" max-h-8"/><p className=' text-2xl'>@andrestech97</p>
            </div>
          </aside>
        </div>
    </>
  )
}

export default Layout