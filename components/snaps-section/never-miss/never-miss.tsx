import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import discord from "@/public/platform/discord.png";

const DiscordSection = () => {
  return (
    <div className="w-full flex items-center justify-between py-32 my-20 bg-neutral-900">
      <div className="w-full flex flex-col items-start justify-center px-4 md:px-12">
        <h3 className="font-medium text-sm text-neutral-200">
          <span className="font-bold text-blue-600 pr-1">|</span>Discord Support
        </h3>
        <h2 className="text-2xl md:text-4xl font-semibold text-neutral-50 mt-4 mb-6">
          Never miss any concept!
        </h2>
        <p className="text-lg text-neutral-100 font-medium mb-4">
          Personal TAs make it easy for you to get your doubts solved within
          minutes. Got any doubt? Ask on the discord community.
        </p>
        <p className="text-lg text-neutral-200 font-medium my-2">
          Facing any issues while setting up the environment? Get it fixed, Ask
          on the discord communtiy!
        </p>

        <Button
          className="mt-6 rounded-full  hover:shadow-sm"
          size={"lg"}
          asChild
        >
          <Link href={"/courses"}>
            Explore courses <ChevronRight className="h-4 w-4 ml-1" />{" "}
          </Link>
        </Button>
      </div>

      <div className="hidden md:block py-3 pl-3 md:py-6 md:pl-6 rounded-xl md:rounded-l-2xl bg-neutral-800 shadow-2xl ">
        <Image
          src={discord}
          alt={"platform"}
          width={1400}
          height={1260}
          className="rounded-l-lg md:rounded-l-xl"
        />
      </div>
    </div>
  );
};

export default DiscordSection;
