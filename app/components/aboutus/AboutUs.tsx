import React from 'react';
import Image from 'next/image';

function AboutUs() {
    return (
        <div className='  aboutus md:flex ' id='About'>
            <div className='max-sm:block px-[50px] flex'>
                <div className=' md:contenir my-10'>
                    <Image src="/Group 6.png" className=' mt-[-40%]' width={500} height={576} alt='erorr' />
                </div>
                <div className='flex flex-col justify-evenly max-sm:pb-[30px]'>
                    <h1 className=' max-sm:pb-[20px] font-bold text-2xl dark:text-black'>About <span className='border-b-4 border-orange-400'>us</span></h1>
                    <h2 className=' max-sm:pb-[30px] font-semibold text-xl dark:text-black'>We provide quality coffee, and ready to deliver.</h2>
                    <p className='text-[#7E7D7A] max-sm:pb-[15px] '>We are a company that makes and distributes delicious drinks. our main product is made with a secret recipe and available in stores worldwide.</p>
                    <div className='flex items-start     '>
                        <button className='max-sm:w-[80%] p-3 bg-black dark:text-black dark:bg-white  rounded-2xl flex justify-between items-center md:p-[10px] text-[#F4AE26]  '>order now

                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;