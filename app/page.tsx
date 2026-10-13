import Features from "@/components/features"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Testimonies from "@/components/testimonies"

export default function Page() {
    return (
        <div>
            <section>
                <Hero />
            </section>
            <div className="relative">
                <section>
                    <Features />
                </section>
                <section className="relative xl:absolute top-4 xl:top-23 xl:left-40 xl:right-0">
                    <Testimonies />
                </section>
                <section className="mt-18 xl:mt-48">
                    <Footer />
                </section>
            </div>
        </div>
    )
}
