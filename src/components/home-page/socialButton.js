import { motion, useAnimation } from "framer-motion"
import styled from "styled-components"
import { Colors } from "../../colors"
import { useEffect, useState } from "react"

const SocialButtonContainer = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: row;
    height: 32px;
    align-items: center;
    justify-content: center;
`

const Logo = styled(motion.img)`
    height: 100%;
    background-color: ${Colors.SocialButtonsBackgroundColor};
    padding: 4px;
`

const Name = styled(motion.div)`
    font-size: 12px;
    height: 100%;
    padding: 4px;
    line-height: 32px;
    font-weight: 600;
    background-color: ${Colors.SocialButtonsBackgroundColor};
    color: ${Colors.SocialButtonsBackgroundColor};
`

const transition = {
    ease: [0.6, 0.01, -0.05, 0.95],
    duration: 0.8
}

const socialButtonContainerVariant = {
    initial: {
        opacity: 0,
        y: -50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 2,
            delay: 3.5
        }
    },
    exit: {
        opacity: 0,
        transition: transition
    }
}

export default function SocialButton({ isPhone, logo, name, username, platformColor, url }) {

    const [isBeingHoveredOn, changeisBeingHoveredOn] = useState(false)
    const logoAnimation = useAnimation()
    const nameAnimation = useAnimation()

    const logoVariant = {
        initial: {
            opacity: 0,
            backgroundColor: Colors.SocialButtonsBackgroundColor
        },
        animate: {
            opacity: 1,
            transition: transition
        },
        onHover: {
            backgroundColor: platformColor,
            transition: transition
        },
        offHover: {
            backgroundColor: Colors.SocialButtonsBackgroundColor,
            transition: transition
        }
    }

    const nameVariant = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: transition
        },
        onHover: {
            backgroundColor: Colors.OffWhite,
            color: "#212121",
            transition: transition
        },
        offHover: {
            backgroundColor: Colors.SocialButtonsBackgroundColor,
            color: Colors.OffWhite,
            transition: transition
        }
    }

    useEffect(() => {
        if (isBeingHoveredOn) {
            logoAnimation.start("onHover")
            nameAnimation.start("onHover")
        } else {
            logoAnimation.start("offHover")
            nameAnimation.start("offHover")
        }
    }, [logoAnimation, isBeingHoveredOn, nameAnimation])

    return (
        <a href={url} style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
            <SocialButtonContainer layout onHoverStart={() => { changeisBeingHoveredOn(true) }}
                onHoverEnd={() => { changeisBeingHoveredOn(false) }} layoutId={name + "social-button-container"}
                className="social-button-container" variants={socialButtonContainerVariant} animate="animate"
                exit="exit" initial="initial" style={{
                    padding: (isPhone ? "0px 4px 0px 4px" : "0px")
                }}>
                <Logo animate={logoAnimation} variants={logoVariant} src={logo} layout layoutId={name + "social-logo"} className="social-button-logo" style={{ borderRadius: (isPhone ? "50%" : "0%") }} />
                {!isPhone &&
                    <Name animate={nameAnimation} variants={nameVariant} layout layoutId={name + "social-name"} className="social-button-name">
                        {isBeingHoveredOn ? username : name}
                    </Name>
                }
            </SocialButtonContainer>
        </a>
    )
}