"use client";
import React, { useState } from "react";
import Text from "../Atoms/text";
import Image from "next/image";
import CardBox from "../Atoms/cardBox";
import { IRightContent } from "@/app/interface/interface";

const CardSlider = ({ slider_content }: { slider_content: IRightContent[] }) => {
    const [currentIdx, setCurrentIdx] = useState(1);

    const changeItem = (step: number) => {
        let newIdx = (currentIdx + step) % slider_content.length;
        if (newIdx < 0) {
            newIdx = slider_content.length - 1;
        }
        setCurrentIdx(newIdx);
    };

    return (
        <section className="w-full mx-auto carousel-container h-[500px] max-md:h-[468px] flex flex-col items-center relative max-md:mt-9">
            <article className="min-w-[150px] py-[6px] mt-2 animate-fadeInDelayed">
                <section className="relative inline-block bg-nephritis text-black text-lg font-semibold px-4 py-2 rounded-lg box-content">
                    <div className="flex gap-[0.5px]">
                        <Image src="/dollar_icon.png" width={26} height={26} alt="dollar icon" />
                        <Text className="text-lg mr-[0.5px] font-black text-primary_green" size={"mdx"}> 월 100만원 </Text>
                    </div>
                    <div className="absolute w-3 h-3 bg-nephritis rotate-45 top-[38px] left-[50%]"></div>
                </section>
            </article>
            <div className="carousel overflow-hidden mx-auto mt-5 max-md:mt-5 flex justify-center relative w-full max-w-[900px] h-full animate-fadeIn">
                {/* Sliding Items */}
                {slider_content.map((item, index) => {
                    const isActive = index === currentIdx;
                    const isPrev = index === (currentIdx + slider_content.length - 1) % slider_content.length;
                    const isNext = index === (currentIdx + 1) % slider_content.length;
                    const { image, flag_icon, name, job, description, sub_description, detail_1, detail_2 } = item ?? {};
                    return (
                        <section
                            key={index}
                            className={`carousel-item absolute max-w-[292px] max-md:max-w-full max-md:w-[234px] w-1/2 max-h-[408px] h-full max-md:h-[311px] transition-transform duration-500 ease-in-out ${isActive
                                ? "transform translate-x-0 z-10"
                                : isPrev
                                    ? "transform -translate-x-2/4 max-md:-translate-x-[18%] scale-[0.9]"
                                    : isNext
                                        ? "transform translate-x-2/4 max-md:translate-x-[18%] scale-[0.9]"
                                        : "opacity-0 pointer-events-none"
                                }`}
                        >
                            <CardBox className="item-content h-full flex justify-center flex-col items-center" variant={"secondary"} size={"lg"}>
                                <div className="top_slider_card_section flex justify-center items-center flex-col">
                                    <div className="image_wrapper relative w-[120px] height=[120px] max-md:w-[64px] max-md:h-[64px]">
                                        <Image src={image} width={120} height={120} className="max-md:w-[64px]" alt="girl image" />
                                        <Image src={flag_icon} width={25} height={18} alt="flag icon" className="absolute bottom-0 right-0" />
                                    </div>
                                    <Text className="leading-[150%] font-black text-[#24252f] mt-2 text-2xl max-md:text-lg">{name}</Text>
                                    <Text size={"md"} className="text-[#4a77ff] leading-[150%] font-black text-center max-md:text-sm">{job}</Text>
                                </div>
                                <div className="bottom_slider_card_section mt-4 md:mt-9 flex flex-col justify-center items-center gap-1">
                                    <article className="w-fit rounded-md py-1 px-3 border-[#c1c5cf] border-2">
                                        <Text className="leading-[150%] text-sm md:text-base font-black" variant={"lightest_dark"}>{description}</Text>
                                    </article>
                                    <article className="w-fit rounded-md py-1 px-3 border-[#c1c5cf] border-2">
                                        <Text className="leading-[150%] text-sm md:text-base font-black" variant={"lightest_dark"}>{sub_description}</Text>
                                    </article>
                                    <section className="flex gap-x-1">
                                        <article className="w-fit rounded-md py-1 px-3 border-[#c1c5cf] border-2">
                                            <Text className="leading-[150%] text-sm md:text-base font-black" variant={"lightest_dark"}> {detail_1}</Text>
                                        </article>
                                        <article className="w-fit rounded-md py-1 px-3 border-[#c1c5cf] border-2">
                                            <Text className="leading-[150%] text-sm md:text-base font-black" variant={"lightest_dark"}>{detail_2}</Text>
                                        </article>
                                    </section>
                                </div>
                            </CardBox>
                        </section>
                    );
                })}

                {/* Navigation Arrows */}
                <span className="material-symbols-outlined -left-4 max-lg:left-20 max-md:left-0 max-md:top-[30%] absolute top-[40%] cursor-pointer z-20 text-white" style={{ fontSize: '50px' }} onClick={() => changeItem(-1)}>
                    chevron_left
                </span>
                <span
                    className="right absolute top-[40%] -right-4 max-lg:right-20 max-md:right-0 max-md:top-[30%] cursor-pointer z-20 material-symbols-outlined text-white text-4xl"
                    style={{ fontSize: '50px' }}
                    onClick={() => changeItem(1)}
                >
                    chevron_right
                </span>
            </div>
        </section>
    );
};

export default CardSlider;
