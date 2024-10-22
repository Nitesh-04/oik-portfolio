import {Kanit} from "next/font/google"
import { GitHub, LinkedIn} from "@mui/icons-material";

const league = Kanit({ subsets: ["latin"], weight: "500" });
const league1 = Kanit({ subsets: ["latin"], weight: "400" });

export default function Name()
{
    return (
        <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-6">
            <p className={`${league.className} font-extrabold text-slate-200  text-[48px] md:text-[54px]`}>Akshat Gupta</p>
            <p className={`${league1.className}  text-xl text-slate-300`}>Backend Developer</p>
            <p className={`${league1.className} text-slate-400 mt-4 md:mt-6`}>I build pixel-perfect, engaging,and</p> 
            <p className={`${league1.className} text-slate-400`}>accessible backend applications.</p>       
            
            <div className="lg:flex-col gap-2 lg:flex md:hidden hidden mt-16 text-slate-400 w-fit text-sm">
                <a href="#main"><p className={`${league.className} hover:text-slate-100 hover:duration-500`}>{"------  "} &nbsp; ABOUT</p></a>
                <a href="#experience"><p className={`${league1.className} hover:text-slate-100 hover:duration-500  `}>{"------"} &nbsp; EXPERIENCE</p></a>
                <a href="#projects"><p className={`${league1.className}  hover:text-slate-100 hover:duration-500 `}> {"------   "} &nbsp; PROJECTS</p></a> 
            </div>

            <div className="flex gap-4 lg:mt-24 mt-5">
                <a href="https://github.com/Oik17" className={`text-slate-400 hover:text-slate-100 hover:duration-500`} target="_blank" rel="noopener noreferrer" ><GitHub className="md:h-7 md:w-7"/></a>
                <a href="https://www.linkedin.com/in/akshat-gupta-864b39235/" className={`text-slate-400 hover:text-slate-100 hover:duration-500`} target="_blank" rel="noopener noreferrer" ><LinkedIn className="md:h-7 md:w-7"/></a>
            </div>
          
          
        </div>
    )
}   