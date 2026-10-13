import { ChevronRight, Users } from "lucide-react";
import { Display, Lead } from "./typography";
import { Button } from "./ui/button";
import Container from "./container";
import Image from "next/image";
import StatsBadge from "./stats-badge";
import Headline from "./hero/headline";
import TrustBadges from "./trust-badges";
import Dog from "./hero/dog";
import Cards from "./hero/cards";

export default function Hero() {
    return (
        <header className="">
            <Container size="xl" className="h-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 self-start lg:items-center pt-[clamp(6rem,10vh,8rem)] xl:pt-[clamp(6rem,26vh,26rem)]">


                    <div className="col-span-12 sm:col-span-6 lg:col-span-5 text-center sm:text-left">
                        <Headline />

                    </div>

                    <div className="col-span-12 sm:col-span-6 md:col-span-4 pt-8 lg:pt-0">
                        <Dog />
                    </div>


                    {/* Cards & photo */}
                    <div className="col-span-12 lg:col-span-3 pt-8 lg:pt-0">
                        <Cards />
                    </div>
                </div>
            </Container>

        </header>
    )
}