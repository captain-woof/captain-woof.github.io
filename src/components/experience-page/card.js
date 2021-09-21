import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Colors } from '../../colors'
import { useEffect } from 'react'

const ExperienceCardContainer = styled(motion.a)`
    width: 80%;
    border-radius: 6px;
    background-color: ${Colors.OffWhite};
    display: flex;
    flex-direction: column;
    flex-flow: wrap;
    margin: 8px 0px;
    box-shadow: 4px 4px 3px #2a2a2a;
    text-decoration: none;
`

const InnerContainer = styled(motion.div)`
    height: 100%;
    width: 100%;
    margin: 16px;
`

const Title = styled(motion.div)`
    font-family: 'archia-regular';
    font-size: 20px;
    color: #000000;
`

const Company = styled(motion.div)`
    font-family: 'archia-regular';
    font-size: 16px;
    color: ${Colors.GreyDark};
`

const Duration = styled(motion.div)`
    font-family: 'opensans-regular';
    font-size: 12px;
    color: ${Colors.GreyLight};
    margin: 8px 0px 0px 0px;
`

const Description = styled(motion.div)`
    font-family: 'opensans-regular';
    font-size: 14px;
    color: ${Colors.GreyDark};
    margin: 8px 0px 0px 0px;
`

const Skills = styled(motion.div)`
    font-family: 'opensans-regular';
    font-size: 12px;
    color: ${Colors.GreyLight};
    margin: 8px 0px 0px 0px;
`

const cardContainerVariant = {
    initial: {
        y: 100,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: [.78, .01, .31, .92],
            staggerChildren: 0.3,
            when: 'beforeChildren'
        }
    },
    exit: {
        y: 100,
        opacity: 0,
        transition: {
            ease: [.78, .01, .31, .92],
            duration: 1,
            when: 'afterChildren'
        }
    },
    whileHover: {
        scale: 1.03,
        transition: {
            duration: 0.7
        }
    },
    whileTap: {
        scale: 0.97,
        transition: {
            duration: 0.1
        }
    }
}

const textVariant = {
    initial: {
        x: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: [.78, .01, .31, .92]
        }
    },
    exit: {
        x: 100,
        opacity: 0,
        transition: {
            ease: [.78, .01, .31, .92],
            duration: 1
        }
    }
}

export default function ExperienceCard({ title, company, description, duration, skills, picture, url = "#" }) {
    const [cardRef, isCardVisible] = useInView()
    const cardAnimation = useAnimation()

    useEffect(() => {
        if (isCardVisible) {
            cardAnimation.start("animate")
        }
    }, [cardAnimation, isCardVisible])

    return (
        <ExperienceCardContainer href={url} ref={cardRef} variants={cardContainerVariant} animate={cardAnimation} exit="exit" initial="initial" whileHover="whileHover" whileTap="whileTap" className="experience-card">
            <InnerContainer>
                <Title variants={textVariant}>{title}</Title>
                <Company variants={textVariant}>{company}</Company>
                <Duration variants={textVariant}>{duration}</Duration>
                <Description variants={textVariant}>{description}</Description>
                <Skills variants={textVariant}><i><u>Skills used:</u> {skills}</i></Skills>
            </InnerContainer>
        </ExperienceCardContainer>
    )
}