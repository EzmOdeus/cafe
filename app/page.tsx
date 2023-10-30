import Image from 'next/image'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import Items from './items';
import Service from './components/service/Service';
import AboutUs from './components/aboutus/AboutUs';
import Menu from './components/menu/Menu';
import Testimonial from './components/testimonial/Testimonial';
import Banner from './components/banner/Banner';

export default async function   Home() {
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, 2500)
  })
  return (
    <>
      <div className='pt-[50px] md:h-[100vh] header'>
        <div className='block md:flex flex-row-reverse pt-16 justify-between items-center w-[75%]  relative left-[50%] translate-x-[-50%]'>
          <Image src="/img-hero.svg" width={400} height={576} alt='erorr' />
          <div>
            <h1 className=" sm:w-[100%] m-0 text-2xl dark:text-black md: font-bold text-center md:text-3xl w-[80%]">Enjoy your <span className='text-orange-400 '>coffee</span><br /> before your activity</h1>
            <p className='py-[20px] text-sm md:text-lg dark:text-black'>Boost your productivity and build your <br /> mood with a glass of coffee in the morning </p>
            <div className='flex justify-center '>
              <button className='max-sm:w-[80%] p-3 bg-black dark:text-black dark:bg-white text-white rounded-2xl flex justify-between items-center md:p-[10px] w-[38%]  '>order now
                <div className='bg-orange-400 rounded-3xl p-2'>  <AiOutlineShoppingCart /></div>
              </button>
            </div>
          </div>

        </div>
      </div>
      <Items />
      <Service />
      <AboutUs />
      <Menu />
      <Testimonial />
      <Banner/>
      <footer className='text-center dark:bg-white bg-black p-5 text-white font-bold flex justify-center items-center '>
      <div className='flex justify-between items-start w-[10%] max-sm:w-[25%] dark:text-black '>
          <BsFacebook />
        <BsWhatsapp/>
        <BsTwitter/>
      </div>

        <h1 className='p-2 w-[90%] dark:text-black'>
  SEYAM &copy;2023
</h1>
      </footer>
    </>
  )
}
