import styled from "styled-components";
import { motion } from "framer-motion"
import MyImage from "../../assets/images/myimage_bw.jpg"
import { Colors } from "../../colors"

const backgroundImageVariant = {
    initial: {
        rotate: 0
    },
    animate: {
        rotate: 30,
        transition: {
            ease: [.78, .01, .31, .92],
            duration: 3
        }
    }
}

const Image = styled(motion.div)`
    background-image: url(${MyImage});
    width: 100%;
    height: 100%;
    background-position: center;
`

const Overlay = styled(motion.div)`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${Colors.LandingPageBgOverlayColor};
`

const overlayVariant = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    transition: {
        delay: 1,
        ease: [.78, .01, .31, .92],
        duration: 3
    }
}

const BackgroundImageContainer = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    overflow: hidden;
    z-index: 0;
`

const backgroundInnerContainerVariant = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            ease: [.78, .01, .31, .92],
            duration: 3
        }
    },
    exit: {
        opacity: 0,
        transition: {
            ease: [.78, .01, .31, .92],
            duration: 1
        }
    }
}

export default function BackgroundImage() {
    return (
        <BackgroundImageContainer id="background-image-inner-container" variants={backgroundInnerContainerVariant}
            animate="animate" initial="initial" exit="exit">
            <Image variants={backgroundImageVariant} animate="animate" id="background-image"/>
            <Overlay variants={overlayVariant} animate="animate" id="background-overlay"/>
        </BackgroundImageContainer>
    )
}