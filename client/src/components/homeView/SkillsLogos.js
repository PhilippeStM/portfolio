import React from 'react';
import styles from '../../styles/SkillsLogos.module.css';
import ReactLogo from '../../images/react-logo.png';
import HtmlLogo from '../../images/html-logo.png';
import JavaScriptLogo from '../../images/javascript-logo.png';
import CssLogo from '../../images/css-logo.png';
import GitHubLogo from '../../images/github-logo.png';
import MongoLogo from '../../images/mongo-logo.png'
import NodeLogo from '../../images/node-logo.svg';
import VssLogo from '../../images/vss-logo.png';


const SkillsLogos = () => {
    return (
        <section>
            <img src={HtmlLogo} alt="html logo" className={styles.logo}></img>
            <img src={JavaScriptLogo} alt="javascript logo" className={styles.logo}></img>
            <img src={CssLogo} alt="css logo" className={styles.logo}></img>
            <img src={ReactLogo} alt="react logo" className={styles.logo}></img>
            <br></br>
            <img src={NodeLogo} alt="node logo" className={styles.logo}></img>
            <img src={MongoLogo} alt="mongo logo" className={styles.logo}></img>
            <img src={GitHubLogo} alt="github logo" className={styles.logo}></img>
            <img src={VssLogo} alt="vss logo" className={styles.logo}></img>
        </section>
    )
}

export default SkillsLogos;