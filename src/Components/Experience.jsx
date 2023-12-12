/* eslint-disable react/no-unescaped-entities */
import Container from "./Container";


const Experience = () => {
    return (
        <section id="experience" className="py-10 bg-gray-800">
            <Container>
                <div className="text-center pb-10">
                    <h3 className="text-4xl font-bold"> Education and <span className="text-cyan-500"> Experience</span></h3>
                </div>
                <div className="flex max-md:flex-col justify-center items-center gap-3 md:gap-10 pb-8">
                    <div className="flex-1 text-center md:text-right md:border-r-4 pr-10 max-md:border-b-4 max-md:pb-5 border-gray-900">
                        <p className="text-cyan-400 font-bold text-2xl">Bachelor Dgree ( BSS )</p>
                        <p>Jan 2019 to Dec 2025 || National University</p>
                    </div>
                    <div className="flex-1 text-center md:text-left ">
                        <p className="w-full max-md:mx-auto text-center md:text-justify">The Bachelor's Degree encompasses a comprehensive and in-depth study of various disciplines within the social sciences. Throughout this four-academic-year journey, students delve into the intricate workings of human behavior, societal structures, cultural dynamics, and the broader impact of these factors on local and global communities.</p>
                    </div>
                </div>
                <div className="flex flex-row-reverse max-md:flex-col justify-center items-center gap-3 md:gap-10 pb-8">
                    <div className="flex-1 text-left md:border-l-4 pl-10 max-md:border-b-4 max-md:pb-5 border-gray-900">
                        <p className="text-cyan-400 font-bold text-2xl">Complete Web Development Course  With Jhankar Mahbub</p>
                        <p>Jun 2023 to Dec 2023 || Programming Hero</p>
                    </div>
                    <div className="flex-1 text-center md:text-right ">
                        <p className="text-center md:text-justify">The six-month web development course covers HTML, CSS, JavaScript, React.js (front-end), Node.js, Express.js (back-end), databases, and deployment. It combines theory with hands-on projects, coding exercises, and real-world simulations, focusing on responsive web design and problem-solving. I gained  practical experience, honing skills for industry scenarios.</p>
                    </div>
                </div>

            </Container>
        </section>
    );
};

export default Experience;