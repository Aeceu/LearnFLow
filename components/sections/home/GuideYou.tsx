import Image from "next/image";

const GuideYou = () => {
    return (
        <div className="w-3/4 h-[600px] flex flex-col justify-center p-4">
            <h1 className="relative max-w-3xl text-6xl font-bold tracking-tight leading-tight">
                LearnFlow will guide you
                <Image
                    src={"/arrowCurved.svg"}
                    alt="arrowCurved"
                    className="absolute -right-12 top-5"
                    width={100}
                    height={100}
                />
            </h1>
            <p className="max-w-2xl text-2xl font-light tracking-tight leading-tight">
                Master essential skills from the ground up with our expert guidance.
            </p>
            <div className="mt-4 flex items-center gap-4">
                <div className="w-[500px] h-[250px] shadow-md bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-xl flex flex-col p-8 gap-4">
                    <h1 className="text-2xl font-bold tracking-widest">Learn Concepts</h1>
                    <p className="text-base font-light">
                        Delve deeply into the fundamental principles that drive web development.
                        Each concept is explained with clarity and supported by comprehensive
                        examples to ensure a solid understanding.
                    </p>
                </div>
                <div className="w-[500px] h-[250px] shadow-md bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 rounded-xl flex flex-col p-8 gap-4">
                    <h1 className="text-2xl font-bold tracking-widest">Apply Knowledge</h1>
                    <p className="text-base font-light">
                        Take what you've learned and put it into practice. Engage in hands-on
                        exercises and real-world tasks that reinforce your knowledge, ensuring you
                        gain practical experience along the way.
                    </p>
                </div>
                <div className="w-[500px] h-[250px] shadow-md bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 rounded-xl flex flex-col p-8 gap-4">
                    <h1 className="text-2xl font-bold tracking-widest">Create Projects</h1>
                    <p className="text-base font-light">
                        Move beyond theory by building your own projects. These practical projects
                        not only help you apply what you've learned but also allow you to
                        demonstrate your skills and creativity in a tangible way.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default GuideYou;
