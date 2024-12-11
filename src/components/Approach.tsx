import { useState } from "react";

const Approach = () => {
  const slides = [
    {
      title: "Personalized Approach",
      description: "I provide support where you need it the most",
    },
    {
      title: "Skilled in Small Business",
      description:
        "Trust me, I’ve been there!",
    },
    {
      title: "Expert in Execution",
      description: "Let me help you make it happen",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index:number) => {
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

            <div className="text-black mt-10">READ MORE +</div>
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

export default Approach;
