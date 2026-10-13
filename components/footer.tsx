import { footer } from "framer-motion/client";
import { H3, Lead } from "./typography";
import Container from "./container";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <Container size="xl">
            <footer className="relative bg-primary rounded-3xl   h-55 sm:h-40 p-12 sm:p-8 flex flex-col lg:flex-row justify-between items-center">
                <span>
                    <H3 className="text-primary-foreground  text-[1.6rem] lg:text-4xl">Ready to book a stay?</H3>
                    <Lead className="text-primary-foreground">Your pup deserves the best care while you're away.</Lead>
                </span>
                <Button size="lg" className="h-12 md:h-9 bg-primary-foreground text-primary rounded-full font-sans font-bold">Book a Stay <ChevronRight /></Button>
                <Image
                    src="/mascots/mascot-bowing-playful-cropped.png"
                    alt="Mascot bowing playfully"
                    width={800}
                    height={800}
                    className="absolute right-[-1rem] sm:right-0 lg:right-12 top-[-11rem] lg:top-[-12rem] xl:top-[-13rem] 2xl:top-[-19rem] w-[clamp(14rem,19vw,23rem)]"
                />
                {/* <div
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
                /> */}
            </footer>
        </Container>
    )
}