import React from 'react'
import styled from "@emotion/styled";
import { useState, useEffect } from 'react';

import Imagen from '../img/index.png'

//css
import '../css/textSwitcher.css';
import '../css/indexAnimations.css';

const Index = () => {
  return (
    <>
      <div className='ml-24 mr-24 mt-5 mb-5 max-[850px]:ml-5 max-[850px]:mr-5'>
        <h1 className='welcome'>WELCOME</h1>
        <img src={Imagen} className='w-[35%] ml-[33%]' />
      </div>
    </>
  )
}

export default Index