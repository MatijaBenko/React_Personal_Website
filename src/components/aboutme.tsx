import React from "react";
import Logo from "../assets/images/Logo.jpg";

function AboutMe(): JSX.Element {
    return (
        <>
            <div id="aboutme" className=" pt-20 w-screen border-y-4 border-black bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-600">
                <div className="container mx-auto p-10 flex items-center justify-center sm:flex-col sm:p-0 xs:flex-col xs:px-8">
                    <div className="w-1/2">
                        <img
                            src={Logo}
                            alt="Profile"
                            className="rounded-full border-2"
                        />
                    </div>
                    <div className="w-1/2 p-10 sm:w-full xs:w-full xs:p-0">
                        <h1 className="text-8xl text-white font-bold mb-3 lg:text-7xl md:text-5xl sm:text-5xl sm:text-center xs:text-center xs:text-4xl xs:pt-5">{"About Me"}</h1>
                        <p className='text-white font-bold text-xl py-4 max-w-lg md:text-lg sm:text-base xs:text-sm'>
                            {"I absolutely love programming and especially game development. My favorite projects involve developing 3D and VR games in Unity, while I also enjoy dabbling in web development / creating assets on blender on the side. I'm always continuously trying to learn and expand my skill set."}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMe;
