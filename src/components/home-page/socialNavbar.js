import styled from "styled-components"
import { AnimateSharedLayout, motion } from "framer-motion"
import { Colors } from "../../colors"
import SocialButton from "./socialButton"

import TwitterLogo from "../../assets/logos/twitter_logo.svg"
import InstagramLogo from "../../assets/logos/instagram_logo.svg"
import GithubLogo from "../../assets/logos/github_logo.svg"
import LinkedInLogo from "../../assets/logos/linkedin_logo.svg"
import EmailLogo from "../../assets/logos/email_logo.svg"

const SocialNavBarContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    z-index: 3;
    font-family: 'archia-regular';
    margin-top: 12px;
`

export default function SocialNavbar({ isPhone }) {
    return (
        <AnimateSharedLayout type="crossfade">
            <SocialNavBarContainer id="social-navbar-container" layout layoutId="social-navbar">
                <SocialButton url="https://twitter.com/realCaptainWoof" layout layoutId="social-button-1" isPhone={isPhone} logo={TwitterLogo} name="Twitter"
                    username="@realCaptainWoof" platformColor={Colors.TwitterColor} />
                <SocialButton url="https://instagram.com/sohail_saha_/" layout layoutId="social-button-2" isPhone={isPhone} logo={InstagramLogo} name="Instagram"
                    username="@sohail_saha_" platformColor={Colors.InstagramColor} />
                <SocialButton url="https://github.com/captain-woof/" layout layoutId="social-button-3" isPhone={isPhone} logo={GithubLogo} name="Github"
                    username="/captain-woof" platformColor={Colors.GithubColor} />
                <SocialButton url="https://www.linkedin.com/in/sohail-saha/" layout layoutId="social-button-4" isPhone={isPhone} logo={LinkedInLogo} name="LinkedIn"
                    username="sohail-saha" platformColor={Colors.LinkedInColor} />
                <SocialButton url="mailto:sohail.saha.666@gmail.com" layout layoutId="social-button-5" isPhone={isPhone} logo={EmailLogo} name="Email"
                    username="sohail.saha.666@gmail.com" platformColor={Colors.EmailColor} />
            </SocialNavBarContainer>
        </AnimateSharedLayout >
    )
}