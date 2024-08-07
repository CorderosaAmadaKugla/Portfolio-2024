import {AiFillGithub} from 'react-icons/ai';
import {FaLinkedinIn, FaInstagram, FaYoutube, FaTiktok} from 'react-icons/fa';
import {FiTwitter} from 'react-icons/fi';
import img from '../assets/beccahenry.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Banner = () => {
   useEffect(() => {
    AOS.init({
        easing: 'ease-out-quart',
        delay: 0,
        duration: 750
    })
   },[])
    return (
        <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <div className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal uppercase">Welcome To <span className="text-fuchsia-500">My Website</span></h1>
                <p data-aos="fade-left"> "INNOVATION AT THE SPEED OF ART." </p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div data-aos="fade-up" className="flex space-x-2">
                            <a href="https://www.github.com/CoutureAndCode" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                                <AiFillGithub className="text-[28px]"/>
                            </a>
                            <a href="https://www.YouTube.com/@CoutureAndCode" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                                <FaYoutube className="text-[28px]"/>
                            </a>
                            <a href="https://www.linkedin.com/in/CoutureAndCode" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                                <FaLinkedinIn className="text-[28px]"/>
                            </a>
                            <a href="https://www.Twitter.com/CoutureAndCode" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                                <FiTwitter className="text-[28px]"/>
                            </a>
                            <a href="https://www.Instagram.com/CoutureAndCodeOrg" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                                <FaInstagram className="text-[28px]"/>
                            </a>
                            <a href="https://www.TikTok.com/@coutureandcode" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                                <FaTiktok className="text-[28px]"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <img data-aos="fade-up" src={img} width={290} height={290} className='rounded-full border-2 p-1 border-fuchsia-500 img_glow' alt="" />
        </div>
    );
};

export default Banner;