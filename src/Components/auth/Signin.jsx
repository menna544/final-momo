import { useState } from "react";
import imeg from '../../Images/download (5).jpg';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInError, setSignInError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSignIn = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = users.find(user => user.email.toLowerCase() === email.toLowerCase() && user.password === password);

    if (foundUser) {
      setSignInError('');
      localStorage.setItem('currentUser', JSON.stringify({ email: foundUser.email, password: foundUser.password }));
      navigate('/home', { state: { userEmail: foundUser.email } }); 
    } else {
      setSignInError('Incorrect email or password');
    }
  };
  const goToSignup = () => {
    navigate('/signup'); 
  };

  const back = () => {
    navigate('/startlog'); 
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="App">
      <FontAwesomeIcon icon={faArrowLeft} className="arrow" onClick={back} />
      <div className="page7">
        <div className="cont6">
          <img src={imeg} alt="Imeg" />
          <h1>Sign in</h1>
          <div className="input-container">
            <input type="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
          </div>
          <div className="input-container">
            <input type={passwordVisible ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} className="input-icon" onClick={togglePasswordVisibility} />
          </div>
          {signInError && <p className="error-message">{signInError}</p>}
          <button onClick={handleSignIn}>Log in</button>
          <h4 className="signup">
            {` Don't have an account?`} <span className="sign1" onClick={goToSignup}>Sign up</span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Signin;
