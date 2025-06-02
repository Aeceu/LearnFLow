import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import SignoutButton from "./SignoutButton";
import AnimatedButton from "./AnimatedButton";

const routesLink = [
  { name: "Home", link: "/" },
  { name: "Courses", link: "/course" },
  { name: "Tutorials", link: "/tutorial" },
  { name: "Practice", link: "/practice" },
];

const Navbar = () => {
  const { userId } = auth();

  return (
    <nav className="z-50 fixed top-0 left-0 w-full h-20 flex items-center justify-around px-32 border-b border-white/10 bg-custom-black">
      <h1 className="font-extrabold text-xl">LearnFlow</h1>

      <span className="flex items-center gap-4">
        {routesLink.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className={`hover:border-b-orange-600 hover:border-b-2 cursor-pointer`}
          >
            {item.name}
          </Link>
        ))}
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
