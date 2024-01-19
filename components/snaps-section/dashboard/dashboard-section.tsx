import Image from "next/image";
import dashboard from "@/public/platform/dashboard.png";

const DashboardSection = () => {
  return (
    <div className="w-full flex items-center justify-between my-20">
      <div>
        
      </div>
      <div className="py-3 pl-3 md:py-6 md:pl-6 rounded-xl md:rounded-l-2xl bg-slate-200 border-y border-l border-slate-200">
        <Image
          src={dashboard}
          alt={"platform"}
          width={800}
          height={1260}
          className="rounded-l-lg md:rounded-l-xl"
        />
      </div>
    </div>
  );
};

export default DashboardSection;
