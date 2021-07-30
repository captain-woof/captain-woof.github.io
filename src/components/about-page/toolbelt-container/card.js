import styled from "styled-components"
import { motion, useAnimation } from "framer-motion"
import { Colors } from "../../../colors"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

const TitleContainer = styled(motion.div)`
    background-color: ${Colors.ToolbeltGrey};
    color: ${Colors.OffWhite};
    padding: 12px;
    font-family: 'opensans-regular';
    text-align: center;
    color: ${Colors.OffWhite}
`
const LogosContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 24px;
    background-color: ${Colors.OffWhite};
`

const Logo = styled(motion.img)`
    margin: 12px;
`

const logoAndCardVariant = {
    initial: {
        scale: 0.8,
        opacity: 0,
        y: 200
    },
    animate: {
        scale: 1.0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: [.78, .01, .31, .92],
            staggerChildren: 0.3
        }
    },
    exit: {
        scale: 0.9,
        transition: {
            duration: 1,
            ease: [.78, .01, .31, .92]
        }
    }
}

const titleVariant = {
    initial: {
        opacity: 0,
        x: 200
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            ease: [.78, .01, .31, .92],
            staggerChildren: 0.3
        }
    },
    exit: {}
}

const CardContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    box-shadow: black 3px 3px 5px;
    overflow: hidden;
    width: 420px;
    margin: 12px;
`

// title is string
// logos is array of logo pathnames
export default function ToolbeltCard({ isPhone, title, logos, logoWidth }) {

    const toolbeltCardAnimation = useAnimation()
    const titleAnimation = useAnimation()
    const [logoAndCardRef, isCardInView] = useInView()
    const [titleRef, isTitleInView] = useInView()

    useEffect(() => {
        if (isCardInView) {
            toolbeltCardAnimation.start("animate")
        } else {
            toolbeltCardAnimation.start("exit")
        }
    }, [isCardInView, toolbeltCardAnimation])

    useEffect(() => {
        if (isTitleInView) {
            titleAnimation.start("animate")
        } else {
            titleAnimation.start("exit")
        }
    }, [isTitleInView, titleAnimation])

    return (
        <CardContainer className="card-container" ref={logoAndCardRef} variants={logoAndCardVariant}
            animate={toolbeltCardAnimation} exit="exit" initial="initial">
            <TitleContainer style={{fontSize: (isPhone ? "20px" : "24px")}} className="card-title">
                <motion.div ref={titleRef} variants={titleVariant}
                    animate={titleAnimation} exit="exit" initial="initial">
                    {title}
                </motion.div>
            </TitleContainer>
            <div style={{
                height: "100%", width: "100%", display: "flex",
                flexDirection: "column", justifyContent: "center",
                backgroundColor: Colors.OffWhite
            }}>
                <LogosContainer className="card-logo-container">
                    {logos.map((logo, index) => {
                        return <Logo style={{ width: (isPhone ? "50px" : "80px") }}
                            className="logo" ref={logoAndCardRef}
                            variants={logoAndCardVariant} src={logo} key={"logo-" + index} />
                    })}
                </LogosContainer>
            </div>
        </CardContainer>
    )
}