import Bento from "@/components/sections/home/Bento";
import CTA from "@/components/sections/home/CTA";
import GuideYou from "@/components/sections/home/GuideYou";
import Header from "@/components/sections/home/Header";
import Testimonials from "@/components/sections/home/Testimonials";
import WhatYoullLearn from "@/components/sections/home/WhatYoullLearn";
import Image from "next/image";
const page = () => {
    return (
        <div className="mt-20 relative  flex flex-col items-center justify-center gap-6">
            <div className="absolute w-full h-[2000px] rounded-full -top-[25%] [background-image:radial-gradient(closest-side,rgba(255,79,0,0.40),rgba(255,79,0,0.10),rgba(10,10,10,1))]" />

            <Header />

            <span className="flex items-center gap-6">
                <Image src={"/react.svg"} alt="react" width={60} height={60} />
                <Image src={"/js.svg"} alt="js" width={60} height={60} />
                <Image src={"/ts.svg"} alt="ts" width={60} height={60} />
            </span>

            <Bento />
            <GuideYou />
            <WhatYoullLearn />
            <Testimonials />
            <CTA />
        </div>
    );
};
export default page;
