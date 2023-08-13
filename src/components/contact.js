import React from 'react';

function contact(props) {
    return (
        <div name='contact' className='w-full h-screen bg-[#000022]  flex flex-col items-center '>
            <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[700px] w-full '>
                <div className='pb-8 flex flex-col justify-center items-center '>
                    <p className='text-4xl font-bold inline border-b-4 border-[#89CE3B] text-white'>Contact</p>
                    <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - vutukuri.kumar192st.niituniversity.in</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
            </form>
            {/* <div>
               <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdP-jV-yAsDVcKBwKrcAroCAT6XeLbQCV4YgDxphFLTIiecsw/viewform?embedded=true" width="800" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> 

                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdP-jV-yAsDVcKBwKrcAroCAT6XeLbQCV4YgDxphFLTIiecsw/viewform?embedded=true" width="640" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div> */}
        </div>

    );
}

export default contact;