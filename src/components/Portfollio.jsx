import React from "react";
import net from "../../public/NET core.png";
import Csharp from "../../public/CSharp.png";
import python from "../../public/python.png";
import database from "../../public/Database.svg";
import react from "../../public/react.svg";
import JQuery from "../../public/jQuery.png";
import CSS3 from "../../public/CSS3.png";
import html from "../../public/HTML5.png";

    function Portfollio() {
        const cartItem =[
                {
                    id:1,
                    logo:net,
                    name:"NET core"
                },
                {
                    id:2,
                    logo:Csharp,
                    name: "CSharp"
                },
                {
                    id:3,
                    logo:python,
                    name: "python"
                },
                {
                    id:4,
                    logo:database,
                    name: "Database"
                },
                {
                    id:5,
                    logo:react,
                    name: "react"
                },
                {
                    id:6,
                    logo:JQuery,
                    name: "jQuery"
                },
                {
                    id:7,
                    logo:CSS3,
                    name: "CSS3"
                },
                {
                    id:8,
                    logo:html,
                    name:"HTML5"
                }
                
        ]
            return (
                <div name="Portfollio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
                    <div>
                        <h1 className="text-2xl font-bold mb-5">PortFolio</h1>
                        <span className="underline font-semibold">Featured Projects</span>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-5">
                            {
                                cartItem.map(({id,logo,name})=>(
                                    <div className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-200" key={id}>
                                        <img src={logo} className="w-[120px] h-[120px] p-1 rounded-full border-[2px]" alt=""/>
                                        <div>
                                            <div className="px-2 font-bold text-xl mb-2">{name}</div>
                                            <p className="px-2 text-gray-700">Larem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                        </div>
                                        <div className="px-6 py-4 space-x-4 justify-around">
                                            {/* <button className="bg-blue-500 hover: bg-blue-700 text-white font-bold px-4 py-2 rounded">Vedio</button> */}
                                            <button className="bg-green-500 hover: bg-green-700 text-white font-bold px-4 py-2 rounded">Read More..</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <hr />
                </div>
            );
    }
    export default Portfollio;
