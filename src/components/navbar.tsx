import React from "react";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { IoLogoYoutube } from "react-icons/io5";
import "../styles.css";

const Navbar: React.FC = () => {
    const [isMenuHidden, setisMenuHidden] = useState<boolean>(true);
    console.log(isMenuHidden);

    const handleRequest = () => {
        window.location.href =
            "https://www.linkedin.com/in/matija-benko-7976161a7/";
        handleAnchorClickRequest();
    };

    const handleAnchorClickRequest = () => {
        setisMenuHidden(true);
    };

    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction(): void {
        var navbarContainer = document.querySelector(".navbarcon") as HTMLElement;
        var topLogo = document.querySelector(".md") as HTMLElement;
        if (navbarContainer !== null) {
            if (
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                navbarContainer.style.backgroundColor = "#171717";
            } else {
                navbarContainer.style.backgroundColor = "rgba(0, 0, 0, 0)";
                if (topLogo !== null) {
                    topLogo.style.backgroundColor = "rgba(0, 0, 0, 0)";
                }
            }
        }
    }

    return (
        <>
            <div className="navbarcon flex justify-between items-center px-20 py-7 bg-transparent z-40 text-white xl:px-10 lg:px-10 md:px-8 sm:px-8 xs:px-8 fixed w-full">
                <h1 className="text-4xl xs:text-3xl font-bold">
                    Matija Benko
                </h1>
                <nav
                    className={`flex justify-center items-center gap-x-10 
                        ${isMenuHidden && "lg:hidden"} lg:fixed lg:top-0 -z-20  lg:flex-col lg:w-full lg:bg-[#171717] lg:h-[475px] lg:left-0 h-full lg:items-start  lg:pl-10  cursor-pointer lg:pt-20 
                        ${isMenuHidden && "md:hidden"} md:fixed md:top-0 -z-20  md:flex-col md:w-full md:bg-[#171717] md:h-[450px] md:left-0 h-full md:items-start  md:pl-10 cursor-pointer md:pt-20
                        ${isMenuHidden && "sm:hidden"} sm:fixed sm:top-0 -z-20  sm:flex-col sm:w-full sm:bg-[#171717] sm:h-[425px] sm:left-0 h-full sm:items-start  sm:pl-10 cursor-pointer sm:pt-20
                        ${isMenuHidden && "xs:hidden"} xs:fixed xs:top-0 -z-20  xs:flex-col xs:w-full xs:bg-[#171717] xs:h-[400px] xs:left-0 h-full xs:items-start  xs:pl-10 cursor-pointer xs:pt-20`}
                >
                    <ul className=" flex gap-10 text-3xl mr-4 xl:text-2xl lg:text-2xl lg:flex-col lg:gap-6 md:text-2xl md:flex-col md:gap-6 sm:flex-col sm:gap-6 sm:text-2xl xs:text-xl xs:flex-col xs:gap-6">
                        <li className="nav-bar-anchor-links">
                            <AnchorLink href="#home" onClick={handleAnchorClickRequest}>
                                Home
                            </AnchorLink>
                        </li>
                        <li className="nav-bar-anchor-links">
                            <AnchorLink href="#aboutme" onClick={handleAnchorClickRequest}>
                                About Me
                            </AnchorLink>
                        </li>
                        <li className="nav-bar-anchor-links">
                            <AnchorLink href="#skills" onClick={handleAnchorClickRequest}>
                                Skills
                            </AnchorLink>
                        </li>
                        <li className="nav-bar-anchor-links">
                            <AnchorLink href="#content" onClick={handleAnchorClickRequest}>
                                Content
                            </AnchorLink>
                        </li>
                    </ul>

                    <div className="icon text-lg flex gap-4 lg:gap-8 lg:my-7 md:gap-8 md:my-5 sm:gap-8 sm:my-4 xs:gap-7 xs:my-3">
                        <a
                            href="https://twitter.com/MatijaBenko_"
                            target="_blank"
                            rel="noreferrer"
                            onClick={handleAnchorClickRequest}
                        >
                            <i className="fa-brands fa-twitter border-[2px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
                        </a>

                        <a
                            href="https://www.instagram.com/benzby/"
                            target="_blank"
                            rel="noreferrer"
                            onClick={handleAnchorClickRequest}
                        >
                            <i className="fa-brands fa-instagram border-[2px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
                        </a>
                        <a
                            href="https://github.com/MatijaBenko"
                            target="_blank"
                            rel="noreferrer"
                            onClick={handleAnchorClickRequest}
                        >
                            <i className="fa-brands fa-github border-[2px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCDWwfmz-xKo0uuImx3Bn6mA"
                            target="_blank"
                            rel="noreferrer"
                            onClick={handleAnchorClickRequest}
                        >
                            <i className="fa-brands border-[2px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black">
                                <IoLogoYoutube />
                            </i>
                        </a>
                    </div>
                    <div className="btn">
                        <button
                            onClick={handleRequest}
                            className="border-[2px] border-white border-solid py-2 px-6 hover:bg-white hover:text-black font-bold"
                        >
                            Let's Connect
                        </button>
                    </div>
                </nav>
                <i
                    onClick={(e) => setisMenuHidden(!isMenuHidden)}
                    className="fa-solid fa-bars hidden lg:block md:block sm:block xs:block text-3xl cursor-pointer"
                ></i>
            </div>
        </>
    );
};

export default Navbar;
