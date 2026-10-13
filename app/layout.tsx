import { Plus_Jakarta_Sans, DM_Serif_Display } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

import localFont from "next/font/local";
import Navbar from "@/components/navbar";
import { Metadata } from "next";

// const clash = localFont({
//     src: "./fonts/ClashDisplay-Bold.woff2",
//     display: "swap",
// });
const clash = localFont({
    src: [
        {
            path: "./fonts/ClashDisplay-Medium.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/ClashDisplay-Bold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    // variable: "--font-clash",
    display: "swap",
});


const sans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-sans"
})

const serif = DM_Serif_Display({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-serif"
})

export const metadata: Metadata = {
    title: "Happy Tails",
    description: "bla",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={cn("antialiased", serif.variable, "font-sans", sans.variable, clash.className,)}
        >
            <body>
                <ThemeProvider>
                    <Navbar />
                    <main>
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    )
}
