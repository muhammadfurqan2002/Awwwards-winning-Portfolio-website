import  { SetStateAction, useState,} from "react";

const Carousal = () => {
  const slides = [
    {
      title: "Build a Resilient Brand",
      description:
        "Enhance your company's image with premium design that makes customers choose you.",
    },
    {
      title: "Offer Exceptional Customer Experiences",
      description:
        "Delight every customer with superior experiences that bring 5-star reviews every time.",
    },
    {
      title: "Build Seamless Workflows",
      description:
        "Get an outside perspective, along with the right tools, to help you run on autopilot.",
    },
    {
      title: "Access a Network of Top Talent",
      description:
        "We’ve sourced and vetted top creative talent that will help bring your project and vision to life.",
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

export default Carousal;
