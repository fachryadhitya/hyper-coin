"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Text from "../Atoms/text";
import Image from "next/image";
import { SlideItemLgScreen } from "@/app/interface/interface";

export default function InfiniteSlider({ items }: { items: SlideItemLgScreen[] }) {
    const settings2 = {
        className: "slider variable-width",
        dots: false,
        autoplay: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        autoplaySpeed: 5000,
        speed: 2000,
        cssEase: "linear"
    };
    return (
        <div className="max-w-[1201.5px] px-4 mx-auto mt-2 max-md:hidden">
            <div className="slider-container">
                <Slider {...settings2}>{
                    items?.map((carditem, index) => (
                        <div className="bg-white bg-opacity-[20%] rounded-md mr-2" style={{ width: 332 }} key={index}>
                            <article className="slider_card flex box-border gap-x-[10px] p-4 items-center animate-fadeIn">
                                <Image src={carditem?.icon} width={36} height={56} alt="frame for slide" className="rounded-sm" />
                                <Text size={"mdx"}>{carditem?.title}</Text>
                            </article>
                        </div>
                    ))
                }
                </Slider>
            </div>
        </div>
    );
}
