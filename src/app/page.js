import Image from "next/image";
import CourseDetailsHome from "./components/CourseDetailsHome";
import Effective from "./components/Effective";
import CourseOverview from "./components/CourseOverview";
import Learn from "./components/Learn";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <h2>Hello World!</h2>
        {/* home course details */}
        <CourseDetailsHome></CourseDetailsHome>
        {/* Effective section */}
        <Effective></Effective>
        {/* course Overview */}
        <CourseOverview></CourseOverview>
        {/* learn */}
        <Learn></Learn>
      </div>
    </>
  );
}
