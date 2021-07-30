import styled from "styled-components"
import PageButton from "./pageButton"
import { AnimateSharedLayout, motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Colors } from "../../colors"

const navbarVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            ease: [.54, .05, .09, .96],
            duration: 3,
            staggerChildren: 0.4,
            delayChildren: 2.3
        }
    },
    exit: {
        opacity: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 2,
            delay: 0.3
        }
    }
}

const NavBarStyle = styled(motion.div)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    z-index: 3;
    font-family: 'archia-regular';
    background-color: #21212170;
`

export default function Navbar({ isPhone }) {
    return (
        <AnimateSharedLayout type="crossfade">
            <NavBarStyle animate="animate" variants={navbarVariants} initial="initial"
                exit="exit" id="navbar-container">                
                <motion.a style={{ textDecoration: "none", color: "white" }}
                    href="https://captain-woof.medium.com/">
                    <PageButton layout layoutId="blog-button"
                        backgroundColor="#00000000" backgroundColorHover={Colors.HomepageBlogButtonColor}
                        text="Blog" isPhone={isPhone} />
                </motion.a>
                <Link style={{ textDecoration: "none", color: "white" }} to="/projects">
                    <PageButton layout layoutId="projects-button"
                        backgroundColor="#00000000" backgroundColorHover={Colors.HomepageProjectsButtonColor}
                        text="Projects" isPhone={isPhone} />
                </Link>
                <Link style={{ textDecoration: "none", color: "white" }} to="/about">
                    <PageButton layout layoutId="about-button"
                        backgroundColor="#00000000" backgroundColorHover={Colors.HomepageAboutButtonColor}
                        text="About" isPhone={isPhone} />
                </Link>
                <motion.a target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "white" }}
                    href="https://drive.google.com/file/d/1se1QKQBUf4yjxSTzRHSfc4OBpB-W4dK2/view?usp=sharing">
                    <PageButton layout layoutId="resume-button"
                        backgroundColor="#00000000" backgroundColorHover={Colors.HomepageResumeButtonColor}
                        text="Resume" isPhone={isPhone} />
                </motion.a>
            </NavBarStyle>
        </AnimateSharedLayout>
    )
}