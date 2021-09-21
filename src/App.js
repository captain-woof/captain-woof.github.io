import styled from "styled-components"
import Homepage from "./components/home-page/index"
import { motion, AnimatePresence } from "framer-motion"
import { useLocation, Route, Switch } from "react-router-dom"
import AboutPage from "./components/about-page/index"
import ProjectsPage from "./components/projects-page/index"
import { useMediaQuery } from "react-responsive"
import ExperiencePage from "./components/experience-page/index.js"

const MainContainer = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
    overflow-y: scroll;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
        display: none;
    }
    ::-moz-scrollbar {
        display: none; 
    }
`

export default function App() {
    const location = useLocation()
    const isPhone = useMediaQuery({ query: '(max-width: 480px)' })

    return (
        <MainContainer id="main-container">
            <AnimatePresence>
                <Switch key={location.pathname} location={location}>
                    <Route exact path="/">
                        <Homepage isPhone={isPhone} />
                    </Route>
                    <Route exact path="/about">
                        <AboutPage isPhone={isPhone} />
                    </Route>
                    <Route exact path="/projects">
                        <ProjectsPage isPhone={isPhone} />
                    </Route>
                    <Route exact path="/experience">
                        <ExperiencePage isPhone={isPhone} />
                    </Route>
                </Switch>
            </AnimatePresence>
        </MainContainer>
    )
}