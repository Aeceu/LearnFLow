import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "@/hooks/Provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
    title: "LearnFlow",
    description: "Online Learning Platform for React and NextJS",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <Provider>
                <html lang="en">
                    <body className={`${inter.className} bg-custom-black text-white`}>
                        <Navbar />
                        {children}
                        <Footer />
                    </body>
                </html>
            </Provider>
        </ClerkProvider>
    );
}
