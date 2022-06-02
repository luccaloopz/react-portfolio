import React from "react";

export default function Resume() {
    return (
        <div style={{ display: "flex", paddingLeft: 60, paddingTop: 30, flexDirection: 'column' }}>
            <h1 style={{color: '#354259'}}>Resume</h1>
            <p style={{paddingTop: 30, color: '#354259'}}><a href={process.env.PUBLIC_URL + '/lucca-resume.pdf'} target={'_blank'} style={{ color: '#354259'}}>Click here to view my Resume</a></p>
            <div style={{fontSize: 'larger', textAlign: 'justify', paddingTop: 30, color: '#354259'}}>
                <h4 style={{color: '#354259'}}>Front-End Proficiencies</h4>
                <ul>
                    <li style={{color: '#354259'}}>HTML</li>
                    <li style={{color: '#354259'}}>CSS</li>
                    <li style={{color: '#354259'}}>JavaScript</li>
                    <li style={{color: '#354259'}}>React</li>
                    <li style={{color: '#354259'}}>Bootstrap</li>
                    <li style={{color: '#354259'}}>jQuery</li>
                </ul>

                <h4 style={{color: '#354259'}}>Back-End Proficiencies</h4>
                <ul>
                    <li style={{color: '#354259'}}>Node</li>
                    <li style={{color: '#354259'}}>Express</li>
                    <li style={{color: '#354259'}}>MySQL</li>
                    <li style={{color: '#354259'}}>Sequelize</li>
                    <li style={{color: '#354259'}}>MongoDB</li>
                    <li style={{color: '#354259'}}>Mongoose</li>
                </ul>
            </div>
        </div>
    );
}