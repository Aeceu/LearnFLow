import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import SignoutButton from "./SignoutButton";
import AnimatedButton from "./AnimatedButton";

const Navbar = () => {
    const { userId } = auth();
    return (
        // filter backdrop-blur-3xl bg-custom-black/50
        <nav className="z-50 fixed top-0 left-0 w-full h-20 flex items-center justify-around px-32  border-b border-white/10 bg-custom-black">
            <h1 className="font-extrabold text-xl">LearnFlow</h1>

            <span className="flex items-center gap-4">
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>Courses</Link>
                <Link href={"/"}>Tutorials</Link>
                <Link href={"/"}>Practice</Link>
            </span>

            {userId ? (
                <SignoutButton />
            ) : (
                <span className="flex items-center gap-2 text-sm font-bold">
                    <Link href="/sign-in" className="px-6 py-2">
                        Sign in
                    </Link>
                    <AnimatedButton title="Start for free" url="/sign-up" />
                </span>
            )}
        </nav>
    );
};
export default Navbar;
