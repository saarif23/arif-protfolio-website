import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project_person from "../assets/project_person1.png";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, } from 'swiper/modules';


const Project = () => {
    const projects = [
        {
            img: project1,
            name: "Animal Care Agency",
            github_link: "https://github.com/saarif23/pet-adoption-client",
            live_link: "https://fantastic-muffin-b6e116.netlify.app",
        },
        {
            img: project2,
            name: "Knowledge Cafe",
            github_link: "https://github.com/saarif23/library-management-system",
            live_link: "https://bespoke-piroshki-ccd535.netlify.app",
        },
        {
            img: project3,
            name: "E-commerce",
            github_link: "https://github.com/saarif23/e-commmers-brandshop-client",
            live_link: "https://653400a257ebb9455c9f6ebb--leafy-puffpuff-46165b.netlify.app",
        },
    ];
    return (
        <section id="projects" className="py-10 text-white">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    My <span className="text-cyan-600">Projects</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
            </div>
            <br />
            <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
                <div className="lg:w-2/3 w-full">
                    <Swiper
                        slidesPerview={1.2}
                        spaceBetween={20}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                    >
                        {projects.map((project_info, i) => (
                            <SwiperSlide key={i}>
                                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                                    <img src={project_info.img} alt="" className="rounded-lg" />
                                    <h3 className="text-xl my-4">{project_info.name}</h3>
                                    <div className="flex gap-3">
                                        <a
                                            href={project_info.github_link}
                                            target="_blank"
                                            className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block" rel="noreferrer"
                                        >
                                            Github
                                        </a>
                                        <a
                                            href={project_info.live_link}
                                            target="_blank"
                                            className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block" rel="noreferrer"
                                        >
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="lg:block hidden">
                    <img src={project_person} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Project;
