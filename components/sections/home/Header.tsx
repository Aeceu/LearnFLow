import AnimatedButton from "@/components/AnimatedButton";
import { MoveRight } from "lucide-react";

const Header = () => {
    return (
        <div className="relative min-h-[700px] flex flex-col items-center justify-center gap-6 text-center">
            <h1 className="max-w-6xl text-6xl font-bold tracking-tight leading-tight">
                <b className="text-orange-500">LearnFlow</b> unites everything you need to master
                React, JavaScript & TypeScript.
            </h1>
            <p className="text-2xl max-w-6xl">
                Say goodbye to scattered resources. LearnFlow combines interactive lessons, hands-on
                projects, and expert guidance so you can accelerate your learning and achieve your
                goals faster.
            </p>

            <span className="flex items-center gap-4">
                <AnimatedButton title="Get Started" url="/" />
            </span>
            <p className="font-normal text-sm text-gray-500">
                No credit card required. Start your journey today.
            </p>
        </div>
    );
};

export default Header;
