import Link from "next/link";
import { buttonVariants } from "../ui/button";
// import { ThemeProvider } from "../ui/theme-provider";
import { ThemeToggle } from "./theme-toggle";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center h-12">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold">
        ZEN<span className="text-blue-500">ITH</span>
      </Link>
      {/* Link */}
      <div className="flex gap-2.5 ">
        <Link className={buttonVariants({ variant: "ghost" })} href="/">
          Home
        </Link>
        <Link className={buttonVariants({ variant: "ghost" })} href="/blog">
          Blog
        </Link>
        <Link className={buttonVariants({ variant: "ghost" })} href="/create">
          Create
        </Link>
      </div>
      {/* Button */}
      <div className="flex gap-2.5 items-center">
        <Link className={buttonVariants()} href="/auth/signup">
          Sign Up
        </Link>
        <Link
          className={buttonVariants({ variant: "outline" })}
          href="/auth/login"
        >
          Login
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
