import Image from "next/image";

const Testimonials = () => {
    return (
        <div className="relative w-full h-screen flex flex-col items-center justify-center mb-10">
            <div className="absolute w-full h-full bg-dot-white" />
            <div className="absolute w-full h-full pointer-events-none bg-custom-black [mask-image:radial-gradient(closest-side,transparent_10%,rgba(10,10,10,0.9),rgba(10,10,10,1))]" />
            {/* <div className="absolute w-[800px] h-[800px] rounded-full  [background-image:radial-gradient(closest-side,#f97316,#0a0a0a)] opacity-50" /> */}

            <div className="w-[60%]  flex flex-col z-20 ">
                <h2 className=" text-6xl font-bold mb-6">"Feedback from our community"</h2>
                <div className=" w-full grid grid-cols-2 items-center place-items-center gap-16 ">
                    <div className="w-full h-[250px] shadow-md bg-custom-black-foreground border border-white/10 rounded-xl flex flex-col p-8 gap-4">
                        <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                            <Image
                                src={"https://i.pravatar.cc/150?u=a04258a2462d826712d"}
                                alt="placeholder"
                                width={50}
                                height={50}
                                className="rounded-full object-cover"
                            />
                            <span className="flex flex-col tracking-wide">
                                <h1 className="text-lg">Emily Carter</h1>
                                <p className="text-xs text-white/40">CTO, TechWave</p>
                            </span>
                        </div>
                        <p className="tracking-wide text-justify leading-7">
                            "LearnFlow has completely changed how I approach learning. The
                            platform’s detailed lessons and engaging content have not only improved
                            my skills but also instilled a newfound confidence in my abilities."
                        </p>
                    </div>

                    <div className="w-full h-[250px] shadow-md bg-custom-black-foreground border border-white/10 rounded-xl flex flex-col p-8 gap-4">
                        <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                            <span className="relative mr-12">
                                <Image
                                    src={"https://i.pravatar.cc/150?u=a04258a2462d826712d"}
                                    alt="placeholder"
                                    width={50}
                                    height={50}
                                    className="rounded-full object-cover p-1 shadow-md"
                                />
                                <Image
                                    src={"https://i.pravatar.cc/150?img=60"}
                                    alt="placeholder"
                                    width={50}
                                    height={50}
                                    className="rounded-full object-cover absolute top-0 -right-6 shadow-md"
                                />
                                <Image
                                    src={"https://i.pravatar.cc/150?img=23"}
                                    alt="placeholder"
                                    width={50}
                                    height={50}
                                    className="rounded-full object-cover absolute top-0 -right-12 shadow-md"
                                />
                            </span>
                            <span className="flex flex-col tracking-wide">
                                <h1 className="text-lg">Michael Thompson</h1>
                                <p className="text-xs text-white/40">Lead Developer, CodeCraft</p>
                            </span>
                        </div>
                        <p className="tracking-wide text-justify leading-7">
                            "The hands-on approach of LearnFlow allowed me to apply concepts
                            immediately, which has been incredibly beneficial. I feel like I&apos;m
                            not just learning but actually mastering the skills I need to succeed in
                            my career."
                        </p>
                    </div>

                    <div className="w-full h-[250px] shadow-md bg-custom-black-foreground border border-white/10 rounded-xl flex flex-col p-8 gap-4">
                        <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                            <span className="relative mr-6">
                                <Image
                                    src={"https://i.pravatar.cc/150?u=a04258a2462d826712d"}
                                    alt="placeholder"
                                    width={50}
                                    height={50}
                                    className="rounded-full object-cover p-1 shadow-md"
                                />
                                <Image
                                    src={"https://i.pravatar.cc/150?img=23"}
                                    alt="placeholder"
                                    width={50}
                                    height={50}
                                    className="rounded-full object-cover absolute top-0 -right-6 shadow-md"
                                />
                            </span>
                            <span className="flex flex-col tracking-wide">
                                <h1 className="text-lg">Samantha Lee</h1>
                                <p className="text-xs text-white/40">Product Manager, DevSphere</p>
                            </span>
                        </div>
                        <p className="tracking-wide text-justify leading-7">
                            "With LearnFlow, I was able to turn my theoretical knowledge into
                            real-world applications. The step-by-step guidance and interactive
                            lessons made even the most challenging topics manageable and engaging."
                        </p>
                    </div>

                    <div className="w-full h-[250px] shadow-md bg-custom-black-foreground border border-white/10 rounded-xl flex flex-col p-8 gap-4">
                        <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                            <span className="relative mr-6">
                                <Image
                                    src={"https://i.pravatar.cc/150?img=60"}
                                    alt="placeholder"
                                    width={50}
                                    height={50}
                                    className="rounded-full object-cover p-1 shadow-md"
                                />
                                <Image
                                    src={"https://i.pravatar.cc/150?img=23"}
                                    alt="placeholder"
                                    width={50}
                                    height={50}
                                    className="rounded-full object-cover absolute top-0 -right-6 shadow-md"
                                />
                            </span>
                            <span className="flex flex-col tracking-wide">
                                <h1 className="text-lg">Daniel Green</h1>
                                <p className="text-xs text-white/40">Founder, CodeNest</p>
                            </span>
                        </div>
                        <p className="tracking-wide text-justify leading-7">
                            "LearnFlow has been instrumental in advancing my understanding of
                            complex coding concepts. The balance between theory and practical
                            application is perfect, making learning both effective and enjoyable."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Testimonials;
