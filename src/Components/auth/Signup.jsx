import { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import imeg from '../../Images/download (5).jpg';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); 

  const handleSignUp = (e) => {
    e.preventDefault();
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailPattern.test(email)) {
      setEmailError('Enter a valid email address');
      return;
    } else {
      setEmailError('');
    }
    if (!password || password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      return;
    } else {
      setPasswordError('');
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return;
    } else {
      setConfirmPasswordError('');
    }
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.email === email && user.password === password);

    if (existingUser) {
      setEmailError('An account with this email already exists');
      return;
    }
  
    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify({ email: newUser.email, password: newUser.password }));
    navigate('/home', { state: { userEmail: email } });
  };
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const back = () => {
    navigate('/startlog'); 
  };

  const handleLogin = () => {
    navigate('/signin');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSignUp(e);
    }
  };

  return (
    <div className="App">
      <FontAwesomeIcon icon={faArrowLeft} className="arrow" onClick={back} />
      <div className="page7">
        <div className="cont6">
          <img src={imeg} alt='Imeg' />
          <h1>Create an account</h1>
          <div className="input-container">
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
          </div>
          {emailError && <p className="error-message">{emailError}</p>}
          <div className="input-container">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} className="input-icon" onClick={togglePasswordVisibility} />
          </div>
          {passwordError && <p className="error-message">{passwordError}</p>}
          <div className="input-container">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} className="input-icon" onClick={togglePasswordVisibility} />
          </div>
          {confirmPasswordError && <p className="error-message">{confirmPasswordError}</p>}
          <button onClick={handleSignUp}>Get Started</button>
          <h4 className="signup">
            Already have an account? <span className="sign1" onClick={handleLogin}>Sign in</span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Signup;
