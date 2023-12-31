import React from 'react';
import { IoFileTray } from 'react-icons/io5';
import { FaLinkedin, FaGithub, FaHotjar } from 'react-icons/fa';
function home() {
  {/* w-[350px] lg:w-[400px] */ }
  {/* <span className='absolute w-[300px] h-[300px] shadow-lg shadow-slate-200 rounded-full'></span> */ }
  return (
    <div name='home' className='h-screen w-full bg-[#000022] '>
      <div className='w-full h-full flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4'>

        <div className='w-full h-2/6 sm:w-2/4 sm:h-2/4 flex flex-col items-center justify-center gap-2 md:gap-4'>
          <h3 className='text-white text-xl'>Hi, my name is</h3>

          <h4 className='text-center animate-fade-right animate-once text-4xl sm:text-6xl font-bold text-white '>
            Neha Chauhan
          </h4>

          <div className='animate-fade-left animate-once'>
            <h3 className='text-center text-xl sm:text-4xl font-bold text-white '>
              I'm a

              <span class="relative text-[#85CB33]"> Full Stack Developer</span>


            </h3>
          </div>



          {/* <h5 className='text-white  sm:text-lg  max-w-[700px]'>
            Want to know more about me ?
          </h5> */}

        </div>

        <div className='flex relative w-fit  h-fit'>
          <div className='hidden absolute lg:block -inset-2 rounded-full bg-slate-900 blur animate-pulse'>


          </div>
          <div className='relative flex w-full h-full items-center justify-center rounded-full scale-90'  >
            <img src={require('../assets/profile.png')} className='rounded-full ' ></img>
          </div>
        </div>



      </div>



      <div className='fixed bottom-4 right-4 cursor-pointer flex flex-col gap-2'>

        <div className='md:hidden group text-white flex justify-end'>
          <div className='left hidden group-hover:block'>GeeksForGeeks</div>
          <a className='bg-slate-900 bg-opacity-60  text-[#85CB33] p-2 text-2xl md:text-4xl' href='https://auth.geeksforgeeks.org/user/nehachauhan1003/' target="_blank">
            <FaHotjar></FaHotjar>
          </a>

        </div>

        <div className='md:hidden group text-white  flex justify-end'>
          <div className='hidden  group-hover:block'>LinkedIn</div>
          <a className='right-0 bg-slate-900 bg-opacity-60  text-[#85CB33] p-2 text-2xl md:text-4xl' href='https://www.linkedin.com/in/nehachauhan1999/' target="_blank">
            <FaLinkedin></FaLinkedin>
          </a>

        </div>

        <div className='md:hidden group text-white  flex justify-end'>
          <div className='hidden  group-hover:block'>Github</div>
          <a className='right-0 bg-slate-900 bg-opacity-60  text-[#85CB33] p-2 text-2xl md:text-4xl' href='https://github.com/Nehachauhan1003' target="_blank">
            <FaGithub></FaGithub>
          </a>

        </div>

        <div className=' group text-white  flex justify-end'>
          <div className='hidden group-hover:block'>Download full resume</div>
          <a href="https://drive.google.com/file/d/1c4COlFWRR3l06dRJ7Ju04e1SBEBnJ0ET/view?usp=sharing" target='_blank' className='right-0 bg-slate-900 bg-opacity-60  text-[#85CB33] p-2 text-2xl md:text-4xl' ><IoFileTray></IoFileTray></a>

        </div>
      </div>
    </div>
  );
}

export default home;