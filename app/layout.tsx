import { Plus_Jakarta_Sans, DM_Serif_Display } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Archivo_Black, Barlow } from "next/font/google";
import { Anton, League_Spartan } from "next/font/google";

const leagueSpartan = League_Spartan({
    variable: "--font-league-spartan",
    subsets: ["latin"],
    weight: "900",
});

const anton = Anton({
    variable: "--font-anton",
    subsets: ["latin"],
    weight: "400",
});
const barlow = Barlow({
    variable: "--font-barlow",
    subsets: ["latin"],
    weight: "900",
});

const archivoBlack = Archivo_Black({
    variable: "--font-archivo-black",
    subsets: ["latin"],
    weight: "400",
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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={cn("antialiased", serif.variable, "font-sans", sans.variable, "font-archivo-black", archivoBlack.variable, "font-barlow", barlow.variable, "font-anton", anton.variable, "leaqueSpartan", leagueSpartan.variable)}
        >
            <body>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    )
}
