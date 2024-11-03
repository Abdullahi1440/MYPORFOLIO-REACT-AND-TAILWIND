import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { FaRegWindowClose } from "react-icons/fa";
const Navbar = () => {
    const[isopenmenue ,setopenmenue ]= useState(false)
 
    return (
        <div className='flex bg-white text-black justify-around items-center mx-auto  py-10  shadow-lg md:px-32'>
        <Link className='flex  justify-center items-center tracking-wide text-6xl  '>Abdullahi</Link>
             
            <ul className='hidden xl:flex font-semibold gap-12 text-center text-base'>
                    <li className='p-5 hover:text-white hover:bg-sky-400 transition-all rounded-md cursor-pointer'>    <Link to='/'> Home</Link></li>
               
                    <li className='p-5 hover:text-white hover:bg-sky-400 transition-all rounded-md cursor-pointe '>
                    <Link to='/service'> Service</Link>
                    </li>
                    <li className='p-5 hover:text-white hover:bg-sky-400 transition-all rounded-md cursor-pointe'>
                    <Link to='about' >About</Link>
                    </li>
                    <li className='p-5 hover:text-white hover:bg-sky-400 transition-all rounded-md cursor-pointe'>
                           
                    <Link to='/contact'> Contact</Link>
                    </li>
        
            </ul>
   {
    isopenmenue?(<IoMenu className='text-5xl  xl:hidden  block cursor-pointer'  onClick={()=>setopenmenue(!isopenmenue)} />):(  <FaRegWindowClose className='text-5xl  xl:hidden  block cursor-pointer' onClick={()=>setopenmenue(!isopenmenue)} />)
    
   }
   {
    isopenmenue &&(
        <div className='absolute xl:hidden top-24 left-0  w-full bg-white flex-col  items-center gap-6  font-semibold  text-lg   transform transition-transform border border-b-8 border-gray-200 shadow-lg'>
        <li className=' list-none p-3 hover:text-white hover:bg-sky-400 transition-all rounded-md cursor-pointer'>    <Link to='/'> Home</Link></li>
          
          <li className=' list-none p-3 hover:text-white hover:bg-sky-400 transition-all cursor-pointe '>
          <Link to='/service'> Service</Link>
          </li>
          <li className='list-none p-3 hover:text-white hover:bg-sky-400 transition-all cursor-pointe'>
          <Link to='about' >About</Link>
          </li>
          <li className='list-none p-3 hover:text-white hover:bg-sky-400 transition-all cursor-pointe'>
                 
          <Link to='/contact'> Contact</Link>
          </li>


</div>
    )
   }
 
      
              
        
          
         

        </div>
    );
}

export default Navbar;
