import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { gsap } from "gsap";

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
          <CarouselItem key={index} className="pl-2 basis-[350px]">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
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
