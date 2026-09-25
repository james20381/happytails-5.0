import { Plus_Jakarta_Sans, DM_Serif_Display } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

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
            className={cn("antialiased", serif.variable, "font-sans", sans.variable)}
        >
            <body>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    )
}
