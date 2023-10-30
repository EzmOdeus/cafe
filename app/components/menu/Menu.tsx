"use client"
import Image from 'next/image';
import React from 'react';

import {styled} from '@mui/material/styles';
import Rating, {IconContainerProps} from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

import { AiOutlineShoppingCart } from 'react-icons/ai';
const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: 'Very Satisfied',
  },
};
function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

function Menu() {
    return (
        <section className='flex flex-col items-center max-sm:felx max-sm:flex-col max-sm:p-[20px]' id='product'>
            <div className='mb-[10%]'>
                <h1 className='max-sm:text-3xl md:font-bold md:text-3xl'>Special menu <span className='border-b-4 border-orange-400'>for you</span></h1>
            </div>
            <div className='max-sm:felx max-sm:flex-col flex md:gap-6 max-sm:gap-20 justify-evenly flex-wrap w-[80%] items-center '>

                <div className='shadow-2xl md:w-[30%] h-[20%] rounded-xl p-4'>
                    <Image src='/img_product (1).png' width='400' height='400' priority alt='error' className='rounded-2xl' />
                    <div className='flex justify-between items-center w-[80%] pt-6 '>
                        <h1 className='text-lg font-bold'>Sandwich</h1 >
                        <h4 className='font-bold'>21k</h4>
                    </div>
                    <div className='flex justify-between items-center w-[90%] py-5 '>
                        <p className='text-[#7E7D7A]'>bread with meat and vegetables</p>
                        <div className='bg-orange-400 rounded-full p-[.5rem] text-white '>  <AiOutlineShoppingCart /></div>
                    </div>
                </div>
                <div className='shadow-2xl md:w-[30%] h-[20%] rounded-xl p-4'>
                    <Image src='/unsplash_SqYmTDQYMjo.png' width='400' height='400' priority alt='error' className='rounded-2xl' />
                    <div className='flex justify-between items-center w-[80%] pt-6 '>
                        <h1 className='text-lg font-bold'>Hot Milk</h1 >
                        <h4 className='font-bold'>21k</h4>
                    </div>
                    <div className='flex justify-between items-center w-[90%] py-5 '>
                        <p className='text-[#7E7D7A]'>Hot Milk with less sugar</p>
                        <div className='bg-orange-400 rounded-full p-[.5rem] text-white '>  <AiOutlineShoppingCart /></div>
                    </div>
                </div>
                <div className='shadow-2xl md:w-[30%] h-[20%] rounded-xl p-4'>
                    <Image src='/unsplash_QXzdFy92CGY.png' width='400' height='400' priority alt='error' className='rounded-2xl' />
                    <div className='flex justify-between items-center w-[80%] pt-6 '>
                        <h1 className='text-lg font-bold'>Coffe Ice Cream</h1 >
                        <h4 className='font-bold'>21k</h4>
                    </div>
                    <div className='flex justify-between items-center w-[90%] py-5 '>
                        <p className='text-[#7E7D7A]'>Coffe with ice cream vanilla</p>
                        <div className='bg-orange-400 rounded-full p-[.5rem] text-white '>  <AiOutlineShoppingCart /></div>
                    </div>
                </div>
                <div className='shadow-2xl md:w-[30%] h-[20%] rounded-xl p-4'>
                    <Image src='/unsplash_SqYmTDQYMjo (1).png' width='400' height='400' priority alt='error' className='rounded-2xl' />
                    <div className='flex justify-between items-center w-[80%] pt-6 '>
                        <h1 className='text-lg font-bold'>Cappucino</h1 >
                        <h4 className='font-bold'>21k</h4>
                    </div>
                    <div className='flex justify-between items-center w-[90%] py-5 '>
                        <p className='text-[#7E7D7A]'> Hot Cappucino</p>
                        <div className='bg-orange-400 rounded-full p-[.5rem] text-white '>  <AiOutlineShoppingCart /></div>
                    </div>
                        <StyledRating
                            name="highlight-selected-only"
                            defaultValue={3}
                            IconContainerComponent={IconContainer}
                            getLabelText={(value: number) => customIcons[value].label}
                            highlightSelectedOnly
                        />
                </div>
                <div className='shadow-2xl md:w-[30%] h-[20%] rounded-xl p-4'>
                    <Image src='/img_product (2).png' width='400' height='400' priority alt='error' className='rounded-2xl' />
                    <div className='flex justify-between items-center w-[80%] pt-6 '>
                        <h1 className='text-lg font-bold'>Moccacinno</h1 >
                        <h4 className='font-bold'>21k</h4>
                    </div>
                    <div className='flex justify-between items-center w-[90%] py-5 '>
                        <p className='text-[#7E7D7A]'>Hot Moccacinno</p>
                        <div className='bg-orange-400 rounded-full p-[.5rem] text-white '>  <AiOutlineShoppingCart /></div>
                    </div>
                </div>
                <div className='shadow-2xl md:w-[30%] h-[20%] rounded-xl p-4'>
                    <Image src='/img_product (3).png' width='400' height='400' priority alt='error' className='rounded-2xl' />
                    <div className='flex justify-between items-center w-[80%] pt-6 '>
                        <h1 className='text-lg font-bold'>Waffle Ice Crem</h1 >
                        <h4 className='font-bold'>21k</h4>
                    </div>
                    <div className='flex justify-between items-center w-[90%] py-5 '>
                        <p className='text-[#7E7D7A]'>Wafle with Ice cream</p>
                        <div className='bg-orange-400 rounded-full p-[.5rem] text-white '>  <AiOutlineShoppingCart /></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Menu;