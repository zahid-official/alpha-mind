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
        </div>
    );
};

export default course;