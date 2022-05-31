import React from "react";

export default function Resume() {
    return (
        <div style={{ display: "flex", paddingLeft: 60, paddingTop: 30, flexDirection: 'column' }}>
            <h1>Resume</h1>
            <p style={{paddingTop: 30}}><a href={process.env.PUBLIC_URL + '/lucca-resume.pdf'} target={'_blank'} style={{textDecoration: 'none', color: 'black'}}>Click here to view my Resume</a></p>
            <div style={{fontSize: 'larger', textAlign: 'justify', paddingTop: 30}}>
                <h4>Front-End Proficiencies</h4>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>jQuery</li>
                </ul>

                <h4>Back-End Proficiencies</h4>
                <ul>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                </ul>
            </div>
        </div>
    );
}