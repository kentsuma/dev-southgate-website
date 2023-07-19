"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import SouthGate from "public/images/southgate.png";
import Logo from "@/public/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function Nav(pageDetails: any) {
  const [isMenu, setIsMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const [pageDetails, setPageDetails] = useState([]);
  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  const [states, setStates] = useState({
    isMenu: false,
    scrollY: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setStates((prev) => ({ ...prev, scrollY: window.scrollY }));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(states.scrollY);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     console.log(window.scrollY);
  //     if (window.scrollY > 0) {
  //       setIsScrolled(true);
  //       console.log("TEST");
  //     } else {
  //       setIsScrolled(false);
  //       console.log("TEST else");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // return () => {
  //   //   window.removeEventListener("scroll", handleScroll);
  //   // };
  // }, []);

  return (
    <div
      className={`w-full z-2 sticky top-0 ${
        isScrolled ? "bg-[#2b2b2b]" : "bg-transparent"
      }`}
    >
      <div className="flex  py-1 margin ">
        <div className="flex items-center">
          {isMenu === false && (
            <Image src={SouthGate} alt="SouthGate" width={180} height={300} />
          )}
        </div>
        {/* Navigation bar for desktop */}
        {/* <nav className="sm:flex w-full gap-[50px] justify-end items-center text-white text-carrois font-bold hidden">
          {pageDetails &&
            pageDetails
              .slice()
              .reverse()
              .map((page: any) => (
                <Link
                  key={page.id}
                  href={page.uri}
                  className="no-underline text-carrois text-[15px] text-white"
                >
                  {page.slug.toUpperCase()}
                </Link>
              ))}
        </nav> */}
        {/* Navigation bar for mobile */}
        <nav className="sm:hidden flex items-center w-full cursor-pointer relative">
          <div
            className={`text-white ml-auto transition-transform duration-300 transform ${
              isMenu ? "rotate-180" : ""
            }`}
            onClick={handleMenu}
          >
            {isMenu ? "" : <GiHamburgerMenu />}
          </div>
          {/* Dropdown menu */}
          {isMenu && (
            <div className="fixed top-0 left-10 right-0 bottom-2 bg-[#2b2b2b] z-50 flex flex-col animate-fade-in-right animate-fade-out rounded-lg">
              <div className="text-white mt-[60px] flex w-full">
                <div className="justify-start flex -mt-[35px] h-fit ml-5">
                  <Image
                    src={Logo}
                    alt="Southgate"
                    className="h-auto w-[40px]"
                  />
                </div>
                <div
                  className="text-2xl flex items-center justify-end w-full -mt-10 mr-5"
                  onClick={() => setIsMenu(!isMenu)}
                >
                  {isMenu ? <AiOutlineClose /> : <GiHamburgerMenu />}
                </div>
              </div>
              <div className="flex flex-col justify-start w-full">
                {pageDetails
                  .slice()
                  .reverse()
                  .map((page: any) => (
                    <Link
                      onClick={() => setIsMenu(!isMenu)}
                      key={page.id + "m"}
                      href={page.uri}
                      className="block px-4 py-2 text-white text-carrois no-underline font-bold text-[16px] hover:text-gray-300 my-2"
                    >
                      {page.slug.toUpperCase()}
                    </Link>
                  ))}
              </div>
              <div className="w-full items-center justify-center gap-3 flex h-fit mt-5 flex-row">
                <Image
                  src={Logo}
                  alt="Southgate"
                  className="h-auto w-[50px] text-center"
                />
                <Image
                  src={SouthGate}
                  alt="Southgate"
                  className="h-auto w-[120px]"
                />
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
