import Image from "next/image";
import Text from "../Atoms/text";
import CardSlider from "../Molecules/slider";
import InfiniteSlider from "../Molecules/infiniteslide";
import { ILeftContent, IRightContent } from "@/app/interface/interface";
import CardBox from "../Atoms/cardBox";

export default function HeroJumbotron({ leftContent, rightContent }: {
    leftContent: ILeftContent,
    rightContent: IRightContent[]
}) {
    const { job_description, developer_section_lg_screen, salary_lg_screen, replacement_policy_lg_screen, working_hours_lg_screen, checkboxes_sm_screen, slide_items_lg_screen } = leftContent ?? {};
    const { job_type, short_brief, question, description } = job_description ?? {};

    const job_data = [
        {
            key: "salary",
            value: salary_lg_screen?.average,
            note: salary_lg_screen?.note,
        },
        {
            key: "replacement_policy",
            value: replacement_policy_lg_screen?.maximum_replacements,
            note: replacement_policy_lg_screen?.note,
        },
        {
            key: "working_hours",
            value: working_hours_lg_screen?.maximum_hours,
            note: working_hours_lg_screen?.details,
        }
    ];

    return (
        <>
            <article className="hero_jumbotron_wrapper
      max-w-[1201.5px] w-full mx-auto
      grid grid-cols-2
      max-lg:grid-cols-1
      ">
                <section className="">
                    <section className="left_top_container px-4 max-w-[579px] flex flex-col gap-4">
                        {/* top-tooltip */}
                        <article className="min-w-[150px] py-[6px] mt-9 animate-fadeInDelayed">
                            <div className="relative inline-block bg-nephritis max-md:bg-light_brand text-black text-lg font-semibold px-4 py-2 rounded-lg box-content">
                                <Text className="text-lg text-lightest_green max-md:text-white font-black" size={"mdx"}>{job_type}</Text>
                                <div className="absolute w-3 h-3 bg-nephritis max-md:bg-light_brand rotate-45 top-[38px] left-[13px]"></div>
                            </div>
                        </article>
                        {/* sub-title */}
                        <article className="animate-fadeInUp">
                            <Text size={"lg"} className="leading-[130%]">{short_brief}</Text>
                            <Text size={"lg"} className="leading-[130%] md:text-nowrap">{question}</Text>
                        </article>
                        {/* second-subtitle */}
                        <article className="animate-fadeInUp max-w-[361px]">
                            <Text size="mdx" className="md:text-2xl leading-[34px] font-black">{description}</Text>
                        </article>
                        {/* third subtitle */}
                        <article className="max-md:hidden mt-[24px] max-md:mt-2 animate-fadeInUp">
                            <Text className="text-lg underline font-black">{developer_section_lg_screen?.question}</Text>
                        </article>
                    </section>
                    {/* three rows that are hidden on mobile */}
                    <section className="three-rows grid grid-cols-3 gap-x-12 gap-y-2 pl-4 max-md:hidden mt-[60px] md:width-[579px] lg:flex-wrap animate-fadeIn">
                        {job_data.map((item, index) => (
                            <CardBox key={index} className="row_card relative flex flex-col gap-2" size={"sm"} variant={"default"}>
                                <Text size={"mdx"} className="font-black custom_border pt-2">{item.value}</Text>
                                <Text size={"md"} className="font-black">{item.note}</Text>
                            </CardBox>
                        ))}
                    </section>
                </section>


                {/* slider section */}
                <div className="card_slider_wrapper">
                    <CardSlider slider_content={rightContent} />
                </div>
                {/* checkbox section for small screens */}
                <section className="check_boxes_wrapper flex px-4 flex-wrap gap-x-2 gap-y-8 md:hidden">{
                    checkboxes_sm_screen?.map((item, index) => (
                        <div className="flex gap-3 items-center min-w-[109px]" key={index}>
                            <Image src="/checkbox.png" unoptimized width={20} height={20} alt="checkbox-icon" />
                            <Text>{item?.title}</Text>
                        </div>
                    ))
                }
                </section>
                <article className="text_for_mobile mt-4 px-4 md:hidden">
                    <Text className="text-[#FBFF23] underline">{developer_section_lg_screen?.question}</Text>
                </article>
            </article>
            {/* slider for larger screen only */}
            <div className="slider_container mt-[60px]">
                <InfiniteSlider items={slide_items_lg_screen} />
            </div>
        </>
    )
}