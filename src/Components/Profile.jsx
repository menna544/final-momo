import { useState, useEffect } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom'; 
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import defaultProfileImage from '../Images/a25c646ac9c2510200931370b742b89d.jpg';

function Profile() {
  const [email, setEmail] = useState('');
  const [year, setYear] = useState('');
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const storedCurrentUser = JSON.parse(localStorage.getItem('currentUser')) || {};

    setEmail(storedCurrentUser.email || '');
    setYear(storedCurrentUser.year || '');
    if (storedCurrentUser.photo) {
      const byteCharacters = atob(storedCurrentUser.photo.split(',')[1]);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'image/jpeg' });
      setPhoto(blob);
    } else {
      setPhoto(null);
    }
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];
    setPhoto(selectedPhoto);
  
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64String = event.target.result.split(',')[1];
      localStorage.setItem('currentUser', JSON.stringify({ ...JSON.parse(localStorage.getItem('currentUser')), photo: base64String }));
      console.log("Photo saved to local storage.");
    };
    reader.readAsDataURL(selectedPhoto);
  };
  
  const handleSave = () => {
    localStorage.setItem('currentUser', JSON.stringify({ email, year, photo: photo ? URL.createObjectURL(photo) : null }));
    console.log("Changes saved to local storage.");
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/startlog');
  };

  const handleImageClick = () => {
    document.getElementById('fileInput').click();
  };

  const back = () => {
    navigate('/home');
  };

  return (
    <div className='content'>
      <div className="profile-header">
        <FontAwesomeIcon icon={faArrowLeft} className="arrow" onClick={back} />
        <h1 className='hhh'>Profile</h1>
      </div>
      <div className='input'>
        <div className='photo-edit'>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            style={{ display: 'none' }}
          />
          <div style={{ position: 'relative' }}>
            <img
              src={photo ? URL.createObjectURL(photo) : defaultProfileImage}
              alt="Profile"
              onClick={handleImageClick}
              className='immmg'
            />
            <button onClick={handleImageClick} className="edit-button">
              <span>+</span>
            </button>
          </div>
        </div>

        <label>Edit Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
        
        <label>Edit Year:</label>
        <input type="text" value={year} onChange={handleYearChange} />
        
        <div className='buttons'>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
