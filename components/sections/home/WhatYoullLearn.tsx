import Image from "next/image";

const topics = {
    JavaScript: [
        "JavaScript Basics",
        "Functions",
        "Objects and Arrays",
        "ES6+ Features",
        "Asynchronous JavaScript",
        "DOM Manipulation",
        "Browser APIs",
        "JavaScript Best Practices",
    ],
    TypeScript: [
        "Introduction to TypeScript",
        "Basic Types",
        "Functions",
        "Interfaces and Types",
        "Classes and Inheritance",
        "Generics",
        "Advanced Types",
        "Modules",
        "TypeScript with React",
        "Tooling and Best Practices",
    ],
    React: [
        "Introduction to React",
        "JSX",
        "Components",
        "Lifecycle Methods",
        "Hooks",
        "React Router",
        "State Management",
        "Forms and Events",
        "Styling in React",
        "API Integration",
        "Testing React Applications",
        "Performance Optimization",
    ],
};

const WhatYoullLearn = () => {
    return (
        <div className="w-full p-8 flex flex-col items-center justify-center gap-8">
            <div className="w-1/2 flex items-center gap-4">
                <div className="w-full h-1 rounded-full bg-white/10" />
                <p className="shrink-0 bg-orange-600 px-3 py-1 rounded-full">
                    What you&apos;ll learn
                </p>
                <div className="w-full h-1 rounded-full bg-white/10" />
            </div>
            <Image src={"/learn-1.svg"} alt="learn" width={200} height={200} />
            <div className="w-full flex items-start justify-center gap-16">
                {Object.entries(topics).map(([title, items]) => (
                    <div key={title} className="min-w-[300px] flex flex-col gap-2">
                        <h1 className="text-2xl font-extrabold  ">{title}</h1>
                        <ul className="space-y-2 tracking-wide">
                            {items.map((item) => (
                                <li key={item} className="flex items-center">
                                    <Image
                                        src={"/check.svg"}
                                        alt={`${item + "check"}`}
                                        width={40}
                                        height={40}
                                    />
                                    <p>{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default WhatYoullLearn;
