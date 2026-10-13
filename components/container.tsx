import { cva, VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { ComponentPropsWithoutRef } from "react";

const containerVariants = cva(
    "w-full mx-auto py-6 px-6 sm:px-8 md:px-32 lg:px-20",

    {
        variants: {
            size: {
                lg: "max-w-[90rem]",
                xl: "max-w-[98rem]"
                // xl: "max-w-[110rem]"
            },
        },
        defaultVariants: {
            size: "lg"
        }
    }
)

interface ContainerProps extends ComponentPropsWithoutRef<"div">,
    VariantProps<typeof containerVariants> { }

export default function Container({
    size,
    className,
    children,
    ...props
}: ContainerProps) {

    return (
        <div {...props} className={cn(
            containerVariants({
                size
            }),
            className
        )}>
            {children}
        </div>
    )
}