const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center pt-40 pb-20">
      <div className="text-center container mx-auto px-5 z-10">
        <h6 className="text-lg font-semibold bg-gradient-to-r from-[#3492f1] to-[#44d285] bg-clip-text text-transparent">
          Crafting Complete Web Solutions
        </h6>

        <h1 className="sm:text-5xl text-4xl font-semibold pt-2 dark:text-white">
          Journey Of Full Stack{" "}
          <span className="bg-gradient-to-r from-[#3492f1] to-[#44d285] bg-clip-text text-transparent">
            Web Development
          </span>
        </h1>
        <p className="max-w-4xl mx-auto pt-6 pb-10">
          We strongly believe in personalized learning and empowering
          individuals to kick-start their careers. With our module-wise
          structured and project-based study plan, there’s no chance of falling
          behind. The course is designed to guide you step-by-step with quizzes,
          assignments, practice homework for interview preparation, and special
          guidance for freelancing. All of this comes together in a single
          comprehensive course to ensure you’re ready for real-world
          opportunities.
        </p>

        <button className="btn text-base h-12 z-10 bg-[#006fee] text-white border-none shadow-2xl shadow-[#0066db] font-normal px-6 ">
          Enroll Now | 5600 ৳
        </button>
      </div>

      {/* effect */}
      <div className="absolute w-full h-full top-24 lg:left-0 -left-3/12">
        <svg
          className="mx-auto"
          fill="none"
          height="442"
          width="1440"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M1 2h38v38H1V2zm40 38V2h38v38H41zM1 42h38v38H1V42zm40 0v38h38V42H41zM1 82h38v38H1V82zm40 0v38h38V82H41zM1 122h38v37.5H1V122zm40 0v37.5h38V122H41zM1 161.5h38v38H1v-38zm40 0v38h38v-38H41zm-40 40h38v38H1v-38zm40 0v38h38v-38H41zm-40 40h38v38H1v-38zm40 0v38h38v-38H41zm-40 40h38v38H1v-38zm40 0v38h38v-38H41zm-40 40h38v38H1v-38zm40 0v38h38v-38H41zm-40 40h38v38H1v-38zm40 0v38h38v-38H41zm-40 40h38v38H1v-38zm40 0v38h38v-38H41zM639 2h-38v38h38V2zm-78 0h38v38h-38V2zm0 40h38v38h-38V42zm0 40h38v38h-38V82zm40 0v38h38V82h-38zm-40 40h38v37.5h-38V122zm40 0v37.5h38V122h-38zm-40 39.5h38v38h-38v-38zm40 0v38h38v-38h-38zm-40 40h38v38h-38v-38zm40 0v38h38v-38h-38zm-40 40h38v38h-38v-38zm40 0v38h38v-38h-38zm-40 40h38v38h-38v-38zm40 0v38h38v-38h-38zm-40 40h38v38h-38v-38zm40 0v38h38v-38h-38zm-40 40h38v38h-38v-38zm40 0v38h38v-38h-38zm-40 40h38v38h-38v-38zm40 0v38h38v-38h-38zM601 42v38h38V42h-38zM481 2h38v38h-38V2zm40 38V2h38v38h-38zm-40 2h38v38h-38V42zm40 0v38h38V42h-38zm-40 40h38v38h-38V82zm40 0v38h38V82h-38zm-40 40h38v37.5h-38V122zm40 0v37.5h38V122h-38zm-40 39.5h38v38h-38v-38zm40 0v38h38v-38h-38zm-40 40h38v38h-38v-38zm40 0v38h38v-38h-38zm-40 40h38v38h-38v-38zm40 0v38h38v-38h-38zm-40 40h38v38h-38v-38zm40 0v38h38v-38h-38zm-40 40h38v38h-38v-38zm40 0v38h38v-38h-38zm-40 40h38v38h-38v-38zm40 0v38h38v-38h-38zm-40 40h38v38h-38v-38zm40 0v38h38v-38h-38zM441 2h38v38h-38V2zm0 40h38v38h-38V42zm0 40h38v38h-38V82zm0 40h38v37.5h-38V122zm0 39.5h38v38h-38v-38zm0 40h38v38h-38v-38zm0 40h38v38h-38v-38zm0 40h38v38h-38v-38zm0 40h38v38h-38v-38zm0 40h38v38h-38v-38zm0 40h38v38h-38v-38zM401 2h38v38h-38V2zm0 40h38v38h-38V42zm0 40h38v38h-38V82zm0 40h38v37.5h-38V122zm0 39.5h38v38h-38v-38zm0 40h38v38h-38v-38zm0 40h38v38h-38v-38zm0 40h38v38h-38v-38zm0 40h38v38h-38v-38zm0 40h38v38h-38v-38zm0 40h38v38h-38v-38zM321 2h38v38h-38V2zm40 38V2h38v38h-38zm-40 2h38v38h-38V42zm40 0v38h38V42h-38zm-40 40h38v38h-38V82zm40 0v38h38V82h-38zm-40 40h38v37.5h-38V122zm40 0v37.5h38V122h-38zm-40 39.5h38v38h-38v-38zm40 0v38h38v-38h-38zm-40 40h38v38h-38v-38zm40 0v38h38v-38h-38zm-40 40h38v38h-38v-38zm40 0v38h38v-38h-38zm-40 40h38v38h-38v-38zm40 0v38h38v-38h-38zm-40 40h38v38h-38v-38zm40 0v38h38v-38h-38zm-40 40h38v38h-38v-38zm40 0v38h38v-38h-38zm-40 40h38v38h-38v-38zm40 0v38h38v-38h-38zM281 2h38v38h-38V2zm0 40h38v38h-38V42zm0 40h38v38h-38V82zm0 40h38v37.5h-38V122zm0 39.5h38v38h-38v-38zm0 40h38v38h-38v-38zm0 40h38v38h-38v-38zm0 40h38v38h-38v-38zm0 40h38v38h-38v-38zm0 40h38v38h-38v-38zm0 40h38v38h-38v-38zM241 2h38v38h-38V2zm0 40h38v38h-38V42zm0 40h38v38h-38V82zm0 40h38v37.5h-38V122zm0 39.5h38v38h-38v-38zm0 40h38v38h-38v-38zm0 40h38v38h-38v-38zm0 40h38v38h-38v-38zm0 40h38v38h-38v-38zm0 40h38v38h-38v-38zm0 40h38v38h-38v-38zM161 2h38v38h-38V2zm40 38V2h38v38h-38zm-40 2h38v38h-38V42zm40 0v38h38V42h-38zm-40 40h38v38h-38V82zm40 0v38h38V82h-38zm-40 40h38v37.5h-38V122zm40 0v37.5h38V122h-38zm-40 39.5h38v38h-38v-38zm40 0v38h38v-38h-38zm-40 40h38v38h-38v-38zm40 0v38h38v-38h-38zm-40 40h38v38h-38v-38zm40 0v38h38v-38h-38zm-40 40h38v38h-38v-38zm40 0v38h38v-38h-38zm-40 40h38v38h-38v-38zm40 0v38h38v-38h-38zm-40 40h38v38h-38v-38zm40 0v38h38v-38h-38zm-40 40h38v38h-38v-38zm40 0v38h38v-38h-38zM121 2h38v38h-38V2zm0 40h38v38h-38V42zm0 40h38v38h-38V82zm0 40h38v37.5h-38V122zm0 39.5h38v38h-38v-38zm0 40h38v38h-38v-38zm0 40h38v38h-38v-38zm0 40h38v38h-38v-38zm0 40h38v38h-38v-38zm0 40h38v38h-38v-38zm0 40h38v38h-38v-38zM81 2h38v38H81V2zm0 40h38v38H81V42zm0 40h38v38H81V82zm0 40h38v37.5H81V122zm0 39.5h38v38H81v-38zm0 40h38v38H81v-38zm0 40h38v38H81v-38zm0 40h38v38H81v-38zm0 40h38v38H81v-38zm0 40h38v38H81v-38zm0 40h38v38H81v-38zM641 2v38h38V2h-38zm0 78V42h38v38h-38zm0 40V82h38v38h-38zm0 39.5V122h38v37.5h-38zm0 40v-38h38v38h-38zm0 40v-38h38v38h-38zm0 40v-38h38v38h-38zm0 40v-38h38v38h-38zm0 40v-38h38v38h-38zm0 40v-38h38v38h-38zm0 40v-38h38v38h-38zM1201 2h38v38h-38V2zm-2 0h-38v38h38V2zm0 40h-38v38h38V42zm0 40h-38v38h38V82zm2 38V82h38v38h-38zm-2 2h-38v37.5h38V122zm2 37.5V122h38v37.5h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm0-359.5V42h38v38h-38zm-82-78h-38v38h38V2zm2 0v38h38V2h-38zm-2 40h-38v38h38V42zm2 38V42h38v38h-38zm-2 2h-38v38h38V82zm2 38V82h38v38h-38zm-2 2h-38v37.5h38V122zm2 37.5V122h38v37.5h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zM1359 2h-38v38h38V2zm2 0h38v38h-38V2zm78 0h-38v38h38V2zm1-1.5V0H0v.5h-1V440h1v1.5h1440V440h1V.5h-1zm-1 439v-38h-38v38h38zm0-40v-38h-38v38h38zm0-40v-38h-38v38h38zm0-40v-38h-38v38h38zm0-40v-38h-38v38h38zm0-40v-38h-38v38h38zm0-40v-38h-38v38h38zm0-40V122h-38v37.5h38zm0-39.5V82h-38v38h38zm0-40V42h-38v38h38zm-78-38h38v38h-38V42zm0 40h38v38h-38V82zm0 40h38v37.5h-38V122zm0 39.5h38v38h-38v-38zm0 40h38v38h-38v-38zm0 40h38v38h-38v-38zm0 40h38v38h-38v-38zm0 40h38v38h-38v-38zm0 40h38v38h-38v-38zm0 40h38v38h-38v-38zM1359 42h-38v38h38V42zm0 40h-38v38h38V82zm0 40h-38v37.5h38V122zm0 39.5h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zM1281 2h38v38h-38V2zm-2 0h-38v38h38V2zm0 40h-38v38h38V42zm0 40h-38v38h38V82zm2 38V82h38v38h-38zm-2 2h-38v37.5h38V122zm2 37.5V122h38v37.5h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm0-359.5V42h38v38h-38zM1079 2h-38v38h38V2zm0 40h-38v38h38V42zm0 40h-38v38h38V82zm0 40h-38v37.5h38V122zm0 39.5h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zM1039 2h-38v38h38V2zm0 40h-38v38h38V42zm0 40h-38v38h38V82zm0 40h-38v37.5h38V122zm0 39.5h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zM959 2h-38v38h38V2zm2 0v38h38V2h-38zm-2 40h-38v38h38V42zm2 38V42h38v38h-38zm-2 2h-38v38h38V82zm2 38V82h38v38h-38zm-2 2h-38v37.5h38V122zm2 37.5V122h38v37.5h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zM919 2h-38v38h38V2zm0 40h-38v38h38V42zm0 40h-38v38h38V82zm0 40h-38v37.5h38V122zm0 39.5h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zM879 2h-38v38h38V2zm0 40h-38v38h38V42zm0 40h-38v38h38V82zm0 40h-38v37.5h38V122zm0 39.5h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zM799 2h-38v38h38V2zm2 0v38h38V2h-38zm-2 40h-38v38h38V42zm2 38V42h38v38h-38zm-2 2h-38v38h38V82zm2 38V82h38v38h-38zm-2 2h-38v37.5h38V122zm2 37.5V122h38v37.5h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zm-2 2h-38v38h38v-38zm2 38v-38h38v38h-38zM759 2h-38v38h38V2zm0 40h-38v38h38V42zm0 40h-38v38h38V82zm0 40h-38v37.5h38V122zm0 39.5h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zM719 2h-38v38h38V2zm0 40h-38v38h38V42zm0 40h-38v38h38V82zm0 40h-38v37.5h38V122zm0 39.5h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38zm0 40h-38v38h38v-38z"
            fill="url(#u7cgbzl9ga)"
            fillRule="evenodd"
            opacity=".1"
            className=""
          ></path>
          <defs>
            <radialGradient
              cx="0"
              cy="0"
              gradientTransform="matrix(0 442 -708.521 0 720 -.5)"
              gradientUnits="userSpaceOnUse"
              id="u7cgbzl9ga"
              r="1"
            >
              <stop stopColor="#4BDEFF"></stop>
              <stop offset="1" stopColor="#4BDEFF" stopOpacity="0"></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
