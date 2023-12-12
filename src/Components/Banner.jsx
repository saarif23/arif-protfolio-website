import bannerImg2 from "../assets/hero-1.png"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin,  } from "react-icons/fa";

const Banner = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex py-10 md:flex-row flex-col items-center"
        >
            <div className="flex-1 flex items-center justify-center h-full mt-10">
                <img src={bannerImg2} alt="" className="md:w-8/12 rounded-l-full  h-full object-cover" />
            </div>
            <div className="flex-1">
                <div className="md:text-left text-center">
                    <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
                        <span className="text-cyan-600 md:text-6xl text-5xl">
                            Hello!
                            <br />
                        </span>
                        My Name is <span>Arif Hossain</span>
                    </h1>
                    <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
                       A Frontend Developer
                    </h4>
                    <button className="btn-primary mt-8">Contact Me</button>
                    <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">

                        <div className="text-gray-600 hover:text-white cursor-pointer " >
                            <FaInstagram />
                        </div>
                        <div className="text-gray-600 hover:text-white cursor-pointer " >
                            <a href="https://www.facebook.com/arifulislam.arif.56863221"><FaFacebook /></a>
                        </div>
                        <div className="text-gray-600 hover:text-white cursor-pointer " >
                            <a href="https://www.linkedin.com/in/arif-hossain-9094552a3"><FaLinkedin /></a>
                        </div>
                        <div className="text-gray-600 hover:text-white cursor-pointer " >
                        <a href="https://github.com/saarif23"><FaGithub /></a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;