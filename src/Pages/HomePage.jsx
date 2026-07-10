import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Beverage from "../components/Beverage";
import Plate from "../components/Plate";

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
    <section className="sm:px-6 lg:px-7">
   
        {/* Carousel */}
        <div className="relative m-0 overflow-hidden rounded-2xl h-auto sm:h-80 lg:h-96">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                <span className="inline-block rounded-full bg-[#0FA4AF] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  {slide.tag}
                </span>
                <h3 className="mt-3 text-xl font-bold text-white sm:text-3xl">
                  {slide.title}
                </h3>
                <p className="mt-2 max-w-md text-sm text-white/90 sm:text-base">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}

          <button
            onClick={goPrev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/30 p-2 text-white backdrop-blur-sm hover:bg-white/50 transition-colors"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={goNext}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/30 p-2 text-white backdrop-blur-sm hover:bg-white/50 transition-colors"
          >
            <ChevronRight size={22} />
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
        <Beverage/>
        <Plate/>
        
      
    </section>
  );
}