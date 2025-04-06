import React from "react";

const Schedule = () => {
  return (
    <div className="px-5 py-36 bg-[#fafafa] dark:bg-[#090a22]">
      {/* title */}
      <div className="text-center">
        <h1 className="text-4xl font-semibold pt-2 dark:text-white">
          Next Batch{" "}
          <span className="bg-gradient-to-r from-[#3492f1] to-[#44d285] bg-clip-text text-transparent">
            Schedule
          </span>
        </h1>
      </div>

      {/* content */}
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-10 container mx-auto pt-14">
        {/* 1 */}
        <div className="flex gap-2.5 items-center justify-center lg:border-r border-[#e4e8ec] dark:border-[#292e43]">
          <div>
            <img
              src="https://www.hablu-programmer.com/_next/image?url=%2Fcourses%2Fenrollment.png&w=32&q=75"
              alt=""
            />
          </div>

          <div className="">
            <h2 className="text-base">June 1st, 2025</h2>
            <p className="text-[#22d3ee] text-lg">Enrollment starts</p>
          </div>
        </div>

        {/* 2 */}
        <div className="flex gap-2.5 items-center justify-center lg:border-r border-[#e4e8ec] dark:border-[#292e43]">
          <div>
            <img
              src="https://www.hablu-programmer.com/_next/image?url=%2Fcourses%2Fenrollment.png&w=32&q=75"
              alt=""
            />
          </div>

          <div className="">
            <h2 className="text-base">July 1st, 2025</h2>
            <p className="text-[#22d3ee] text-lg">Enrollment Ends</p>
          </div>
        </div>

        {/* 3 */}
        <div className="flex gap-2.5 items-center justify-center lg:border-r border-[#e4e8ec] dark:border-[#292e43]">
          <div>
            <img
              src="https://www.hablu-programmer.com/_next/image?url=%2Fcourses%2Fenrollment.png&w=32&q=75"
              alt=""
            />
          </div>

          <div className="">
            <h2 className="text-base">July 2nd, 2025</h2>
            <p className="text-[#22d3ee] text-lg">Orientation Starts</p>
          </div>
        </div>

        {/* 4 */}
        <div className="flex gap-2.5 items-center justify-center">
          <div>
            <img
              src="https://www.hablu-programmer.com/_next/image?url=%2Fcourses%2Fenrollment.png&w=32&q=75"
              alt=""
            />
          </div>

          <div className="">
            <h2 className="text-base">July 5th, 2025</h2>
            <p className="text-[#22d3ee] text-lg">Class Starts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
