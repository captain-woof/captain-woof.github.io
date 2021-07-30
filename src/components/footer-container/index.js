import styled from "styled-components"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

const FooterContainer = styled(motion.div)`
    background-color: #212121;
    padding: 12px;
`

const Quote = styled(motion.div)`
    font-family: 'archia-regular';
    text-align: center;
    width: 100%;
    color: #ffffff;
`

const Person = styled(motion.div)`
    font-family: 'archia-regular';
    text-align: center;
    width: 100%;
    color: #ffffff;
`

const Credit = styled(motion.div)`
    font-family: 'archia-regular';
    text-align: center;
    width: 100%;
    color: #ffffff;
    margin-top: 12px;
`

const variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            ease: [0.6, 0.01, -0.05, 0.95]
        }
    },
    exit: {
        opacity: 0,
        transition: {
            ease: [.78, .01, .31, .92],
            duration: 1.5,
        }
    }
}

const footerContainerVariant = {
    initial: {
        y: "0%",
        opacity: 1
    },
    animate: {
        y: "0%",
        opacity: 1,
        transition: {
            duration: 1,
            ease: [0.6, 0.01, -0.05, 0.95]
        }
    },
    exit: {
        y: "-100%",
        opacity: 0,
        transition: {
            ease: [.78, .01, .31, .92],
            duration: 1.5,
        }
    }
}

export default function Footer({ quote, person, isPhone }) {
    const [ref1, isHeadingOneVisible] = useInView()
    const [ref2, isHeadingTwoVisible] = useInView()
    const [ref3, isCreditsVisible] = useInView()
    const headingOneAnimation = useAnimation()
    const headingTwoAnimation = useAnimation()
    const creditsAnimation = useAnimation()

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

    useEffect(() => {
        if (isCreditsVisible) {
            creditsAnimation.start("animate")
        } else {
            creditsAnimation.start("exit")
        }
    }, [isCreditsVisible, creditsAnimation])

    return (
        <FooterContainer id="footer-container" variants={footerContainerVariant} initial="initial" exit="exit"
            animate="animate">
            <Quote id="footer-quote" variants={variants} ref={ref1} animate={headingOneAnimation}
                exit="exit" initial="initial" style={{ fontSize: (isPhone ? "16px" : "20px") }}>
                {"\"" + quote + "\""}
            </Quote>
            <Person id="footer-person" variants={variants} ref={ref2} animate={headingTwoAnimation}
                exit="exit" initial="initial" style={{ fontSize: (isPhone ? "12px" : "16px") }}>
                {"~" + person}
            </Person>
            <Credit id="footer-credit" variants={variants} animate={creditsAnimation}
                exit="exit" initial="initial" ref={ref3} style={{ fontSize: (isPhone ? "8px" : "12px") }}>
                Made with React 🔷 Designed by me
            </Credit>
        </FooterContainer>
    )
}