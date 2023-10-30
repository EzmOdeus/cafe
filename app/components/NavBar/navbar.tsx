'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi'

import { AiOutlineShoppingCart, AiOutlineMenu, AiOutlineSwitcher, } from 'react-icons/ai'
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';



function NavBar() {
 
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor:  theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor:  theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor:  theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));
  const [color, setcolor] = useState<boolean>(false)
  function colors() {
    if (window.scrollY >= 100) {
      setcolor(true)
      console.log(color)
    } else {
      setcolor(false)
      console.log(color)
    }
  }

  const [Toggel, setToggel] = useState<boolean>(false)
  function theme() {
    document.documentElement.classList.toggle('dark')
    console.log(document.documentElement.classList.value)
  }
  useEffect(() => {
    colors()
    window.addEventListener('scroll', colors)
  })
  return (
    <div onScroll={colors} className={color ? 'max-sm:flex justify-around fixed z-50 w-screen flex md:flex md:justify-around items-center md:px-[150px] pt-4 bg-white ' : 'max-sm:flex justify-around fixed z-50 w-screen flex md:flex md:justify-around items-center md:px-[150px] pt-4  '}>
      <FormGroup>
        <FormControlLabel onClick={theme}
          control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked/>}
          label=''

        />
      </FormGroup>
      {/* <div onClick={theme} className='flex border-[#d3d3d3] dark:border-black border-2 p-[.3rem] rounded-3xl items-center'>
                <div className='absolute bg-[#d3d3d3] rounded-full w-6 border  border-[#d3d3d3] h-6 ml-[-3px] dark:ml-[20px] dark:bg-black'></div>
                {/* <div className='mr-2 dark:text-black ' onClick={theme}> <MdDarkMode />  </div>
                <div className='dark:text-black text-[#d3d3d3]' onClick={theme}> <BsSunFill />  </div> */}
    {/* </div> * /} */}
    < Image src = '/21266941.png' width = '80' height = '80' priority alt = 'Erorr' />
            <div className='max-sm:absolute max-sm:rounded-2xl dark:text-black   dark:bg-[#b8b8b8d3] max-sm:bg-[#808080d1] max-sm:z-50  max-sm:w-screen max-sm:flex max-sm:flex-col-reverse max-sm:top-[100%]  md:relative md:flex md:contents'>
                <ul className={Toggel ? 'max-sm:font-bold  max-sm:p-[20px]  dark:text-black max-sm:grid max-sm:gap-4     md:flex justify-between w-2/5' : 'hidden md:flex justify-between w-2/5'} >
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='#product'>Products</Link></li>
                    <li><Link href='#About'>AboutUs</Link></li>
                    <li><Link href='#Service'>Service</Link></li>
                </ul >
                <div className={Toggel ? 'dark:text-black max-sm:flex max-sm:m-[20px] md:flex items-center space-x-4 bg-white p-2 rounded-3xl text-lg  border border-black' : 'hidden dark:text-black md:flex items-center space-x-4 bg-white p-2 rounded-3xl text-lg border border-black'}>
                    <BiSearch />
                    <input type="text" className='bg-transparent outline-none' />
                </div></div>
            <div onClick={() => setToggel(!Toggel)} className=' md:hidden dark:text-black'>  <AiOutlineMenu /></div>
            <div className=' md:text-3xl dark:text-black'><AiOutlineShoppingCart /></div>
       
        </div >
    );
}
export default NavBar;