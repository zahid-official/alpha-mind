import React from "react";
import { FaPhone } from "react-icons/fa";

const ContactTeam = () => {
  return (
    <div className="bg-[#fafafa] dark:bg-[#090a22]">
      <div className=" flex gap-0 lg:flex-row flex-col-reverse justify-center items-center container mx-auto py-36 px-5">
        {/* left */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold pb-5 dark:text-white text-center lg:text-left">
            Please Contact With Our <br className="sm:block hidden" />{" "}
            <span className="bg-gradient-to-r from-[#3492f1] to-[#44d285] bg-clip-text text-transparent">
              Support Team
            </span>
          </h2>
          <p className="pb-10">
            We Have Created A Strong Support Team To Help You 16 Hours Everyday.
            For This Course We Have a Private Discord Server, Private Facebook
            Group And Live Support Team. Where Course Instructor Eshan Ahmed
            Ahad And 4-5 Others Software Engineer Waiting For To Support You. We
            promise to answer your questions within 6 hours maximum. But in most
            cases you will get the answer in less time than that. Besides, every
            week there will be live session on the discussed module where you
            can directly ask questions and get answers.
          </p>

          <div className=" text-center lg:text-left">
            <button className="btn text-base font-semibold h-12 rounded-full sm:mt-0 z-10 bg-[#006fee] text-white border-none shadow-2xl shadow-[#0066db] px-8 ">
              <FaPhone size={18} /> Call Us
            </button>
          </div>
        </div>

        {/* right */}
        <div className="flex-1">
          <img src="https://www.hablu-programmer.com/img/contact.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactTeam;
