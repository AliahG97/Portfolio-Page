import React from "react";
import githubLogo from "../assets/Images/github.png"
import linkedinLogo from "../assets/Images/linkedin.png"


export default function Footer() {
    return (

        <div className="footer">
            <div className="footerLinks">
                <div>
                    <a
                        href="https://github.com/AliahG97"
                        target="_blank"
                    // rel="noreferrer noopener"
                    >
                        <img className="logo" src={githubLogo} alt="github logo" />
                    </a>
                </div>
                <div>
                    <a
                        href="https://www.linkedin.com/in/Aliah-Guerra"
                        target="_blank"
                    // rel="noreferrer noopener"
                    >
                        <img className="logo" src={linkedinLogo} alt="linkedin Logo" />
                    </a>
                    <p className="copyright">©Aliah Guerra 2024</p>
                </div>
            </div>
        </div>

    );
}
