import Image from 'next/image';
import React from 'react';

function Service() {
    return (
        <section className='max-sm:p-5' id='Service'>
            <div className='my-[100px]'>
                <h1 className='md:font-bold md:text-3xl max-sm:text-4xl'>How to use delivery <span className='border-b-4 border-orange-400'>service</span></h1>
                <div className='md:flex md:justify-between pt-12 text-center items-center'>
                    <div className='max-sm:mb-16 shadow-2xl p-10 rounded-2xl flex flex-col justify-center items-center'>
                        <Image src="/image.png" className='w-[50%]' width={200} height={576} alt='erorr' />
                        <h2 className='text-xl font-semibold'>choose your coffee</h2>
                        <p >there are 20+ coffees for you</p>
                    </div>
                    <div className='shadow-2xl  max-sm:mb-16 p-10 rounded-2xl flex flex-col justify-center items-center'>
                        <Image src="/food-truck 1.png" className='w-[50%]' width={200} height={576} alt='erorr' />
                        <h2 className='text-xl font-semibold'>we delivery it to you</h2>
                        <p>Choose delivery service</p>
                    </div>
                    <div className='shadow-2xl p-10 max-sm:mb-16  rounded-2xl flex flex-col justify-center items-center'>
                        <Image src="/coffee-cup 2.png" className='w-[50%]' width={200} height={576} alt='erorr' />
                        <h2 className='text-xl font-semibold'>Enjoy your coffee</h2>
                        <p>Choose delivery service</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service;