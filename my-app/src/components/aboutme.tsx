import React from "react";
import Logo from "../assets/images/Logo.jpg";

function AboutMe(): JSX.Element {
    return (
        <>
            <div id="aboutme" className="flex flex-row items-center justify-center border-b-8 border-black">
                <div className="container mx-auto p-10 flex flex-row items-center justify-center bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-600">
                    <div className="w-1/2 ">
                        <img
                            src={Logo}
                            alt="Profile"
                            className="rounded-full border-2"
                        />
                    </div>
                    <div className="w-1/2 p-10">
                        <h1 className="text-8xl text-white font-bold mb-5">{"About Me"}</h1>
                        <p className='text-white font-bold text-xl py-4 max-w-lg '>
                            {"I absolutely love programming and especially game development. My favorite projects involve developing 3D and VR games in Unity, while I also enjoy dabbling in web development / creating assets on blender on the side. I'm always continuously trying to learn and expand my skill set."}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMe;
