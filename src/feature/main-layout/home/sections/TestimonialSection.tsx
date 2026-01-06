"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Josh Peter",
    quote:
      "I have used 263 Pros twice now for two completely different services and I've had a fantastic experience both times!",
    avatar: "/assets/images/home/testimonial/user1.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    quote:
      "The service was exceptional! Highly recommend 263 Pros for anyone looking for professional solutions.",
    avatar: "/assets/images/home/testimonial/user2.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    quote:
      "Outstanding quality and professionalism. 263 Pros truly stands out from the rest.",
    avatar: "/assets/images/home/testimonial/user3.png",
    rating: 5,
  },
  {
    id: 4,
    name: "Asadur R. Yead",
    quote:
      "Outstanding quality and professionalism. 263 Pros truly stands out from the rest.",
    avatar: "/assets/images/home/testimonial/user4.png",
    rating: 5,
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-[#F3F8FB] mb-10 lg:mb-16">
      <div className="container py-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 lg:mb-20 lg:gap-6">
          <h2 className="section-title text-[#2E2E2E]! lg:mt-6">
            What Our{" "}
            <span className="italic text-primary">Trusted Customer Say</span>
          </h2>

          <div className="flex gap-3">
            <button className="testimonial-prev h-10 w-24 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center cursor-pointer">
              <ChevronLeft />
            </button>
            <button className="testimonial-next h-10 w-24 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center cursor-pointer">
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".testimonial-prev",
            nextEl: ".testimonial-next",
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          speed={700}
          slidesPerView={1}
        >
          {testimonials.map((item, index) => {
            const nextAvatars = Array.from({ length: 3 }).map((_, i) => {
              const nextIndex = (index + i + 1) % testimonials.length;
              return testimonials[nextIndex].avatar;
            });

            return (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 text-center lg:text-left">
                  {/* Left Avatar */}
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={250}
                    height={250}
                    className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full object-cover"
                  />

                  {/* Center Content */}
                  <div className="flex-1 flex flex-col items-center lg:items-start">
                    <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 max-w-2xl">
                      {item.quote}
                    </p>

                    <p className="font-medium">{item.name}</p>

                    <div className="flex gap-2 mt-2 justify-center lg:justify-start">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="fill-yellow-400 text-yellow-400 w-5 h-5"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Right Side Next Users (LG only) */}
                  <div className="relative w-72 h-32 hidden lg:block">
                    {nextAvatars.map((avatar, i) => (
                      <Image
                        key={i}
                        src={avatar}
                        alt="Next user"
                        width={400}
                        height={400}
                        className="absolute w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
                        style={{
                          left: i * 80,
                          zIndex: 10 - i,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
