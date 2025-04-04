"use client"

const Banner = () => {
  return (
    <>
      <div className="">
        <div className="flex gap-10 flex-col lg:flex-row-reverse justify-center items-center container mx-auto px-5 pt-10 pb-16 min-h-[88vh]">
          {/* right */}
          <div className="flex-1 w-full">
            <img
              src="https://www.hablu-programmer.com/home/hero-img.svg"
              className="rounded-lg shadow-2xl"
            />
          </div>

          {/* left */}
          <div className="flex-1 w-full">
            <h1 className="sm:text-6xl text-4xl font-bold">
              Learn Limitless To Build Your Self-Esteem
            </h1>
            <p className="py-6">
              We Strongly believe In Personalized Learning & Empower Individuals
              To Kick-Start their careers. There Is No Chance Of Falling Behind,
              With A Module-Wise Structured & Project Based Study Plan Packed
              With Quizzes, Assignments, Practice Homework For Interview
              Preparation & Special Guidance For Freelancing In Just One Course.
            </p>

            <button className="btn btn-primary">View Course</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
