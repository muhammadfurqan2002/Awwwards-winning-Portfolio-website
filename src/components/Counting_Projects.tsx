import  { SetStateAction, useState } from "react";

const Counting_Projects = () => {
  const slides = [
    {
      title: "109",
      description: "brands transformed through strategy and design services",
    },
    {
      title: "55",
      description:
        "vetted creative freelancers and talented individuals in my network",
    },
    {
      title: "15",
      description: "years of small business experience (10 in design industry)",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentIndex(index);
  };
  return (
    <div className="relative h-full w-full bg-transparent overflow-hidden">
      {/* Slide Content */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-[100%] pt-[15%] px-[10%] bg-transparent flex-shrink-0 "
          >
            <h2 className="text-[2.5rem] leading-[3rem] tracking-tighter font-sans text-gray-800">
              {slide.title}
            </h2>
            <p className="mt-[5%] text-[1.24rem] leading-normal font-sans text-gray-600">
              {slide.description}
            </p>
          </div>
        ))}
      </div>

      {/* Dots (Pagination) */}
      <div className="absolute bottom-10 left-[80%] transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full border border-gray-900 ${
              index === currentIndex ? "bg-[#D7FFD0]" : "bg-transparent"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Counting_Projects;
