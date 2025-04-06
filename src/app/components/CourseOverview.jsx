import Image from "next/image";
import mainImg from "../../../public/Prerequisite.b0ff46bc.svg";

const CourseOverview = () => {
  const courses = [
    
    {
      title: "মডার্ন জাভাস্ক্রিপ্ট",
      description: "মডার্ন জাভাস্ক্রিপ্ট সম্পর্কে ধারণা থাকতে হবে।",
      icon: "/dom.127c6c2c.svg",
    },
  ];

  return (
    <div className="bg-[#0F172A] p-8">
      <div className="grid md:grid-cols-3 gap-12">
        <div className="col-span-1">
          <div className="space-y-4">
            <div className="flex justify-center items-center">
              <Image
                src={mainImg}
                alt="Timeline Image"
                width={100}
                height={100}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">
                কোর্স করতে <span className="text-[#07A8ED]">যা জানতে হবে</span>
              </h2>
              <p className="text-sm text-gray-400">
                এই কোর্সটি শুরু করার জন্য, কোর্সটি করতে হলে উল্লেখিত বিষয়গুলো
                সম্পর্কে আপনার ধারণা থাকতে হবে। এই কোর্স শুরু করার আগে আপনি
                বিষয়গুলো জানেন না জানলে, তাহলে রেকমেন্ডেড লিঙ্ক থেকে শিখে নিতে
                পারেন।
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1 */}
          <div className="p-8 bg-[#0B1120] border-[0.5px] border-[#293242] rounded-md transition transform duration-500 delay-200 hover:scale-105 hover:shadow-lg">
            <div className="space-y-3">
              <div className="flex justify-center">
                <Image
                  src="/reading-habit.1d57dd16.svg"
                  alt="Timeline Image"
                  width={60}
                  height={60}
                  className="rounded-full bg-[#15803D] p-3"
                />
              </div>
              <h1 className="font-bold text-center">পাঠের অভ্যাস</h1>
              <p className="text-gray-400 text-sm text-center">
              ছোট হোক বা বড় - যেকোনো তথ্য মনোযোগ দিয়ে পুরোটা পড়ার অভ্যাস থাকতে হবে।
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="p-8 border-[0.5px] border-[#293242] bg-[#0B1120] rounded-md transition transform duration-500 delay-200 hover:scale-105 hover:shadow-lg">
            <div className="space-y-3">
              <div className="flex justify-center ">
                <Image
                  src="/html5.413279f8.svg"
                  alt="Timeline Image"
                  width={60}
                  height={60}
                  className="p-3 rounded-full bg-[#EA580C]"
                />
              </div>
              <h1 className="font-bold text-center">বেসিক এইচটিএমএল</h1>
              <p className="text-gray-400 text-sm text-center">
                টেইলউইন্ড সিএসএস সম্পর্কে প্রাথমিক ধারণা থাকতে হবে।
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="p-8 border-[0.5px] border-[#293242] bg-[#0B1120] rounded-md transition transform duration-500 delay-200 hover:scale-105 hover:shadow-lg">
            <div className="space-y-3">
              <div className="flex justify-center ">
                <Image
                  src="/css.ca950bea.svg"
                  alt="Timeline Image"
                  width={60}
                  height={60}
                  className="p-3 rounded-full bg-[#3B82F6]"
                />
              </div>
              <h1 className="font-bold text-center">বেসিক সিএসএস</h1>
              <p className="text-gray-400 text-sm text-center">
              সিএসএস সম্পর্কে প্রাথমিক ধারণা থাকতে হবে।
              </p>
            </div>
          </div>
          {/* 4 */}
          <div className="p-8 border-[0.5px] border-[#293242] bg-[#0B1120] rounded-md transition transform duration-500 delay-200 hover:scale-105 hover:shadow-lg">
            <div className="space-y-3">
              <div className="flex justify-center ">
                <Image
                  src="/tailwind-white.be708b8d.svg"
                  alt="Timeline Image"
                  width={60}
                  height={60}
                  className="p-3 rounded-full bg-[#6366F1]"
                />
              </div>
              <h1 className="font-bold text-center">টেলউইন্ড সিএসএস</h1>
              <p className="text-gray-400 text-sm text-center">
              টেলউইন্ড সিএসএস সম্পর্কে প্রাথমিক ধারণা থাকতে হবে।
              </p>
            </div>
          </div>
          {/* 5 */}
          <div className="p-8 border-[0.5px] border-[#293242] bg-[#0B1120] rounded-md transition transform duration-500 delay-200 hover:scale-105 hover:shadow-lg">
            <div className="space-y-3">
              <div className="flex justify-center ">
                <Image
                  src="/javascript.452e2fce.svg"
                  alt="Timeline Image"
                  width={60}
                  height={60}
                  className="p-3 rounded-full bg-[#EAB308]"
                />
              </div>
              <h1 className="font-bold text-center">জাভাস্ক্রিপ্ট</h1>
              <p className="text-gray-400 text-center text-sm">
              জাভাস্ক্রিপ্ট সম্পর্কে ধারণা থাকতে হবে।
              </p>
            </div>
          </div>
          {/* 7 */}
          <div className="p-8 border-[0.5px] border-[#293242] bg-[#0B1120] rounded-md transition transform duration-500 delay-200 hover:scale-105 hover:shadow-lg">
            <div className="space-y-3">
              <div className="flex justify-center ">
                <Image
                  src="/dom.127c6c2c.svg"
                  alt="Timeline Image"
                  width={60}
                  height={60}
                  className="p-3 rounded-full bg-[#DB2777]"
                />
              </div>
              <h1 className="font-bold text-center">মডার্ন জাভাস্ক্রিপ্ট</h1>
              <p className="text-gray-400 text-center text-sm">
              মডার্ন জাভাস্ক্রিপ্ট সম্পর্কে ধারণা থাকতে হবে।
              </p>
            </div>
          </div>
          {/* 8 */}
          <div className="p-8 border-[0.5px] border-[#293242] bg-[#0B1120] rounded-md transition transform duration-500 delay-200 hover:scale-105 hover:shadow-lg">
            <div className="space-y-3">
              <div className="flex justify-center ">
                <Image
                  src="/dom-2.fdba76a0.svg"
                  alt="Timeline Image"
                  width={60}
                  height={60}
                  className="p-3 rounded-full bg-[#D97706]"
                />
              </div>
              <h1 className="font-bold text-center">জাভাস্ক্রিপ্ট ডম</h1>
              <p className="text-gray-400 text-center text-sm">
              ডকুমেন্ট অবজেক্ট মডেল (ডম) সম্পর্কে প্রাথমিক ধারণা থাকতে হবে।
              </p>
            </div>
          </div>
          {/* 9 */}
          <div className="p-8 border-[0.5px] border-[#293242] bg-[#0B1120] rounded-md transition transform duration-500 delay-200 hover:scale-105 hover:shadow-lg">
            <div className="space-y-3">
              <div className="flex justify-center ">
                <Image
                  src="/github.2fd17350.svg"
                  alt="Timeline Image"
                  width={60}
                  height={60}
                  className="p-3 rounded-full bg-[#334155]"
                />
              </div>
              <h1 className="font-bold text-center">বেসিক গিট ও গিটহাব</h1>
              <p className="text-gray-400 text-center text-sm">
              গিট ও গিটহাব সম্পর্কে প্রাথমিক ধারণা থাকতে হবে।
              </p>
            </div>
          </div>
          {/* 10 */}
          <div className="p-8 border-[0.5px] border-[#293242] bg-[#0B1120] rounded-md transition transform duration-500 delay-200 hover:scale-105 hover:shadow-lg">
            <div className="space-y-3">
              <div className="flex justify-center ">
                <Image
                  src="/vscode.e7a15723.svg"
                  alt="Timeline Image"
                  width={60}
                  height={60}
                  className="p-3 rounded-full bg-[#0284C7]"
                />
              </div>
              <h1 className="font-bold text-center">ভিএস কোড এডিটর</h1>
              <p className="text-gray-400 text-center text-sm">
              ভিএস কোড এডিটরে কাজ করার অভ্যাস থাকতে হবে।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
