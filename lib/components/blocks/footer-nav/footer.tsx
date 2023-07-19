"use client";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import HatchitLogo from "@/public/images/hatchit_logo.png";
import FacebookLogo from "@/public/images/fb_logo.png";
import YoutubeLogo from "@/public/images/yt_logo.png";

export default function Footer() {
  return (
    <div className="bg-darkcharcoal text-white flex">
      <div className="flex w-full margin sm:flex-row flex-col my-4">
        {/* Logo Image */}
        <div className="py-2 sm:py-10 flex sm:relative justify-center sm:justify-start items-center w:full sm:w-auto">
          <Image
            src={Logo}
            width={130}
            height={100}
            alt="Southgate Express marketing Inc."
          />
        </div>
        {/* Details */}
        <div className="sm:ml-3 sm:items-left flex flex-col text-goodpro justify-center items-center sm:items-start sm:text-left">
          <span className="block py-2 text-[12px] font-bold">
            SOUTHGATE EXPRESS MARKETING INC,
          </span>
          <span className="block text-[12px]">
            Aniceto Seno Street, Banilad, Mandaue City, Philippines 6014
          </span>
          <span className="block text-[12px]">sgtyre@yahoo.com.ph</span>
          <span className="block text-[12px]">Telefax: (032) 344-8808</span>
          <span className="block text-[12px]">Direct Line: (032)268-8818</span>
          <span className="block text-[12px]">
            Mobile: (032) 0917-8832858 | 0922- 8468808
          </span>
        </div>

        <div className="flex sm:flex-grow justify-center sm:justify-end">
          <div className="flex flex-col items-center sm:items-end">
            <div className="p-3 sm:p-10 flex gap-3 w-full justify-center sm:justify-end">
              <a
                href="https://www.facebook.com/pages/Southgate-Express-Marketing/137780610090802"
                rel="noopener noreferrer"
              >
                <Image
                  src={FacebookLogo}
                  alt="Facebook"
                  height={10}
                  width={60}
                />
              </a>
              <Image src={YoutubeLogo} alt="Youtube" height={10} width={40} />
            </div>
            <div className="mt-auto flex p-3 sm:flex-row flex-col justify-center items-center">
              <span className="text-[12px] text-center">
                @ 2023 Southgate Express Marketing Inc. Powered by
              </span>
              &nbsp;
              <a
                href="https://hatchitsolutions.com/#landing"
                rel="noopener noreferrer"
              >
                <Image
                  src={HatchitLogo}
                  alt="Hatchit"
                  height={30}
                  width={140}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
