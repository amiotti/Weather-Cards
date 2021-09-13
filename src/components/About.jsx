import React from 'react'
import S from './About.module.css'


function About (){
    return (
        <div className={S.container}>
            <div className={S.content}>   
            <div>About this Weather APP</div>
            <p>This App is my first project. It´s a SPA gets data from an API and display a Weather card according the search made.</p>
            <ul>
            I´ve used:
            <li>CSS</li>
            <li>React</li>
            <li>Routing</li>
            <li>Javascript</li>
            </ul>
            <footer>Made in Argentina with love</footer>
            </div>
        </div>
    )
}

export default About