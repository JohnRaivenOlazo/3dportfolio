
import { useParams } from 'react-router-dom';
import { projects } from '../assets/data';
import transition from './transition';
import StarsCanvas from '../components/canvas/StarsCanvas';
import GlareEffect from '../components/canvas/GlareEffect';

const Project = () => {
  const { title } = useParams();
  const project = projects.find((project) => project.title === String(title));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="bg-main h-screen w-full text-white">
      <StarsCanvas />
      <GlareEffect />
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <a href={project.repository} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
};

export default transition(Project);