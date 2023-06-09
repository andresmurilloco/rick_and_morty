import React from 'react'
import { useState, useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import Chat from './Chat'

//CSS
import '../css/footer.css'

//Componentes
import Menu from './Menu'

//Imagenes
import Banner from "../img/banner.png"
import Header from "../img/header.png"
import Facebook from "../img/facebook.png"
import Instagram from "../img/instagram.png"
import Git from "../img/git.png"

const Layout = () => {
  const usuarioRedes = "@andresdev25"
  return (
    <>
        <div className='flex justify-center overflow-hidden'>
            <Link to='/'><img src={Header} className=" max-w-sm max-h-40" /></Link>
            <Link to='/'><img src={Banner} className=" max-w-sm max-h-40 max-[850px]:hidden" /></Link>
        </div>
        <div>
            <Menu></Menu>
        </div>
        <Outlet/>
        <Chat></Chat>
        <div>
          <div className='footer'>
            <div className='footer-information'>
              <p>Designed by Andrés Murillo.<br/>Forbidden any direct reproduction of the code used in this project.</p>
            </div>
            <div className='user-container'>
              <div className='flex flex-row '>
                <img src={Facebook} className="footer-logo "/><p>{usuarioRedes}</p>
              </div>
              <div className='flex flex-row'>
                <img src={Instagram} className="footer-logo "/><p>{usuarioRedes}</p>
              </div>
              <div className='flex flex-row'>
                <img src={Git} className="footer-logo"/><p>{usuarioRedes}</p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Layout