import { motion } from "framer-motion"
import styled from "styled-components"

const AboutHeadingContainer = styled(motion.div)`
    width: 100%;
    height: 100%;    
    z-index: 2;
    margin: 0;
    position: relative;
`

const About = styled(motion.div)`
    position: absolute;
    font-family: 'archia-regular';
    font-size: 25vmin;
    color: #ffffff;
`

const aboutVariant = {
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

const aboutVariantPhone = {
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
            duration: 1
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

export default function AboutHeading({ isPhone }) {
    return (
        <AboutHeadingContainer id="about-heading-container">
            <About id="about-heading" variants={isPhone ? aboutVariantPhone : aboutVariant}>About</About>
        </AboutHeadingContainer>
    )
}