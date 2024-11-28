import React from "react";
import html from "../../public/HTML5.png";
import CSS3 from "../../public/CSS3.png";
import JQuery from "../../public/jQuery.png";
import react from "../../public/react.svg";
import net from "../../public/NET core.png";
import Csharp from "../../public/CSharp.png";
import database from "../../public/Database.svg";
import python from "../../public/python.png";






    function Experiance() {
        const cartItem =[
                {
                    id:1,
                    logo:html,
                    name:"HTML5"
                },
                {
                    id:2,
                    logo:CSS3,
                    name: "CSS3"
                },
                {
                    id:3,
                    logo:JQuery,
                    name: "jQuery"
                },
                {
                    id:4,
                    logo:react,
                    name: "react"
                },
                {
                    id:5,
                    logo:net,
                    name: "NET core"
                },
                {
                    id:6,
                    logo:Csharp,
                    name: "CSharp"
                },
                {
                    id:7,
                    logo:database,
                    name: "Database"
                },
                {
                    id:8,
                    logo:python,
                    name:"python"
                }
                
        ]
            return (
                <div name="Experiance" className="max-w-screen-xl container mx-auto px-4 md:px-20 my-16">
                    <div>
                        <h1 className="text-2xl font-bold mb-5">Experiance</h1>
                        <p className="px-8">I am a Fresher but I have Experiance on dummy projects in below Technologies!</p>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 my-6">
                            {
                                cartItem.map(({id,logo,name})=>(
                                    <div className="flex flex-col items-center justify-center border-[2px] rounded-full md:h-[200px] md:w-[200px] p-1 cursor-pointer hover:scale-90 duration-200" key={id}>
                                        <img src={logo} className="w-[100px] rounded-full" alt=""/>
                                        <div>
                                            <div>{name}</div>                                            
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
    export default Experiance;
