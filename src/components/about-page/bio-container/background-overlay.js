import { motion } from "framer-motion"
import styled from "styled-components"
import {Colors} from "../../../colors"

const BackgroundOverlayContainer = styled(motion.div)`
    width: 100%;
    height: 100%;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: -100%;
    z-index: 1;
`

const Overlay = styled(motion.div)`
    height: 100%;
    width: 100%;
    background-color: ${Colors.AboutPageBgOverlayColor}
`

const overlayVariant = {
    initial: {
        opacity: 0.2
    },
    animate: {
        opacity: 0.7,
        transition: {
            duration: 1.2,
            ease: [.78, .01, .31, .92]
        }
    }
}

export default function BackgroundOverlay() {
    return (
        <BackgroundOverlayContainer id="background-overlay-container">
            <Overlay variants={overlayVariant}/>
        </BackgroundOverlayContainer>
    )
}