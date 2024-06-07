import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../../App.css';

const Unit = () => {
  const navigate = useNavigate();
  const { unitId } = useParams();

  const units = {
    unit1: { title: 'Unit 1', videoUrl: 'https://www.youtube.com/embed/YKNKY8Tk_vk' },
    unit2: { title: 'Unit 2', videoUrl: 'https://www.youtube.com/embed/HFRd1RAJqpk' },
    unit3: { title: 'Unit 3', videoUrl: 'https://www.youtube.com/embed/lliYgLHgBMs' },
    unit4: { title: 'Unit 4', videoUrl: 'https://www.youtube.com/embed/FofANnMlD8w' },
    unit5: { title: 'Unit 5', videoUrl: 'https://www.youtube.com/embed/AS5nhKzaOqo' },
    unit6: { title: 'Unit 6', videoUrl: 'https://www.youtube.com/embed/fZbZnGzhYNE' },
    unit7: { title: 'Unit 7', videoUrl: 'https://www.youtube.com/embed/FikAJxtVgOY' },
    unit8: { title: 'Unit 8', videoUrl: 'https://www.youtube.com/embed/0enTq1fCE9A' },
    unit9: { title: 'Unit 9', videoUrl: 'https://www.youtube.com/embed/1m4NDlOAzyg' },
    unit10: { title: 'Unit 10', videoUrl: 'https://www.youtube.com/embed/JxWEAP0aAJQ' },
    unit11: { title: 'Unit 11', videoUrl: 'https://www.youtube.com/embed/Jr8gLJr9WKQ' },
    unit12: { title: 'Unit 12', videoUrl: 'https://www.youtube.com/embed/EKxTwv682nU' },
    unit13: { title: 'Unit 13', videoUrl: 'https://www.youtube.com/embed/FU_0NF_jrgE' },
    unit14: { title: 'Unit 14', videoUrl: 'https://www.youtube.com/embed/ILRs2r6lcHY' },
    unit15: { title: 'Unit 15', videoUrl: 'https://www.youtube.com/embed/3xCQrnTYmzY' },
    unit16: { title: 'Unit 16', videoUrl: 'https://www.youtube.com/embed/h9nB5ZzbSO8' },
  
  };

  const unit = units[unitId];

  if (!unit) {
    navigate('/home'); 
    return null;
  }

  const { title, videoUrl } = unit;

  const back = () => {
    navigate('/home');
  };

  return (
    <>
      <FontAwesomeIcon icon={faArrowLeft} className="arrow" onClick={back} />
      <div className="unit-container">
        <div className="video-container">
          <iframe
            className='ifr'
            width="100%"
            height="auto"
            src={videoUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Unit;
