import React from 'react';
import { FaStar } from 'react-icons/fa'

const skills = () => {
    return (

        <div name='skills' className='w-full h-screen bg-[#000022]'>
            {/* Container */}

            {/* <div className='bg-amber-300 w-full h-[300px] flex justify-center'>
                <img className='w-[1000px] h-[200px]  mx-auto my-auto ' src='./think.png' alt='about section'></img>
            </div> */}

            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#89CE3B] text-white'>
                        Skills
                    </p>
                </div>

                <div className='w-full grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-6 text-center items-center py-8 '>

                    <div className='bg-opacity-60 bg-slate-700 flex flex-col items-center hover:scale-90 group w-full h-full rounded-md'>
                        <img className='group-hover:hidden w-20 mx-auto mt-2' src="./java.png" alt="HTML icon" />
                        <p className='group-hover:hidden my-4 text-white'>JAVA</p>
                        <div className='hidden group-hover:block my-auto'>
                            <div className='flex'>
                                <div><FaStar color='#89CE3B' size={22} /></div>
                                <div><FaStar color='#89CE3B' size={22} /></div>
                                <div><FaStar color='#89CE3B' size={22} /></div>
                                <div><FaStar color='#89CE3B' size={22} /></div>
                                <div><FaStar size={22} /></div>
                            </div>

                        </div>
                    </div>
                    <div className='bg-opacity-60 bg-slate-700 flex flex-col items-center hover:scale-90 group w-full h-full  rounded-md'>
                        <img className='group-hover:hidden w-20 mx-auto mt-2' src="./srping.png" alt="HTML icon" />
                        <p className='group-hover:hidden my-4 text-white'>SPRINGBOOT</p>
                        <div className='hidden group-hover:block my-auto '>
                            <div className='flex mb-2'>
                                <div><FaStar color='#89CE3B' size={22} /></div>
                                <div><FaStar color='#89CE3B' size={22} /></div>
                                <div><FaStar color='#89CE3B' size={22} /></div>
                                <div><FaStar size={22} /></div>
                                <div><FaStar size={22} /></div>
                            </div>

                        </div>
                    </div>

                    <div className='bg-opacity-60 bg-slate-700 flex flex-col items-center hover:scale-90 group w-full h-full  rounded-md'>
                        <img className='group-hover:hidden w-20 mx-auto mt-2' src="./react.png" alt="HTML icon" />
                        <p className='group-hover:hidden my-4 text-white'>REACT</p>
                        <div className='hidden group-hover:block my-auto'>
                            <div className='flex mb-2'>
                                <div><FaStar color='#89CE3B' size={22} /></div>
                                <div><FaStar color='#89CE3B' size={22} /></div>
                                <div><FaStar color='#89CE3B' size={22} /></div>
                                <div><FaStar color='#89CE3B' size={22} /></div>
                                <div><FaStar size={22} /></div>
                            </div>

                        </div>
                    </div>

                    <div className='bg-opacity-60 bg-slate-700 flex flex-col items-center hover:scale-90 group w-full h-full  rounded-md'>
                        <img className='group-hover:hidden w-20 mx-auto mt-2' src="./javascript.png" alt="HTML icon" />
                        <p className='group-hover:hidden my-4 text-white'>JAVASCRIPT</p>
                        <div className='hidden group-hover:block my-auto '>
                            <div className='flex mb-2'>
                                <div><FaStar color='#89CE3B' size={22} /></div>
                                <div><FaStar color='#89CE3B' size={22} /></div>
                                <div><FaStar color='#89CE3B' size={22} /></div>
                                <div><FaStar color='#89CE3B' size={22} /></div>
                                <div><FaStar size={22} /></div>
                            </div>

                        </div>
                    </div>

                    <div className='bg-opacity-60 bg-slate-700 flex flex-col items-center hover:scale-90 group w-full h-full  rounded-md'>
                        <img className='group-hover:hidden w-20 mx-auto mt-2' src='./html.png' alt="HTML icon" />
                        <p className='group-hover:hidden my-4 text-white'>HTML</p>
                        <div className='hidden group-hover:block my-auto'>
                            <div className='flex mb-2'>
                                <div><FaStar color='#89CE3B' size={22} /></div>
                                <div><FaStar color='#89CE3B' size={22} /></div>
                                <div><FaStar color='#89CE3B' size={22} /></div>
                                <div><FaStar color='#89CE3B' size={22} /></div>
                                <div><FaStar size={22} /></div>
                            </div>

                        </div>
                    </div>
                    <div className='bg-opacity-60 bg-slate-700 flex flex-col items-center hover:scale-90 group w-full h-full  rounded-md'>
                        <img className='group-hover:hidden w-20 mx-auto mt-2' src="./css.png" alt="HTML icon" />
                        <p className='group-hover:hidden my-4 text-white'>CSS</p>
                        <div className='hidden group-hover:block my-auto'>
                            <div className='flex mb-2'>
                                <div><FaStar color='#89CE3B' size={22} /></div>
                                <div><FaStar color='#89CE3B' size={22} /></div>
                                <div><FaStar color='#89CE3B' size={22} /></div>
                                <div><FaStar color='#89CE3B' size={22} /></div>
                                <div><FaStar size={22} /></div>
                            </div>

                        </div>
                    </div>


                    <div className='bg-opacity-60 bg-slate-700 flex flex-col items-center hover:scale-90 group w-full h-full  rounded-md'>
                        <img className='group-hover:hidden w-20 mx-auto mt-2' src="./git.png" alt="HTML icon" />
                        <p className='group-hover:hidden my-4 text-white'>GITHUB</p>
                        <div className='hidden group-hover:block my-auto'>
                            <div className='flex mb-2'>
                                <div><FaStar color='#89CE3B' size={22} /></div>
                                <div><FaStar color='#89CE3B' size={22} /></div>
                                <div><FaStar color='#89CE3B' size={22} /></div>
                                <div><FaStar color='#89CE3B' size={22} /></div>
                                <div><FaStar size={22} /></div>
                            </div>

                        </div>
                    </div>
                    <div className='bg-opacity-60 bg-slate-700 flex flex-col items-center hover:scale-90 group w-full h-full  rounded-md'>
                        <img className='group-hover:hidden w-20 mx-auto mt-2' src="./tailwind.png" alt="HTML icon" />
                        <p className='group-hover:hidden my-4 text-white'>TAILWIND</p>
                        <div className='hidden group-hover:block my-auto'>
                            <div className='flex mb-2'>
                                <div><FaStar color='#89CE3B' size={22} /></div>
                                <div><FaStar color='#89CE3B' size={22} /></div>
                                <div><FaStar size={22} /></div>
                                <div><FaStar size={22} /></div>
                                <div><FaStar size={22} /></div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default skills;