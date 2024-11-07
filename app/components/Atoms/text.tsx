import { ITextProps } from "@/app/interface/interface";
import { cva, VariantProps } from "class-variance-authority";
import cn from "@/app/util/cn";
import { poppins } from "@/app/util/fonts";

export default function Text({ children, className, variant, size, ...props }: ITextProps & VariantProps<typeof textVariants>) {
    return <p className={`${cn(textVariants({ variant, size, className }))} ${poppins.className}`} {...props}>{children}</p>
}

const textVariants = cva("text-primary", {
    variants: {
        variant: {
            primary: "text-white",
            secondary: "text-lighter_black",
            tertiary: "text-primary_black",
            md_dark: "text-[#343741]",
            lightest_dark: "text-lightest_black"
        },
        size: {
            sm: "text-sm",
            mdx: "text-lg leading-[150%] max-md:text-2xl",
            md: "font-black text-base leading-[150%]",
            lg: "text-5xl max-md:text-4xl",
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md"
    }
})