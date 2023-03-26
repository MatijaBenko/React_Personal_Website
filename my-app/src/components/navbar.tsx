import React from 'react';
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../styles.css";

const Navbar: React.FC = () => {
    const [isMenuHidden, setisMenuHidden] = useState<boolean>(true);
    console.log(isMenuHidden);

    const handleRequest = () => {
        window.location.href = "https://www.linkedin.com/in/matija-benko-7976161a7/"
    };

    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction(): void {
        var navbarContainer = document.querySelector(".navbarcon") as HTMLElement;
        var topLogo = document.querySelector(".md") as HTMLElement;
        if (navbarContainer !== null) {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                navbarContainer.style.backgroundColor = "#171717";
            } else {
                navbarContainer.style.backgroundColor = "rgba(0, 0, 0, 0)";
                if (topLogo !== null) {
                    topLogo.style.backgroundColor = "rgba(0, 0, 0, 0)"; // set top logo background color to transparent
                }

            }
        }

    }

    return (
        <>
            <div className="navbarcon flex justify-between items-center px-20 py-6 bg-transparent z-40 text-white lg:px-6 fixed w-full">
                <h1 className="text-4xl font-bold">Matija Benko</h1>
                <nav className={` flex justify-center items-center gap-x-10 ${isMenuHidden && "lg:hidden"
                    } lg:fixed lg:top-0 -z-20  lg:flex-col lg:w-full lg:bg-[#171717]  lg:h-[450px] lg:left-0 h-full lg:items-start  lg:pl-6  cursor-pointer lg:pt-20`}>
                    <ul className=" flex gap-10 text-3xl mr-4 lg:flex-col lg:gap-6 ">
                        <li className='nav-bar-anchor-links'>
                            <AnchorLink href='#home'>
                                Home
                            </AnchorLink>
                        </li>
                        <li className='nav-bar-anchor-links'>
                            <AnchorLink href='#aboutme'>
                                About Me
                            </AnchorLink>
                        </li>
                        <li className='nav-bar-anchor-links'>
                            <AnchorLink href='#skills'>
                                Skills
                            </AnchorLink>
                        </li>
                        <li className='nav-bar-anchor-links'>
                            <AnchorLink href='#content'>
                                Content
                            </AnchorLink>
                        </li>
                    </ul>

                    <div className="icon text-lg flex gap-4  lg:gap-8 lg:my-10">
                        <a href="https://twitter.com/MatijaBenko_" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-twitter border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
                        </a>

                        <a href="https://www.instagram.com/benzby/" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-instagram border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
                        </a>
                        <a
                            href="https://github.com/MatijaBenko"
                            target="_blank" rel="noreferrer"
                        >
                            <i className="fa-brands fa-github border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
                        </a>
                    </div>
                    <div className="btn">
                        <button onClick={handleRequest} className="border-[1px] border-white border-solid py-2 px-4 hover:bg-white hover:text-black font-bold">
                            Let's Connect
                        </button>
                    </div>
                </nav>
                <i
                    onClick={(e) => setisMenuHidden(!isMenuHidden)}
                    className="fa-solid fa-bars hidden lg:block text-2xl cursor-pointer"
                ></i>
            </div>
        </>
    );
}

export default Navbar;
