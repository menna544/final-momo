import  { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBook,faLock } from "@fortawesome/free-solid-svg-icons";
import { faReadme } from "@fortawesome/free-brands-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate} from 'react-router-dom'; 
import Swal from 'sweetalert2';
import '../../App.css';

const Home = () => {
    const navigate = useNavigate();
    const [paymentStatus, setPaymentStatus] = useState('locked');
    const userData = JSON.parse(localStorage.getItem('user')); 
    const userEmail = userData ? userData.email : null;
    const name = userEmail ? userEmail.split('@')[0] : 'Guest';
    const vide = () => {
        navigate('/unit');  
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

    const vide1 = () => {
        navigate('/unit2');  
    };
   
    const vide2 = () => {
        navigate('/unit3');    
    };
    const vide3 = () => {
        navigate('/unit4');   
    };
    const vide4 = () => {
        navigate('/unit5');   
    };
    const vide5 = () => {
        navigate('/unit6');  
    };
    const vide6 = () => {
        navigate('/unit7');     
    };
    const vide7 = () => {
        navigate('/unit8');  
    };
    const vide8 = () => {
        navigate('/unit9');  
    };
    const vide9 = () => {
        navigate('/unit10');   
    };
    const vide10 = () => {
        navigate('/unit11');    
    };
    const vide11 = () => {
        navigate('/unit12');     
    };
    const vide12 = () => {
        navigate('/unit13');  
    };
    const vide13= () => {
        navigate('/unit14');   
    };
    const vide14 = () => {
        navigate('/unit15');    
    };
    const vide15 = () => {
        navigate('/unit16');   
    };
    const quiz2 = () => {
        navigate('/quiz2');
    };
    const quiz3 = () => {
        navigate('/quiz3');
    };
    const quiz4 = () => {
        navigate('/quiz4');
    };
    const quiz5 = () => {
        navigate('/quiz5');
    };
    const quiz6 = () => {
        navigate('/quiz6');
    };
    const set = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "You are in home page",
            showConfirmButton: false,
            timer: 1500
        });
    };
    const story = () => {
        navigate('/stories'); 
    };
    const setprofile = () => {
        navigate('/profile'); 
    };
    const quiz1 = () => {
        navigate('/quiz');
    };
    return (
        <>
            <div className="footer">
                <FontAwesomeIcon icon={faHouse} className="icon2" onClick={set}/>
                <FontAwesomeIcon icon={faReadme} className="icon2"  onClick={story}/>
                <FontAwesomeIcon icon={faUser}  className="icon2" onClick={setprofile}/>
            </div>
            <div className="contal">
                <div className="begin"> 
                <h1>Hello, {name}!</h1>
                    <p>{`Let's Begin your journey`} </p>
                </div>
                        <div className="all">
                            <div className="unit1"  onClick={vide}>
                                <div className="cont1">
                                    <h1>Unit 1</h1>
                                    <p >Alphabet Words🔠</p>
                                </div>
            
                            <FontAwesomeIcon icon={faBookOpen} className="icon1"/>
                       
                            </div>
                            <div className="unit1"  onClick={vide1}>
                                <div className="cont1">
                                    <h1>Unit 2</h1>
                                    <p >Conversations</p>
                                </div>
                               
                            <FontAwesomeIcon icon={faBookOpen} className="icon1"  />
                       
                            </div>
                            <div className="unit1"  onClick={vide2}>
                                <div className="cont1">
                                    <h1>Unit 3</h1>
                                    <p >Listen and repeat</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Exam1</h1>
                                
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBook} className="icon1" onClick={quiz1} />
                        )}
                            </div>
                            <div className="unit1" onClick={vide3}>
                                <div className="cont1">
                                    <h1>Unit 4</h1>
                                    <p >Grammer conversation</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1"  />
                        )}
                            </div>
                            <div className="unit1" onClick={vide4}>
                                <div className="cont1">
                                    <h1>Unit 5</h1>
                                    <p >Listen to School Vocabulary </p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1"  />
                        )}
                            </div>
                            <div className="unit1" onClick={vide5}>
                                <div className="cont1">
                                    <h1>Unit 6</h1>
                                    <p >Listen to Colors </p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1"  />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Exam2</h1>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBook} className="icon1" onClick={quiz2} />
                        )}
                            </div>
                            <div className="unit1" onClick={vide6}>
                                <div className="cont1">
                                    <h1>Unit 7</h1>
                                    <p >learn with Zootopia movie💞</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1"  />
                        )}
                            </div>
                            <div className="unit1" onClick={vide7} >
                                <div className="cont1">
                                    <h1>Unit 8</h1>
                                    <p >Listen to song💞</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" />
                        )}
                            </div>
                            <div className="unit1" onClick={vide8} >
                                <div className="cont1">
                                    <h1>Unit 9</h1>
                                    <p >Daily Life</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Exam3</h1>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" onClick={quiz3} />
                        )}
                            </div>
                            <div className="unit1" onClick={vide9} >
                                <div className="cont1">
                                    <h1>Unit 10</h1>
                                    <p >Learn English with spongpop</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" />
                        )}
                            </div>
                            <div className="unit1" onClick={vide10} >
                                <div className="cont1">
                                    <h1>Unit 11</h1>
                                    <p >Went to London🚀</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" />
                        )}
                            </div>
                            <div className="unit1" onClick={vide11}>
                                <div className="cont1">
                                    <h1>Unit 12</h1>
                                    <p >Learn English with Monsters Inc</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1"  />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Exam4</h1>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBook} className="icon1" onClick={quiz4} />
                        )}
                            </div>
                            <div className="unit1" onClick={vide12}>
                                <div className="cont1">
                                    <h1>Unit 13</h1>
                                    <p >The Bird and the Country Whale</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1"  />
                        )}
                            </div>
                            <div className="unit1" onClick={vide13}>
                                <div className="cont1">
                                    <h1>Unit 14</h1>
                                    <p >Listen to song💞</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1"  />
                        )}
                            </div>
                            <div className="unit1" onClick={vide14} >
                                <div className="cont1">
                                    <h1>Unit 15</h1>
                                    <p >Learn English with The Incredibles</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1" />
                        )}
                            </div>
                            <div className="unit1">
                                <div className="cont1">
                                    <h1>Exam5</h1>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBook} className="icon1" onClick={quiz5} />
                        )}
                            </div>
                            <div className="unit1" onClick={vide15}>
                                <div className="cont1">
                                    <h1>Unit 16</h1>
                                    <p >Listen to song💞</p>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBookOpen} className="icon1"  />
                        )}
                            </div>
                            
                            <div className="unit2">
                                <div className="cont1">
                                    <h1>Exam6</h1>
                                </div>
                                {paymentStatus === 'locked' ? (
                            <FontAwesomeIcon icon={faLock} className="icon1" onClick={navigateToPayment} />
                        ) : (
                            <FontAwesomeIcon icon={faBook} className="icon1" onClick={quiz6} />
                        )}
                            </div>
                        </div>
                    </div>
                </>
        
      
    );
};

export default Home;