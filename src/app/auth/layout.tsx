import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex justify-center items-center ">
      {/* Back button */}
      <div className="absolute top-5 left-5">
        <Link href="/" className={buttonVariants({ variant: "secondary" })}>
          <ArrowLeft className="size-4"></ArrowLeft> Go Back
        </Link>
      </div>
      {/* Form */}
      <div className="w-full max-w-md mx-auto">{children}</div>
    </div>
  );
}
