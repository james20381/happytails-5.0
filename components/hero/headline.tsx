import { ChevronRight, Play } from "lucide-react";
import StatsBadge from "../stats-badge";
import { Display, Lead } from "../typography";
import { Button } from "../ui/button";
import TrustBadges from "../trust-badges";

const avatars = [
    {
        id: 1,
        img: "/avatars/pete.jpg"
    },
    {
        id: 2,
        img: "/avatars/judy.jpg"
    },
    {
        id: 3,
        img: "/avatars/mary.jpg"
    }
]

export default function Headline() {
    return (
        <article className="text-center sm:text-left">

            {/* Stats */}
            <StatsBadge
                avatars={avatars}
                text="Trusted by pet parents"
                stats="+2.4k"
                className="hidden xl:inline-flex mb-4 lg:mb-5"
            />

            {/* Heading */}
            <Display className="space-y-1">
                <span className="
                    text-primary
                    font-serif
                    text-[clamp(2rem,2.75vw,2.75rem)]
                    font-semibold
                    tracking-[0.1rem]
                    block
                ">
                    Trusted Dog Stay at
                </span>

                <span className="
                    text-[clamp(4.5rem,6vw,7rem)]
                    block
                    bg-linear-to-br
                    from-black
                    via-gray-700
                    to-gray-400
                    bg-clip-text
                    text-transparent
                    tracking-tight
                    font-clash
                    font-bold
                    leading-[0.9]
                ">
                    The Glen
                </span>
            </Display>

            {/* Description */}
            <Lead
                className="
                    mx-auto
                    sm:mx-0
                    max-w-[clamp(18rem,25vw,28rem)]
                    mb-6
                    mt-4
                "
            >
                Reliable dog boarding and pet sitting with love, fun and lots of
                tail wags.
                <span className="hidden 2xl:inline">
                    {" "}A home-away-from-home your dog will be happy to come back to.
                </span>
            </Lead>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">

                <Button
                    size="lg"
                    className="
                        text-primary-foreground
                        font-sans
                        rounded-full
                        cursor-pointer
                        h-12
                        md:h-10
                    "
                >
                    Book a Stay
                    <ChevronRight />
                </Button>

                <Button
                    variant="ghost"
                    className="
                        group
                        font-sans
                        font-bold
                        hover:bg-transparent!
                        text-foreground/80
                        hidden lg:inline-flex
                    "
                >
                    Meet Tails

                    <span className="
                        rounded-full
                        bg-white
                        p-3
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        cursor-pointer
                    ">
                        <Play className="size-4 fill-foreground/80" />
                    </span>
                </Button>

            </div>

            {/* Trust badges */}
            <div className="hidden xl:flex mt-8">
                <TrustBadges />
            </div>

        </article>
    );
}