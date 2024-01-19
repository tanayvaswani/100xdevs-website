import Image from "next/image";
import platform from "@/public/platform/platform.png";

const PlatformSection = () => {
  return (
    <div className="w-full flex items-center justify-center my-20">
      <div className="mx-2 p-3 md:p-6 bg-gradient-to-t from-slate-300 to-slate-400 rounded-xl md:rounded-2xl shadow-xl">
        <Image
          src={platform}
          alt={"platform"}
          width={1080}
          height={1920}
          className="rounded-lg md:rounded-xl"
        />
      </div>
    </div>
  );
};

export default PlatformSection;
