const Specialty = () => {
  return (
    <div className="py-36 px-5">
      {/* title */}
      <div className="text-center">
        <h1 className="text-4xl font-semibold pt-2 dark:text-white">
          What Is The Specialty of <br className="sm:block hidden" />
          <span className="bg-gradient-to-r from-[#3492f1] to-[#44d285] bg-clip-text text-transparent">
            This Course?
          </span>
        </h1>

        <h5 className="text-lg pt-2">Let's Take A Look</h5>
      </div>

      {/* content */}
      <div className="container mx-auto pt-12 flex gap-8 flex-wrap justify-center max-w-7xl">
        {/* 1 */}
        <div className="border border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#101829] hover:scale-[1.07] duration-300 max-w-96">
          <div className="h-16 w-16 mx-auto">
            <img
              src="https://www.hablu-programmer.com/img/jfsd/contents-modules.png"
              alt=""
            />
          </div>
          <h3 className="text-xl font-bold text-center dark:text-white">
            600+ Contents & 180+ Modules
          </h3>
          <p>
            In This Course You Will Learn Everything It Takes To Become A Junior
            Frontend Web Developer. The Course Is Divided Into 120 Modules &
            400+ Recorded Contents For Step-By-Step Project Based Learning.
          </p>
        </div>

        {/* 2 */}
        <div className="border border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#101829] hover:scale-[1.07] duration-300 max-w-96">
          <div className="h-16 w-16 mx-auto">
            <img
              src="https://www.hablu-programmer.com/img/jfsd/recorded-live-session.png"
              alt=""
            />
          </div>
          <h3 className="text-xl text-center font-bold dark:text-white">
            Recorded & Live Session
          </h3>
          <p>
            Learn Something New Everyday By Watching Recorded Conceptual Classes
            And Join Live Classes For Clearing Your Doubts.
          </p>
        </div>

        {/* 3 */}
        <div className="border border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#101829] hover:scale-[1.07] duration-300 max-w-96">
          <div className="h-16 w-16 mx-auto">
            <img
              src="https://www.hablu-programmer.com/img/jfsd/conceptual-crash-course.png"
              alt=""
            />
          </div>
          <h3 className="text-xl text-center font-bold dark:text-white">
            Conceptual Crash Course
          </h3>
          <p>
            You Are Not Just Enrolling In One Course. It's A Mission To Learn
            Lifelong Programming Journey With Hablu Programmer.
          </p>
        </div>

        {/* 4 */}
        <div className="border border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#101829] hover:scale-[1.07] duration-300 max-w-96">
          <div className="h-16 w-16 mx-auto">
            <img
              src="https://www.hablu-programmer.com/img/jfsd/projects.png"
              alt=""
            />
          </div>
          <h3 className="text-xl text-center font-bold dark:text-white">20+ Projects</h3>
          <p>
            Everyday We Will Give You Particular Task. You Have To Spend 4-5
            Hours Watching, Practicing The Tutorial.The Videos Are Made
            Following Project Based Learning Process. You Will Do 20+ Projects
            In This Course.
          </p>
        </div>

        {/* 5 */}
        <div className="border border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#101829] hover:scale-[1.07] duration-300 max-w-96">
          <div className="h-16 w-16 mx-auto">
            <img
              src="https://www.hablu-programmer.com/img/jfsd/assignments.png"
              alt=""
            />
          </div>
          <h3 className="text-xl text-center font-bold dark:text-white">15+ Assignments</h3>
          <p>
            There Is No Chance Of Falling Behind, With A Module-Wise Structured
            Study Plan And Each Module There Will Be Assignments That You Will
            Do Yourself.
          </p>
        </div>

        {/* 6 */}
        <div className="border border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#101829] hover:scale-[1.07] duration-300 max-w-96">
          <div className="h-16 w-16 mx-auto">
            <img
              src="https://www.hablu-programmer.com/img/jfsd/unlimited-support.png"
              alt=""
            />
          </div>
          <h3 className="text-xl text-center font-bold dark:text-white">
            Unlimited Support
          </h3>
          <p>
            Everyday 12 Hours Special Team Will Waiting For Support To You In
            Live Video Conference Via Zoom Or Meet.
          </p>
        </div>

        {/* 7 */}
        <div className="border border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#101829] hover:scale-[1.07] duration-300 max-w-96">
          <div className="h-16 w-16 mx-auto">
            <img
              src="https://www.hablu-programmer.com/img/jfsd/rewards-and-recognition.png"
              alt=""
            />
          </div>
          <h3 className="text-xl text-center font-bold dark:text-white">
          Rewards And Recognition
          </h3>
          <p>
          You Are Not Just Enrolling In One Course. After Finishing The Course You Will Get Rewards Modules For Learning Advance And Latest Technology Crash Courses For Free Life Time.
          </p>
        </div>

        {/* 8 */}
        <div className="border border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#101829] hover:scale-[1.07] duration-300 max-w-96">
          <div className="h-16 w-16 mx-auto">
            <img
              src="https://www.hablu-programmer.com/img/jfsd/freelancing-Job-placement-guide.png"
              alt=""
            />
          </div>
          <h3 className="text-xl text-center font-bold dark:text-white">
          Freelancing & Job Placement Guide
          </h3>
          <p>
          Only Serious Course Completers Will Get A Freelancing Guide And Job Placement Support From Zero To Until Success Your Career.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Specialty;
