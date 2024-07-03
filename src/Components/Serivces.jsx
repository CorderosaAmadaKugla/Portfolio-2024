import Aos from "aos";
import { useEffect } from "react";

const Serivces = () => {
    useEffect(()=> {
        Aos.init({duration: 1000});
    }, [])
    return (
       <div id="Services" className="p-20 flex flex-col items-center justify-center">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Services</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
            <h2 data-aos="fade-up" className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-50 w-60 border-4 border-fuchsia-800 b_glow">Fashion <br></br>&<br></br>Costume<br></br> Design</h2>
            <h2 data-aos="fade-down" className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-50 w-60 border-4 border-fuchsia-800 b_glow">Content<br></br> Creation</h2>
            <h2 data-aos="fade-up" className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-50 w-70 border-4 border-fuchsia-800 b_glow">Event Production<br></br>&<br></br>Entertainment</h2>
            <h2 data-aos="fade-down" className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h- w- border-4 border-fuchsia-800 b_glow">Web & App <br></br>Development</h2>
        </div>
       </div>
    );
};

export default Serivces;