import { motion } from "framer-motion";
import styled from "styled-components"

const AboutBioContainer = styled(motion.div)`
    margin-left: -100%;
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 2;
    bottom: 10%;
`

const bioVariant = {
    initial: {
        translateX: "0%",
        translateY: "-50%",
        left: "60px",
        opacity: 0
    },
    animate: {
        opacity: [0, 0, 1],
        translateY: ["-50%", "-50%", "0%"],
        top: [window.innerHeight + "px", window.innerHeight + "px", window.innerHeight * 0.4 + "px"],
        transition: {
            type: "spring",
            duration: 1,
        }
    },
    exit: {
        opacity: [0, 0, 1].reverse(),
        translateY: ["-50%", "-50%", "0%"].reverse(),
        top: [window.innerHeight + "px", window.innerHeight + "px", window.innerHeight * 0.4 + "px"].reverse(),
        transition: {
            type: "spring",
            duration: 1,
        }
    }
}

const bioVariantPhone = {
    initial: {
        translateY: "-50%",
        left: "50%",
        translateX: "-50%",
        opacity: 0
    },
    animate: {
        opacity: [0, 0, 1],
        translateY: ["-50%", "-50%", "0%"],
        top: [window.innerHeight + "px", window.innerHeight + "px", window.innerHeight * 0.6 + "px"],
        transition: {
            type: "spring",
            duration: 1,
        }
    },
    exit: {
        opacity: [0, 0, 1].reverse(),
        translateY: ["-50%", "-50%", "0%"].reverse(),
        top: [window.innerHeight + "px", window.innerHeight + "px", window.innerHeight * 0.45 + "px"].reverse(),
        transition: {
            type: "spring",
            duration: 1,
        }
    }
}

const BioDescription = styled(motion.div)`        
    font-family: 'opensans-regular';
    color: #ffffff;
    background-color: #212121b3;
    position: absolute;
    padding: 24px;
`

export default function AboutBio({ isPhone }) {
    return (
        <AboutBioContainer id="about-bio-outer-container">
            <BioDescription style={{ fontSize: (isPhone ? "12px" : "17px"), width: (isPhone ? "70%" : "50%") }}
                id="about-bio-description" variants={isPhone ? bioVariantPhone : bioVariant}>
                Hi! I am Sohail Saha (aka CaptainWoof), and I am a <b>Full-stack developer <i>(MERN Stack)</i></b>, and a <b>Cybersecurity enthusiast</b> <i>(couldn't find a better word)</i>.  🌴<br /><br />
                As a MERN app developer, I love designing frontends and backends as long as the laws of asynchronousity bless me. 🙇 <br /><br />
                As a 'cybersecurity guy', I love finding security flaws in logic and systems. I play CTFs for fun and learning. 💻
            </BioDescription>
        </AboutBioContainer>
    )
}