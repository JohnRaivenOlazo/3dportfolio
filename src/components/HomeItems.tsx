import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const Info = (props: any) => {
    const { text, link, btnText } = props;
    
    return (
        <div className='glassmorphism info-box animate-popup-expand'>
            <p className="font-medium text-xs sm:text-lg text-center">{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} />
        </Link>
    </div>
    )
}

const items = {
    1: (    
        <Info 
        text = "Throughout my college journey, I’ve had the opportunity to lead innovative projects, handling everything from building frontend and backend to integrating databases, managing cloud services, and handling deployments. I’ve developed a strong foundation in web development and AI, especially in Computer Vision. With hands-on experience in a variety of programming languages and frameworks."
        link="/about#projects"
        btnText="View Projects"
        />
    ),
    2: (
        <Info 
        text= "Have a project in mind? I'm always open to new opportunities and collaborations. Feel free to reach out to me."
        link="/about#contact"
        btnText="Let's Connect"
        />
    ),
    3: (
        <div className="glassmorphism text-gray-100 sm:text-xl  leading-5 text-center py-2 px-8 animate-popup-expand">
        Hi, I'm <strong className="font-bold text-white">John Raiven Olazo</strong>. <br/>
        A <strong className='text-white'>Full-Stack Developer</strong> based in the <a href="https://www.google.com/search?q=Philippines" target="_blank" className="underline font-semibold text-sky-300">Philippines</a>.
    </div>
    ),
    4: (
        <Info 
        text="I began my programming journey at the age of 16. As a self-taught developer, I have a passion for continuous learning and innovation. My first programming language was Lua, and I developed a script that generated $1000 in revenue within a year at the age of 17, which further fueled my enthusiasm for coding."
        link="/about#about"
        btnText="Learn More"
        />
    ),
}

const HomeItems = ({currentStage}) => {
  return items[currentStage];
}

export default HomeItems;