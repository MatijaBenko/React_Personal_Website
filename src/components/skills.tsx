import React, { useState, useEffect } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import { Navigation, Pagination } from "swiper";
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
                xs:pt-32 xs:pb-20
                2xs:pt-32 2xs:pb-20"
            >
                <div className="text-center text-white bg-[#171717] p-10 rounded-[50px] 
                xl:p-8 
                lg:p-2
                md:p-2
                sm:p-2
                xs:p-2
                2xs:p-2">
                    <h1 className="text-4xl font-bold
                    2xs:text-xl
                    ">Skills</h1>
                    <p className="text-lg py-3 font-semibold italic
                    2xs:text-xs">
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
                                <div className="bg-[#171717] py-1">
                                    <div>
                                        <div className="fa-brands fa-unity fa-unity-skills border-[3px] border-white p-7 py-5 rounded-[100%]
                                        2xs:p-3 2xs:border-[2px]" />
                                        <h1 className="font-bold text-2xl my-2
                                        2xs:text-lg">Unity</h1>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="bg-[#171717]">
                                {" "}
                                <div className="bg-[#171717] py-1">
                                    <div >
                                        <div className="fa-brands fa-github fa-github-skills border-[3px] border-white p-7 py-5 rounded-[100%]
                                        2xs:p-3 2xs:border-[2px]" />
                                        <h1 className="font-bold text-2xl my-2
                                        2xs:text-lg">GitHub</h1>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="bg-[#171717]">
                                {" "}
                                <div className="bg-[#171717] py-1">
                                    <div >
                                        <div className="fa-brands fa-node-js fa-node-js-skills border-[3px] border-white p-7 py-5 rounded-[100%]
                                        2xs:p-3 2xs:border-[2px]" />
                                        <h1 className="font-bold text-2xl my-2
                                        2xs:text-lg">Node.js</h1>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="bg-[#171717]">
                                {" "}
                                <div className="bg-[#171717] py-1">
                                    <div>
                                        <div className="fa-brands fa-react fa-react-skills border-[3px] border-white p-7 py-5 rounded-[100%]
                                        2xs:p-3 2xs:border-[2px]" />
                                        <h1 className="font-bold text-2xl my-2
                                        2xs:text-lg">React</h1>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="bg-[#171717]">
                                {" "}
                                <div className="bg-[#171717] py-1">
                                    <div>
                                        <div className="fa-brands fa-python fa-python-skills border-[3px] border-white p-7 py-5 rounded-[100%]
                                        2xs:p-3 2xs:border-[2px]" />
                                        <h1 className="font-bold text-2xl my-2
                                        2xs:text-lg">Python</h1>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="bg-[#171717]">
                                {" "}
                                <div className="bg-[#171717] py-1">
                                    <div >
                                        <div className="fa-brands fa-sketch fa-sketch-skills border-[3px] border-white p-7 py-5 rounded-[100%]
                                        2xs:p-3 2xs:border-[2px]" />
                                        <h1 className="font-bold text-2xl my-2
                                        2xs:text-lg">Sketch</h1>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="bg-[#171717]">
                                {" "}
                                <div className="bg-[#171717] py-1">
                                    <div >
                                        <div className="fa-brands fa-aws fa-aws-skills border-[3px] border-white p-3 py-5 rounded-[100%]
                                        2xs:p-3 2xs:border-[2px]" />
                                        <h1 className="font-bold text-2xl my-2
                                        2xs:text-lg">AWS</h1>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className=" bg-[#171717]">
                                {" "}
                                <div className="bg-[#171717] py-1">
                                    <div>
                                        <div className="fa-brands fa-android fa-android-skills border-[3px] border-white p-3 py-5 rounded-[100%]
                                        2xs:p-3 2xs:border-[2px]" />
                                        <h1 className="font-bold text-2xl my-2
                                        2xs:text-lg">Android Studio</h1>
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
