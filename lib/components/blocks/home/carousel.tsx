"use client";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

// Image
import MikeBird from "@/public/images/mike-bird.png";

export default function ControlledCarousel({ statements }: any) {
  const [index, setIndex] = useState(0);
  console.log(statements);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const reversedTestimonies = statements.slice().reverse();

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="margin-y h-[600px] flex justify-center items-center"
      indicators
    >
      {reversedTestimonies.map((statement: any) => (
        <Carousel.Item key={statement.testimonyDetails.id}>
          <div className="w-full flex items-center justify-center">
            <div className="juliana-overlay"></div>
            <Image
              src={MikeBird}
              alt="Slide"
              width={1000}
              height={1000}
              className="w-auto h-[600px]"
            />
          </div>
          <Carousel.Caption className="flex items-center justify-center mb-8">
            <div className="flex items-center justify-center">
              <div className="flex flex-col sm:flex-row">
                <div className="flex justify-center items-center w-auto sm:h-[450px]">
                  <div className="flex items-center justify-center w-full sm:h-[450px] h-[250px] sm:w-[300px]">
                    <Image
                      src={statement.testimonyDetails.image.sourceUrl}
                      alt="Testimony"
                      className="h-full w-auto"
                      width="300"
                      height="250"
                    />
                  </div>
                </div>
                <div className="sm:flex block flex-col justify-center sm:ml-70px sm:w-[700px] w-fit">
                  <p className="text-goodpro-bold text-[25px] sm:text-[50px] flex sm:text-left w-fit sm:w-[600px] sm:justify-start sm:ml-10">
                    {"“" + statement.testimonyDetails.statement + "”"}
                  </p>
                  <p className="text-carrois text-1xl text-center sm:justify-start sm:flex sm:ml-10 sm:text-2xl">
                    {"- " +
                      statement.testimonyDetails.name +
                      ", " +
                      (statement.testimonyDetails.company === null
                        ? ""
                        : statement.testimonyDetails.company) +
                      " | " +
                      (statement.testimonyDetails.title === null
                        ? ""
                        : statement.testimonyDetails.title)}
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
