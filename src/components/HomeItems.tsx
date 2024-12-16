import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const Info = (props: any) => {
    const { text, link, btnText } = props;
    
    return (
        <div className='glassmorphism info-box'>
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
        text = "I started programming at 16 as a self-taught developer. My first language was Lua, and at 17, I created a script that generated $1000 in revenue, sparking my passion for coding and continuous learning. The rest is history."
        link="/about#projects"
        btnText="View Projects"
        />
    ),
    2: (
        <Info 
        text= "Got a project idea? I’m always open to new opportunities and collaborations."
        link="/about#contact"
        btnText="Let's Connect"
        />
    ),
    3: (
        <div className="glassmorphism text-gray-100 sm:text-xl leading-5 sm:leading-6 text-center py-2 px-8 mx-4">
        Hi, I'm <strong className="font-bold text-white">John Raiven Olazo</strong>. <br/>
        A <strong className='text-white'>Full-Stack Developer</strong> based in the <a href="https://www.google.com/search?q=Philippines" target="_blank" className="underline font-semibold text-sky-300">Philippines</a>.
    </div>
    ),
    4: (
        <Info 
        text="Throughout my college journey, I’ve led innovative projects, working on everything from building frontend and backend components to integrating databases, managing cloud services, and handling deployments. I’ve built a strong foundation in web development and AI, with a particular focus on computer vision. My hands-on experience spans various programming languages and frameworks, giving me a well-rounded skill set in modern development."
        link="/about#about"
        btnText="Learn More"
        />
    ),
}

const HomeItems = ({currentStage}) => {
  return items[currentStage];
}

export default HomeItems;