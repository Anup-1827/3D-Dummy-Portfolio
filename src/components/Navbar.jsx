import React, { useState } from 'react';
import { styles } from '../styles'
import { logo, menu, close } from "../assets/index"
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';

function Navbar() {

  const [toggle, setToggle] = useState(false);
  const [activeTitle, setActiveTitle ] = useState(null)
  return (
    <div className={`${styles.paddingX} flex justify-between items-center sm:text-[18px]`}>
      <div className='py-3'>
        <Link className='flex items-center gap-3' to="/"
          onClick={() => {
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} className='h-9 w-9 object-contain' />
          <span className='font-bold'>
            Anup | JS Mastery
          </span>
        </Link>
      </div>

      <div className='hidden sm:flex items-center justify-between min-w-[300px]'>
          {

            navLinks.map((link)=>{
              return(
                <Link className={`text-secondary ${activeTitle === link.title? "text-white font-bold": ""} hover:text-white text-[18px]`} to={`/${link.id}`}
                onClick={()=> {
                  setActiveTitle(link.title)
                  setToggle(false)
                }}
                >
                  {link.title}
                </Link>
              )
            })
          }
          </div>

      <div className='sm:hidden relative'>
        <img className='cursor-pointer' src={!toggle? menu: close} onClick={()=> setToggle(prev=> !prev)}/>

        <div className={`${toggle?"block":"hidden"} absolute bg-primary top-6 right-0 p-2 rounded-lg`}>
          <div className='flex flex-col gap-3 px-3'>
          {

            navLinks.map((link)=>{
              return(
                <Link className={`text-secondary ${activeTitle === link.title? "text-white font-bold": ""} hover:text-white text-[16px]`} to={`/${link.id}`}
                onClick={()=> {
                  setActiveTitle(link.title)
                  setToggle(false)
                }}
                >
                  {link.title}
                </Link>
              )
            })
          }
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar