import { motion } from "framer-motion"
import styled from "styled-components"
import BackgroundImageBw from "../../../assets/images/background.jpg"
import AboutHeading from "./about-heading"
import BackgroundOverlay from "./background-overlay"
import MyImage from "./my-image"
import AboutBio from "./about-bio"
import DownArrowIcon from '../../../assets/icons/down-arrow.svg';

const AboutPageContainer = styled(motion.div)`
    width: 100%;
    height: 100vh;
    background-image: url(${BackgroundImageBw});
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row;
    z-index: 0;
`

const aboutPageVariant = {
    initial: {
        y: "100%",
    },
    animate: {
        y: 0,
        transition: {
            ease: [.78, .01, .31, .92],
            duration: 1.5,
            when: "beforeChildren"
        }
    },
    exit: {
        y: "-100%",
        transition: {
            ease: [.78, .01, .31, .92],
            duration: 1.5,
            when: "afterChildren"
        }
    }
}

const ScrollDownArrow = styled(motion.img)`
    position: absolute;
    height: 3vmax;
    width: 3vmax;
    z-index: 5;
    bottom: 4%;
    left: 50%;
`

const scrollDownArrowVariant = {
    initial: {
        y: 0,
    },
    animate: {
        y: [0, -20, 0],
        duration: 14,
        transition: {
            repeat: Infinity,
            type: "spring"
        }
    },
    exit: {
        y: 0,
    }
}

export default function AboutBioContainer({isPhone}) {
    return (
        <AboutPageContainer id="about-bio-container"
            variants={aboutPageVariant} animate="animate" exit="exit" initial="initial">
            <AboutHeading isPhone={isPhone} />
            <BackgroundOverlay isPhone={isPhone} />
            <MyImage isPhone={isPhone} />
            <AboutBio isPhone={isPhone} />
            <ScrollDownArrow variants={scrollDownArrowVariant} id="down-arrow" src={DownArrowIcon} />
        </AboutPageContainer>
    )
}