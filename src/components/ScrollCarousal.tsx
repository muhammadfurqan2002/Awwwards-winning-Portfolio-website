import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { gsap } from "gsap";
import {ArrowRightIcon } from "@radix-ui/react-icons";

export function ScrollCarousel() {
  React.useEffect(() => {
    const id = document.getElementById("carousal") as HTMLElement;
    id.addEventListener("mouseenter", function () {
      gsap.to(id.childNodes[1], {
        opacity: 1,
        scale: 1,
      });
    });
    id.addEventListener("mouseleave", function () {
      gsap.to(id.childNodes[1], {
        opacity: 0,
        scale: 0,
      });
    });

    id.addEventListener("mousemove", function (dets) {
      gsap.to(id.childNodes[1], {
        x: dets.x - id.getBoundingClientRect().x - 50,
        y: dets.y - id.getBoundingClientRect().y - 150,
      });
    });
  }, []);
  return (
    <Carousel
      id="carousal"
      className=" w-full relative cursor-none select-none"
    >
      <CarouselContent className="ml-7 ">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="pl-2 basis-[370px]">
            <div className="p-1">
              {index == 0 ? (
                <Card>
                  <CardContent className="flex aspect-square items-start flex-col gap-5 justify-center p-6">
                    <span className="text-[2rem] font-mono ">
                      Career Timeline
                    </span>
                    <span className="text-[.9rem] flex justify-center items-center font-light">
                      My Working experience and career journey
                      <ArrowRightIcon className="mt-1 ml-1" />
                    </span>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="flex aspect-square flex-col pt-6 gap-5">
                    <div className="">
                      <img
                        className="rounded-lg h-[15rem]"
                        src="https://cdn.prod.website-files.com/6657ae0f69b2c3a8db4018db/668f4457cd8e77644be629aa_Jamie%20Windell%20(2)-p-500.webp"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <p className="tracking-tight">WHERE IT BEGAN-PACKING BOXES</p>
                      <div className="flex items-start justify-between flex-row text-[.6rem] w-full">
                        <div className="flex flex-row mt-1">
                          <div className="flex flex-row">
                            VastraTech{" "}
                            <ArrowRightIcon className="-rotate-45 size-2" />
                            <span className="mt-[.4rem] mr-1 bg-black h-[.2rem] w-[.2rem] rounded-full"></span>
                          </div>
                          <div> Logistics Coordinator (2008 - 2010)</div>
                        </div>
                        <div className="w-5 h-5 overflow-hidden mt-[.1rem]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 9600 4800"
                          >
                            <title>Flag of Canada</title>
                            <path
                              fill="#f00"
                              d="m0 0h2400l99 99h4602l99-99h2400v4800h-2400l-99-99h-4602l-99 99H0z"
                            ></path>
                            <path
                              fill="#fff"
                              d="m2400 0h4800v4800h-4800zm2490 4430-45-863a95 95 0 0 1 111-98l859 151-116-320a65 65 0 0 1 20-73l941-762-212-99a65 65 0 0 1-34-79l186-572-542 115a65 65 0 0 1-73-38l-105-247-423 454a65 65 0 0 1-111-57l204-1052-327 189a65 65 0 0 1-91-27l-332-652-332 652a65 65 0 0 1-91 27l-327-189 204 1052a65 65 0 0 1-111 57l-423-454-105 247a65 65 0 0 1-73 38l-542-115 186 572a65 65 0 0 1-34 79l-212 99 941 762a65 65 0 0 1 20 73l-116 320 859-151a95 95 0 0 1 111 98l-45 863z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="h-32 w-32 border-[1px] border-gray-400 text-1xl text-center uppercase flex items-center justify-center top-0 bg-[#D7FFD0] absolute z-20 rounded-full">
        Drag <br /> to Scroll
      </div>
    </Carousel>
  );
}
