import styled from "styled-components"
import { motion } from "framer-motion"
import ExperienceCard from "./card"
import BackgroundImage from "../../assets/images/background3.jpg"
import { Colors } from "../../colors"
import Footer from "../footer-container/index"

const ExperiencePageContainer = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    background-image: url(${BackgroundImage});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    z-index: 0;
    overflow-x: hidden;
    overflow-y: scroll;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
        display: none;
    }
    ::-moz-scrollbar {
        display: none; 
    }
    position: fixed;
    top: 0;
    left: 0;
`

const BackgroundOverlay = styled(motion.div)`
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    background-color: ${Colors.ProjectsPageBgOverlayColor};
`

const Heading = styled(motion.div)`
    font-family: 'archia-regular';
    color: ${Colors.OffWhite};
    z-index: 3;
    position: absolute;
    font-size: 16vmin;
`

const CardContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    z-index: 3;
    justify-content: space-evenly;
    padding: 18px 0px 18px 0px;
    position: relative;
    align-items: flex-start;
    min-height: ${({ isPhone }) => (isPhone ? "calc(100vh - 138px)" : "calc(100vh - 164px)")};
`

const experienceContainerVariant = {
    initial: {
        y: "100%",
    },
    animate: {
        y: 0,
        transition: {
            ease: [.78, .01, .31, .92],
            duration: 1.5,
            when: "beforeChildren",
        }
    },
    exit: {
        y: "-100%",
        transition: {
            ease: [.78, .01, .31, .92],
            duration: 1.5,
        }
    }
}

const headingVariant = {
    initial: {
        translateX: "-50%",
        translateY: "-50%",
        top: window.innerHeight * 0.5 + "px",
        left: window.innerWidth * 0.5 + "px"
    },
    animate: {
        translateX: ["-50%", "0%", "0%"],
        translateY: ["-50%", "-50%", "0%"],
        top: [window.innerHeight * 0.5 + "px", window.innerHeight * 0.5 + "px", "0px"],
        left: [window.innerWidth * 0.5 + "px", "30px", "30px"],
        transition: {
            type: "spring",
            duration: 1
        }
    },
    exit: {
        translateX: ["0%", "0%", "-50%"],
        translateY: ["0%", "-50%", "-50%"],
        top: ["0px", window.innerHeight * 0.5 + "px", window.innerHeight * 0.5 + "px"],
        left: ["30px", "30px", window.innerWidth * 0.5 + "px"],
        transition: {
            type: "spring",
            duration: 1
        }
    }
}

const headingVariantPhone = {
    initial: {
        translateX: "-50%",
        translateY: "-50%",
        top: window.innerHeight * 0.5 + "px",
        left: window.innerWidth * 0.5 + "px"
    },
    animate: {
        translateY: ["-50%", "-50%", "0%"],
        top: [window.innerHeight * 0.5 + "px", window.innerHeight * 0.5 + "px", "0px"],
        transition: {
            type: "spring",
            duration: 1.5
        }
    },
    exit: {
        translateY: ["0%", "-50%", "-50%"],
        top: ["0px", window.innerHeight * 0.5 + "px", window.innerHeight * 0.5 + "px"],
        transition: {
            type: "spring",
            duration: 1
        }
    }
}

const overlayVariant = {
    initial: {
        opacity: 0.1
    },
    animate: {
        opacity: 0.6,
        transition: {
            duration: 1.3,
            ease: [.78, .01, .31, .92]
        }
    },
    exit: {
        opacity: 0.3,
        transition: {
            duration: 1.5,
            ease: [.78, .01, .31, .92]
        }
    }
}

const cardContainerVariant = {
    initial: {
        y: 200,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: [.78, .01, .31, .92],
            delay: 0.6
        }
    },
    exit: {
        y: 200,
        opacity: 0,
        transition: {
            duration: 1,
            ease: [.78, .01, .31, .92]
        }
    }
}

export default function ExperiencePage({ isPhone }) {
    return (
        <ExperiencePageContainer variants={experienceContainerVariant} animate="animate"
            exit="exit" initial="initial" id="projects-container">
            <BackgroundOverlay variants={overlayVariant} id="projects-page-bg-overlay" />
            <Heading id="projects-page-heading" variants={isPhone ? headingVariantPhone : headingVariant} style={{
                textAlign: (isPhone ? "center" : "left")
            }}>Experience</Heading>
            <CardContainer variants={cardContainerVariant} id="project-cards-container" style={{ marginTop: (isPhone ? "100px" : "128px") }} isPhone={isPhone}>
                <ExperienceCard title="Full-Stack Developer Intern" company="Prospareto" duration="September, 2021" description="In my short time there, I designed, wrote and tested their whole revamped forum page." skills="ReactJS (Material-UI, Styled-Components)" />
            </CardContainer>
            <Footer isPhone={isPhone} quote="You only live once, but if you do it right, once is enough."
                person="Mae West" />
        </ExperiencePageContainer>
    )
}