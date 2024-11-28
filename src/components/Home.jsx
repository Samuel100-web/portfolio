import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import { FaTelegram } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { ReactTyped,Typed } from "react-typed";
import pic from "../../public/3426526.jpg";


function Home(){
    return (
        <>
        <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
                    <span className="text-xl">Welcome In My Programming World!</span>
                    <div className="flex space-x-1 text-2xl md:text-3xl ">
                    <h5>Hello, I'm a</h5>
                    {/* <span className="text-red-800 font-bold">.NET DEVELOPER</span> */}
                    <ReactTyped
                        className="text-red-800 font-samibold"
                        strings={[".NET Developer", "Database Developer", "RectJS Developer", "Angular Deve"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop={true}
                    />
                    </div>
                    <br />
                    <p className="text-sm md:text-md text-justify">
                    As a passionate Backend Developer, I specialize in creating robust and scalable 
                    server-side applications that power seamless user experiences. With a strong 
                    foundation in various programming languages, frameworks, and database management 
                    systems, I am dedicated to building efficient and maintainable code that meets the 
                    needs of modern web applications.
                    </p>
                    <br />
                    {/* Social Media Icons */}
                    <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
                    <div className="space-y-2">
                        <h3 className="font-bold">Available On</h3>
                        <ul className="flex space-x-5">
                            <li>
                                <a href="https://www.facebook.com/" target="_blank">
                                < FaSquareFacebook className="text-2xl cursor-pointer" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/feed/" target="_blank">
                                < FaLinkedin className="text-2xl cursor-pointer" />
                                </a>
                            </li>
                            {/* <li>
                                <a href="youtube.com"></a>
                                < IoLogoYoutube className="text-2xl cursor-pointer" />
                            </li> */}
                            <li>
                                <a href="https://www.telegram.com/" target="_blank">
                                < FaTelegram className="text-2xl cursor-pointer" />
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/+923075941955?text=Hello%20There" target="_blank">
                                < FaWhatsapp className="text-2xl cursor-pointer" />
                                </a>
                            </li>
                        </ul>                        
                    </div> 
                    <div className="space-y-2">
                        <h3 className="font-bold">Currently Working On</h3>
                        <div className="flex space-x-5">
                            <SiDotnet className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                            <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                            <SiMicrosoftsqlserver className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                            <FaAngular className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                        </div>
                    </div>              
                </div>
                        
                    </div>
                <div className="md:w-1/2 md:ml-48 md:mt-20 order-1 mt-8 md:order-2">
                    <img src={pic} className="rounded-full md:w-[500px] md:h-[500x]" alt=""></img>
                </div>
            </div>
        </div>        
        <hr className="shadow-md" />
        </>
    )
}

export default Home;