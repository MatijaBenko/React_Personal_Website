import React, { useState, useEffect } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import { Navigation, Pagination } from "swiper";
import { SiUnrealengine } from "react-icons/si";
import bg from "../assets/images/freepik_banner_bg.jpg";


function Skills(): JSX.Element {
    const [slidesPerView, setSlidesPerView] = useState<number>(1);
    const [slidesSpaceBetween, setSlidesSpaceBetween] = useState<number>(40);

    useEffect(() => {
        const handleScreenResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 450) {
                setSlidesPerView(1);
                setSlidesSpaceBetween(40);
            } else if (screenWidth < 768) {
                setSlidesPerView(1);
                setSlidesSpaceBetween(40);
            } else if (screenWidth < 1024) {
                setSlidesPerView(2);
                setSlidesSpaceBetween(40);
            } else if (screenWidth < 1279) {
                setSlidesPerView(3);
                setSlidesSpaceBetween(40);
            } else if (screenWidth < 1535) {
                setSlidesPerView(4);
                setSlidesSpaceBetween(40);
            } else {
                setSlidesPerView(5);
                setSlidesSpaceBetween(40);
            }
        }
        window.addEventListener('resize', handleScreenResize);
        handleScreenResize();

        return () => {
            window.removeEventListener('resize', handleScreenResize);
        }
    });

    return (
        <>
            <div
                id="skills"
                style={{ backgroundImage: `url(${bg})` }}
                className="h-full bg-no-repeat bg-center bg-cover border-y-4 border-black p-16 
                xl:pt-28 xl:pb-20 
                lg:pt-32 lg:pb-20
                md:pt-32 md:pb-20
                sm:pt-32 sm:pb-20
                xs:pt-32 xs:pb-20"
            >
                <div className="text-center text-white bg-[#171717] p-10 rounded-[50px] 
                xl:p-8 
                lg:p-2
                md:p-2
                sm:p-2
                xs:p-2">
                    <h1 className="text-4xl font-bold">Skills</h1>
                    <p className="text-lg py-3 font-semibold italic">
                        Few but not all
                    </p>
                    <div className="box flex justify-between items-center bg-[#171717] my-6">
                        <Swiper
                            slidesPerView={slidesPerView}
                            spaceBetween={slidesSpaceBetween}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Navigation, Pagination]}
                            className="skillSwiper"
                        >
                            <SwiperSlide className="bg-[#171717]">
                                {" "}
                                <div className=" bg-[#171717] fa-8x py-1">
                                    <div>
                                        <div className=" fa-brands fa-unity border-[3px] border-white p-7 py-5 rounded-[100%]" />
                                        <h1 className="font-bold text-2xl my-2">Unity</h1>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className=" bg-[#171717]">
                                {" "}
                                <div className=" bg-[#171717] fa-8x py-1">
                                    <div >
                                        <div className=" fa-brands fa-github border-[3px] border-white p-7 py-5 rounded-[100%]" />
                                        <h1 className="font-bold text-2xl my-2">GitHub</h1>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className=" bg-[#171717]">
                                {" "}
                                <div className=" bg-[#171717] fa-8x py-1">
                                    <div >
                                        <div className=" fa-brands fa-node-js border-[3px] border-white p-7 py-5 rounded-[100%]" />
                                        <h1 className="font-bold text-2xl my-2">Node.js</h1>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className=" bg-[#171717]">
                                {" "}
                                <div className=" bg-[#171717] fa-8x py-1">
                                    <div>
                                        <div className=" fa-brands fa-react border-[3px] border-white p-7 py-5 rounded-[100%]" />
                                        <h1 className="font-bold text-2xl my-2">React</h1>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className=" bg-[#171717]">
                                {" "}
                                <div className=" bg-[#171717] fa-8x py-1">
                                    <div>
                                        <div className=" fa-brands fa-python border-[3px] border-white p-7 py-5 rounded-[100%]" />
                                        <h1 className="font-bold text-2xl my-2">Python</h1>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className=" bg-[#171717]">
                                {" "}
                                <div className=" bg-[#171717] fa-8x py-1">
                                    <div style={{ transform: "translateY(-5px)" }} >
                                        <div className=" fa-brands fa-sketch border-[3px] border-white p-7 py-5 rounded-[100%]" />
                                        <h1 className="font-bold text-2xl my-2">Sketch</h1>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className=" bg-[#171717]">
                                {" "}
                                <div className=" bg-[#171717] fa-7x py-1">
                                    <div style={{ transform: "translateY(10px)" }} >
                                        <div className=" fa-brands fa-aws border-[3px] border-white p-4 py-7 rounded-[100%]" />
                                        <h1 className="font-bold text-2xl my-2">AWS</h1>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className=" bg-[#171717]">
                                {" "}
                                <div className=" bg-[#171717]  py-1 ">
                                    <div style={{ transform: "translateY(10px)" }} >
                                        <div className=" fa-brands">
                                            <SiUnrealengine className="bg-[#171717] fa-10x" />
                                        </div>
                                        <h1 className=" font-bold text-2xl my-2">Unreal Engine 5</h1>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;