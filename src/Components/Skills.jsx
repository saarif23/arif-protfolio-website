import { FaCss3Alt, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiDaisyui, SiMongoose, SiFirebase  } from "react-icons/si";

import { RiJavascriptFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Container from "./Container";
const Skills = () => {
  const skills = [
    {
      logo: <SiTailwindcss />,
      level: "Advanced",
      count: 90,
    },
    {
      logo: <FaReact />,
      level: "Expert",
      count: 85,
    },
    {
      logo: <RiJavascriptFill />,
      level: "Expert",
      count: 70,
    },
    {
      logo: <FaHtml5 />,
      level: "Advanced",
      count: 90,
    },
    {
      logo: <FaCss3Alt />,
      level: "Expect",
      count: 80,
    },
   
   
    {
      logo: <SiMongodb />,
      level: "Intermediate",
      count: 60,
    },
    {
      logo: <FaNode />,
      level: "Intermediate",
      count: 50,
    },
    {
      logo: <SiDaisyui />,
      level: "Expert",
      count: 95,
    },
    {
      logo: <SiMongoose />,
      level: "Familiar",
      count: 40,
    },
    {
      logo: <SiFirebase  />,
      level: "Expert",
      count: 70,
    },
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <Container>
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Proficient in React and front-end technologies, dedicated <br /> to continual growth and exploration of emerging tools and frameworks</p>
      </div>
      <Swiper className="mySwiper my-10 "
        // slidesPerView={6}
        spaceBetween={30}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}

        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          // When screen size is >= 640px
        
          400: {
            slidesPerView: 1, // Show 1 slides
          },
          // When screen size is >= 640px
          640: {
            slidesPerView: 2, // Show 2 slides
          },
          // When screen size is >= 768px
          768: {
            slidesPerView: 3, // Show 3 slides
          },
          // When screen size is >= 1024px
          1024: {
            slidesPerView: 4, // Show 4 slides
          },
        }}


      >

        {skills?.map((skill, i) =>
          <SwiperSlide
            key={i}
            className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem]  bg-gray-900 p-10 rounded-xl flex flex-col items-center justify-center"
          >
            <div
              style={{
                background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
              }}
              className="w-32 h-32 flex items-center justify-center rounded-full"
            >
              <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                <div>{skill.logo}</div>
              </div>

            </div>
            <p className="text-xl mt-3">{skill.level}</p>
          </SwiperSlide>
        )
        }

      </Swiper>
      </Container>
    </section>
  );
};

export default Skills;
