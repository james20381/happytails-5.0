import { Bell, Heart, Shield } from "lucide-react"
import { H3 } from "./typography"

const items = [
    {
        icon: Shield,
        title: "Safe",
        color: "text-emerald-400"
    },
    {
        icon: Heart,
        title: "Loving Care",
        color: "text-rose-400"
    },
    {
        icon: Bell,
        title: "Daily Updates",
        color: "text-orange-400"
    }
]

export default function TrustBadges() {
    return (
        <article className="flex gap-7">
            {items.map((item) => {
                const Icon = item.icon

                return (
                    <div key={item.title} className="flex gap-1 items-center">
                        <Icon className={item.color} />
                        <H3 className="font-sans text-md text-muted-foreground">{item.title}</H3>
                    </div>
                )
            })}
        </article>
    )
}