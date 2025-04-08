"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Pagination } from "swiper/modules";

import { useEffect, useState } from "react";

const Rewards = () => {
  // useHooks
  const [viewCard, setViewCard] = useState(3);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (innerWidth < 780) {
        setViewCard(1);
      } else if (innerWidth < 1080) {
        setViewCard(2);
      } else {
        setViewCard(3);
      }
    });
  }, []);

  return (
    <div className="py-36 px-5">
      {/* title */}
      <div className="text-center">
        <h1 className="text-4xl font-semibold pt-2 dark:text-white pb-2">
          Special{" "}
          <span className="bg-gradient-to-r from-[#3492f1] to-[#44d285] bg-clip-text text-transparent">
            Rewards
          </span>
        </h1>
        <h5>
          On Time Course Finishers will Get special Rewards to start their
          career.
        </h5>
      </div>

      {/* content */}
      <div className="container mx-auto pt-12 max-w-7xl">
        <Swiper
          spaceBetween={30}
          slidesPerView={viewCard}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwipe flex items-center justify-center"
        >
          {/* 1 */}
          <SwiperSlide className="px-4">
            <div className="border border-[#e4e8ec] dark:border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#fafafa] dark:bg-[#101829] hover:scale-x-[1.07] duration-300 max-w-96 mx-auto">
              <div className="h-16 w-16 mx-auto">
                <img
                  src="https://www.hablu-programmer.com/img/jfsd/prisma.png"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-bold text-center dark:text-white">
              Prisma Crash Course
              </h3>
              <p>
              A concise ultimate guide to using Prisma, teaching you how to integrate and manage databases seamlessly in modern applications.
              </p>
            </div>
          </SwiperSlide>

          {/* 2 */}
          <SwiperSlide className="px-4">
            <div className="border border-[#e4e8ec] dark:border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#fafafa] dark:bg-[#101829] hover:scale-x-[1.07] duration-300 max-w-96 mx-auto">
              <div className="h-16 w-16 mx-auto">
                <img
                  src="https://www.hablu-programmer.com/img/jfsd/postgresql.png"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-bold text-center dark:text-white">
              PostgreSQL Course
              </h3>
              <p>
              A introduction to PostgreSQL, covering essential database management and querying skills to get you up and running quickly.
              </p>
            </div>
          </SwiperSlide>

          {/* 3 */}
          <SwiperSlide className="px-4">
            <div className="border border-[#e4e8ec] dark:border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#fafafa] dark:bg-[#101829] hover:scale-x-[1.07] duration-300 max-w-96 mx-auto">
              <div className="h-16 w-16 mx-auto">
                <img
                  src="https://www.hablu-programmer.com/img/jfsd/sql.png"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-bold text-center dark:text-white">
              SQL Crash Course
              </h3>
              <p>
              A focused quick, intensive guideline to mastering SQL fundamentals, designed to get you comfortable with databases and queries fast.
              </p>
            </div>
          </SwiperSlide>

          {/* 4 */}
          <SwiperSlide className="px-4">
            <div className="border border-[#e4e8ec] dark:border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#fafafa] dark:bg-[#101829] hover:scale-x-[1.07] duration-300 max-w-96 mx-auto">
              <div className="h-16 w-16 mx-auto">
                <img
                  src="https://www.hablu-programmer.com/img/self-employed.png"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-bold text-center dark:text-white">
              Job Placement Guide
              </h3>
              <p>
              Serious course completers will receive ongoing freelancing guidance and job placement support until they achieve career success.
              </p>
            </div>
          </SwiperSlide>

          
          {/* 5 */}
          <SwiperSlide className="px-4">
            <div className="border border-[#e4e8ec] dark:border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#fafafa] dark:bg-[#101829] hover:scale-x-[1.07] duration-300 max-w-96 mx-auto">
              <div className="h-16 w-16 mx-auto">
                <img
                  src="https://www.hablu-programmer.com/img/certificate.png"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-bold text-center dark:text-white">
              Certificate
              </h3>
              <p>
              Complete the course ontime and pass the exam to receive a certificate and recommendation letter for successfully finished tasks.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Rewards;
