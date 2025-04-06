"use client";

const Banner = () => {
  return (
    <>
      <div className="pt-28 pb-10 bg-[url(https://learnwithsumit.com/_next/static/media/pattern-dark.20747baf.svg)] dark:bg-[url(https://www.hablu-programmer.com/home/hero-pattern.svg)]">
        <div className="flex gap-10 flex-col lg:flex-row-reverse justify-center items-center container mx-auto px-5 pt-10 pb-16 min-h-[88vh] relative overflow-hidden">
          {/* right */}
          <div className="flex-1 w-full">
            <img
              src="https://www.hablu-programmer.com/home/hero-img.svg"
              className=""
            />
          </div>

          {/* left */}
          <div className="flex-1 w-full ">
            <h6 className="text-lg font-semibold bg-gradient-to-r from-[#3492f1] to-[#44d285] bg-clip-text text-transparent">
              Unlock Cultivate Confidence
            </h6>
            <h1 className="sm:text-6xl text-4xl font-bold pt-2">
              Learn Limitless To Build Your{" "}
              <span className="bg-gradient-to-r from-[#3492f1] to-[#44d285] bg-clip-text text-transparent">
                Self-Esteem
              </span>
            </h1>
            <p className="pt-5 pb-10">
              We Strongly believe In Personalized Learning & Empower Individuals
              To Kick-Start their careers. There Is No Chance Of Falling Behind,
              With A Module-Wise Structured & Project Based Study Plan Packed
              With Quizzes, Assignments, Practice Homework For Interview
              Preparation & Special Guidance For Freelancing In Just One Course.
            </p>

            <button className="btn z-10 bg-[#006fee] text-white border-none shadow-2xl shadow-[#0066db] font-normal px-6 ">
              View Course
            </button>
          </div>

          {/* effect*/}
          <div className="absolute lg:left-1/12 lg:top-3/12 top-5/12 z-0 h-[450px] w-[430px] rotate-45 bg-gradient-to-l from-primary-500 to-cyan-500/50 opacity-30 blur-[150px] filter dark:opacity-50"></div>
        </div>
      </div>
    </>
  );
};

export default Banner;
