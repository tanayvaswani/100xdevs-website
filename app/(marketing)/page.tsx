import { Button } from "@/components/ui/button";
import { ChevronRight, Medal } from "lucide-react";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function MarketingPage() {
  return (
    <main className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-md py-3 px-6 bg-blue-50 text-blue-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          #1 learning platform
        </div>

        <h1 className="text-4xl md:text-6xl text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-3 md:mb-4">
          100xdevs
        </h1>

        <div className="text-3xl md:text-6xl text-neutral-800 px-4 pb-4 w-fit">
          coz 10x ain&apos;t enough.
        </div>

        <div
          className={cn(
            "text-sm md:text-xl text-neutral-400 mt-4 max-w-sm md:max-w-2xl text-center mx-auto",
            textFont.className
          )}
        >
          A Beginner-Friendly Platform for Mastering Programming Skills and
          Unleashing Your Inner Developer Genius! Start Learning Today and
          Transform into a Tech Pro Tomorrow!
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          className="mt-6 rounded-full  hover:shadow-sm"
          size={"lg"}
          asChild
        >
          <Link href={"/courses"}>Explore courses</Link>
        </Button>

        <Button
          className="mt-6 rounded-full hover:shadow-sm"
          size={"lg"}
          variant={"outline"}
          asChild
        >
          <Link href={""}>
            See more <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </main>
  );
}