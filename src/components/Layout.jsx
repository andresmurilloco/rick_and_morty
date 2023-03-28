import React from 'react'
import { useState, useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import styled from '@emotion/styled'

const Footer = styled.aside`
  margin-left:94px;
  margin-right: 94px;
  display: flex;
  margin-top:5px;
  background-color: #02330a;
  box-shadow: yellow;
  border-radius: 5px;
  @media (max-width:850px){
    margin-left: 20px;
    margin-right: 20px;
  }
`

//Componentes
import Menu from './Menu'

//Imagenes
import Banner from "../img/banner.png"
import Header from "../img/header.png"
import Facebook from "../img/facebook.png"
import Instagram from "../img/instagram.png"
import Git from "../img/git.png"

const Layout = () => {
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
        <div>
          <Footer>
            <div className='w-1/2'>
              <p>Designed by Andrés Murillo</p>
              <p>Forbidden any direct reproduction of the code used in this project.</p>
            </div>
            <div className='w-1/2 flex'>
              <img src={Facebook} className=" max-h-8 "/>
              <img src={Instagram} className=" max-h-8 "/>
              <img src={Git} className=" max-h-8"/><p className=' text-2xl'>@andrestech97</p>
            </div>
          </Footer>
        </div>
    </>
  )
}

export default Layout