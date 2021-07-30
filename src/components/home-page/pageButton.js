import styled from "styled-components"
import { motion } from "framer-motion"

const buttonVariant = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.6, 0.01, -0.05, 0.95]
        }
    }
}

export default function ExpandingButton({ backgroundColor,
    backgroundColorHover, text, isPhone }) {
    const ButtonStyle = styled(motion.div)`
        padding: ${isPhone ? "4px 8px 4px 8px" : "8px 12px 8px 12px"};
        width: auto;
        height: 24px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: ${backgroundColor};
        font-size: ${isPhone ? "14px" : "16px"} ;
    `
    return (
        <ButtonStyle whileHover={{
            width: "72px",
            backgroundColor: backgroundColorHover,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 0.4,
                delay: 0.1
            }
        }} whileTap={{
            width: "100%",
            transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 0.6,
                delay: 0.1
            }
        }} variants={buttonVariant}>
            {text}
        </ButtonStyle>
    )
}