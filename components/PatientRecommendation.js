
"use client";

import { useEffect, useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import FadeInOnScroll from "./FadeInOnScroll";

const testimonials = [
  {
    name: "Priya Sharma",
    relation: "Mother of a young patient",
    avatar: "👩🏻",
    review:
      "The doctor was very patient and explained everything clearly. We felt comfortable throughout the consultation and our child was treated with great care.",
  },
  {
    name: "Rahul Verma",
    relation: "Father of a young patient",
    avatar: "👨🏻",
    review:
      "We had a very positive experience at Kohli Children's Hospital. The staff was supportive and the doctor took the time to answer all our questions.",
  },
  {
    name: "Neha Gupta",
    relation: "Mother of a young patient",
    avatar: "👩🏻‍🍼",
    review:
      "The environment was welcoming and the consultation was handled very professionally. We appreciate the attention given to our child's needs.",
  },
  {
    name: "Amit Singh",
    relation: "Father of a young patient",
    avatar: "👨🏻",
    review:
      "It was reassuring to have a doctor who listened carefully and explained the treatment options in simple language. Overall, a very comfortable experience.",
  },
  {
    name: "Anjali Mehta",
    relation: "Mother of a young patient",
    avatar: "👩🏼",
    review:
      "From registration to consultation, everything was handled smoothly. The doctor was kind, attentive, and made our child feel comfortable.",
  },
  {
    name: "Vikas Agarwal",
    relation: "Father of a young patient",
    avatar: "👨🏼",
    review:
      "We were happy with the care and guidance we received. The consultation was thorough and all our concerns were addressed patiently.",
  },
  {
    name: "Pooja Jain",
    relation: "Mother of a young patient",
    avatar: "👩🏻",
    review:
      "The consultation was clear and reassuring. We appreciated how patiently our questions were answered and how comfortable our child felt.",
  },
  {
    name: "Saurabh Gupta",
    relation: "Father of a young patient",
    avatar: "👨🏻",
    review:
      "The entire experience was smooth and professional. We received helpful guidance and felt that our child's concerns were properly understood.",
  },
];

export default function PatientRecommendation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /*
   * Number of cards visible at a time.
   *
   * Desktop: 3
   * Tablet: 2
   * Mobile: 1
   *
   * The carousel itself uses one-card movement so the transition
   * feels smooth on every screen size.
   */
  const cardsToShow = 3;

  const maxIndex = Math.max(0, testimonials.length - cardsToShow);

  const nextSlide = () => {
    setCurrentIndex((current) =>
      current >= maxIndex ? 0 : current + 1
    );
  };

  const previousSlide = () => {
    setCurrentIndex((current) =>
      current <= 0 ? maxIndex : current - 1
    );
  };

  /*
   * Automatically move every 5 seconds.
   * It stops while the user is hovering/interacting.
   */
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((current) =>
        current >= maxIndex ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  return (
    <section className="py-16 md:py-24 bg-[#F8FAF9]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <FadeInOnScroll>
          <SectionHeading>
            What Parents Say About Our Care
          </SectionHeading>

          <p className="max-w-2xl mx-auto text-center text-[#64748B] text-base md:text-lg font-medium -mt-6 mb-12">
            Hear from parents about their experience with our pediatric care
            and consultations.
          </p>
        </FadeInOnScroll>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          {/* Left Arrow */}
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous testimonials"
            className="hidden md:flex absolute -left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full bg-white border border-slate-200 text-[#17212B] shadow-md transition-all hover:bg-[#0F766E] hover:text-white hover:border-[#0F766E] hover:scale-105"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonials"
            className="hidden md:flex absolute -right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full bg-white border border-slate-200 text-[#17212B] shadow-md transition-all hover:bg-[#0F766E] hover:text-white hover:border-[#0F766E] hover:scale-105"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Viewport */}
          <div className="overflow-hidden px-1 py-2">
            {/* Track */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsToShow)
                }%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3"
                >
                  <div className="h-full bg-white rounded-[28px] p-7 md:p-8 border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.06)] relative overflow-hidden">
                    {/* Decorative quote */}
                    <div className="absolute top-5 right-6 text-[#0F766E]/10">
                      <Quote className="w-16 h-16 fill-current" />
                    </div>

                    <div className="relative z-10">
                      {/* Rating */}
                      <div
                        className="flex gap-1 mb-6"
                        aria-label="5 out of 5 stars"
                      >
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]"
                          />
                        ))}
                      </div>

                      {/* Review */}
                      <p className="text-[#475569] text-[15px] md:text-base leading-relaxed font-medium mb-7 min-h-[120px]">
                        "{testimonial.review}"
                      </p>

                      {/* Parent */}
                      <div className="flex items-center gap-4 pt-5 border-t border-slate-100">
                        <div className="w-12 h-12 rounded-full bg-[#E8F6FA] flex items-center justify-center text-2xl shrink-0">
                          {testimonial.avatar}
                        </div>

                        <div>
                          <p className="font-bold text-[#17212B] font-heading">
                            {testimonial.name}
                          </p>

                          <p className="text-xs text-[#64748B] font-medium mt-0.5">
                            {testimonial.relation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile arrows */}
          <div className="flex md:hidden justify-center gap-3 mt-6">
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous testimonials"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-[#17212B] shadow-sm"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next testimonials"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-[#17212B] shadow-sm"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial slide ${index + 1}`}
              className={
                "h-2 rounded-full transition-all duration-300 " +
                (currentIndex === index
                  ? "w-7 bg-[#0F766E]"
                  : "w-2 bg-slate-300 hover:bg-slate-400")
              }
            />
          ))}
        </div>

        {/* Temporary content notice */}
        <p className="text-center text-xs text-slate-400 mt-6">
          * Testimonials shown are sample content and will be replaced with
          verified patient feedback.
        </p>
      </div>
    </section>
  );
}

