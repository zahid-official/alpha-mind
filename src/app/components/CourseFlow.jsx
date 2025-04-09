const CourseFlow = () => {
  return (
    <div className="py-36">
      {/* title */}
      <div className="text-center">
        <h1 className="text-4xl font-semibold py-2 dark:text-white">
          Inside the{" "}
          <span className="bg-gradient-to-r from-[#3492f1] to-[#44d285] bg-clip-text text-transparent">
            Course{" "}
          </span>
        </h1>

        <p>Our Approach to Making You a High Skilled Web Developer</p>
      </div>

      {/* content */}
      <div className="container mx-auto px-5 lg:pt-16 pt-8 space-y-16">
        {/* 1 */}
        <div className="flex lg:gap-10 gap-5 items-center lg:flex-row flex-col-reverse">
          {/* left */}
          <div className="flex-1 relative">
            <div className="h-20 w-24 relative lg:mx-0 mx-auto">
              <span className="absolute text-4xl font-semibold text-white top-[50%] left-[50%] -translate-[50%] drop-shadow-[3px_3px_0px_#1e293b]">
                1
              </span>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 500">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M290.806 463.188C374.905 469.353 468.778 492.629 529.757 434.517C597.098 370.239 616.804 266.193 591.202 177.098C566.996 92.3192 491.898 30.0454 407.023 5.07419C335.338 -15.8893 270.48 32.9741 202.363 62.8779C128.971 95.248 31.0635 104.651 6.54775 180.797C-18.899 259.873 34.0116 342.956 93.1287 401.839C144.488 453.014 218.345 457.793 290.806 463.188Z"
                  fill="#FF8731"
                />
              </svg>
            </div>

            <h2 className="text-3xl dark:text-white lg:text-left text-center font-semibold pt-8 pb-5">
              Project Based Learning Approach 
            </h2>
            <p>
              Every week, one to two modules will be released, each containing
              10-12 pre-recorded videos. This structure allows you to learn
              topics step-by-step, one after the other. The videos follow the
              official documentation for React and Next.js, guiding you through
              the concepts in detail. Additionally, each module includes a
              project-based tutorial, ensuring that you follow a practical
              learning process. You will have the entire week to watch the
              weekly videos, and a live session will be held on a specific day
              for addressing your questions. If you manage to watch the videos
              in a shorter time, you'll have more time available for assignments
              throughout the week.
            </p>

            <svg
              className="lg:block hidden absolute 2xl:left-[50%] xl:left-[44%] lg:left-[33%]"
              width="432"
              height="125"
              fill="none"
              data-reveal="in-fade"
            >
              <path
                d="M1.633 1.29c.308 12.988-3.497 38 10.01 54.328 14.885 19.842 32.162 24.39 52.725 28.521 36.088 7.25 72.202 8.779 109.27 1.774 11.033-2.085 21.968-8.278 32.723-12.617 11.066-4.465 22.127-8.914 33.321-12.404 23.822-7.426 47.443-7.882 71.079-5.229 20.514 2.303 41.669 2.608 61.157 11.122 30.981 6.832 49.838 47.155 58.34 57.199"
                stroke="#ff8731"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="4 8 4 8"
              ></path>
            </svg>
          </div>

          {/* right */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://www.hablu-programmer.com/img/programming.png"
              alt=""
            />
          </div>
        </div>

        {/* 2 */}
        <div className="flex lg:gap-10 gap-5 items-center lg:flex-row-reverse flex-col-reverse">
          {/* left */}
          <div className="flex-1 relative">
            <div className="h-20 w-24 relative lg:mx-0 mx-auto">
              <span className="absolute text-4xl font-semibold text-white top-[50%] left-[50%] -translate-[50%] drop-shadow-[3px_3px_0px_#1e293b]">
                2
              </span>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 500">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M290.806 463.188C374.905 469.353 468.778 492.629 529.757 434.517C597.098 370.239 616.804 266.193 591.202 177.098C566.996 92.3192 491.898 30.0454 407.023 5.07419C335.338 -15.8893 270.48 32.9741 202.363 62.8779C128.971 95.248 31.0635 104.651 6.54775 180.797C-18.899 259.873 34.0116 342.956 93.1287 401.839C144.488 453.014 218.345 457.793 290.806 463.188Z"
                  fill="#3FB8A9"
                />
              </svg>
            </div>

            <h2 className="text-3xl dark:text-white  lg:text-left text-center font-semibold pt-8 pb-5">
              Self Assessment Through Examinations
            </h2>
            <p>
              Each video in the course is designed to provide you with valuable
              insights and is accompanied by a quiz and assignments at the end
              of every module to help you assess and reinforce what you've
              learned. After watching each video, you can immediately take the
              quiz to test your understanding. For the assignments, you will
              have 48-72 hours to complete them, giving you ample time to apply
              what you've learned. Once you've finished the assignment, you'll
              need to submit the GitHub link of your source code, along with the
              live project link for evaluation. All quiz and assignment scores
              will be carefully tracked, and a final result will be provided at
              the end of the course, reflecting your overall performance.
              However, please be aware that while the quiz scores will be
              included in the leaderboard, they will not be factored into the
              final result. This ensures that assignments, which reflect a
              deeper understanding and application of the concepts, will be the
              primary basis for your final evaluation.
            </p>

            <svg
              className="lg:flex hidden absolute 2xl:-left-[87%] 2xl:-bottom-[105%] xl:-left-[95%] xl:-bottom-[100%] lg:-left-[100%] lg:-bottom-[95%]"
              width="123%"
              height="100%"
              fill="none"
              data-reveal="in-fade"
            >
              <path
                d="M595 1c-5.312 32.44-14.005 32.911-28.493 54.17-14.488 22.676-40.566 37.32-86.927 53.383-16.359 9.183-58.29 17.919-77.329 20.941-27.961 4.438-57.257 4.44-85.565 4.82-22.571.303-45.071.327-67.53-2.002-48.556-5.035-97.306-19.13-146.184-19.13-21.265 0-43.185 6.042-63.875 10.529C21.527 127.522 16.22 128.888 1 138"
                stroke="#3fb8a9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="4 8 4 8"
              ></path>
            </svg>
          </div>

          {/* right */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://www.hablu-programmer.com/img/about-img.svg"
              alt=""
            />
          </div>
        </div>

        {/* 3 */}
        <div className="flex lg:gap-10 gap-5 items-center lg:flex-row flex-col-reverse">
          {/* left */}
          <div className="flex-1 relative">
            <div className="h-20 w-24 relative lg:mx-0 mx-auto">
              <span className="absolute text-4xl font-semibold text-white top-[50%] left-[50%] -translate-[50%] drop-shadow-[3px_3px_0px_#1e293b]">
                3
              </span>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 500">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M290.806 463.188C374.905 469.353 468.778 492.629 529.757 434.517C597.098 370.239 616.804 266.193 591.202 177.098C566.996 92.3192 491.898 30.0454 407.023 5.07419C335.338 -15.8893 270.48 32.9741 202.363 62.8779C128.971 95.248 31.0635 104.651 6.54775 180.797C-18.899 259.873 34.0116 342.956 93.1287 401.839C144.488 453.014 218.345 457.793 290.806 463.188Z"
                  fill="#309ee8"
                />
              </svg>
            </div>

            <h2 className="text-3xl dark:text-white lg:text-left text-center font-semibold pt-8 pb-5">
              Solutions Provided Post Exam
            </h2>
            <p>
              At the end of each quiz, you will be able to view the correct
              answers along with in-depth explanations, helping you to grasp the
              concepts more effectively. After the course concludes, all
              assignment solutions will be shared on GitHub, enabling you to
              explore and understand best practices and methodologies in more
              detail. We will conduct a thorough manual review of your submitted
              assignments and assign grades based on the quality of your work.
              Once the marksheet is prepared, you can conveniently access it
              through your personal dashboard on the website and reflect on
              areas for improvement throughout the course.
            </p>

            <svg
              className="lg:block 2xl:w-[390px] lg:w-[210px] hidden absolute 2xl:left-[50%] xl:left-[75%] lg:left-[65%] 2xl:top-[105%] xl:top-[102%]"
              height="215"
              fill="none"
              data-reveal="in-fade"
            >
              <path
                d="M1 1c7.255 23.316 12.132 49.428 31.848 67.45 11.32 10.349 16.684 18.72 32.52 24.395 13.96 5.003 51.325 18.606 66.469 5.364 7.463-6.526 16.624-20.318 3.781-26.82-6.446-3.262-17.016-2.214-24.201-1.616-5.314.443-6.954 5.964-8.739 9.258-5.374 9.922-2.814 24.311 4.874 32.256 17.363 17.942 41.593 32.2 69.242 35.71 22.248 2.823 45.197 1.977 67.561 4.041 34.213 3.157 70.887 7.217 104.031 15.577 18.72 4.721 37.381 9.547 56.133 14.18 10.798 2.669 27.801 6.337 37.726 11.137C463.073 201.574 473.557 214.827 479 218"
                stroke="#309ee8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="4 8 4 8"
              ></path>
            </svg>
          </div>

          {/* right */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://www.hablu-programmer.com/img/journey.png"
              alt=""
            />
          </div>
        </div>

        {/* 4 */}
        <div className="flex lg:gap-10 gap-5 items-center lg:flex-row-reverse flex-col-reverse">
          {/* left */}
          <div className="flex-1 relative">
            <div className="h-20 w-24 relative lg:mx-0 mx-auto">
              <span className="absolute text-4xl font-semibold text-white top-[50%] left-[50%] -translate-[50%] drop-shadow-[3px_3px_0px_#1e293b]">
                4
              </span>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 500">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M290.806 463.188C374.905 469.353 468.778 492.629 529.757 434.517C597.098 370.239 616.804 266.193 591.202 177.098C566.996 92.3192 491.898 30.0454 407.023 5.07419C335.338 -15.8893 270.48 32.9741 202.363 62.8779C128.971 95.248 31.0635 104.651 6.54775 180.797C-18.899 259.873 34.0116 342.956 93.1287 401.839C144.488 453.014 218.345 457.793 290.806 463.188Z"
                  fill="#ff735d"
                />
              </svg>
            </div>

            <h2 className="text-3xl dark:text-white  lg:text-left text-center  font-semibold pt-8 pb-5">
              Self Assessment Through Examinations
            </h2>
            <p>
              If you encounter any issues during the course, get stuck on a
              topic, or need further clarification, you can post your question
              on our Discord support channel at any time. Our dedicated support
              team will respond promptly to help you resolve the issue and keep
              you on track. If the issue cannot be addressed through text
              support, we will arrange a voice call via Discord or Google Meet
              to provide more detailed, personalized assistance, ensuring you
              fully understand the material. We are committed to being with you
              every step of the way, offering continuous support, guidance, and
              encouragement to help you succeed throughout the course. However,
              please note that while we are here to assist with your learning,
              we are unable to resolve any device-related issues or technical
              problems outside the scope of the course content.
            </p>

            <svg
              className="lg:flex hidden absolute 2xl:-left-[87%] 2xl:-bottom-[105%] xl:-left-[95%] xl:-bottom-[100%] lg:-left-[100%] lg:-bottom-[95%]"
              width="123%"
              height="100%"
              fill="none"
              data-reveal="in-fade"
            >
              <path
                d="M595 1c-5.312 32.44-14.005 32.911-28.493 54.17-14.488 22.676-40.566 37.32-86.927 53.383-16.359 9.183-58.29 17.919-77.329 20.941-27.961 4.438-57.257 4.44-85.565 4.82-22.571.303-45.071.327-67.53-2.002-48.556-5.035-97.306-19.13-146.184-19.13-21.265 0-43.185 6.042-63.875 10.529C21.527 127.522 16.22 128.888 1 138"
                stroke="#ff735d"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="4 8 4 8"
              ></path>
            </svg>
          </div>

          {/* right */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://www.hablu-programmer.com/img/coding-boy.svg"
              alt=""
            />
          </div>
        </div>

        {/* 5 */}
        <div className="flex lg:gap-10 gap-5 items-center lg:flex-row flex-col-reverse">
          {/* left */}
          <div className="flex-1 relative">
            <div className="h-20 w-24 relative lg:mx-0 mx-auto">
              <span className="absolute text-4xl font-semibold text-white top-[50%] left-[50%] -translate-[50%] drop-shadow-[3px_3px_0px_#1e293b]">
                5
              </span>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 500">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M290.806 463.188C374.905 469.353 468.778 492.629 529.757 434.517C597.098 370.239 616.804 266.193 591.202 177.098C566.996 92.3192 491.898 30.0454 407.023 5.07419C335.338 -15.8893 270.48 32.9741 202.363 62.8779C128.971 95.248 31.0635 104.651 6.54775 180.797C-18.899 259.873 34.0116 342.956 93.1287 401.839C144.488 453.014 218.345 457.793 290.806 463.188Z"
                  fill="#f8bd48"
                />
              </svg>
            </div>

            <h2 className="text-3xl dark:text-white  lg:text-left text-center font-semibold pt-8 pb-5">
              Weekly Live Discussion Sessions
            </h2>
            <p>
              Every week, we will host at least one live session designed to
              enhance your understanding of the course material. These sessions
              will cover key topics, provide in-depth explanations of assignment
              solutions, and give you the opportunity to ask questions and
              receive real-time feedback. You'll be able to interact with
              instructors and peers, deepening your understanding of the
              material. The schedule for each session will be shared in advance
              through our Discord support channel, ensuring you have enough time
              to prepare and fully participate.
            </p>

            <svg
              className="lg:block hidden absolute 2xl:left-[50%] xl:left-[44%] lg:left-[33%]"
              width="432"
              height="125"
              fill="none"
              data-reveal="in-fade"
            >
              <path
                d="M1.633 1.29c.308 12.988-3.497 38 10.01 54.328 14.885 19.842 32.162 24.39 52.725 28.521 36.088 7.25 72.202 8.779 109.27 1.774 11.033-2.085 21.968-8.278 32.723-12.617 11.066-4.465 22.127-8.914 33.321-12.404 23.822-7.426 47.443-7.882 71.079-5.229 20.514 2.303 41.669 2.608 61.157 11.122 30.981 6.832 49.838 47.155 58.34 57.199"
                stroke="#f8bd48"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="4 8 4 8"
              ></path>
            </svg>
          </div>

          {/* right */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://www.hablu-programmer.com/img/img-disendow-web-media.svg"
              alt=""
            />
          </div>
        </div>
 
        {/* 6 */}
        <div className="flex lg:gap-10 gap-5 items-center lg:flex-row-reverse flex-col-reverse">
          {/* left */}
          <div className="flex-1 relative">
            <div className="h-20 w-24 relative lg:mx-0 mx-auto">
              <span className="absolute text-4xl font-semibold text-white top-[50%] left-[50%] -translate-[50%] drop-shadow-[3px_3px_0px_#1e293b]">
                6
              </span>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 500">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M290.806 463.188C374.905 469.353 468.778 492.629 529.757 434.517C597.098 370.239 616.804 266.193 591.202 177.098C566.996 92.3192 491.898 30.0454 407.023 5.07419C335.338 -15.8893 270.48 32.9741 202.363 62.8779C128.971 95.248 31.0635 104.651 6.54775 180.797C-18.899 259.873 34.0116 342.956 93.1287 401.839C144.488 453.014 218.345 457.793 290.806 463.188Z"
                  fill="#8b5cf6"
                />
              </svg>
            </div>

            <h2 className="text-3xl dark:text-white  lg:text-left text-center  font-semibold pt-8 pb-5">
              Final Exam After Course
            </h2>
            <p>
              After completing all the modules in the course, an online final
              exam will be held to assess your overall understanding and
              application of the material. The final exam will include a
              significant assignment, where you will need to demonstrate your
              knowledge and skills acquired throughout the course. Once your
              assignment is reviewed and graded, we will publish the results,
              providing a comprehensive evaluation of your performance. Your
              final course result sheet will be generated by combining the marks
              from the final exam and all previous assignments, giving you a
              complete overview of your progress and achievements. Based on this
              final result, you will receive further guidance on any areas that
              need improvement, as well as a certificate of completion if you
              meet the required criteria. This final evaluation will ensure that
              you are well-prepared and confident in applying the knowledge
              gained throughout the course.
            </p>
          </div>

          {/* right */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://www.hablu-programmer.com/img/contact.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseFlow;
