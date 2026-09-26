import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type CodeProps = ComponentPropsWithoutRef<"code">;

export function Display({ className, ...props }: HeadingProps) {
    return (
        <h1
            className={cn(
                `
                text-5xl
                md:text-6xl
                
                tracking-tight
                leading-tight
            
                
            
                
                
                `,
                className
            )}
            {...props}
        />
    );
}

export function H1({ className, ...props }: HeadingProps) {
    return (
        <h1
            className={cn(
                `
                text-3xl
                md:text-4xl
                font-bold
                tracking-tight
                leading-tight
                text-foreground
                `,
                className
            )}
            {...props}
        />
    );
}

export function H2({ className, ...props }: HeadingProps) {
    return (
        <h2
            className={cn(
                `
                text-2xl
                md:text-5xl
                font-semibold
                tracking-tight
                text-foreground
                font-display
                `,
                className
            )}
            {...props}
        />
    );
}

export function H3({ className, ...props }: HeadingProps) {
    return (
        <h3
            className={cn(
                `
                text-xl
                font-semibold
                tracking-tight
                text-foreground
                font-display
                `,
                className
            )}
            {...props}
        />
    );
}

export function H4({ className, ...props }: HeadingProps) {
    return (
        <h4
            className={cn(
                `
                text-lg
                font-medium
                tracking-tight
                text-foreground
                `,
                className
            )}
            {...props}
        />
    );
}

export function H5({ className, ...props }: HeadingProps) {
    return (
        <h5
            className={cn(
                `
                text-md
                font-medium
                tracking-tight
                text-foreground
                `,
                className
            )}
            {...props}
        />
    );
}

export function Lead({ className, ...props }: ParagraphProps) {
    return (
        <p
            className={cn(
                `
                text-lg
                leading-8
                text-muted-foreground
                max-w-[70ch]
                `,
                className
            )}
            {...props}
        />
    );
}

export function Body({ className, ...props }: ParagraphProps) {
    return (
        <p
            className={cn(
                `
                text-base
                leading-7
                text-muted-foreground
                `,
                className
            )}
            {...props}
        />
    );
}

export function Small({ className, ...props }: ParagraphProps) {
    return (
        <p
            className={cn(
                `
                text-sm
                leading-6
                text-muted-foreground
                `,
                className
            )}
            {...props}
        />
    );
}

export function Muted({ className, ...props }: ParagraphProps) {
    return (
        <p
            className={cn(
                `
                text-sm
                text-muted-foreground
                `,
                className
            )}
            {...props}
        />
    );
}

export function Tiny({ className, ...props }: ParagraphProps) {
    return (
        <p
            className={cn(
                `
                text-xs
                uppercase
                tracking-wide
                font-medium
                text-muted-foreground
                `,
                className
            )}
            {...props}
        />
    );
}

export function Code({ className, ...props }: CodeProps) {
    return (
        <code
            className={cn(
                `
                rounded-md
                bg-muted
                px-1.5
                py-0.5
                text-sm
                font-mono
                text-foreground
                `,
                className
            )}
            {...props}
        />
    );
}