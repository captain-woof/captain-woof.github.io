import styled from "styled-components"
import { AnimateSharedLayout, motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { Colors } from "../../colors"
import { useInView } from "react-intersection-observer"

const ProjectCardContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 340px;
    margin: 12px;
    border-radius: 4px;
    box-shadow: black 3px 3px 5px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background-color: ${Colors.OffWhite};
`

const Image = styled(motion.img)`
    width: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`

const Logo = styled(motion.img)`
    position: absolute;
    top: 10px;
    left: 12px;
    width: 16%;
    z-index: 2;
`

const Name = styled(motion.div)`
    font-family: 'opensans-regular';
    font-size: 22px;
    margin-left: 8px;
    margin-right: 8px;
    padding: 8px;
`

const Description = styled(motion.div)`
    font-family: 'opensans-regular';
    font-size: 12px;
    margin-left: 16px;
    margin-right: 16px;
`

const ButtonGroup = styled(motion.div)`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 12px;
    flex-wrap: wrap;
`

const Button = styled(motion.div)`
    padding: 8px 16px 8px 16px;
    margin: 4px;
    border-radius: 2px;
    color: ${Colors.OffWhite};
    font-family: 'opensans-regular';
    font-size: 12px;
    font-weight: 600;
`

const logoVariant = {
    initial: {
        opacity: 1,
        scale: 0.9
    },
    animate: {
        scale: [0.9, 1, 0.9],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "linear"
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 1.5,
            ease: "linear"
        }
    }
}

const cardContainerVariant = {
    initial: {
        y: 100,
        opacity: 0,
        scale: 1
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.3,
            ease: [.78, .01, .31, .92],
            staggerChildren: 0.4,
            delay: 1.5
        }
    },
    exit: {
        y: "-100%",
        transition: {
            ease: [.78, .01, .31, .92],
            duration: 1.5,
            when: "afterChildren"
        }
    }
}

const nameAndDescriptionVariant = {
    initial: {
        x: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.9,
            ease: [0.6, 0.01, -0.05, 0.95]
        }
    }
}

const buttonGroupVariant = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.9,
            ease: [0.6, 0.01, -0.05, 0.95]
        }
    }
}

const buttonVariant = {
    whileHover: {
        width: "52px",
        transition: {
            duration: 0.5,
            ease: [0.6, 0.01, -0.05, 0.95]
        }
    }
}

const imageVariant = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.9,
            ease: [0.6, 0.01, -0.05, 0.95]
        }
    }
}

// 'buttons' is an array of json objects -> {text,url}
export default function ProjectCard({ logo, image, name, description, buttons }) {
    const [cardRef, isCardVisible] = useInView()
    const cardAnimation = useAnimation()

    useEffect(() => {
        if (isCardVisible) {
            cardAnimation.start("animate")
        }
    }, [cardAnimation, isCardVisible])

    return (
        <AnimateSharedLayout type="crossfade">
            <ProjectCardContainer className="project-card-container" layout layoutId={name + "-parent-container"}
                variants={cardContainerVariant} animate={cardAnimation} exit="exit" initial="initial" ref={cardRef}>
                <Logo variants={logoVariant} layout className="projects-card-logo"
                    layoutId={name + "-logo"} src={logo} />
                <Image variants={imageVariant} style={{ backgroundImage: image }} layout
                    className="projects-card-image"
                    layoutId={name + "-image"} src={image} />
                <Name variants={nameAndDescriptionVariant} layout className="projects-card-name"
                    layoutId={name + "-name"}>{name}</Name>
                <Description variants={nameAndDescriptionVariant} className="projects-card-desc"
                    layout layoutId={name + "-description"} key={name + "-description"}>
                    {description}
                </Description>
                <ButtonGroup layout layoutId={name + "-button-group"} key={name + "-button-group"}
                    variants={buttonGroupVariant}>
                    {buttons.map(({ text, url }, index) => {
                        return <a key={index} className="projects-card-button" href={url}
                            style={{ textDecoration: "none" }}>
                            <Button style={{
                                textAlign: "center",
                                backgroundColor:
                                    (index === 0 ? Colors.ButtonColor1 : Colors.ButtonColor2)
                            }} variants={buttonVariant} whileHover="whileHover">{text}</Button>
                        </a>
                    })}
                </ButtonGroup>
            </ProjectCardContainer>
        </AnimateSharedLayout>
    )
}