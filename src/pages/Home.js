import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css";

function Home(){
    return(
        <div className="home">
            <div className="about">
                <h2>Hi, My name is Riya Keshwani.</h2>
                <div className="prompt">
                    <p>
                        A programmer.
                    </p>
                    <LinkedInIcon />
                    <EmailIcon />
                </div>           
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Front-End</h2>
                        <span>HTML,CSS,JS</span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>C,C++,JAVA,Python</span>
                    </li>
                    <li className="item">
                        <h2>Soft-SKills</h2>
                        <span>Communication Skills, Leadership, Responsible</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home;