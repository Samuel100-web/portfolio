import React, { useState } from "react";
import pic from "../../public/3426526.jpg";
import { MdMenuBook } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar(){
    const [menu, setMenu]=useState(false);
    const navItems=[
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Portfollio"
        },
        {
            id:4,
            text:"Experiance"
        },
        {
            id:5,
            text:"Contacts"
        }
    ]
    return (
    <>
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-black">
            <div className="flex justify-between items-center h-16">
                <div className="flex space-x-2 text-white">
                    <img src={pic} className="h-12 w-12 rounded-full" alt=""></img>
                    <h1 className="font-semibold text-xl cursor-pointer">SAMUE<span className="text-red-600 text-3xl">L</span>
                    <p className="text-sm text-white">Web Developer</p>
                    </h1>
                </div>
                {/* Desktop Navebar */}
                
                <div className="text-white">
                    <ul className="hidden md:flex space-x-8">
                        {
                            navItems.map(({id,text})=>(
                                <li className="hover:scale-110 furation-200 cursor-pointer" key={id}>
                                    <Link 
                                    to={text}
                                    smooth={true}
                                    duration={700}
                                    offset={-70}
                                    activeClass="active"
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div onClick={()=>setMenu(!menu)} className="md:hidden">
                        {menu?
                             <IoCloseSharp size={24}/>
                            :<MdMenuBook size={24}/>
                        
                        }                        
                    </div>
                </div>
            </div>
                {/* Mobile Navbar */}
                {
                    menu &&(
             <div className="bg-white">
                <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
                    {
                        navItems.map(({id,text})=>(
                            <li className="hover:scale-105 duration-200 font-semibold cursor-pointer" key={id}>
                                <Link 
                                onClick={()=>setMenu(!menu)}
                                    to={text}
                                    smooth={true}
                                    duration={700}
                                    offset={-70}
                                    activeClass="active"
                                    >
                                    {text}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
                    )
                        
                    
                }
            
        </div>
    </>
    )
}

export default Navbar;