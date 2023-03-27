import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Menu = () => {
    const location = useLocation();
    const [menuClassSetup, setMenuClassSetup] = useState("menu-extendido");
    const [isCompact, setIsCompact] = useState(false);
    const [menuAbierto, setMenuAbierto] = useState(false);

    useEffect(() => {
        if(window.innerWidth < 850){
            setIsCompact(true);
            setMenuClassSetup("menu-compacto");
        }
    }, []);
  
    const VerificarTamanioPantalla=()=>{
      const wSize = window.innerWidth;
      if(wSize < 850){
        setMenuClassSetup("menu-compacto");
        setIsCompact(true);
      } else{
        setMenuClassSetup("menu-extendido");
        setIsCompact(false);
      }
    }

    const AbrirMenu=()=>{
        if(menuAbierto === true){
            setMenuAbierto(false);
        } else{
            setMenuAbierto(true)
        }
    }
  
    const windowScreen = window.addEventListener("resize", VerificarTamanioPantalla);

    return (
        <>
        {isCompact ? 
            <aside className='ml-5 '>
                <button className='bg-green-800 rounded-md w-40 h-10 font-gloria text-[#40B5CB] shadow-md shadow-yellow-400 hover:bg-green-900 font-bold text-xl' onClick={AbrirMenu}>Menu</button>
                {menuAbierto ? 
                    <nav className='bg-green-800 rounded-md w-40 px-5 shadow-md shadow-yellow-400'>
                        <Link to='/' className={menuClassSetup}>Home</Link>
                        <Link to='/characters' className={menuClassSetup}>Characters</Link>
                        <Link to='/episodes' className={menuClassSetup}>Episodes</Link>
                        <Link to='/locations' className={menuClassSetup}>Locations</Link>
                        <Link to='/about' className={menuClassSetup}>About</Link>
                    </nav>
                 : ""}
            </aside>
        :
            <aside className=' ml-24 mr-24 mt-5 flex justify-around bg-green-800 rounded-md shadow-md shadow-yellow-400'>
                <Link to='/' className={menuClassSetup}>Home</Link>
                <Link to='/characters' className={menuClassSetup}>Characters</Link>
                <Link to='/episodes' className={menuClassSetup}>Episodes</Link>
                <Link to='/locations' className={menuClassSetup}>Locations</Link>
                <Link to='/about' className={menuClassSetup}>About</Link>
            </aside>
        }
        </>
    )
}

export default Menu