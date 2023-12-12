import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
      
<section className="bg-gray-900 shadow-2xl  shadow-white">
<div className="flex max-md:flex-col justify-center items-center gap-5 md:gap-10 max-md:h-[300px] h-[200px]  ">
            <div className="text-center md:border-r-4 md:px-20 max-md:border-b-4 max-md:pb-5 border-gray-900">
                <h5 className="text-3xl font-bold pb-3 ">Con<span className="text-cyan-500 ">tact</span> Info </h5>
                <p>Munshiganj, Dhaka, Bangladesh</p>
                <p>+880 1575 748077</p>
                            </div>
            <div  className="text-center md:px-20">
                <h5 className="text-2xl font-bold ">Fo<span className="text-cyan-500 ">llo</span>w On</h5>
                <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">

                        <div className="text-gray-600 hover:text-white cursor-pointer " >
                            <FaInstagram />
                        </div>
                        <div className="text-gray-600 hover:text-white cursor-pointer " >
                            <a href="https://www.facebook.com/arifulislam.arif.56863221"><FaFacebook/></a>
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
        <div className="py-4 text-center border-t-2 border-gray-700 ">
            <p>Ⓒ 2023 portfolio website.All rights reserved.</p>
        </div>
</section>     
    );
};

export default Footer;