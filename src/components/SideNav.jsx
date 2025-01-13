import React from 'react'
import { NavLink } from "react-router-dom";
const SideNav = () => {
    const navLinks = [
        {
            id: 1,
            label: 'YOUR INFO',
            path: '/',
        },
        {
            id: 2,
            label: 'SELECT PLAN',
            path: '/plan',
        },
        {
            id: 3,
            label: 'ADD-ONS',
            path: '/add-ons',
        },
        {
            id: 4,
            label: 'SUMMARY',
            path: '/summary',
        },
    ]
  return (
    <div  className='bg- side-nav-bg  '>
        <div className=" flex justify-between items-center w-[70%] mx-auto pt-6 pb-14">
            {navLinks.map((link, index)=>(
                <NavLink 
                    key={index} 
                    to={link.path}
                    className={({ isActive }) =>
                        isActive
                          ? "border-2 border-lightBlue  bg-lightBlue py-1.5 px-[1.05rem] text-[1.25rem] font-semibold text-deepBlue rounded-full "
                          : "border-2 border-offWhite text-[1.25rem] font-semibold py-1.5 px-4 rounded-full text-offWhite"
                    } 
                >
                    <div className="">
                        <span className='text-center'>{link.id}</span>
                        <div className="hidden">
                            <span>STEP {link.id}</span>
                            <span>{link.label}</span>
                        </div>
                    </div>
                </NavLink>
            ))}
        </div>
        
    </div>
  )
}

export default SideNav