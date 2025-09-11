   
import { NavLink } from 'react-router';
import React, { useState } from 'react';
 

const Navbar= () => {
  const [isOpen, setIsOpen] = useState(false);
 

  return (
    <nav className=" bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
         
        <div className="text-xl font-bold tracking-wide  start-0">
          <NavLink to='/'>AyurTrace 🌿 </NavLink>

        </div>

        
        <div className="space-x-4 font-serif  hidden md:flex end-0">
          
           <NavLink to="/" className="hover:text-white-200 transition hover:bg-red-500  hover:px-2 hover:rounded-4xl font-bold">Home</NavLink> 
           <NavLink to="/dashboard/farmer" className="hover:text-white-200 transition  hover:bg-red-500  hover:px-2 hover:rounded-4xl font-bold">DashBoard</NavLink> 
          <NavLink to="/register" className="hover:text-white-200 transition  hover:bg-red-500  hover:px-2 hover:rounded-4xl font-bold"> Register</NavLink>
          <NavLink to="/about" className="hover:text-white-200 transition  hover:bg-red-500  hover:px-2 hover:rounded-4xl font-bold">About</NavLink>
          
           
        </div>

         
        <div className="md:hidden flex justify-between">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

   
      {isOpen && (
        <div className=" flex flex-col  md:hidden px-4 pb-4 space-y-2 bg-green-700">
           <NavLink to="/" className="hover:text-indigo-200 transition">Home</NavLink> 
          <NavLink to="/dashboard/farmer" className="block hover:text-indigo-200">Dashboard</NavLink>
           <NavLink to="/register" className="block hover:text-indigo-200">Register</NavLink>
           <NavLink to="/about" className="block hover:text-indigo-200">About</NavLink>
           
        </div>
      )}
    </nav>
  );
};

export default Navbar
