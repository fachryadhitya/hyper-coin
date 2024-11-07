import { IBoxProps } from "@/app/interface/interface";
import { cva, VariantProps } from "class-variance-authority";
import cn from "@/app/util/cn";
import { poppins } from "@/app/util/fonts";

export default function CardBox({ children, className, variant, size, ...props }: IBoxProps & VariantProps<typeof boxVariants>) {
    return (
        <article className={`${cn(boxVariants({ variant, size, className }))} ${poppins.className}`} {...props}>
            {children}
        </article>
    )
}

const boxVariants = cva("box-primary", {
    variants: {
        variant: {
            primary: "bg-white rounded-md shadow-sm",
            secondary: "bg-white rounded-lg shadow-lg p-6",
            default: ""
        },
        size: {
            sm: "max-w-[161px]",
            md: "w-60 px-4",
            mdx: "max-w-[306px]",
            lg: "p-6",
            default: ""
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md"
    }
})