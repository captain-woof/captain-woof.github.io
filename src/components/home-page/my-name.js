import styled from "styled-components"
import { motion } from "framer-motion"

const myNameVariant = {
    animate: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.4,
            staggerDirection: 1
        }
    },
    exit: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
}

const letterVariant = {
    initial: {
        color: "#000000",
        y: 100,
        opacity: 0
    },
    animate: {
        color: "#ffffff",
        y: 0,
        opacity: 1,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
        }
    }
}

export default function MyName({isPhone}) {

    const MyNameStyle = styled(motion.div)`
        font-family: 'archia-regular';
        font-size: ${isPhone ? "20vw": "13vw"};
        width: 100%;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
    `
    return (
        <MyNameStyle id="my-name" variants={myNameVariant} animate="animate" initial="initial" exit="exit">
            <div style={{ "display": "flex", "flexDirection": "row", "justifyContent": "center" }}>
                <motion.div variants={letterVariant}>s</motion.div>
                <motion.div variants={letterVariant}>o</motion.div>
                <motion.div variants={letterVariant}>h</motion.div>
                <motion.div variants={letterVariant}>a</motion.div>
                <motion.div variants={letterVariant}>i</motion.div>
                <motion.div variants={letterVariant}>l</motion.div>
            </div>
        </MyNameStyle>
    )
}