"use client";
import Image from "next/image";

export default function Banner({ banner }: { banner: any }) {
  const image = banner.image || "";
  const label = banner.label;
  const logo = banner.logo || null;
  const title = banner.title;

  return (
    <>
      <Image
        src={image}
        alt="Giorgio"
        height={1000}
        width={1000}
        className={`${logo ? "banner" : "banner-products"}`}
      />

      <div className="margin">
        <div className="flex flex-none mt-3 sm:flex-col">
          {logo ? (
            <div className="flex py-8 sm:mt-[60px] w-auto h-full">
              <Image
                src={logo}
                alt="Southgate Express marketing Inc."
                width="1000"
                height="1000"
                className="sm:w-[130px] sm:h[70px] w-[90px] h-auto"
              />
            </div>
          ) : (
            <div className="my-10"></div>
          )}

          <div className="flex flex-col justify-center sm:items-start ml-4 sm:ml-0">
            <span className="text-carrois text-demonicyellow sm:text-1xl sm:text-3xl font-light">
              {title}
            </span>
            <span
              className="text-goodpro-bold text-white text-2xl sm:text-[55px] mt-3"
              style={{ lineHeight: "1" }}
            >
              {label}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
