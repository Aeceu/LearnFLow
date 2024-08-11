"use client";
import { useClerk } from "@clerk/nextjs";

const SignoutButton = () => {
    const { signOut } = useClerk();
    return (
        <span className="flex items-center gap-2">
            <button
                onClick={() => signOut({ redirectUrl: "/" })}
                className="px-4 py-2 rounded-xl bg-rose-400 text-white shadow-md cursor-pointer">
                Log out
            </button>
        </span>
    );
};
export default SignoutButton;
