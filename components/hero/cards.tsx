import Image from "next/image";
import { H3, H4, Lead } from "../typography";
import { PawPrint } from "lucide-react";
import PawPrintFillIcon from "./paw";

export default function Cards() {
    return (
        <article className="flex justify-center lg:justify-start">
            <div className="relative lg:translate-x-15 xl:translate-x-30 sm:hidden lg:block">
                <Image
                    src="/the-glen.png"
                    alt="The Glen"
                    width={400}
                    height={400}
                    className="border-primary-foreground border-4 lg:border-6 2xl:border-8 rounded-xl rotate-16 shadow-[0_-2px_8px_rgba(80,60,40,0.08),0_8px_18px_rgba(80,60,40,0.16)] 
                    w-[clamp(12rem,16vw,18rem)] shrink-0
                    "
                />

                <div className="
                        absolute
                        top-[10%]
                        left-[-35%]
                        z-10
                        flex
                        max-w-42
                        lg:max-w-64
                        w-full                        
                        flex-col
                        gap-3
                        rounded-lg
                        bg-white/70
                        p-3
                        md:p-5
                        backdrop-blur-lg
                        shrink-0
                        shadow-[0_-2px_8px_rgba(80,60,40,0.08),0_8px_18px_rgba(80,60,40,0.16)]
                    ">
                    <H3 className="font-clash font-medium text-[1.1rem] 2xl:text-medium">
                        Call Happy Tails
                    </H3>

                    <Lead className="hidden 2xl:block text-sm lg:text-sm">
                        Speak directly with us to book your pup's stay
                    </Lead>

                    <span className="relative block h-8 w-12">
                        <PawPrintFillIcon
                            className="absolute left-0 top-2 size-5 md:size-6 text-[#B08AE8]"
                        />
                        <PawPrintFillIcon
                            className="absolute left-5 top-0 size-5 md:size-6 text-[#B08AE8]"
                        />
                    </span>

                    <div className="text-center">
                        <span className="
                                inline-block
                                rounded-lg
                                bg-white
                                px-3
                                py-2
                                text-primary
                                font-sans
                                font-bold
                                text-sm
                                lg:text-medium
                            ">
                            0412 345 678
                        </span>
                    </div>

                </div>
                <div className="sm:hidden 2xl:block absolute bottom-[-12%] right-[-18%] lg:bottom-[-12%] lg:right-[32%] -rotate-12 rounded-lg max-w-48 w-full shadow-[0_-2px_8px_rgba(80,60,40,0.08),0_8px_18px_rgba(80,60,40,0.16)] bg-linear-to-br
                    from-black
                    via-gray-700
                    to-gray-400 p-3">
                    <H4 className="text-primary-foreground text-sm lg:text-medium">Live Updates</H4>
                    <span className="flex gap-5 relative">
                        <Lead className="text-xs lg:text-sm text-primary-foreground/70">Photo's and messages every day.</Lead>
                        <span className="absolute bottom-0 right-0 rounded-full size-2 lg:size-3 bg-emerald-400 border border-white shrink-0" />
                    </span>

                </div>
            </div>
        </article>
    )
}