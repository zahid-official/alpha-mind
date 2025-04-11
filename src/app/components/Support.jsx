'use client'

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaDiscord, FaPhone } from "react-icons/fa";

const Support = () => {
  return (
    <div className="bg-[#fafafa] dark:bg-[#090a22]">
      <div className=" flex gap-16 lg:flex-row flex-col-reverse justify-center items-center container mx-auto py-36 px-5">
        {/* left */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold pb-5 dark:text-white">
            24/7 Support Available via <br className="sm:block hidden" />{" "}
            <span className="bg-gradient-to-r from-[#3492f1] to-[#44d285] bg-clip-text text-transparent">
              Discord Channel
            </span>
          </h2>
          <p>
            We’ve set up a private Discord support channel for this course,
            where course instructors Sumit Saha and Tapas Adhikari, along with
            5-6 other experienced web developers, will be available to answer
            your questions directly. We are committed to responding to your
            inquiries within a maximum of 24 hours, though in most cases, you'll
            receive answers much sooner. Additionally, there will be weekly live
            sessions covering the discussed module, where you can ask questions
            and get immediate answers.
          </p>

          <div className="pt-10 flex gap-4 sm:justify-start flex-wrap justify-center">
            <button className="btn text-base h-12 rounded-full sm:mt-0 z-10 bg-[#006fee] text-white border-none shadow-2xl shadow-[#0066db] font-normal px-6 ">
              <FaDiscord size={24} /> Discord Channel
            </button>

            <button className="btn text-base h-12 rounded-full sm:mt-0 z-10 bg-[#006fee] text-white border-none shadow-2xl shadow-[#0066db] font-normal px-6 ">
              <FaPhone size={19} /> Support Center
            </button>
          </div>
        </div>

        {/* right */}
        <div className="flex-1">
          <DotLottieReact
            src="/lotties/courseFlow0.lottie"
            className="w-full scale-[1.1]"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
};

export default Support;
