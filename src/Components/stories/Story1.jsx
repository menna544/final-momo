import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../../App.css';

const Story1 = () => {
  const navigate = useNavigate();
  const { storyId } = useParams();

  const storys = {
    story1: { title: 'story 1', videoUrl: 'https://www.youtube.com/embed/XBxz8_Ri8-Y' },
    story2: { title: 'story 2', videoUrl: 'https://www.youtube.com/embed/3Sq8ibmgmS8' },
    story3: { title: 'story 3', videoUrl: 'https://www.youtube.com/embed/JwGnCIsLOpU' },
    story4: { title: 'story 4', videoUrl: 'https://www.youtube.com/embed/TpLhLBhFTag' },
    story5: { title: 'story 5', videoUrl: 'https://www.youtube.com/embed/oqfh5i5Zfcs' },
    story6: { title: 'story 6', videoUrl: 'https://www.youtube.com/embed/96fq4YmYjzQ' },
    story7: { title: 'story 7', videoUrl: 'https://www.youtube.com/embed/1DeQVnSxcLk' },
    story8: { title: 'story 8', videoUrl: 'https://www.youtube.com/embed/4SVSxfTRc2M' },
    story9: { title: 'story 9', videoUrl: 'https://www.youtube.com/embed/OWuFkCPb9oE' },
    story10: { title: 'story 10', videoUrl: 'https://www.youtube.com/embed/gxaTP6zF9Vc' },
    story11: { title: 'story 11', videoUrl: 'https://www.youtube.com/embed/UdEasleUc54' },
    story12: { title: 'story 12', videoUrl: 'https://www.youtube.com/embed/9tcaM06eGrY' },
  
  };

  const story = storys[storyId];

  if (!story) {
    navigate('/stories'); 
    return null;
  }

  const { title, videoUrl } = story;

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

export default Story1;
