import aboutImg from "../assets/aboutimg.png";
import Container from "./Container";
import { MdDownload } from "react-icons/md";
const About = () => {
   
    return (
        <Container>
            <section id="about" className="py-10 text-white">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-Poppins font-extrabold">
                    About <span className="text-cyan-600">Me</span>
                </h3>
                <p className="text-gray-500 my-3 font-semibold  text-lg">Driven React Frontend Developer with a Passion for Continuous Growth</p>
                <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
                    <div className="p-2">
                        <div className="text-gray-300 font-medium my-3">
                            <p className="text-justify leading-7 w-11/12 mx-auto">
                           Hi, <br /> I am Arif Hossain, a dedicated professional React Frontend Developer with a profound enthusiasm for continuous learning. My insatiable curiosity drives me to explore emerging technologies persistently. Committed to growth, my aspiration is to ascend to the position of a senior frontend developer within the next two years, and I am resolutely focused on realizing this goal. Coding is a passion of mine—I engage in coding activities regularly, striving to create something new on a daily basis. Below is a snapshot of my GitHub activity for each day.
                            </p>
                            <div className="flex mt-10 items-center gap-7">
                                {/* {info.map((content) => (
                                    <div key={content.text}>
                                        <h3 className="md:text-4xl text-2xl font-semibold text-white">
                                            {content.count}
                                            <span className="text-cyan-600">+</span>{" "}
                                        </h3>
                                        <span className="md:text-base text-xs">{content.text}</span>
                                    </div>
                                ))} */}
                              <a href="https://github.com/saarif23"><img src="https://github-readme-streak-stats.herokuapp.com?user=saarif23&theme=transparent&hide_border=true&date_format=j%20M%5B%20Y%5D&card_width=499" alt="GitHub Streak" /></a>

                            </div>
                            <br />
                            <br />
                            <a href="./src/assets/Full_Stack_Developer_Resume_of_Arif_Hossain.pdf" download>
                                <button className="btn-primary"> <MdDownload/>Download Resume</button>
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
                        <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
                            <img
                                src={aboutImg}
                                alt=""
                                className="w-full object-cover bg-cyan-600 rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>





        </section>
        </Container>
    );
};

export default About;
