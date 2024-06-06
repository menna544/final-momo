import { useNavigate } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../../App.css'; 
const Story10 = () => {
  const navigate = useNavigate(); 
  const back = () => {
    navigate('/Stories');
  };

  return (
    <>
    <FontAwesomeIcon icon={faArrowLeft} className="arrow" onClick={back} />
    <div className="unit-container">
      <div className="video-container">
        <iframe
          width="315"
          height="215"
          src="https://www.youtube.com/embed/gxaTP6zF9Vc" 
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    </>
  );
};

export default Story10;
