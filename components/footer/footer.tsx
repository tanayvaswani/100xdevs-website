import Link from "next/link";
import LogoLight from "../logo/logo-light";
import {
  Instagram,
  LocateFixed,
  PlaySquare,
  PlaySquareIcon,
  TwitterIcon,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="bottom-0 border-t w-full p-4 bg-neutral-900 px-6 lg:px-36">
      <div className="md:max-w-screen-2xl my-6 mx-auto flex flex-col lg:flex-row items-start justify-between w-full">
        <LogoLight />

        <div className="flex flex-col justify-center my-8 lg:my-0">
          <h3 className="font-semibold text-neutral-100">Quick Links</h3>
          <Link href={"/tnc"} className="hover:text-blue-500 text-neutral-200">
            Terms of Service
          </Link>
          <Link
            href={"/privacy-policy"}
            className="hover:text-blue-500 text-neutral-200"
          >
            Privacy Policy
          </Link>
          <Link
            href={"/refund"}
            className="hover:text-blue-500 text-neutral-200"
          >
            Refund & Cancellation
          </Link>
        </div>

        <div className="flex flex-col justify-center">
          <Link href={""} className="hover:text-blue-500 text-neutral-200">
            Download App
          </Link>
          <div>
            <h4 className="text-neutral-200">Follow us</h4>
            <div className="flex gap-x-1">
              <TwitterIcon fill="white" />
              <Instagram fill="white" />
              <Youtube fill="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
