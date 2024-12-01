const WelcomeScreen = ({ onEnter }) => {
    return (
      <div className="intro-overlay">
        <h1>Welcome to My World</h1>
        <button className="intro-button" onClick={onEnter}>
          Enter
        </button>
      </div>
    );
  };

export default WelcomeScreen


// const [showIntro, setShowIntro] = useState(true);

// const handleEnter = () => {
//   setShowIntro(false);
//   setIsPlaying(true);
//   audioRef.current.play();
// };