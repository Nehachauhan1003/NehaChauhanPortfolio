import React from 'react';
import { data } from '../data/data.js';
import { useState } from 'react';
function Projects(props) {


    // projects file
    const project = data;
    //setProject(data);

    const [val, setValue] = useState(1);


    return (
        <div name='projects' className='h-screen w-full flex flex-col items-center bg-[#000022]'>
            <div className=' mx-auto p-4 flex flex-col justify-center items-center w-full h-full '>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#89CE3B] text-white'>
                        Projects
                    </p>
                </div>
                <div className='w-full md:w-[700px] lg:w-[1000px] flex flex-col justify-center  items-center rounded-md shadow-lg shadow-slate-800 overflow-hidden '>
                    <div className='w-full flex item-center justify-center bg-slate-700 bg-opacity-50 p-2'>
                        <button className=' text-white text-base md:text-lg md:tracking-widest focus:bg-[#89CE3B]  focus:bg-opacity-60 border-[#89CE3B] px-8 border-r-2 ' onClick={() => setValue(1)} >BrillifyMe React App</button>

                        <button className='  text-white text-base md:text-lg md:tracking-widest focus:bg-[#89CE3B] focus:bg-opacity-60 border-[#89CE3B] px-8 border-r-2' onClick={() => setValue(2)}>Table Booking App</button>

                        <button className=' text-white text-base md:text-lg md:tracking-widest focus:bg-[#89CE3B] focus:bg-opacity-60 px-8' onClick={() => setValue(3)}>GMeet Extension</button>
                        {/* <button className='absloute  text-white text-lg tracking-wider focus:bg-[#89CE3B] focus:bg-opacity-60 border-r-2 border-[#89CE3B] px-8' onClick={() => setValue(3)}>Something</button> */}

                    </div>
                    <div className='w-full h-full justify-center items-center py-4'>

                        <div className='flex flex-col w-full m-auto'>
                            {project.map((item, index) => (item.id === val ?
                                <div key={index} className="group rounded-md flex flex-col mx-auto gap-2">
                                    <div className='absolute w-[380px] h-[200px] w-[600px] md:h-[300px]  '>
                                        <img src={item.img} className='absolute  w-[380px] h-[200px] md:w-[600px] md:h-[300px]'></img>


                                    </div>
                                    <div className="realtive w-[380px] h-[200px] md:w-[600px] md:h-[300px] bg-slate-700  text-center flex items-center justify-center group-hover:z-0 bg-opacity-60">
                                        <a href={item.github} target="_blank">
                                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                                            >
                                                Code
                                            </button>
                                        </a>
                                    </div>
                                    <div className='w-full flex flex-col'>
                                        <div className='text-white text-bold text-base md:text-xl w-full'>{item.info}</div>


                                        <div className='text-sm md:text-lg font-bold text-white w-full flex flex-col p-2 sm:flex-row'>
                                            <div className='p-2'>Tech Stack: </div>
                                            <div className='flex sm:gap-4'>
                                                {item.tech.map((i, index) => (<div className='rounded-full text-md bg-opacity-20 bg-[#89CE3B] w-fit h-fit p-2'>{i}</div>))}
                                            </div>
                                        </div>


                                    </div>

                                    {/* <div className=" text-center">
                                        <a href={item.github} target="_blank">
                                            <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg"
                                            >
                                                Code
                                            </button>
                                        </a>
                                    </div> */}


                                </div> : ""
                            ))}
                        </div>



                    </div>



                </div >
            </div>

        </div >
    );
}

export default Projects;