import { useState,useEffect } from 'react';
import Image from '../Images/rascal-have-fun.gif'
import '../App.css';
import { faHouse, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'; 
import { faReadme } from "@fortawesome/free-brands-svg-icons";
import Swal from 'sweetalert2';
const Stories = () => {
    const [paymentStatus, setPaymentStatus] = useState('locked');
    const navigate = useNavigate(); 
    const story1 = () => {
        navigate('/story1');
    };
    const story2 = () => {
        navigate('/story2'); 
    };
    const story3 = () => {
        navigate('/story3');
    };
    const story4 = () => {
        navigate('/story4'); 
    };
    const story5 = () => {
        navigate('/story5');
    };
    const story6 = () => {
        navigate('/story6');
    };
    const story7 = () => {
        navigate('/story7');
    };
    const story8 = () => {
        navigate('/story8'); 
    };
    const story9 = () => {
        navigate('/story9');
    };
    const story10 = () => {
        navigate('/story10');
    };
    const story11 = () => {
        navigate('/story11');
    };
    const story12 = () => {
        navigate('/story12');
    };
    
    const navigateToPayment = () => {
        navigate('/payment'); 
    };
    useEffect(() => {
        const isPaymentSuccessful = localStorage.getItem('isPaymentSuccessful');
        if (isPaymentSuccessful === 'true') {
            setPaymentStatus('unlocked');
        }
    }, []);  
    const set = () => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your are in Stories page",
                showConfirmButton: false,
                timer: 1500
              });
        }
    const home = () => {
        navigate('/home'); 
    };
    const setprofile = () => {
        navigate('/profile'); 
    };
  return (
        <>
        <div className="footer">
                        <FontAwesomeIcon icon={faHouse} className="icon2" onClick={home}/>
                        <FontAwesomeIcon icon={faReadme} className="icon2"  onClick={set}/>
                        <FontAwesomeIcon icon={faUser}  className="icon2" onClick={setprofile}/>
                    </div>
                   
                    <div className="contal">
                    <div className="begin2"> 
                 <img src={Image} alt="Your Alt Text" className="image" />
                        </div>
                        <div className="all2">
                            <div className="unit1" onClick={story1}>
                                <div className="cont1">
                                    <h1>Story1</h1>
                                    <p >Introduce yourself</p>
                                </div>
                                <FontAwesomeIcon icon={faBookOpen} className="icon1"  />
                            </div>
                            <div className="unit1" onClick={story2}>
                                <div className="cont1">
                                    <h1>Story2</h1>
                                    <p >Colors✨</p>
                                </div>
                                <FontAwesomeIcon icon={faBookOpen} className="icon1" />
                            </div>
                            <div className="unit1" onClick={story3}>
                                <div className="cont1">
                                    <h1>Story3</h1>
                                    <p >About Morning🐣</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1"  />
                        )}
                            </div>
                            <div className="unit1" onClick={story4}>
                                <div className="cont1">
                                    <h1>Story4</h1>
                                    <p >The Ant and the Dove</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" />
                        )}
                            </div>
                            <div className="unit1" onClick={story5}>
                                <div className="cont1">
                                    <h1>Story5</h1>
                                    <p >Cooking🍕</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1"  />
                        )}
                            </div>
                            <div className="unit1" onClick={story6}>
                                <div className="cont1">
                                    <h1>Story6</h1>
                                    <p >Sharing 🥞🧇🫐🍒🥐</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1"  />
                        )}
                            </div>
                            <div className="unit1" onClick={story7}>
                                <div className="cont1">
                                    <h1>Story7</h1>
                                    <p >The girl and the ice cream Truck</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1"  />
                        )}
                            </div>
                            <div className="unit1" onClick={story8}>
                                <div className="cont1">
                                    <h1>Story8</h1>
                                    <p>{`Finally it's time for music🎵🎵`}</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1"  />
                        )}
                            </div>
                            <div className="unit1" onClick={story9}>
                                <div className="cont1">
                                    <h1>Story9</h1>
                                    <p >Used To and Would grammer</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1"  />
                        )}
                            </div>
                            <div className="unit1" onClick={story10}>
                                <div className="cont1">
                                    <h1>Story10</h1>
                                    <p >If I Were You - Conditionals in English</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1"  />
                        )}
                            </div>
                            <div className="unit1" onClick={story11}>
                                <div className="cont1">
                                    <h1>Story11</h1>
                                    <p >What are you doing?</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1"  />
                        )}
                            </div>
                            <div className="unit2" onClick={story12}>
                                <div className="cont1">
                                    <h1>Story12</h1>
                                    <p >{`Finally it's time for music🎵🎵`}</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1"  />
                        )}
                            </div>
                            </div>
                        </div>
                           
    </>

  );
};

export default Stories;
