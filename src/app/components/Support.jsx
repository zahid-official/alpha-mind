

const Support = () => {
    return (
        <div className=" flex gap-10 container mx-auto pb-28 px-5">
            {/* left */}
            <div className="flex-1">
                <h2 className="text-4xl font-bold pb-5">24/7 Support Available via <br /> Discord Channel</h2>
                <p>We’ve set up a private Discord support channel for this course, where course instructors Sumit Saha and Tapas Adhikari, along with 5-6 other experienced web developers, will be available to answer your questions directly. We are committed to responding to your inquiries within a maximum of 24 hours, though in most cases, you'll receive answers much sooner. Additionally, there will be weekly live sessions covering the discussed module, where you can ask questions and get immediate answers.</p>

                <div className="space-x-5 pt-10">
                    <button className="btn rounded-full">Support Channel</button>
                    <button className="btn rounded-full">Support Channel</button>
                </div>
            </div>

            {/* right */}
            <div className="flex-1">
                <img src="https://www.hablu-programmer.com/img/coding-boy.svg" alt="" />
            </div>
        </div>
    );
};

export default Support;