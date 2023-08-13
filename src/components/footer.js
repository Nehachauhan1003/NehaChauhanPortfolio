import React from 'react';

function Footer(props) {
    return (
        //border-t-2 border-slate-900
        <div className='w-full h-[200px] flex flex-col justify-center items-center bg-[#000022] border-t-2 border-[#89CE3B]'>

            <p className='text-white text-lg bg-slate-900 bg-opacity-60 rounded-full px-4'>Thanks for visiting! 😊 Get in touch. Send me an email 👉 <span className='underline decoration-solid hover:text-[#89CE3B]' >nehachauhan1003@gmail.com</span></p>
        </div>
    );
}

export default Footer;