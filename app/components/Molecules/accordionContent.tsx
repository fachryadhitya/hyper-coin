"use client";

import { useState } from "react";
import NavLink from "./navLink";
import Text from "../Atoms/text";

export default function AccordionContent() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index: any) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        { title: '채용', content: 'Text' },
    ];
    return (
        <div className="accordion md:hidden">
            {accordionData.map((item, index) => (
                <NavLink className="relative group accordion-item flex flex-col items-start" key={index}>
                    <article className="flex gap-2" onClick={() => toggleAccordion(index)}>
                        <Text
                            className="accordion-header cursor-pointer"
                        >
                            {item.title}
                        </Text>

                        <span className="material-symbols-outlined text-white">
                            {activeIndex !== index ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}
                        </span>
                    </article>
                    <div
                        className={`bg-white flex flex-col gap-2 rounded-md shadow-md w-60 accordion-content px-6 py-4 ${activeIndex === index ? 'open' : 'hidden'}`}
                    >
                        <Text variant={"secondary"} className="font-bold">채용</Text>
                        <Text variant={"secondary"}>해외 개발자 원격 채용</Text>
                        <Text variant={"secondary"}> 해외 개발자 원격 채용</Text>
                        <Text variant={"secondary"}>한국어 가능 외국인 채용</Text>
                    </div>
                </NavLink>
            ))}
        </div>
    )
}