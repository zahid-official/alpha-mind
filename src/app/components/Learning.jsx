import { FaArrowDownLong, FaCheck } from "react-icons/fa6";

const Learning = () => {
  return (
    <div className="py-36 bg-[#fafafa] dark:bg-[#090a22]">
      {/* title */}
      <div className="text-center">
        <h1 className="text-4xl font-semibold pt-2 dark:text-white">
          Effective{" "}
          <span className="bg-gradient-to-r from-[#3492f1] to-[#44d285] bg-clip-text text-transparent">
            Personalized{" "}
          </span>
          <br className="sm:block hidden" />
          Learning
        </h1>
      </div>

      {/* content */}
      <div className="flex flex-col-reverse lg:flex-row gap-20 justify-center items-center container mx-auto px-5 pt-20">
        {/* left */}
        <ul className="flex-1 max-h-[420px] overflow-y-scroll px-4">
          {/* 1 */}
          <li className="relative flex gap-6 pb-14">
            <div className="before:absolute before:left-4.5 before:top-9 before:h-full before:w-[1px] before:bg-[#d1d5db]">
              <div className="border rounded-full inline-block p-2.5 bg-[#0b79df] border-none">
                <FaArrowDownLong />
              </div>
            </div>

            <div>
              <h2 className="text-xl pt-1 font-semibold dark:text-white pb-2.5">
              Interactive Live & Recording Classes
              </h2>
              <p>
              Learn Something New Everyday By Watching Recorded Conceptual Classes And Join Live Classes For Clearing Your Doubts.
              </p>
            </div>
          </li>

          {/* 2 */}
          <li className="relative flex gap-6 pb-14">
            <div className="before:absolute before:left-4.5 before:top-9 before:h-full before:w-[1px] before:bg-[#d1d5db]">
              <div className="border rounded-full inline-block p-2.5 bg-[#0b79df] border-none">
                <FaArrowDownLong />
              </div>
            </div>

            <div>
              <h2 className="text-xl pt-1 font-semibold dark:text-white pb-2.5">
              Module Based Study Plan
              </h2>
              <p>
              There Is No Chance Of Falling Behind, With A Module-Wise Structured Study Plan Packed With Quizzes, Assignments & Practice Home Work For Interview Preparation.
              </p>
            </div>
          </li>

          {/* 3 */}
          <li className="relative flex gap-6 pb-14">
            <div className="before:absolute before:left-4.5 before:top-9 before:h-full before:w-[1px] before:bg-[#d1d5db]">
              <div className="border rounded-full inline-block p-2.5 bg-[#0b79df] border-none">
                <FaArrowDownLong />
              </div>
            </div>

            <div>
              <h2 className="text-xl pt-1 font-semibold dark:text-white pb-2.5">
              Conceptual Crash Course
              </h2>
              <p>
              You Are Not Just Enrolling In One Course. It's A Mission To Learn Lifelong Programming Journey With Hablu Programmer.
              </p>
            </div>
          </li>

          {/* 4 */}
          <li className="relative flex gap-6 pb-14">
            <div className="before:absolute before:left-4.5 before:top-9 before:h-full before:w-[1px] before:bg-[#d1d5db]">
              <div className="border rounded-full inline-block p-2.5 bg-[#0b79df] border-none">
                <FaArrowDownLong />
              </div>
            </div>

            <div>
              <h2 className="text-xl pt-1 font-semibold dark:text-white pb-2.5">
              Freelancing & Job Placement Guide
              </h2>
              <p>
              Only Serious Course Completers Will Get A Freelancing Guide And Job Placement Support From Zero To Until Success Your Career.
              </p>
            </div>
          </li>

          {/* 5 */}
          <li className="relative flex gap-6 pb-14">
            <div className="before:absolute before:left-4.5 before:top-9 before:h-full before:w-[1px] before:bg-[#d1d5db]">
              <div className="border rounded-full inline-block p-2.5 bg-[#0b79df] border-none">
                <FaArrowDownLong />
              </div>
            </div>

            <div>
              <h2 className="text-xl pt-1 font-semibold dark:text-white pb-2.5">
              Learning Process Track Record
              </h2>
              <p>
              Track Your Progress In Real Time To See Your Position On The Leader Board And Get Ahead Of Everyone Else In The Competition.
              </p>
            </div>
          </li>

          {/* 6 */}
          <li className="relative flex gap-6">
            <div className="">
              <div className="border rounded-full inline-block p-2.5 bg-[#0b79df] border-none">
                <FaCheck />
              </div>
            </div>

            <div>
              <h2 className="text-xl pt-1 font-semibold dark:text-white pb-2.5">
              Unlimited Support
              </h2>
            </div>
          </li>

          
        </ul>

        {/* right */}
        <div className="flex-1">
            <img src="https://www.hablu-programmer.com/img/img-disendow-web-media.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Learning;
