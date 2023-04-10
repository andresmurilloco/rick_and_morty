import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Menu = () => {
    const location = useLocation();
    const [menuAbierto, setMenuAbierto] = useState(false);

    const AbrirMenu=()=>{
        if(menuAbierto === true){
            setMenuAbierto(false);
        } else{
            setMenuAbierto(true)
        }
    }

    return (
        <>
          <aside className='aside-menu-compacto'>
            <button className='bg-green-800 rounded-md w-40 h-10 font-gloria text-[#40B5CB] shadow-md shadow-yellow-400 hover:bg-green-900 font-bold text-xl' onClick={AbrirMenu}>Menu</button>
            {menuAbierto ? 
                <nav className='bg-green-800 rounded-md w-40 px-5 shadow-md shadow-yellow-400'>
                    <Link to='/' className='menu-compacto'>Home</Link>
                    <Link to='/characters' className='menu-compacto'>Characters</Link>
                    <Link to='/episodes' className='menu-compacto'>Episodes</Link>
                    <Link to='/locations' className='menu-compacto'>Locations</Link>
                    <Link to='/about' className='menu-compacto'>About</Link>
                </nav> 
                : ""}
            </aside>
            <aside className='aside-menu-extendido'>
                <nav className='menu-animacion'>
                    <Link to='/' className='menu-extendido'>Home</Link>
                    <Link to='/characters' className='menu-extendido'>Characters</Link>
                    <Link to='/episodes' className='menu-extendido'>Episodes</Link>
                    <Link to='/locations' className='menu-extendido'>Locations</Link>
                    <Link to='/about' className='menu-extendido'>About</Link>
                </nav>
            </aside>
        </>
    )
}

export default Menu