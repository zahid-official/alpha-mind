import React from "react";

const FAQ = () => {
  return (
    <div className="flex gap-12 flex-col lg:flex-row justify-center items-center container mx-auto lg:pt-10 pb-40 px-5">
      {/* left */}
      <div className="flex-1">
        <div >
          <img
            src="https://learnwithsumit.com/_next/static/media/faq.8116aa7d.svg"
            alt="" className="lg:mx-0 mx-auto"
          />
        </div>
        <h2 className="text-4xl font-bold py-5 text-white lg:text-left text-center">
          Commonly Asked{" "}
          <span className="bg-gradient-to-r from-[#3492f1] to-[#44d285] bg-clip-text text-transparent">
            Questions
          </span>
        </h2>
        <p>
          We’ve compiled answers to some of the most frequently asked questions
          for your convenience. Before reaching out to us, we kindly encourage
          you to go through this list. It might save you time and help you get
          instant answers without having to wait.
        </p>
      </div>

      {/* right */}
      <div className="flex-1 max-h-96 overflow-y-scroll">
        {/* 1 */}
        <div className="collapse collapse-arrow border-b rounded-none border-[#1e293b]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            What are the prerequisites for enrolling in this course?
          </div>
          <div className="collapse-content text-sm">
            Before enrolling in this course, the most important thing you need
            is a strong reading habit. You should be able to carefully read and
            follow detailed instructions or explanations, as this will be
            essential throughout the learning process. In terms of technical
            skills, you should have a basic understanding of HTML, CSS, and
            JavaScript, along with familiarity with modern JavaScript (ES6 and
            beyond). Knowledge of DOM manipulation, Tailwind CSS, npm, and
            version control using Git and GitHub is also required. Additionally,
            you should be comfortable working with the VSCode editor. Having
            these skills will ensure you can follow along effectively and get
            the most value from the course.
          </div>
        </div>

        {/* 2 */}
        <div className="collapse collapse-arrow border-b rounded-none border-[#1e293b]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            When does the first class of the course start?
          </div>
          <div className="collapse-content text-sm">
            The starting date of the first class will be announced in advance.
            Please keep an eye on your email or our official communication
            channels for updates.
          </div>
        </div>

        {/* 3 */}
        <div className="collapse collapse-arrow border-b rounded-none border-[#1e293b]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            How will the course videos be provided?
          </div>
          <div className="collapse-content text-sm">
            All course videos will be shared through our learning platform.
            You’ll get access to them after enrolling, and you can watch them
            anytime at your convenience. Further details will be provided once
            the course begins.
          </div>
        </div>

        {/* 4 */}
        <div className="collapse collapse-arrow border-b rounded-none border-[#1e293b]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            How do I participate in the course exams?
          </div>
          <div className="collapse-content text-sm">
            All course exams will be conducted online through our learning
            platform. Detailed instructions and schedules will be shared before
            each exam. You’ll need to follow the guidelines and submit your
            answers within the given timeframe.
          </div>
        </div>

        {/* 5 */}
        <div className="collapse collapse-arrow border-b rounded-none border-[#1e293b]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            How can I participate in the course exams?
          </div>
          <div className="collapse-content text-sm">
            Course exams will be conducted online, and you can take them through
            our designated platform. Detailed instructions, including the
            schedule and submission process, will be provided ahead of time.
            Make sure to follow the guidelines and submit your answers within
            the given deadline.
          </div>
        </div>

        {/* 6 */}
        <div className="collapse collapse-arrow border-b rounded-none border-[#1e293b]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            How long will the course run?
          </div>
          <div className="collapse-content text-sm">
            The course will run for 6 months. You’ll receive a detailed schedule
            with all important dates after enrolling. This will help you plan
            your learning and stay on track throughout the course.
          </div>
        </div>

        {/* 7 */}
        <div className="collapse collapse-arrow border-b rounded-none border-[#1e293b]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            What do I need in order to take this course?
          </div>
          <div className="collapse-content text-sm">
            To successfully complete the course, you'll need a stable internet
            connection, a computer or device capable of running the necessary
            software, and the required tools (such as a web browser and any
            other specified software). Additional requirements, like prior
            knowledge of certain topics, will be mentioned in the course
            outline. Please make sure to check these before starting.
          </div>
        </div>

        {/* 8 */}
        <div className="collapse collapse-arrow border-b rounded-none border-[#1e293b]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            What do I need in order to take this course?
          </div>
          <div className="collapse-content text-sm">
            To take this course, you’ll need a computer or device with internet
            access, along with the necessary software (such as a modern web
            browser and a code editor, if applicable). You should also meet any
            prior knowledge or technical requirements outlined in the course
            description. Make sure to review these details before starting to
            ensure you’re fully prepared.
          </div>
        </div>

        {/* 9 */}
        <div className="collapse collapse-arrow border-b rounded-none border-[#1e293b]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Who are the course instructors, and what will each instructor teach?
          </div>
          <div className="collapse-content text-sm">
            The course will be taught by a team of experienced instructors, each
            specializing in different areas of the course content. Specific
            details about each instructor and the topics they will cover will be
            shared in the course syllabus. You’ll be able to review the
            instructor profiles and the sections they will teach once the course
            begins.
          </div>
        </div>

        {/* 10 */}
        <div className="collapse collapse-arrow border-b rounded-none border-[#1e293b]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            What is the course fee?
          </div>
          <div className="collapse-content text-sm">
            The course fee is 5600-tk. You can find more details about payment
            options, discounts, and available scholarships on our registration
            page.
          </div>
        </div>

        {/* 11 */}
        <div className="collapse collapse-arrow border-b rounded-none border-[#1e293b]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Is the course fee refundable?
          </div>
          <div className="collapse-content text-sm">
            The course fee is non-refundable. If refundable, specific conditions
            and timelines for requesting a refund will apply. Please refer to
            our refund policy page for more detailed information on eligibility
            and the refund process.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
