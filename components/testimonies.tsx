import Container from "./container";
import Image from "next/image";
import { Body, H3, Lead } from "./typography";
import { Quote } from "lucide-react";

export default function Testimonies() {

    return (
        <article>
            <Container className="max-w-[48rem] sm:max-w-[85rem] xl:px-12">

                <div className="relative bg-primary-foreground rounded-4xl border-8 border-primary-foreground shadow-[0_-2px_8px_rgba(80,60,40,0.08),0_8px_18px_rgba(80,60,40,0.16)] grid grid-cols-1 sm:grid-cols-[40%_minmax(0,1fr)] gap-7 items-stretch">
                    <div className="relative min-w-0">
                        <Image
                            src="/testimonial-dog.png"
                            alt="Dog running"
                            width={800}
                            height={800}
                            className="h-42 sm:h-full sm:min-h-48 lg:min-h-48 lg:max-h-72 w-full
                            object-cover rounded-3xl sm:rounded-l-3xl sm:rounded-r-none
                            shadow-[0_6px_18px_rgba(80,60,40,0.18)]"

                        />
                    </div>
                    <div className="flex flex-col sm:pt-3 lg:pt-8 2xl:pt-10 pl-2 xl:pl-4">
                        <H3 className="font-medium bg-linear-to-br
                                        from-black
                                        via-gray-700
                                        to-gray-400
                                        bg-clip-text
                                        text-transparent
                                        xl:text-2xl 2xl:text-4xl mb-2 2xl:mb-5">Loved by pups and their humans</H3>
                        <div className="flex w-full max-w-[26rem] flex-col
                                rounded-2xl bg-white p-3 shadow-md">
                            <span className="flex gap-3 items-center">
                                {/* <Quote className="rotate-180 text-primary" /> */}
                                <span className="text-primary  text-[4rem] xl:text-[7rem] font-serif leading-none">“</span>
                                <Lead className="text-sm lg:text-sm"><span className="hidden xl:block">Missy had the best time staying at The Glen!</span> We loved receiving daily photo updates while we were away, and he came home a happy pup.</Lead>
                            </span>
                            <div className="flex items-center gap-3 xl:-mt-5">
                                <img
                                    // src={avatar}
                                    src="/avatars/pete.jpg"
                                    alt="Sarah M."
                                    width={48}
                                    height={48}
                                    className="size-12 rounded-full
                                        border-2 border-white
                                        ring-1 ring-black/10
                                        shadow-md object-cover"
                                />

                                <div>
                                    <p>Ally</p>
                                </div>
                                <span>
                                    ⭐⭐⭐⭐
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute w-[clamp(15rem,32vw,42rem)]
                    h-[clamp(18rem,28vw,32rem)] rotate-45 bg-primary/55 lg:bg-primary/25 blur-[60px] -z-10 top-4 left-4 -translate-x-1/2 -translate-y-1/2"
                        style={{
                            borderRadius: "70% 30% 50% 50% / 40% 60% 40% 60%"
                        }}
                    />
                </div>
            </Container>
        </article>
    )
}