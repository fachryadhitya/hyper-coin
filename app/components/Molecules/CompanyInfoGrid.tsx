import { ISecondary_company_data } from "@/app/interface/interface";
import Text from "../Atoms/text";
import CardBox from "../Atoms/cardBox";

export default function CompanyInfoGrid({ secondContent }: { secondContent: ISecondary_company_data }) {
    const { company, registration, address } = secondContent ?? {};
    const { business_cin, business_registration_number, CIN } = registration ?? {};
    const { name, ceo, details } = company ?? {};
    return (
        <section className="middle_section mt-[60px] px-4 max-w-[1201.5px] mx-auto md:flex md:gap-x-[42px]">

            <CardBox className="logo_phone_email_wrapper flex flex-col gap-y-[5px] max-md:max-w-full w-full" size={"mdx"} variant={"default"}>
                <div className="name_detail_wrapper flex justify-between">
                    <Text className="leading-[150%] text-[12px] font-black" variant={"md_dark"}>{name}</Text>
                    <Text className="leading-[150%] font-black text-[13px] min-w-[82px] text-left" variant={"md_dark"}>{ceo}</Text>
                </div>
                {
                    details?.map((detail, index) => (
                        <div className="name_detail_wrapper flex justify-between" key={index}>
                            <Text className="leading-[150%] text-[13px] font-black" variant={"lightest_dark"}>{detail?.company_name}</Text>
                            <Text className="leading-[150%] font-black text-[13px] min-w-[82px] text-left" variant={"lightest_dark"}>{detail?.ceo_name}</Text>
                        </div>
                    ))
                }
            </CardBox>

            <article className="grid-container grid grid-cols-1 md:flex md:gap-x-[42px] gap-4 max-md:mt-[36px] max-md:gap-y-[0]">

                <div className="name_detail_wrapper flex flex-col gap-y-[10px]">
                    <Text className="leading-[150%] text-[12px] font-black" variant={"lightest_dark"}>{business_cin}</Text>
                    <Text className="leading-[150%] font-black text-[13px] min-w-[82px] text-left" variant={"lightest_dark"}>{business_registration_number}</Text>
                    <Text className="leading-[150%] font-black text-[13px] min-w-[82px] text-left" variant={"lightest_dark"}>{CIN} </Text>
                </div>

                <div className="address_wrapper flex flex-col gap-y-[10px] max-md:mt-[36px]">
                    <Text className="leading-[150%] text-[12px] font-black" variant={"lightest_dark"}>주소 ADDRESS</Text>
                    <Text className="leading-[150%] font-black text-[13px] min-w-[82px] text-left" variant={"lightest_dark"}>{address?.korea}</Text>
                    <Text className="leading-[150%] font-black text-[13px] min-w-[82px] text-left" variant={"lightest_dark"}>
                        D-138, Street number 11, Jagjeet Nagar, North <br /> East Delhi, New Delhi,<br />110053 India
                    </Text>
                </div>
            </article>

        </section>
    )

}
