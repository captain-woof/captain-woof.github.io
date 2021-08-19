import styled from "styled-components"
import { motion } from "framer-motion"
import ToolbeltCard from "./card"
import ToolbeltHeading from "./heading"

import HTML_Logo from "../../../assets/logos/html_logo.svg"
import CSS_Logo from "../../../assets/logos/css_logo.svg"
import JS_Logo from "../../../assets/logos/javascript_logo.svg"
import NodeJS_Logo from "../../../assets/logos/nodejs_logo.svg"
import React_Logo from "../../../assets/logos/react_logo.svg"
import Electron_Logo from "../../../assets/logos/electron_logo.svg"
import ExpressLogo from "../../../assets/logos/express_logo.svg"
import LinuxLogo from "../.././../assets/logos/linux_logo.svg"
import WindowsLogo from "../.././../assets/logos/windows_logo.svg"
import BashLogo from "../.././../assets/logos/bash_logo.svg"
import PythonLogo from "../.././../assets/logos/python_logo.svg"
import PowershellLogo from "../.././../assets/logos/powershell_logo.svg"
import MySqlLogo from "../.././../assets/logos/mysql_logo.svg"
import MSSqlLogo from "../.././../assets/logos/sqlserver_logo.svg"
import MongoDBLogo from "../.././../assets/logos/mongodb_logo.svg"
import RedisLogo from "../.././../assets/logos/redis_logo.svg"
import CppLogo from "../.././../assets/logos/cpp_logo.svg"
import CSharpLogo from "../.././../assets/logos/csharp_logo.svg"
import DockerLogo from "../.././../assets/logos/docker_logo.svg"
import PhotoshopLogo from "../.././../assets/logos/photoshop_logo.svg"
import PremiereProLogo from "../.././../assets/logos/premirepro_logo.svg"
import AudacityLogo from "../.././../assets/logos/audacity_logo.svg"

const ToolbeltParentContainer = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: #1a1a1a;
    padding: 18px 0px 18px 0px;
`

const toolbeltContainerVariant = {
    initial: {
        opacity: 1,
        y: "0%"
    },
    exit: {
        y: "-100%",
        opacity: 0,
        transition: {
            ease: [.78, .01, .31, .92],
            duration: 1.5,
        }
    }
}

export default function ToolbeltContainer({ isPhone }) {
    return (
        <motion.div variants={toolbeltContainerVariant} exit="exit" initial="initial">
            <ToolbeltHeading />
            <ToolbeltParentContainer id="toolbelt-container">
                <ToolbeltCard isPhone={isPhone} title="Web Development"
                    logos={[HTML_Logo, CSS_Logo, JS_Logo, NodeJS_Logo, React_Logo, ExpressLogo, Electron_Logo]} />
                <ToolbeltCard isPhone={isPhone} title="OS Proficiency"
                    logos={[LinuxLogo, WindowsLogo]} />
                <ToolbeltCard isPhone={isPhone} title="Scripting"
                    logos={[BashLogo, PythonLogo, PowershellLogo]} />
                <ToolbeltCard isPhone={isPhone} title="Databases"
                    logos={[MySqlLogo, MSSqlLogo, MongoDBLogo, RedisLogo]} />
                <ToolbeltCard isPhone={isPhone} title="Others"
                    logos={[CppLogo, CSharpLogo, DockerLogo]} />
                <ToolbeltCard isPhone={isPhone} title="Multimedia Editing"
                    logos={[PhotoshopLogo, PremiereProLogo, AudacityLogo]} />
            </ToolbeltParentContainer>
        </motion.div>
    )
}