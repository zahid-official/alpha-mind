import Image from "next/image";
import { TiStarburstOutline } from "react-icons/ti";
const Learn = () => {
  return (
    <div className="bg-[#0E1627] py-12 space-y-20">
      <div className="space-y-7">
        <div className="space-y-4">
          <div className="flex justify-center">
            <Image
              src="/peep5.712a2a49.svg"
              alt="Timeline Image"
              width={50}
              height={50}
              className="rounded-xl"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-center text-3xl font-bold">
              কোর্স করে <span className="text-[#07A8ED]">কি পাবেন</span>
            </h1>
            <p className="text-center text-gray-400">
              কোর্সটি শেষ করার পর আপনি আমাদের থেকে যা কিছু পাবেন
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto">
          {/* card 1 */}
          <div className="p-6 border-[0.5px] border-[#293242] bg-[#0F172A] rounded-md transition transform duration-500 delay-200 hover:scale-105 hover:shadow-lg">
            <div className="space-y-3">
              <div className="flex justify-center ">
                <span className="p-3 text-2xl rounded-full text-[#07A8ED] bg-[#0E263E]">
                  <TiStarburstOutline />
                </span>
              </div>
              <h1 className="font-bold text-center">কোর্স সার্টিফিকেট</h1>
              <p className="text-gray-400 text-center text-sm">
                যারা কোর্সের সবগুলো এসাইনমেন্ট & ফাইনাল পরীক্ষায় অংশগ্রহণ করে
                কমপক্ষে <span className="text-[#07A8ED]">50% মার্ক</span> পাবেন
                তারা কোর্স সার্টিফিকেট পাবেন। সার্টিফিকেটটির সফট কপি অনলাইনেই
                ডাউনলোড করতে পারবেন। কোন প্রিন্টেড কপি দেয়া হবে না।
              </p>
            </div>
          </div>
          {/* card 2 */}
          <div className="p-6 border-[0.5px] border-[#293242] bg-[#0F172A] rounded-md transition transform duration-500 delay-200 hover:scale-105 hover:shadow-lg">
            <div className="space-y-3">
              <div className="flex justify-center ">
                <span className="p-3 text-2xl rounded-full text-[#07A8ED] bg-[#0E263E]">
                  <TiStarburstOutline />
                </span>
              </div>
              <h1 className="font-bold text-center">লাইফটাইম কোর্স এক্সেস</h1>
              <p className="text-gray-400 text-center text-sm">
                যারা কোর্সটি একবার কিনবেন, তারা কোর্সের সকল কন্টেন্ট এর লাইফটাইম
                এক্সেস পাবেন এবং ভবিষ্যতের সকল আপডেট পেতে থাকবেন। এছাড়া প্রাইভেট
                সাপোর্ট চ্যানেলে আজীবন এক্সেস থেকে যাবে যেখানে কোর্সের পরে
                প্রশ্ন করলে আমরা উত্তর দেয়ার চেষ্টা করবো।
              </p>
            </div>
          </div>
          {/* card 3 */}
          <div className="p-6 border-[0.5px] border-[#293242] bg-[#0F172A] rounded-md transition transform duration-500 delay-200 hover:scale-105 hover:shadow-lg">
            <div className="space-y-3">
              <div className="flex justify-center ">
                <span className="p-3 text-2xl rounded-full text-[#07A8ED] bg-[#0E263E]">
                  <TiStarburstOutline />
                </span>
              </div>
              <h1 className="font-bold text-center">
                জব ইন্টারভিউ এর জন্য তৈরী হয়ে যাবেন
              </h1>
              <p className="text-gray-400 text-center text-sm">
                জব মার্কেটে রিয়াক্ট এবং নেক্সট জেএস এর ডিমান্ড অনেক বেশি।
                কোর্সটি ভালভাবে শেষ করার পর আপনার আত্মবিশ্বাস জব ইন্টারভিউতে ভাল
                করতে সাহায্য করবে।
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-20">
        {/* 1 */}
        <div className="w-11/12 mx-auto grid grid-cols-2 gap-6">
          <div>
            <Image
              src="/job-recommendation.jpeg"
              alt="Timeline Image"
              width={300}
              height={300}
              className="rounded-xl"
            />
          </div>
          <div className="space-y-5 content-center">
            <h2 className="text-2xl font-bold">
            কোর্সে ভাল করলে <span className="text-[#07A8ED]">জব রেকোমেন্ডেসন</span> লেটার
            </h2>
            <p className="text-sm text-gray-400">যারা কোর্সের বিভিন্ন এসাইনমেন্ট ও ফাইনাল পরীক্ষায় ভাল রেজাল্ট করবেন এবং সামগ্রিকভাবে <span className="text-[#07A8ED]">কমপক্ষে 70% মার্কস পাবেন</span>, তাদের কে নির্বাচন করে আমরা জব রেকোমেন্ডেশন লেটার লিখে দিবো। এই কোর্স কাউকে চাকরির নিশ্চয়তা দিতে পারবেনা কারণ কোন কোর্সই সেটা পারেনা। তবে পরিশ্রমী এবং নিবেদিতপ্রাণ লার্নারদের সঠিক গাইডলাইন অবশ্যই নিশ্চিত করবে এবং চাকরির ইন্টারভিউতে যেন তারা আত্মবিশ্বাস এর সাথে ভাল করতে পারে সে ব্যাপারে সাহায্য করবে।</p>
          </div>
        </div>
        {/* 2 */}
        <div className="w-11/12 mx-auto grid grid-cols-2 gap-6">
          
          <div className="space-y-5 content-center">
            <h2 className="text-2xl font-bold">
            কোর্সে ভাল করলে <span className="text-[#07A8ED]">জব রেকোমেন্ডেসন</span> লেটার
            </h2>
            <p className="text-sm text-gray-400">যারা কোর্সের বিভিন্ন এসাইনমেন্ট ও ফাইনাল পরীক্ষায় ভাল রেজাল্ট করবেন এবং সামগ্রিকভাবে <span className="text-[#07A8ED]">কমপক্ষে 70% মার্কস পাবেন</span>, তাদের কে নির্বাচন করে আমরা জব রেকোমেন্ডেশন লেটার লিখে দিবো। এই কোর্স কাউকে চাকরির নিশ্চয়তা দিতে পারবেনা কারণ কোন কোর্সই সেটা পারেনা। তবে পরিশ্রমী এবং নিবেদিতপ্রাণ লার্নারদের সঠিক গাইডলাইন অবশ্যই নিশ্চিত করবে এবং চাকরির ইন্টারভিউতে যেন তারা আত্মবিশ্বাস এর সাথে ভাল করতে পারে সে ব্যাপারে সাহায্য করবে।</p>
          </div>
          <div className="flex justify-end">
            <Image
              src="/excellence.jpeg"
              alt="Timeline Image"
              width={300}
              height={300}
              className="rounded-xl"
            />
          </div>
        </div>
        {/* 3 */}
        <div className="w-11/12 mx-auto grid grid-cols-2 gap-6">
          <div>
            <Image
              src="/tpaccess.jpeg"
              alt="Timeline Image"
              width={300}
              height={300}
              className="rounded-xl"
            />
          </div>
          <div className="space-y-5 content-center">
            <h2 className="text-2xl font-bold">
            কোর্সে ভাল করলে <span className="text-[#07A8ED]">জব রেকোমেন্ডেসন</span> লেটার
            </h2>
            <p className="text-sm text-gray-400">যারা কোর্সের বিভিন্ন এসাইনমেন্ট ও ফাইনাল পরীক্ষায় ভাল রেজাল্ট করবেন এবং সামগ্রিকভাবে <span className="text-[#07A8ED]">কমপক্ষে 70% মার্কস পাবেন</span>, তাদের কে নির্বাচন করে আমরা জব রেকোমেন্ডেশন লেটার লিখে দিবো। এই কোর্স কাউকে চাকরির নিশ্চয়তা দিতে পারবেনা কারণ কোন কোর্সই সেটা পারেনা। তবে পরিশ্রমী এবং নিবেদিতপ্রাণ লার্নারদের সঠিক গাইডলাইন অবশ্যই নিশ্চিত করবে এবং চাকরির ইন্টারভিউতে যেন তারা আত্মবিশ্বাস এর সাথে ভাল করতে পারে সে ব্যাপারে সাহায্য করবে।</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
