/* eslint-disable react/no-unescaped-entities */
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY
    const form = useRef(null);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ujqrrqc', 'template_k3ur7ts', form.current, publicKey)
            .then((result) => {
                form.current.reset();
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (

        <>
            <div>

            </div>
            <section id="contact" className="py-10 px-3 text-white">
                <div className="text-center mt-8">
                    <h3 className="text-4xl font-semibold">
                        Contact <span className="text-cyan-600">Me</span>
                    </h3>
                    <p className="text-gray-400 mt-3 text-lg">Available 24/7: Reach out on LinkedIn, email, or phone <br /> for any opportunities—I'm ready and responsive</p>

                    <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
                    >
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col flex-1 gap-5">
                            <input type="text" name="from_name" placeholder="Your Name" />
                            <input type="email" name="from_email" placeholder="Your Email Address" />
                            <textarea name="message" placeholder="Your Message" rows={10}></textarea>
                            <input className="btn-primary w-fit cursor-pointer" type="submit" value="Send Message" />
                        </form>
                        <div className="flex flex-col  gap-7 ">
                            <div className="flex flex-row text-left gap-4 flex-wrap items-center">
                                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full"> <CgMail /> </div>
                                <p className="md:text-base text-sm  break-words"> {'arif23s.001@gmail.com'} </p>
                            </div>
                            <div className="flex flex-row text-left gap-4 flex-wrap items-center">
                                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full"> <FaWhatsapp /> </div>
                                <p className="md:text-base text-sm  break-words"> {'+880 018599-60803'} </p>
                            </div>
                            <div className="flex flex-row text-left gap-4 flex-wrap items-center">
                                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full"> <FaLocationDot /> </div>
                                <p className="md:text-base text-sm  break-words"> {'Munshiganj, Bangladesh'} </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;