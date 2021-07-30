import styled from "styled-components"
import AboutBioContainer from "./bio-container/index"
import ToolbeltContainer from "./toolbelt-container/index"
import Footer from "../footer-container/index"

const ParentContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: scroll;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
        display: none;
    }
    ::-moz-scrollbar {
        display: none; 
    }
    position: absolute;
    left: 0;
    top: 0;
`

export default function AboutPage({ isPhone }) {
    return (
        <ParentContainer id="about-page-parent-container">
            <AboutBioContainer isPhone={isPhone}/>
            <ToolbeltContainer isPhone={isPhone}/>
            <Footer isPhone={isPhone} quote="I think, therefore I am." person="Rene Descartes"/>
        </ParentContainer>
    )
}