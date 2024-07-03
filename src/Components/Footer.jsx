import {FaGithub, FaInstagram, FaLinkedinIn, FaTiktok, FaTwitter} from "react-icons/fa";
const Footer = () => {
    return (
       <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="mb-4 md:mb-0">
                <span className="text-3xl font-semibold text-fuchsia-800 py-2 uppercase">Logo</span>
                <p className="text-[18px] my-4">INNOVATION AT THE SPEED OF ART</p>
            </div>
            <div>
                <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Services</h2>
                <ul className="text-[16px] my-4">
                    <li className="my-2">Fashion & Costume Design</li>
                    <li className="my-2">Content Creation</li>
                    <li className="my-2">Event Production & Entertainment</li>
                    <li className="my-2">Website & App Development</li>
                </ul>
            </div>
            <div className="mb-4 md:mb-0">
                <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Contact</h2>
                <p className="text-[16px] my-4">Email: Azehko@proton.me</p>
                <p className="text-[16px] my-4">Phone: +1 510-751-3756 </p>
            </div>
           <div>
             <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Follow Me</h2>
            <div className="flex space-x-4">
                <a className="text-white hover:text-fuchsia-800  transition-all duration-150 ease-in-out" href="https://www.github.com/CoutureAndCode">
                    <FaGithub/>
                </a>
                <a className="text-white hover:text-fuchsia-800  transition-all duration-150 ease-in-out" href="https://www.linkedin.com/in/CoutureAndCode">
                    <FaLinkedinIn/>
                </a>
                <a className="text-white hover:text-fuchsia-800  transition-all duration-150 ease-in-out" href="https://www.Twitter.com/CoutureAndCode">
                    <FaTwitter/>
                </a>
                <a className="text-white hover:text-fuchsia-800  transition-all duration-150 ease-in-out" href="https://www.Instagram.com/CoutureAndCodeOrg">
                    <FaInstagram/>
                </a>
                <a className="text-white hover:text-fuchsia-800  transition-all duration-150 ease-in-out" href="https://www.TikTok.com/@CoutureAndCode">
                    <FaTiktok/>
                </a>
            </div>
           </div>
        </div>
       </footer>

    );
};

export default Footer;