import Curriculum from "./components/Curriculum";
import Hero from "./components/Hero";
import Schedule from "./components/Schedule";
import Specialty from "./components/Specialty";


const course = () => {
    return (
        <div>
            {/* hero */}
            <Hero></Hero>

            {/* Schedule */}
            <Schedule></Schedule>

            {/* Specialty */}
            <Specialty></Specialty>

            {/* curriculum */}
            <Curriculum></Curriculum>
        </div>
    );
};

export default course;