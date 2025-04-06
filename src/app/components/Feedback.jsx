const Feedback = () => {
  return (
    <div className="pt-16 pb-32">
      {/* title */}
      <div className="text-center px-3 space-y-3 pb-10">
        <h3 className="text-4xl font-bold dark:text-white">
          Students{" "}
          <span className="bg-gradient-to-r from-[#3492f1] to-[#44d285] bg-clip-text text-transparent">
            Feedback
          </span>
        </h3>
        <p>
          Our Students Are Our Strength, See What They Say About Us. Learners
          have always <br /> expressed their love for Alpha Mind.
        </p>
      </div>

      {/* users */}
      <div className="flex justify-center items-center flex-wrap gap-10 px-5">
        {/* 1 */}
        <div className="border border-[#3e4458] max-w-sm px-7 py-12 rounded-2xl">
          <div className="flex gap-3.5 ">
            <div>
              <img
                src="https://www.hablu-programmer.com/avatar/avatar.png"
                className="w-14 h-14 rounded-full"
                alt=""
              />
            </div>

            <div>
              <h2 className="text-xl dark:text-white">Khairul Islam </h2>
              <h3>Student | Frontend Developer</h3>

              {/* stars */}
              <div className="rating rating-xs space-x-1.5">
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="1 star"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="2 star"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="3 star"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="4 star"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="5 star"
                  defaultChecked
                />
              </div>
            </div>
          </div>

          <div className="pt-4">
            Your ability to break down complex topics into manageable parts, and
            cover diverse programming languages and topics is truly impressive.
            The practical applications and real-world examples you incorporate
            reinforce the theoretical knowledge and provide valuable insights.
            Your engagement with the audience fosters a supportive learning
            environment. Thank you for your dedication, expertise, and passion
            for teaching programming, and keep up the fantastic work!
          </div>
        </div>

        {/* 2 */}
        <div className="border border-[#3e4458] max-w-sm px-7 py-12 rounded-2xl">
          <div className="flex gap-3.5 ">
            <div>
              <img
                src="https://www.hablu-programmer.com/avatar/avatar.png"
                className="w-14 h-14 rounded-full"
                alt=""
              />
            </div>

            <div>
              <h2 className="text-xl dark:text-white">Khairul Islam </h2>
              <h3>Student | Frontend Developer</h3>

              {/* stars */}
              <div className="rating rating-xs space-x-1.5">
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="1 star"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="2 star"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="3 star"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="4 star"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="5 star"
                  defaultChecked
                />
              </div>
            </div>
          </div>

          <div className="pt-4">
            Your ability to break down complex topics into manageable parts, and
            cover diverse programming languages and topics is truly impressive.
            The practical applications and real-world examples you incorporate
            reinforce the theoretical knowledge and provide valuable insights.
            Your engagement with the audience fosters a supportive learning
            environment. Thank you for your dedication, expertise, and passion
            for teaching programming, and keep up the fantastic work!
          </div>
        </div>

        {/* 3 */}
        <div className="border border-[#3e4458] max-w-sm px-7 py-12 rounded-2xl">
          <div className="flex gap-3.5 ">
            <div>
              <img
                src="https://www.hablu-programmer.com/avatar/avatar.png"
                className="w-14 h-14 rounded-full"
                alt=""
              />
            </div>

            <div>
              <h2 className="text-xl dark:text-white">Khairul Islam </h2>
              <h3>Student | Frontend Developer</h3>

              {/* stars */}
              <div className="rating rating-xs space-x-1.5">
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="1 star"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="2 star"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="3 star"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="4 star"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="5 star"
                  defaultChecked
                />
              </div>
            </div>
          </div>

          <div className="pt-4">
            Your ability to break down complex topics into manageable parts, and
            cover diverse programming languages and topics is truly impressive.
            The practical applications and real-world examples you incorporate
            reinforce the theoretical knowledge and provide valuable insights.
            Your engagement with the audience fosters a supportive learning
            environment. Thank you for your dedication, expertise, and passion
            for teaching programming, and keep up the fantastic work!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
