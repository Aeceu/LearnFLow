import { MoveRight } from "lucide-react";
import Image from "next/image";

const Bento = () => {
    return (
        <div className="w-3/4 h-[1000px] rounded-xl grid grid-cols-3 grid-rows-3 gap-4 p-4">
            <div className="relative col-span-2 rounded-xl w-full h-full p-6 bg-gradient-to-br from-blue-500 to-blue-700 overflow-hidden flex flex-col justify-between gap-2">
                <span className="space-y-4">
                    <h2 className="text-4xl font-bold">React: Build Dynamic User Interfaces</h2>
                    <p className="tracking-wide">
                        React is a powerful JavaScript library for building user interfaces. It
                        allows you to create reusable components that make your applications
                        scalable and maintainable...
                    </p>
                </span>
                <button className="text-lg border-b border-white w-max flex items-center gap-2 hover:scale-110 duration-300 transition-all">
                    Start with React
                    <MoveRight className="w-6 h-6" />
                </button>
                <Image
                    src={"/react.svg"}
                    alt="react"
                    width={300}
                    height={300}
                    className="absolute -bottom-[30%] -right-[10%] opacity-30"
                />
            </div>

            <div className="relative col-span-1 row-span-2 rounded-xl w-full h-full p-6 bg-gradient-to-br from-yellow-500 to-yellow-700 overflow-hidden flex flex-col justify-between gap-2">
                <span className="space-y-4">
                    <h2 className="text-xl font-bold">JavaScript: The Language of the Web</h2>
                    <p>
                        JavaScript is the backbone of web development, enabling interactive and
                        dynamic content on websites. It powers everything from simple animations to
                        complex web applications...
                    </p>
                </span>
                <button className="text-lg border-b border-white w-max flex items-center gap-2 hover:scale-110 duration-300 transition-all">
                    Learn JavaScript
                    <MoveRight className="w-6 h-6" />
                </button>
                <Image
                    src={"/js.svg"}
                    alt="js"
                    width={150}
                    height={150}
                    className="absolute -bottom-6 -right-6 opacity-30"
                />
            </div>

            <div className="relative rounded-xl w-full h-full p-6 bg-gradient-to-br from-yellow-500 to-yellow-700 overflow-hidden flex flex-col justify-between gap-2">
                <span className="space-y-4">
                    <h2 className="text-xl font-bold">Why JavaScript?</h2>
                    <p>
                        JavaScript is the cornerstone of modern web development, enabling dynamic
                        and interactive experiences.
                    </p>
                </span>
                <button className="text-lg border-b border-white w-max flex items-center gap-2 hover:scale-110 duration-300 transition-all">
                    Start with JavaScript
                    <MoveRight className="w-6 h-6" />
                </button>
                <Image
                    src={"/js.svg"}
                    alt="js"
                    width={150}
                    height={150}
                    className="absolute -bottom-6 -right-6 opacity-30"
                />
            </div>

            <div className="relative rounded-xl w-full h-full p-6 bg-gradient-to-br from-blue-500 to-blue-800 overflow-hidden flex flex-col justify-between gap-2">
                <span className="space-y-4">
                    <h2 className="text-xl font-bold">Why TypeScript?</h2>
                    <p>
                        TypeScript enhances JavaScript with static typing, making your code safer
                        and more maintainable.
                    </p>
                </span>
                <button className="text-lg border-b border-white w-max flex items-center gap-2 hover:scale-110 duration-300 transition-all">
                    Start with TypeScript
                    <MoveRight className="w-6 h-6" />
                </button>
                <Image
                    src={"/ts.svg"}
                    alt="ts"
                    width={150}
                    height={150}
                    className="absolute -bottom-6 -right-6 opacity-30"
                />
            </div>

            <div className="relative col-span-3 rounded-xl w-full h-full p-6 bg-gradient-to-br from-orange-500 to-orange-700 overflow-hidden flex flex-col justify-between gap-2">
                <span className="space-y-4">
                    <h2 className="text-3xl font-bold">Ready to Dive In?</h2>
                    <p>
                        Whether you're a beginner or looking to level up, LearnFlow offers a
                        comprehensive learning experience...
                    </p>
                </span>
                <button className="text-lg border-b border-white w-max flex items-center gap-2 hover:scale-110 duration-300 transition-all">
                    Start learning now
                    <MoveRight className="w-6 h-6" />
                </button>
                <h1 className="absolute -bottom-3 -right-6 opacity-10 text-8xl font-extrabold tracking-tighter ">
                    LearnFlow
                </h1>
            </div>
        </div>
    );
};
export default Bento;
