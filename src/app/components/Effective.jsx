import Image from "next/image";
import sectionImage from "../../../public/Telecommuting-pana.png";
import sectionImage2 from "../../../public/Helpful sign-bro.png";
const Effective = () => {
  const timelineData = [
    {
      title: "Interactive Live & Recording Classes",
      description:
        "Learn Something New Everyday By Watching Recorded Conceptual Classes And Join Live Classes For Clearing Your Doubts.",
    },
    {
      title: "Module Based Study Plan",
      description:
        "There Is No Chance Of Falling Behind, With A Module-Wise Structured Study Plan Packed With Quizzes, Assignments & Practice Home Work For Interview Preparation.",
    },
    {
      title: "Conceptual Crash Course",
      description:
        "You Are Not Just Enrolling In One Course. It's A Mission To Learn Lifelong Programming Journey With Hablu Programmer.",
    },
    {
      title: "Freelancing & Job Placement Guide",
      description:
        "Only Serious Course Completers Will Get A Freelancing Guide And Job Placement Support From Zero To Until Success Your Career.",
    },
  ];

  return (
    <div className="mt-20 min-h-screen">
      <div className="space-y-3.5">
        <div className="flex justify-center">
          <Image
            src={sectionImage2}
            alt="Timeline Image"
            width={150}
            height={150}
            className="rounded-xl"
          />
        </div>
        <h1 className="text-center text-3xl font-bold">
          Effective <span className="text-[#07A8ED]">Personalized</span> Learning
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between py-16 px-6 space-y-12 md:space-y-0">
        <div className="w-full md:w-1/2 space-y-8">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 relative group"
            >
              {/* Circle */}
              <div className="w-4 h-4 bg-[#07A8ED] rounded-full mt-1.5"></div>

              {/* Line */}
              {index !== timelineData.length - 1 && (
                <div className="w-[2px] h-full bg-gray-300 absolute left-[7px] top-6 group-hover:bg-[#07A8ED]"></div>
              )}

              {/* Content */}
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#07A8ED]">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={sectionImage}
            alt="Timeline Image"
            width={500}
            height={700}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Effective;
