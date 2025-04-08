import ContactTeam from "./components/ContactTeam";
import Curriculum from "./components/Curriculum";
import Hero from "./components/Hero";
import Rewards from "./components/Rewards";
import Schedule from "./components/Schedule";
import Specialty from "./components/Specialty";


const course = () => {
    return (
        <div>
            {/* hero */}
            <Hero></Hero>

            {/* schedule */}
            <Schedule></Schedule>

            {/* specialty */}
            <Specialty></Specialty>

            {/* curriculum */}
            <Curriculum></Curriculum>

            {/* rewards */}
            <Rewards></Rewards>

            {/* contactTeam */}
            <ContactTeam></ContactTeam>
        </div>
    );
};

export default course;