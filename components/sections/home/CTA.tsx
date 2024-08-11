const CTA = () => {
    return (
        <div
            className="relative w-3/4 h-[800px] overflow-hidden flex flex-col items-center justify-center mb-10
bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 rounded-2xl">
            <h1 className="text-6xl font-bold text-center mb-6">
                Unlock Your Full Potential with LearnFlow
            </h1>
            <p className="w-3/4 text-lg font-light text-center mb-12">
                Join a community of thousands of dedicated learners who have completely transformed
                their skills and advanced their careers. Whether you're just starting out or looking
                to deepen your expertise, LearnFlow provides the tools and guidance you need to
                succeed. Our comprehensive courses are designed to take you from beginner to expert,
                with support every step of the way.
            </p>

            <span className="flex items-center gap-4">
                <button
                    className="flex items-center gap-2 px-6 py-2 text-white rounded-full font-semibold
bg-gradient-to-r from-purple-500 via-pink-600 to-red-600 shadow-lg hover:scale-110 transition-all duration-300">
                    Start Your Learning
                </button>
                <button
                    className="flex items-center gap-2 px-6 py-2 text-white rounded-full font-semibold
bg-gradient-to-r from-green-500 via-teal-600 to-blue-600 shadow-lg hover:scale-110 transition-all duration-300">
                    Explore Our Courses
                </button>
            </span>
            <h1 className="absolute -bottom-3 -right-6 opacity-10 text-8xl font-extrabold tracking-tighter ">
                LearnFlow
            </h1>
        </div>
    );
};
export default CTA;
