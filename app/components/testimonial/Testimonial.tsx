import Image from 'next/image';
import React from 'react';

function Testimonial() {
    return (
        <div className='max-sm:w-screen md:aboutus md:w-[80%] rounded-2xl flex aboutus'>
            <section className='max-sm:p-[30px] md:flex p-[50px] justify-between items-center'>
               <div>
                <h1 className='text-[27px] font-bold '>
                 What they say about us
               </h1>
               <h2 className='text-[#aaa] text-[18px] pt-3 md:w-[60%] '>
                We always provide the best service and always maintain the quality of coffee
               </h2>
               </div>
                <div className='max-sm:hidden flex justify-between items-center absolute w-[55%] right-[35px]'>
                    
                    <Image src='/card-testi.png' alt='' width={200} height={150}/>
                     {/* <div className=' absolute p-[15px] bottom-[15%] bg-amber-400 shadow-2xl'>
 <h1 className='font-bold '>
                Naura
                        </h1>
                        <h2 className='text-xs'>
                            I really love the cappucino, the coffee<br/> was very smooth  
                        </h2>
                        
                    </div> */}
                 
                    <Image src='/card-testi (1).png' alt='' width={200} height={150}/> 
                    <Image src='/card-testi (2).png' alt='' width={200} height={150}/> 
               </div>
            </section >

        </div>
    );
}

export default Testimonial;