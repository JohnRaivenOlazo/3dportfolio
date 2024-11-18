import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const Info = ({text, link, btnText }) => {
    return (
        <div className='neo-brutalism-blue info-box animate-popup-expand'>
            <p className="font-small text-sm sm:text-lg text-center">{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} />
        </Link>
    </div>
    )
}

const items = {
    1: (    
        <div className="neo-brutalism-blue text-gray-100 sm:text-xl sm:leading-snug text-center py-3 px-8 animate-popup-expand">
            Hi, I'm <strong className="font-bold text-white">Raiven</strong>. <br />
            A <strong className='text-white'>Software Engineer</strong> based in the <a href="https://www.google.com/search?q=Philippines" target="_blank" className="underline font-semibold text-sky-300">Philippines</a>.
        </div>
    ),
    2: (
        <Info 
        text="I began my programming journey at the age of 16. As a self-taught developer, I have a passion for continuous learning and innovation. My first programming language was Lua, and I developed a script that generated $1000 in revenue within a year at the age of 17, which further fueled my enthusiasm for coding."
        link="/about"
        btnText="Learn More"
        />
    ),
    3: (
        <Info 
        text = "Throughout my college journey, I’ve had the opportunity to lead innovative projects, handling everything from building frontend and backend to integrating databases, managing cloud services, and handling deployments. I’ve developed a strong foundation in web development and AI, especially in Computer Vision. With hands-on experience in a variety of programming languages and frameworks."
        link="/projects"
        btnText="View Projects"
        />
    ),
    4: (
        <Info 
        text= "Have a project in mind? I'm always open to new opportunities and collaborations. Feel free to reach out to me."
        link="/contact"
        btnText="Let's Connect"
        />
    ),
}

const HomeItems = ({currentStage}) => {
  return items[currentStage];
}

export default HomeItems;