"use client";

import Image from "next/image";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function DetailPage({ params }) {
  const { id } = params;

  const { data, error, isLoading } = useSWR(`/api/entries/${id}`, fetcher);
  console.log("data", data);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <main>
      <section className="py-12">
        <div className="container">
          <Swiper
            navigation
            pagination={{ type: "fraction" }}
            modules={[Navigation, Pagination]}
            className="h-96 w-full rounded-lg"
          >
            {data.entry.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div>
                  <Image
                    src={image}
                    alt="Picture of a graffiti piece"
                    // fill={true}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto"
                  ></Image>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* <Image
        src={data.entry.images[0]}
        width={500}
        height={250}
        alt="Picture of a graffiti piece" */}
    </main>
  );
}
