import { React, useState } from 'react';
import { FaBars, FaLinkedin, FaGithub, FaHotjar, FaTimes } from 'react-icons/fa';
// import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

function Header(props) {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);


    return (
        <header className=" sticky top-0 z-[20] flex w-full items-center justify-between bg-[#000022] 
        ">
            <div className='sm:ml-10'>
                <img src={require('../assets/logo2.png')} alt="Icon" style={{ width: '80px' }} />
            </div>

            <ul className='hidden md:flex'>
                <li>
                    <Link to='home' smooth={true} duration={500} className="px-5 py-2.5 relative rounded group overflow-hidden text-base border-e-2 border-b-2 border-[#89CE3B] text-white inline-block ">
                        <span class="absolute inset-0 flex w-0 h-0 mb-0 transition-all duration-200 ease-out transform bg-[#93d24b] group-hover:h-full group-hover:w-full"></span>

                        <span className="relative group-hover:text-white ">Home</span>
                    </Link>
                </li>

                <li>
                    <Link to='about' smooth={true} duration={500} className="px-5 py-2.5 relative rounded group overflow-hidden text-base border-e-2 border-b-2 border-[#89CE3B]  text-white inline-block">

                        <span class="absolute inset-0 flex w-0 h-0 mb-0 transition-all duration-200 ease-out transform bg-[#93d24b] group-hover:h-full group-hover:w-full"></span>

                        <span class="relative group-hover:text-white">About</span>

                    </Link></li>
                <li>
                    <Link to='skills' smooth={true} duration={500} className="px-5 py-2.5 relative rounded group overflow-hidden text-base border-e-2 border-b-2 border-[#89CE3B] text-white inline-block">
                        <span class="absolute inset-0 flex w-0 h-0 mb-0 transition-all duration-200 ease-out transform bg-[#93d24b] group-hover:h-full group-hover:w-full"></span>

                        <span class="relative group-hover:text-white">Skills</span>
                    </Link></li>
                <li>
                    <Link to='projects' smooth={true} duration={500} className="px-5 py-2.5 relative rounded group overflow-hidden text-base border-e-2 border-b-2 border-[#89CE3B] text-white inline-block">
                        <span class="absolute inset-0 flex w-0 h-0 mb-0 transition-all duration-200 ease-out transform bg-[#93d24b] group-hover:h-full group-hover:w-full"></span>

                        <span class="relative group-hover:text-white">Projects</span>
                    </Link></li>
                {/* <li>
                    <Link to='contact' smooth={true} duration={500} className="px-5 py-2.5 relative rounded group overflow-hidden text-base border-e-2 border-b-2 border-[#89CE3B]  text-white inline-block">
                        <span class="absolute inset-0 flex w-0 h-0 mb-0 transition-all duration-200 ease-out transform bg-[#93d24b] group-hover:h-full group-hover:w-full"></span>

                        <span class="relative group-hover:text-white">Contact</span>
                    </Link></li> */}
            </ul>
            <div onClick={handleClick} className='md:hidden z-10 text-white'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            <div
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-[#000022] flex flex-col justify-center items-center text-white'
                }
            >
                <ul>
                    <li className='py-6 text-4xl'>
                        <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        {' '}
                        <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        {' '}
                        <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        {' '}
                        <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
                            Projects
                        </Link>
                    </li>


                    {/* <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li> */}
                </ul>

            </div>

            <div className='hidden lg:flex flex-col fixed top-[35%] left-0'>
                <ul>
                    <li className='flex items-center w-[160px] h-[60px] justify-between ml-[-100px] hover:ml-[-10px] hover:bg-[#89CE3B] duration-300 bg-blue-600 rounded-r-full'>
                        <a className='flex justify-between items-center w-full text-white text-base' href="https://www.linkedin.com/in/nehachauhan1999/" target="_blank">LinkedIn</a> <FaLinkedin size={30} color='white' />
                    </li>
                    <li className='flex items-center w-[160px] h-[60px] justify-between ml-[-100px] hover:ml-[-10px] hover:bg-[#89CE3B] duration-300 bg-[#333333] rounded-r-full'>
                        <a className='flex justify-between items-center w-full text-white text-base' href="https://github.com/Nehachauhan1003" target="_blank">Github </a> <FaGithub size={30} color='white' />
                    </li>
                    {/* <li className='flex items-center w-[160px] h-[60px] justify-between ml-[-100px] hover:ml-[-10px] hover:bg-teal-500 duration-300 bg-[#6fc2b0] rounded-r-full'>
                        <a className='flex justify-between items-center w-full text-white text-base' href="">Gmail</a> <HiOutlineMail size={30} color='white' />
                    </li> */}

                    <li className='flex items-center w-[200px] h-[60px] justify-between ml-[-140px] hover:ml-[-10px] hover:bg-[#89CE3B] duration-300 bg-[#365314] rounded-r-full'>
                        <a className='flex justify-between items-center w-full text-white text-base' href="https://auth.geeksforgeeks.org/user/nehachauhan1003/" target="_blank">GeeksForGeeks</a> <FaHotjar size={30} color='white' />
                    </li>
                </ul>
            </div>



        </header>
    );
}

export default Header;