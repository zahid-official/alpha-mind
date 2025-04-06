import homeCourseDetailsImage from "../../../public/peep1.svg";
import { IoVideocamOutline } from "react-icons/io5";
import { VscDesktopDownload, VscTasklist } from "react-icons/vsc";
import { FaCode } from "react-icons/fa6";
import { SlPeople } from "react-icons/sl";
import { RiLayoutTopLine } from "react-icons/ri";
import Image from "next/image";
const CourseDetailsHome = () => {
  return (
    <div className="space-y-14 min-h-screen">
      <div className="space-y-3.5">
        <div className="flex justify-center">
          <Image
            src={homeCourseDetailsImage}
            alt="Timeline Image"
            width={100}
            height={100}
            className="rounded-xl shadow-lg"
          />
        </div>
        <h2 className="text-center text-3xl font-bold">
          এক নজরে আমাদের রিয়্যাক্টিভ{" "}
          <span className="text-[#07A8ED]">এক্সিলারেটর</span> কোর্স
        </h2>
        <p className="text-center text-gray-400">এই কোর্সে যা যা থাকছে</p>
      </div>
      <div className="p-8 bg-[#172131] rounded-2xl">
        <div className="grid md:grid-cols-3 ">
          <div className="text-center p-8 border-b-[0.5px] border-r-[0.5px] border-[#293242]">
            <div className="space-y-4 transition transform duration-500 delay-200 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center">
                <span className="text-[#07A8ED] text-6xl">
                  <IoVideocamOutline />
                </span>
              </div>
              <h1 className="text-center font-bold">15 টি মডিউলে 225+ ভিডিও</h1>
              <p className="text-center text-gray-400">
                ধাপে ধাপে শেখার জন্য কোর্সটি 15টি মডিউলে ও 225+ ভিডিওতে ভাগ করে
                সাজানো হয়েছে এবং ডকুমেন্টেশন ধরে ধরে শিখানো হয়েছে।
              </p>
            </div>
          </div>
          <div className="text-center p-8 border-b-[0.5px] border-[#293242]">
            <div className="space-y-4 transition transform duration-500 delay-200 hover:scale-105">
              <div className="flex justify-center">
                <span className="text-[#07A8ED] text-6xl">
                  <VscDesktopDownload />
                </span>
              </div>
              <h1 className="text-center font-bold">
                130+ ঘণ্টার 50GB+ রেকোর্ডেড কন্টেন্ট
              </h1>
              <p className="text-center text-gray-400">
                সময় এবং ব্যান্ডউইডথ খরচ এর বিষয়টি বিবেচনা করে ভিডিও সাইজ এবং
                ডিউরেশন অপটিমাইজ করা হয়েছে।
              </p>
            </div>
          </div>
          <div className="text-center p-8 border-b-[0.5px] border-l-[0.5px] border-[#293242]">
            <div className="space-y-4 transition transform duration-500 delay-200 hover:scale-105">
              <div className="flex justify-center">
                <span className="text-[#07A8ED] text-6xl">
                  <VscTasklist />
                </span>
              </div>
              <h1 className="text-center font-bold">100+ টি কুইজ</h1>
              <p className="text-center text-gray-400">
                আপনারা যেন শেখার সাথে সাথে নিজেদের প্রোগ্রেস যাচাই করতে পারেন
                সেজন্য প্রতিটি ভিডিও শেষে ব্যাখ্যা ও উত্তর সহ কুইজ থাকবে।
              </p>
            </div>
          </div>
          <div className="text-center p-8 border-r-[0.5px] border-[#293242]">
            <div className="space-y-4 transition transform duration-500 delay-200 hover:scale-105">
              <div className="flex justify-center">
                <span className="text-[#07A8ED] text-6xl">
                  <FaCode />
                </span>
              </div>
              <h1 className="text-center font-bold">9 টি এসাইনমেন্ট</h1>
              <p className="text-center text-gray-400">
                প্রতিটি মডিউল শেষেই থাকবে এসাইনমেন্ট যেগুলো আপনারা নিজে করবেন।
                এসাইনমেন্ট-এর সল্যুশন কোর্স শেষে গিটহাবে শেয়ার করে দেয়া হবে যেন
                নিজেরা প্র্যাকটিস করতে পারেন।
              </p>
            </div>
          </div>
          <div className="text-center p-8">
            <div className="space-y-4 transition transform duration-500 delay-200 hover:scale-105">
              <div className="flex justify-center">
                <span className="text-[#07A8ED] text-6xl">
                  <SlPeople />
                </span>
              </div>
              <h1 className="text-center font-bold">7 টি লাইভ সেশন</h1>
              <p className="text-center text-gray-400">
                এসাইনমেন্টের উপর গুরুত্ত্বপূর্ণ টপিক নিয়ে আলোচনা সহ প্রতি
                সপ্তাহে লাইভ সেশন থাকবে যেখানে আপনারা বিভিন্ন টপিক নিয়ে সরাসরি
                প্রশ্ন করতে পারবেন।
              </p>
            </div>
          </div>
          <div className="text-center p-8 border-l-[0.5px] border-[#293242]">
            <div className="space-y-4 transition transform duration-500 delay-200 hover:scale-105">
              <div className="flex justify-center">
                <span className="text-[#07A8ED] text-6xl">
                  <RiLayoutTopLine />
                </span>
              </div>
              <h1 className="text-center font-bold">11 টি প্রজেক্ট</h1>
              <p className="text-center text-gray-400">
                পুরো কোর্সটিতে আমরা প্রজেক্ট ভিত্তিক লার্নিং প্রসেস ফলো করেছি।
                কোর্সে আমরা মিলেমিশে 15 টি প্রজেক্ট করবো। কিছু প্রজেক্ট সরাসরি
                মডিউলে করে দেখানো হবে এবং কিছু নিজেরা করবেন।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsHome;
