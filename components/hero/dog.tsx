import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function Dog() {
    return (

        <div className="relative">
            <div
                className="absolute
                    w-[clamp(15rem,32vw,42rem)]
                    h-[clamp(18rem,28vw,32rem)]
                    rotate-45
                    bg-primary/55 lg:bg-primary/25
                    blur-[60px]
                    -z-10
                    top-1/2
                    left-1/2
                    -translate-x-1/2
                    -translate-y-1/2"
                style={{
                    borderRadius: "70% 30% 50% 50% / 40% 60% 40% 60%"
                }}
            />
            <div className="relative">
                <Image
                    src="/mascots/mascot-sitting-front-on.png"
                    alt="Dog mascot"
                    width={600}
                    height={600}
                    className="relative mx-auto w-[clamp(16rem,23vw,25rem)] h-auto lg:-translate-x-10"

                />
                <div className="hidden 2xl:block absolute bottom-0 left-10 rotate-8 rounded-lg bg-orange-50 p-3 shadow-[0_-2px_8px_rgba(80,60,40,0.08),0_8px_18px_rgba(80,60,40,0.16)]">
                    <span className="inline-flex size-12 items-center justify-center rounded-full bg-orange-100">
                        <Sparkles className="size-6 text-primary" />
                    </span>
                    <p className="text-foreground font-sans font-bold text-sm z-10">Tailwags<br /> Guaranteed</p>
                </div>
            </div>
        </div>


    )
}