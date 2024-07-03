import { useEffect } from 'react';
import img1 from '../assets/gaudmire.png';
import img2 from '../assets/sea-of-dreams.jpg';
import img3 from '../assets/circusandcode.png';
import img4 from '../assets/recreation-sf.jpg';
import Aos from 'aos';

const Projects = () => {
    useEffect(()=> {
        Aos.init({duration: 1000});
    }, [])
    return (
       <div id="Projects" className="p-20 flex flex-col items-center justify-center">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Projects</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
        <a href="https://www.example.com"><button><img data-aos="fade-up" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={img1} alt="" /></button></a>
        <a href="https://www.youtube.com/watch?v=me075xIF7fs"><button><img data-aos="fade-down" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={img2} alt="" /></button></a>
        <a href="https://coutureandcode.github.io/circus-and-code-website/"><button><img data-aos="fade-up" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={img3} alt="" /></button></a>
        <a href="https://www.example.com"><button><img data-aos="fade-down" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={img4} alt="" /></button></a>
        </div>
       </div>
    );
};

export default Projects;