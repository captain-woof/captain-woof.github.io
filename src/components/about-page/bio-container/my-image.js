import { motion } from "framer-motion"
import styled from "styled-components"
import Image from "../../../assets/images/myimage_square.jpg"

const MyImageContainer = styled(motion.div)`
    width: 100%;
    height: 100%;    
    z-index: 3;
    margin-left: -100%;
    position: relative;
`

const AboutMyImage = styled(motion.img)`
    position: absolute;
    width: 25vmax;
    border-radius: 50%;
`

const imageVariant = {
    initial: {
        translateX: "-50%",
        translateY: "-50%",
        top: window.innerHeight * 0.8 + "px",
        left: window.innerWidth * 0.5 + "px",
        opacity: 0
    },
    animate: {
        translateX: ["-50%", "-50%", "0%"],
        top: [window.innerHeight * 0.8 + "px", window.innerHeight * 0.5 + "px", window.innerHeight * 0.5 + "px"],
        left: [window.innerWidth * 0.5 + "px", window.innerWidth * 0.5 + "px", window.innerWidth * 0.7 + "px"],
        opacity: 1,
        transition: {
            type: "spring",
            duration: 1
        }
    },
    exit: {
        translateX: ["0%", "-50%", "-50%"],
        top: [window.innerHeight * 0.5 + "px", window.innerHeight * 0.5 + "px", window.innerHeight * 0.8 + "px"],
        left: [window.innerWidth * 0.7 + "px", window.innerWidth * 0.5 + "px", window.innerWidth * 0.5 + "px"],
        opacity: 0,
        transition: {
            type: "spring",
            duration: 1
        }
    }
}

const imageVariantPhone = {
    initial: {
        translateX: "-50%",
        translateY: "-50%",
        top: window.innerHeight * 0.8 + "px",
        left: window.innerWidth * 0.5 + "px",
        opacity: 0
    },
    animate: {
        top: [window.innerHeight * 0.8 + "px", window.innerHeight * 0.8 + "px", window.innerHeight * 0.35 + "px"],
        opacity: [0, 0, 1],
        transition: {
            type: "spring",
            duration: 1,
            delay: 0.1
        }
    },
    exit: {
        top: [window.innerHeight * 0.35 + "px", window.innerHeight * 0.8 + "px", window.innerHeight * 0.8 + "px"],
        opacity: [1, 0, 0],
        transition: {
            type: "spring",
            duration: 1,
            delay: 0.1
        }
    }
}

export default function MyImage({ isPhone }) {
    return (
        <MyImageContainer id="my-image-container">
            <AboutMyImage src={Image} variants={isPhone ? imageVariantPhone : imageVariant} />
        </MyImageContainer>
    )
}