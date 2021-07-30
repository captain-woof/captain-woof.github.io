import styled from "styled-components"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

const ToolbeltHeadingContainer = styled(motion.div)`
    background-color: #212121;
    width: 100%;
    padding-top: 24px;
    padding-bottom: 24px;
    box-shadow: white 0px 3px 10px;
`

const HeadingOne = styled(motion.div)`
    font-family: 'archia-regular';
    font-size: 8vmin;
    text-align: center;
    width: 100%;
    color: #ffffff;
`

const HeadingTwo = styled(motion.div)`
    font-family: 'archia-regular';
    font-size: 13vmin;
    text-align: center;
    width: 100%;
    color: #ffffff;
`

const headingVariant = {
    initial: {
        opacity: 0,
        x: 200
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2.5,
            type: "spring",
            stiffness: 100,
            delay: 0.25
        }
    },
    exit: {
        opacity: 0,
        x: -200
    }
}

export default function ToolbeltHeading() {
    const [ref1, isHeadingOneVisible] = useInView()
    const [ref2, isHeadingTwoVisible] = useInView()
    const headingOneAnimation = useAnimation()
    const headingTwoAnimation = useAnimation()

    useEffect(() => {
        if (isHeadingOneVisible) {
            headingOneAnimation.start("animate")
        } else {
            headingOneAnimation.start("exit")
        }
    }, [isHeadingOneVisible, headingOneAnimation])

    useEffect(() => {
        if (isHeadingTwoVisible) {
            headingTwoAnimation.start("animate")
        } else {
            headingTwoAnimation.start("exit")
        }
    }, [isHeadingTwoVisible, headingTwoAnimation])

    return (
        <ToolbeltHeadingContainer id="toolbelt-heading">
            <HeadingOne variants={headingVariant} ref={ref1} animate={headingOneAnimation}
                exit="exit" initial="initial">
                EVERY DEV HAS A TOOLBELT
            </HeadingOne>
            <HeadingTwo variants={headingVariant} ref={ref2} animate={headingTwoAnimation}
                exit="exit" initial="initial">
                HERE'S MINE
            </HeadingTwo>
        </ToolbeltHeadingContainer>
    )
}