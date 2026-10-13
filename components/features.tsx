import { Camera, Home, Shield, Users } from "lucide-react"
import { H3, Lead } from "./typography"
import Container from "./container"
import { cn } from "cn"

const features = [
    {
        icon: Home,
        color: "text-emerald-400",
        title: "Cozy Stays",
        sub: "Comfortable Stays",
    },
    {
        icon: Users,
        color: "text-rose-400",
        title: "Fun Guaranteed",
        sub: "Playtime Everyday"
    },
    {
        icon: Shield,
        color: "text-orange-400",
        title: "Trusted Sitters",
        sub: "Experienced Carers"
    },
    {
        icon: Camera,
        color: "text-violet-400",
        title: "Daily Updates",
        sub: "Photos & Messages"
    }
]

export default function Features() {
    return (
        <Container size="xl" className="mt-24 hidden xl:block">
            <article className="grid grid-cols-2 lg:grid-cols-4 bg-secondary rounded-4xl p-4 md:p-6 shadow-[0_-2px_8px_rgba(80,60,40,0.08),0_8px_18px_rgba(80,60,40,0.16)] h-60 2xl:h-80 items-start">
                {features.map((feature, index) => {
                    const Icon = feature.icon

                    return (
                        <div
                            key={feature.title}
                            className={cn(
                                "flex flex-col md:flex-row md:items-center text-center md:text-left gap-4 justify-center",
                                index > 1 ? "hidden lg:flex" : ""
                            )}
                        >
                            <span className="rounded-full bg-background/50 p-3 self-center">
                                <Icon className={cn(
                                    "size-5 lg:size-7",
                                    feature.color
                                )} />
                            </span>
                            <span>
                                <H3 className="font-clash font-medium text-[1.1rem] 2xl:text-medium">{feature.title}</H3>
                                <Lead className="text-sm lg:text-sm">{feature.sub}</Lead>
                            </span>
                        </div>
                    )
                })}
            </article>
        </Container>
    )
}