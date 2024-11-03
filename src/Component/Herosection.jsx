import React from 'react';

const Herosection = () => {

    return (
        <div className='flex flex-col justify-center items-center bg-green-50 tracking-10 mt-5 mx-auto  py-5 px-5  capitalize ' >
                  <div className='text-center normal-case'>
                    <strong className='text-9xl text-green-500 '> IM </strong>
                    <h1 className=' text-5xl font-bold pt-5 pb-5 text-orange-500'> Abdullahi</h1>
                    <h2 className='text-5xl font-bold pt-5 pb-5  '>FULL STACK DEVELOPER </h2>
                        <button className='  bg-green-500 text-3xl py-5 px-5 text-white rounded-full pt-5 pb-5 mb-5 mt-5 hover:bg-blue-600 '>Learn me</button>
              
                   </div>
            
        </div>
    );
}

export default Herosection;
