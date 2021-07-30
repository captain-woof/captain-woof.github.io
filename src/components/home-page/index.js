import styled from "styled-components"
import { motion } from "framer-motion"
import MyName from "./my-name"
import BackgroundImage from "./background-image"
import Navbar from "./navbar"
import SocialNavbar from "./socialNavbar"

const HomepageContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    padding: 0;
    height: 100vh;
    width: 100vw;
    align-items: center;
    overflow: hidden;
    justify-content: center;
    position: relative;
`

const BackgroundContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    width: 60%;
    height: 190%;
    justify-content: center;
    overflow: hidden;
    align-self: center;
    position: absolute;
`

const NameAndNavbarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
`

const backgroundImageOuterContainerVariant = {
    initial: {
        rotate: 0
    },
    animate: {
        rotate: -30,
        transition: {
            ease: [.78, .01, .31, .92],
            duration: 3
        }
    }
}

const homepageContainerVariant = {
    initial: {
        y: "100%",
    },
    animate: {
        y: 0,
        transition: {
            ease: [.78, .01, .31, .92],
            duration: 1.5
        }
    },
    exit: {
        y: "-100%",
        transition: {
            ease: [.78, .01, .31, .92],
            duration: 1.5
        }
    }
}

export default function Homepage({ isPhone }) {
    return (
        <HomepageContainer variants={homepageContainerVariant} id="homepage-container" initial="initial"
            animate="animate" exit="exit">
            <NameAndNavbarContainer id="homepage-name-navbar-container">
                <MyName isPhone={isPhone} />
                <Navbar isPhone={isPhone} />
                <SocialNavbar isPhone={isPhone}/>
            </NameAndNavbarContainer>
            <BackgroundContainer variants={backgroundImageOuterContainerVariant} initial="initial"
                animate="animate" exit="exit" id="background-image-outer-container">
                <BackgroundImage />
            </BackgroundContainer>
        </HomepageContainer>
    )
}