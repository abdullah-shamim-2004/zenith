import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="flex justify-evenly items-center h-12">
      {/* Logo */}
      <Link href="/" className="text-2xl">
        ZEN<span className="text-blue-500">I</span>TH
      </Link>
      {/* Link */}
      <div className="flex gap-2.5 ">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/create">Create</Link>
      </div>
      {/* Button */}
      <div className="flex gap-2.5 items-center">
        <Button>
          <Link href="/auth/login">Login</Link>
        </Button>

        <Link href="/auth/register">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
