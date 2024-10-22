import {Kanit} from "next/font/google"
import Skills from "./Skills";

const league = Kanit({ subsets: ["latin"], weight: "500" });
const league1 = Kanit({ subsets: ["latin"], weight: "400" });

export default function About() {
    return (
        <div className=" lg:scroll-mt-24 md:mb-24 lg:mb-20">
            <div className={`${league1.className} text-slate-400 text-justify`}>
                <span className="text-slate-100 block lg:hidden mb-5">About</span>
                With a passion for backend development, I excel in various technologies and am a team player and quick learner. Proficiency in several languages like Go, NodeJS and Python has helped me gain exposure to the world of backend.
                Seeking opportunities to broaden my expertise and grow my skill set.
                <br></br><br></br>
                With a passion for backend development, I excel in various technologies and am a team player and quick learner. Proficiency in several languages like Go, NodeJS and Python has helped me gain exposure to the world of backend.
                Seeking opportunities to broaden my expertise and grow my skill set.
                <br></br><br></br>
                <Skills/>
            </div>
        </div>
    )
}