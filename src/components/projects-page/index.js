import styled from "styled-components"
import { motion } from "framer-motion"
import ProjectCard from "./card"
import BackgroundImage from "../../assets/images/background2.jpg"
import { Colors } from "../../colors"
import Footer from "../footer-container/index"

import MoodleUserEnumImage from "../../assets/images/moodle.png"
import CuteSharpsploitImage from "../../assets/images/cutesharpsploit.jpg"
import WoofServerImage from "../../assets/images/woof-server.png"
import WeatherCMSImage from "../../assets/images/weather.jpg"
import HandsdownImage from "../../assets/images/handsdown.jpg"
import ZhiZhuImage from "../../assets/images/zhi-zhu.png"
import ReactWaterfallGridImage from '../../assets/images/react-waterfall-grid.jpg'
import BrownTrackImage from '../../assets/images/brown-track.jpg'

import PythonLogo from "../../assets/logos/python_logo.svg"
import CsharpLogo from "../../assets/logos/csharp_logo.svg"
import NodeJSLogo from "../../assets/logos/nodejs_logo.svg"
import ElectronLogo from "../../assets/logos/electron_logo.svg"
import ReactLogo from '../../assets/logos/react_logo.svg'
import ExpressLogo from '../../assets/logos/express_logo.svg'


const ProjectsPageContainer = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    background-image: url(${BackgroundImage});
    background-position: center center;
    background-repeat: no-repeat;
    z-index: 0;
    overflow-x: hidden;
    overflow-y: scroll;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
        display: none;
    }
    ::-moz-scrollbar {
        display: none; 
    }
    position: fixed;
    top: 0;
    left: 0;
`

const BackgroundOverlay = styled(motion.div)`
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    background-color: ${Colors.ProjectsPageBgOverlayColor};
`

const Heading = styled(motion.div)`
    font-family: 'archia-regular';
    color: ${Colors.OffWhite};
    z-index: 3;
    position: absolute;
    font-size: 20vmin;
`

const CardContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    z-index: 3;
    justify-content: space-evenly;
    padding: 18px 0px 18px 0px;
    position: relative;
    align-items: flex-start;
`

const projectsContainerVariant = {
    initial: {
        y: "100%",
    },
    animate: {
        y: 0,
        transition: {
            ease: [.78, .01, .31, .92],
            duration: 1.5,
            when: "beforeChildren",
        }
    },
    exit: {
        y: "-100%",
        transition: {
            ease: [.78, .01, .31, .92],
            duration: 1.5,
        }
    }
}

const headingVariant = {
    initial: {
        translateX: "-50%",
        translateY: "-50%",
        top: window.innerHeight * 0.5 + "px",
        left: window.innerWidth * 0.5 + "px"
    },
    animate: {
        translateX: ["-50%", "0%", "0%"],
        translateY: ["-50%", "-50%", "0%"],
        top: [window.innerHeight * 0.5 + "px", window.innerHeight * 0.5 + "px", "0px"],
        left: [window.innerWidth * 0.5 + "px", "30px", "30px"],
        transition: {
            type: "spring",
            duration: 1
        }
    },
    exit: {
        translateX: ["0%", "0%", "-50%"],
        translateY: ["0%", "-50%", "-50%"],
        top: ["0px", window.innerHeight * 0.5 + "px", window.innerHeight * 0.5 + "px"],
        left: ["30px", "30px", window.innerWidth * 0.5 + "px"],
        transition: {
            type: "spring",
            duration: 1
        }
    }
}

const headingVariantPhone = {
    initial: {
        translateX: "-50%",
        translateY: "-50%",
        top: window.innerHeight * 0.5 + "px",
        left: window.innerWidth * 0.5 + "px"
    },
    animate: {
        translateY: ["-50%", "-50%", "0%"],
        top: [window.innerHeight * 0.5 + "px", window.innerHeight * 0.5 + "px", "0px"],
        transition: {
            type: "spring",
            duration: 1.5
        }
    },
    exit: {
        translateY: ["0%", "-50%", "-50%"],
        top: ["0px", window.innerHeight * 0.5 + "px", window.innerHeight * 0.5 + "px"],
        transition: {
            type: "spring",
            duration: 1
        }
    }
}

const overlayVariant = {
    initial: {
        opacity: 0.1
    },
    animate: {
        opacity: 0.6,
        transition: {
            duration: 1.3,
            ease: [.78, .01, .31, .92]
        }
    },
    exit: {
        opacity: 0.3,
        transition: {
            duration: 1.5,
            ease: [.78, .01, .31, .92]
        }
    }
}

export default function ProjectsPage({ isPhone }) {
    return (
        <ProjectsPageContainer variants={projectsContainerVariant} animate="animate"
            exit="exit" initial="initial" id="projects-container">
            <BackgroundOverlay variants={overlayVariant} id="projects-page-bg-overlay" />
            <Heading id="projects-page-heading" variants={isPhone ? headingVariantPhone : headingVariant} style={{
                textAlign: (isPhone ? "center" : "left")
            }}>Projects</Heading>
            <CardContainer id="project-cards-container" style={{ marginTop: (isPhone ? "100px" : "128px") }}>
                <ProjectCard className="project-card" name="React-Waterfall-Grid" logo={ReactLogo}
                    image={ReactWaterfallGridImage} description="React Waterfall Grid is a library of fully responsive and customizable waterfall grids (vertical and horizontal). All it needs is an array of your elements, and it handles the rest out-of-the-box." buttons={[{ text: "Source", url: "https://github.com/captain-woof/react-waterfall-grid" }, { text: "Demo", url: "https://sohail-saha.in/react-waterfall-grid/" }]} />
                <ProjectCard className="project-card" name="Brown-Track" logo={ExpressLogo}
                    image={BrownTrackImage} description="A price-tracker for Amazon; track how product prices fluctuate on Amazon and know the best time to buy. Brown-Track notifies you on your email when lowest prices are observed, making things even better!" buttons={[{ text: "Source", url: "https://github.com/captain-woof/brown-track" }, { text: "Visit", url: "https://brown-track.herokuapp.com/" }]} />
                <ProjectCard className="project-card" name="Handsdown" logo={ElectronLogo}
                    image={HandsdownImage} description="Handsdown is a cross-platform markdown editor and visualizer, all rolled into one. Use it to take notes, create READMEs, basically whatever you use markdowns for." buttons={[{ text: "Source", url: "https://github.com/captain-woof/handsdown-markdown-editor-visualizer" }]} />
                <ProjectCard className="project-card" name="Weather Station CMS" logo={PythonLogo} image={WeatherCMSImage} description="A simple CMS where you can register at to view the weather at your location, plus query for data from any place, provided that we have a weather station at that place. Simply create an account and get started." buttons={[{ text: "Source", url: "https://github.com/captain-woof/weather-management-cms" }, { text: "Demo", url: "https://weather-information-cms.herokuapp.com/" }]} />
                <ProjectCard className="project-card" name="Woof Server" logo={NodeJSLogo} image={WoofServerImage} description="'Woof Server' is an HTTP server written in NodeJS, capable of providing simultaneous file download and upload functionality." buttons={[{ url: "https://github.com/captain-woof/woof-server", text: "Source" }]} />
                <ProjectCard className="project-card" name="Zhi-Zhu" logo={PythonLogo} image={ZhiZhuImage} description="Zhi-Zhu is a multithreaded spidering script that recursively searches base webpages and all urls appearing in it, for specific (regex) words. Spidered webpages are not visited twice. Out of scope urls are logged, and can be optionally specified to also be stored in a separate file." buttons={[{ url: "https://github.com/captain-woof/zhi-zhu", text: "Source" }]} />
                <ProjectCard className="project-card" name="CuteSharpSploit" logo={CsharpLogo} image={CuteSharpsploitImage} description="CuteSharpSploit is an executable wrapper around SharpSploit, a .NET post-exploitation library written in C# by Ryan Cobb. Most of the features exported by the SharpSploit library have been implemented." buttons={[{ url: "https://github.com/captain-woof/CuteSharpSploit", text: "Source" }]} />
                <ProjectCard className="project-card" name="Moodle User Enum" logo={PythonLogo} image={MoodleUserEnumImage} description="A python script that lets you dump the entire personal user data (short of the passwords) or search for a particular user, by taking advantage of the fact that Moodle is vulnerable to a simple user enumeration scan by id incrementation, given that you are authenticated." buttons={[{ url: "https://github.com/captain-woof/Moodle-User-Enum", text: "Source" }]} />
            </CardContainer>
            <Footer isPhone={isPhone} quote="I hear and I forget. I see and I remember. I do and I understand."
                person="Confucius" />
        </ProjectsPageContainer>
    )
}