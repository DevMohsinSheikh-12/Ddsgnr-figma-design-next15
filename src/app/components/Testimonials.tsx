"use client";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "James Nduku",
    role: "Software Developer",
    image: "/images/teammem-3.svg",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    id: 2,
    name: "Erick Kipkemboi",
    role: "Scrum Master",
    image: "/images/teammem-1.svg",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    id: 3,
    name: "Stephen Kerubo",
    role: "UI/UX Designer",
    image: "/images/teammem-6.svg",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    id: 4,
    name: "Alice Johnson",
    role: "Project Manager",
    image: "/images/teammem-2.svg",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    id: 5,
    name: "John Doe",
    role: "Backend Engineer",
    image: "/images/teammem-5.svg",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    id: 6,
    name: "Emily Smith",
    role: "Frontend Developer",
    image: "/images/teammem-4.svg",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
];

export default function TestimonialsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesToShow = 3; // Number of cards visible on large screens
  const slidesToShowSmall = 1; // Number of cards visible on small screens

  const handleNext = () => {
    if (window.innerWidth >= 640) {
      // Large screen: slide by 3 cards
      setCurrentSlide((prev) => (prev + 1) % (testimonials.length - 2));
    } else {
      // Small screen: slide by 1 card
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }
  };

  const handlePrev = () => {
    if (window.innerWidth >= 640) {
      setCurrentSlide((prev) =>
        prev === 0 ? testimonials.length - slidesToShow : prev - 1
      );
    } else {
      setCurrentSlide((prev) =>
        prev === 0 ? testimonials.length - slidesToShowSmall : prev - 1
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-4">Customer Testimonials</h2>
      <p className="text-center text-gray-500 mb-8">
        Hear from our happy clients.
      </p>

      <div className="relative flex items-center justify-center">
        

        <div className="w-full space-x-3 overflow-hidden">
          <div
className="flex  gap-x-5 transition-transform duration-500"
            style={{
              transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full md:w-1/3 lg:w-80 space-y-6 p-4 border border-spacing-2 py-8 space-x-2 border-black  shadow-md bg-white"
                style={{ flexShrink: 0 }}
              >
                <p>⭐⭐⭐⭐⭐</p>
                    <p className="text-gray-700 italic"> &quot;{testimonial.feedback}&quot;</p>
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    height={56}
                    width={56}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

       
      </div>
      {/*  Button */}
      <div className="flex justify-end items-center gap-x-4 pt-4">
      <button
          onClick={handlePrev}
          className="p-3  border border-black rounded-full hover:bg-gray-300 transition"
          
          >
         <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="p-3  border border-black rounded-full hover:bg-gray-300 transition"
          >
          <FaArrowRight />

        </button>
            </div>
    </div>
  );
}
 