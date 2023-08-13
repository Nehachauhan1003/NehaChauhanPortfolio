import React from 'react';
import { IoFileTray } from 'react-icons/io5';
function home() {
  {/* w-[350px] lg:w-[400px] */ }
  {/* <span className='absolute w-[300px] h-[300px] shadow-lg shadow-slate-200 rounded-full'></span> */ }
  return (
    <div name='home' className='h-screen w-full bg-[#000022] overflow-clip'>
      <div className='w-full h-full flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4'>

        <div className='w-2/4 h-2/4 flex flex-col items-center justify-center gap-2 md:gap-4'>
          <h3 className='text-white text-lg'>Hi, my name is</h3>

          <h4 className='text-center animate-fade-right animate-once text-4xl sm:text-6xl font-bold text-white '>
            Neha Chauhan
          </h4>

          <div className='animate-fade-left animate-once'>
            <h3 className='text-center sm:text-4xl font-bold text-white '>
              I'm a

              <span class="relative text-[#85CB33]"> Full Stack Developer</span>


            </h3>
          </div>



          <h5 className='text-white  sm:text-lg  max-w-[700px]'>
            Want to know more about me ?
          </h5>

        </div>

        <div className='block relative w-fit  h-fit'>
          <div className='hidden absolute lg:block -inset-2 rounded-full bg-slate-900 opacity-75 blur animate-pulse'>


          </div>
          <div className='relative flex w-full h-full items-center justify-center rounded-full ml-10 lg:ml-0 scale-90 '  >
            <img src='./profile.png' className='rounded-full ' ></img>
          </div>
        </div>



      </div>
      {/* <div className='mt-[70px] animate-bounce animate-infinite sm:w-12 sm:h-12 cursor-pointer'>
        <Link to='about' smooth={true} duration={500}><FaArrowCircleDown size={70} color='white' /></Link>
      </div> */}


      <div className='fixed  bottom-4 right-4 cursor-pointer'>
        <div className=' group text-white  flex justify-center items-center '>
          <div className='hidden  group-hover:block'>Download full resume</div>
          <a href="https://drive.google.com/file/d/1-vT-i1HmohrjysDi_Xsra9B7PQnMs5ua/view?usp=sharing" target='_blank' className=' bg-slate-900 bg-opacity-60  text-[#85CB33] p-2 text-2xl md:text-4xl' ><IoFileTray></IoFileTray></a>

        </div>
      </div>
    </div>
  );
}

export default home;