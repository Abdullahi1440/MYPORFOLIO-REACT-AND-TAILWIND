import React from 'react';
import { IoMdCall } from "react-icons/io";
import { FaFacebook,} from "react-icons/fa";
import { MdEmail } from "react-icons/md"; 
const Contact = () => {
    return (
        // <div className='bg-cyan-500 w-full min-h-screen'>
        <>
        <h4 className='text-3xl font-bold text-center tracking-wide uppercase  pt-3 mx-auto font-sans'> 
            <span className=' border-teal-400 border-b-2 pb-2'>CONTACT US</span></h4>
              <div className='flex bg-white  p-35 m-6 justify-center items-center shadow-lg rounded-md min-h-100 gap-5 overflow-hidden '>
                <div className='w-1/3 min-h-screen  bg-teal-500 ' >
                    <h4 className='text-5xl text-center p-5 font-semibold mt-3 border-white border-b-2 text-white'>Contact information</h4>
                  <p className='text-white justify-center text-center px-5 text-2xl pt-10 tracking-wider '>
                  If you have any question or simply want to contact with us
                  </p>
                  <div className='inline-block mx-auto p-10 items-center gap-4'>
                      <IoMdCall className='bg-white inline-block text-5xl rounded-lg'/> 
                      <p className='text-center items-center inline-block  text-white text-3xl pl-5'>+252907393505</p>
                      
                  </div>
                  <div className='inline-block mx-auto p-10 items-center gap-4'>
                      <FaFacebook className='bg-white inline-block text-5xl rounded-lg'/> 
                      <p className='text-center items-center inline-block  text-white text-3xl pl-5'>Abdale Abdisalan faratoon</p>
                      
                  </div>
                  <div className='inline-block mx-auto p-10 items-center gap-4'>
                  <MdEmail  className='bg-white inline-block text-5xl rounded-lg'/> 
                      <p className='text-center items-center inline-block  text-white text-3xl pl-5'>guuure1440@gmail.com</p>
                      
                  </div>

                </div>
                
                <div className='w-1/2 '>
                       
                          <h3 className='text-center items-center font-semibold mb-5'>SEND MESSAGE </h3>
                 
                    <form action="">      
                        <div className='grid grid-cols-2 gap-6 mb-5'>
                        <div className='text-center justify-center items-center'>
                        <label htmlFor=""className='mb-3 '>Firstname</label> <br />
                        <input type="text" className='border-2 border-teal-500 w-full p-3 rounded-md  mr-2 shadow-lg' placeholder='Firstname' />
                        </div>
                    
                        <div>
                        <label htmlFor="" className='mb-3 '>Lastname</label> <br />
                        <input type="text" className='border-2 border-teal-500 w-full p-3 rounded-md mr-2 shadow-lg' placeholder='Lastname' />
                        </div>
                       </div>
                        
                        <div className='grid grid-cols-2 gap-6'>
                        <div className='text-center justify-center items-center'>
                        <label htmlFor=""className='mb-3 '>Email </label> <br />
                        <input type="text" className='border-2 border-teal-500 w-full mr-2 p-3  rounded-md shadow-lg' placeholder='enter your email' />
                        </div>
                    
                        <div>
                        <label htmlFor="" className='mb-5 '>phone</label> <br />
                        <input type="text" className='border-2 border-teal-500 w-full mr-2 p-3 rounded-md shadow-lg' placeholder='Lastname' />
                        </div>
                       </div>

                            <div className="mt-4">
                            <label htmlFor=""className='mb-3 '>Subject </label> <br />
                            <input type="text" className='border-2 border-teal-500 w-full mr-2 p-3 rounded-md shadow-lg' placeholder='enter your email' />

                            </div>
                            <div className="mt-4">
                            <label htmlFor=""className='mb-3 '>Subject </label> <br />
                            <textarea rows={4} cols={50} type="text" className='border-2 border-teal-500 w-full mr-2 p-3 rounded-md shadow-lg' placeholder='enter your email' />
                            
                            </div>
                            <div className='mt-5'>
                                <button className='text-white bg-teal-500 rounded-md w-full mb-5 p-3 hover:bg-indigo-500  '>Send message </button>
                            </div>
                      
                    </form>
                </div>

              </div>
              </>
              
        // </div>
    );
}

export default Contact;
