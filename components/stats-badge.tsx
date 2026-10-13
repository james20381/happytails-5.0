import { ComponentPropsWithoutRef } from "react";
import { Body } from "./typography";
import { LucideIcon } from "lucide-react";
import { cn } from "cn";

interface Avatar {
    id: number
    img: string
}

interface StatsBadgeProps extends ComponentPropsWithoutRef<"div"> {
    icon?: LucideIcon
    avatars?: Avatar[]
    text: string
    stats: string

}

export default function StatsBadge({
    icon: Icon,
    avatars,
    text,
    stats,
    className,
    ...props

}: StatsBadgeProps) {
    return (
        <div {...props} className={cn(
            "rounded-full px-3 py-2 bg-primary-foreground mb-6 gap-3 items-center shadow-[0_-2px_8px_rgba(80,60,40,0.08),0_8px_18px_rgba(80,60,40,0.16)]",
            className
        )}
        >
            {Icon && (
                <span>
                    <Icon className="text-yellow-500" />
                </span>
            )}

            {avatars && (
                <div className="flex -space-x-2.5 shrink-0">
                    {avatars.map((avatar) => (
                        <img
                            key={avatar.id}
                            src={avatar.img}
                            alt="Pet Parent"
                            className="xl:size-8 2xl:size-10 rounded-full
                                border-2 border-white
                                ring-1 ring-black/10
                                shadow-md object-cover"
                        />
                    ))}
                </div>
            )
            }
            <Body className="font-bold text-sm">
                {text}
            </Body>
            <Body className="text-primary">
                {stats}
            </Body>

        </div>
    )
}