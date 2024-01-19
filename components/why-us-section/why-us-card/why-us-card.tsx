import { Book } from "lucide-react";
import { whyUs } from "./why-us-content";

interface IWhyUsCard {
  icon: string;
  tagline: string;
  headline: string;
  description: string;
}

const WhyUsCard = ({ icon, tagline, headline, description }: IWhyUsCard) => {
  return (
    <div className="">
      <div className="w-full flex flex-col items-start justify-center px-4 md:px-12">
        <h3 className="font-medium text-sm text-neutral-500">
          <span className="font-bold text-blue-600 pr-1">|</span>
          {tagline}
        </h3>
        <h2 className="text-xl md:text-2xl font-semibold text-neutral-800 mt-4 mb-6">
          {headline}
        </h2>
        <p className="text-md text-neutral-600 font-medium">{description}</p>
      </div>
    </div>
  );
};

export default WhyUsCard;
