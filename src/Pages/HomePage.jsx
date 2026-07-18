import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Beverage from "../components/Beverage";
import Plate from "../components/Plate";

import WhatWeOffer from "../components/WhatWeOffer";
import Dessert from "../components/Dessert";

const slides = [
  {
    image: "https://images.pexels.com/photos/5865434/pexels-photo-5865434.jpeg",
    tag: "Chef's Special",
    title: "Handpicked Dishes Made With Love",
    description: "Fresh ingredients, bold flavors, and recipes crafted to delight every guest.",
  },
  {
    image: "https://images.pexels.com/photos/30822021/pexels-photo-30822021.jpeg",
    tag: "New Arrival",
    title: "Weekend Brunch Menu Is Here",
    description: "Explore our new lineup of brunch favorites available every Saturday and Sunday.",
  },
  {
    image: "https://images.pexels.com/photos/34156954/pexels-photo-34156954.jpeg",
    tag: "Limited Time",
    title: "Order Now And Get 20% Off",
    description: "Use code FOOD20 at checkout on your first order this month.",
  },
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="max-w-full mx-auto px-3 sm:px-6 lg:px-8">
   
        {/* Carousel */}
        <div className="relative mx-0 sm:mx-0 overflow-hidden rounded-xl sm:rounded-2xl h-48 sm:h-80 lg:h-96 mb-8 sm:mb-12">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                <span className="inline-block rounded-full bg-[#0FA4AF] px-2 sm:px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  {slide.tag}
                </span>
                <h3 className="mt-2 sm:mt-3 text-lg sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                  {slide.title}
                </h3>
                <p className="mt-1 sm:mt-2 max-w-md text-xs sm:text-sm lg:text-base text-white/90 line-clamp-2">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}

          <button
            onClick={goPrev}
            aria-label="Previous slide"
            className="absolute left-2 sm:left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/30 p-1.5 sm:p-2 text-white backdrop-blur-sm hover:bg-white/50 transition-colors"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={goNext}
            aria-label="Next slide"
            className="absolute right-2 sm:right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/30 p-1.5 sm:p-2 text-white backdrop-blur-sm hover:bg-white/50 transition-colors"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>

          <div className="absolute bottom-3 right-5 z-20 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all ${
                  index === current ? "w-6 bg-white" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
        <WhatWeOffer/>
        <Beverage/>
        <Plate/>
        <Dessert/>
        
        
      
    </section>
  );
}