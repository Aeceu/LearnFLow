import { Facebook, Github, Instagram, Search, Youtube } from "lucide-react";

const Footer = () => {
    return (
        <div className="w-full h-[400px] flex items-center justify-between p-16 bg-black">
            <div className="w-1/2 h-full flex flex-col justify-between gap-4">
                <h1 className="font-extrabold text-4xl">
                    LearnFlow unites everything you need to master React, JavaScript & TypeScript.
                </h1>

                <div className="space-y-2">
                    <h1 className="font-bold tracking-widest">Visit us on:</h1>
                    <span className="flex items-center gap-2">
                        <Facebook className="bg-custom-black-foreground rounded-lg p-2 w-10 h-10 text-gray-300" />
                        <Github className="bg-custom-black-foreground rounded-lg p-2 w-10 h-10 text-gray-300" />
                        <Instagram className="bg-custom-black-foreground rounded-lg p-2 w-10 h-10 text-gray-300" />
                        <Youtube className="bg-custom-black-foreground rounded-lg p-2 w-10 h-10 text-gray-300" />
                    </span>
                </div>
                <p className="text-xs text-gray-400">© 2024 LearnFlow</p>
            </div>
            <div className="w-1/4 h-full flex flex-col gap-2">
                <h1 className="text-3xl font-extrabold tracking-widest">Join our Community!</h1>
                <span className="flex items-center border border-white rounded-full w-full p-2 ">
                    <input
                        type="email"
                        placeholder="type your email here"
                        className="outline-none px-3 py-2 bg-inherit w-full"
                    />
                    <Search className="p-2 w-10 h-10 bg-white text-black rounded-full" />
                </span>
            </div>
        </div>
    );
};
export default Footer;
