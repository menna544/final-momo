import { useEffect } from 'react';
import './Loading.css';
import { useNavigate } from 'react-router-dom';

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="loading-container">
      <h2>Momo..</h2>
      <p>English learning app</p>
      <div className="spinner"></div>
    </div>
  );
};

export default Loading;
