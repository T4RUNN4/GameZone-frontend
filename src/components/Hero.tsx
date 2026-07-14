"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Button from "./Buttons";

const slides = [
  {
    id: 1,
    image:
      "https://image.benq.com/is/image/benqco/Gamingroom_tk700sti-A?$ResponsivePreset$",
    title: "Bored at Home?",
    subtitle: "Are you bored at home with nothing to do",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1600",
    title: "Do you wanna play PlayStation?",
    subtitle: "But you can't play because you don't have one",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1600",
    title: "Well, GameZone is Here",
    subtitle: "Grab your buddies and play in GameZone with PlayStation",
  },
];

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop
      className="w-full h-137.5"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative h-137.5 w-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/60" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
              <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>

              <p className="max-w-2xl text-lg mb-8">{slide.subtitle}</p>

              <Button type="primary" text="Book your slot" task="hyperlink" href="slot-booking" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
