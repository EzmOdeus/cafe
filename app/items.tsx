'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
function Items() {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };

    const [click, setclick] = useState<boolean>(false)
    function clicked() {
        setclick(!click)
    }
    return (

        <div>

            <div className='max-sm:relative md:bg-orange-200  md:p-[100px] rounded-[50px] top-[90%] w-[90vw] md:px-12 absolute left-[50%] translate-x-[-50%]'>
                <div className='max-sm:relative max-sm:block max-sm:p-0 md:grid-flow-row flex justify-around items-center absolute top-[-80%]'>
                    <div className=' max-sm:mt-7  top-[-50px]  dark:text-white dark:bg-black bg-white rounded-xl  sm:w-[23%] justify-center items-center h-[100%]  flex flex-col shadow-2xl'>
                        <Image src='/unsplash_RFHFV7lVQBY.png' width='600' height='600' priority alt='error' className='rounded-t-2xl' />
                        <div className='flex justify-between items-center w-[80%] pt-6 '>
                            <h1 className='text-xl font-bold'>Vanilla Latte</h1 >
                            <h4 className='font-bold'>21k</h4>
                        </div>
                        <div className='flex justify-around w-[90%] py-5 '>
                            <button onClick={clicked} className={click ? 'border bg-orange-400  border-amber-300 text-white p-1 m-0' : 'border  border-amber-300 text-amber-300 p-1 m-0'}>Hot</button>
                            <button onClick={clicked} className={click ? 'border  border-amber-500 text-amber-500 p-1 m-0' : 'border bg-orange-400  border-amber-300 text-white p-1 m-0'}>Cold</button>
                            <div className='bg-orange-400 rounded-3xl p-2'>  <AiOutlineShoppingCart /></div>
                        </div>
                    </div>
                    <div className=' max-sm:mt-7  top-[-50px] dark:text-white dark:bg-black bg-white rounded-xl  sm:w-[23%] justify-center items-center h-[100%]  flex flex-col shadow-2xl'>
                        <Image src='/img_product.png' width='600' height='600' priority alt='error' className='rounded-t-2xl' />
                        <div className='flex justify-between items-center w-[80%] pt-6 '>
                            <h1 className='text-xl font-bold'>Espresso</h1 >
                            <h4 className='font-bold'>12k</h4>
                        </div>
                        <div className='flex justify-around w-[90%] py-5 '>
                            <button onClick={clicked} className={click ? 'border bg-orange-400  border-amber-300 text-white p-1 m-0' : 'border  border-amber-300 text-amber-300 p-1 m-0'}>Hot</button>
                            <button onClick={clicked} className={click ? 'border  border-amber-500 text-amber-500 p-1 m-0' : 'border bg-orange-400  border-amber-300 text-white p-1 m-0'}>Cold</button>
                            <div className='bg-orange-400 rounded-3xl p-2'>  <AiOutlineShoppingCart /></div>
                        </div>
                    </div>
                    <div className=' max-sm:mt-7  top-[-50px] dark:text-white dark:bg-black bg-white rounded-xl  sm:w-[23%] justify-center items-center h-[100%]  flex flex-col shadow-2xl'>
                        <Image src='/hazelnut latte.png' width='600' height='600' priority alt='error' className='rounded-t-2xl' />
                        <div className='flex justify-between items-center w-[80%] pt-6 '>
                            <h1 className='text-xl font-bold'>Hazelnut Latte</h1 >
                            <h4 className='font-bold'>23k</h4>
                        </div>
                        <div className='flex justify-around w-[90%] py-5 '>

                            <button onClick={clicked} className={click ? 'border bg-orange-400  border-amber-300 text-white p-1 m-0' : 'border  border-amber-300 text-amber-300 p-1 m-0'}>Hot</button>
                            <button onClick={clicked} className={click ? 'border  border-amber-500 text-amber-500 p-1 m-0' : 'border bg-orange-400  border-amber-300 text-white p-1 m-0'}>Cold</button>

                            <div className='bg-orange-400 rounded-3xl p-2'>  <AiOutlineShoppingCart /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Items;