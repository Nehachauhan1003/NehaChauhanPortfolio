import React from 'react';
//https://www.linkedin.com/in/nehachauhan1999/
function about(props) {

    return (
        <div name='about' className='w-full h-screen bg-[#000022] '>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-20 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#89CE3B] text-white'>
                            About
                        </p>
                    </div>

                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold text-white'>
                        <p>Nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p className='text-slate-500 mb-10'> Experienced Full Stack Developer with a year of hands-on experience in designing high-level software and web-based solutions. Proficient in delivering reliable, well-structured, and scalable code while adhering to coding standards and industry trends. Strong analytical, debugging, and troubleshooting skills. Committed to timely high-quality project delivery.
                            <br></br>What would you do if you had
                            a software enthusiast available at your fingertips?</p>
                    </div>
                </div>


            </div>



        </div>


    );
}

export default about;