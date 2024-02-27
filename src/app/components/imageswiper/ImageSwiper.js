"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageSwiper({ data }) {
  return (
    <section className="py-12">
      <div className="container">
        <Swiper
          navigation
          pagination
          // ={{ type: "fraction" }}
          modules={[Navigation, Pagination]}
          className="h-auto w-full rounded-s"
        >
          {data.graffiti.images.map((image, index) => (
            <SwiperSlide key={index}>
              <div>
                <Image
                  src={image}
                  alt="Picture of a graffiti piece"
                  // fill={true}
                  width={504}
                  height={378}
                  className="w-full h-auto"
                ></Image>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
