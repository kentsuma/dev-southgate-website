"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "@/lib/functions/button";
import EmbedVideo from "./embed-video";

// Types
import { Parallelogram } from "@/lib/functions/types";

export default function Paralllogram({ data }: { data: Parallelogram }) {
  return (
    <div className="parallelogram-background flex sm:flex-col mt-[70px] text-white justify-center items-start">
      <div className="flex flex-col justify-center w-full items-center sm:items-start sm:ml-[250px]">
        {data.map((parallelData: any, index: number) =>
          parallelData.item.image !== null ? (
            <div
              key={index}
              className="sm:flex relative w-[300px] justify-center align-center h-full my-[70px] margin-y margin"
            >
              <div className="juliana h-full w-full flex justify-center items-center">
                <div className="inline-block relative sm:w-[350px] items-center">
                  <div className="juliana-overlay w-fit"></div>
                  <Image
                    src={parallelData.item.image || ""}
                    alt="Juliana Photo"
                    width={1000}
                    height={1000}
                    className="sm:h-[500px] w-fit sm:w-[auto]"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center justify-center w-fit">
                <div className="sm:ml-10 sm:w-[300px] lg:w-[400px] h-auto w-fit flex  flex-col sm:block justify-center items-center sm:justify-start my-3 sm:my-0">
                  <div className="text-demonicyellow text-[20px] sm:text-2xl lg:text-5xl font-bold mb-2 w-full items-center">
                    <div className="flex align-center justify-center">
                      {parallelData.item.label}
                    </div>
                  </div>
                  <br />
                  <div className=" flex flex-col justify-center item-center sm:justify-start w-fit">
                    {parallelData.item.descriptions.map(
                      (desc: any, index: number) => (
                        <div
                          className="text-carrois text-15px sm:text-1xl lg:text-2x flex justify-center items-center h-auto w-full"
                          key={index}
                        >
                          {desc}
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="mt-3 justify-center text-center flex sm:justify-start w-full">
                  <Link href="/about/">
                    <Button label="KNOW MORE" />
                  </Link>
                </div>
              </div>
            </div>
          ) : parallelData.video.videoFile !== "" ? (
            <div className="flex sm:justify-start justify-center margin w-[80%] h-auto">
              <video
                src={parallelData.video.videoFile}
                width="100%"
                height="auto"
                controls
              />
            </div>
          ) : (
            <EmbedVideo video={parallelData.video.videoUrl} />
          )
        )}
      </div>
    </div>
  );
}
