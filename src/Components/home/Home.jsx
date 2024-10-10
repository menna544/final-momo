import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faLock, faBook } from "@fortawesome/free-solid-svg-icons";
import { faReadme } from "@fortawesome/free-brands-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'; 
import Swal from 'sweetalert2';
import '../../App.css';

const Home = () => {
    const navigate = useNavigate();
    const [paymentStatus, setPaymentStatus] = useState('locked');
    const currentUser = JSON.parse(localStorage.getItem('currentUser')); 
    const userEmail = currentUser ? currentUser.email : null;
    const name = userEmail ? userEmail.split('@')[0] : 'Guest';

    const navigateToPayment = () => {
        navigate('/payment'); 
    };

    useEffect(() => {
        const isPaymentSuccessful = localStorage.getItem('isPaymentSuccessful');
        if (isPaymentSuccessful === 'true') {
            setPaymentStatus('unlocked');
        }
    }, []);  

    const handleUnitClick = (unitPath, unitId) => {
        if (unitId === 'unit1' || unitId === 'unit2') {
            navigate(unitPath);
        } else {
            if (paymentStatus === 'locked') {
                Swal.fire({
                    title: 'This unit is locked',
                    text: 'To access this unit, you need to enroll.',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Enroll',
                    cancelButtonText: 'Cancel',
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigateToPayment();
                    }
                });
            } else {
                navigate(unitPath);
            }
        }
    };

    const setHomePage = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "You are in home page",
            showConfirmButton: false,
            timer: 1500
        });
    };

    const navigateToStories = () => {
        navigate('/stories'); 
    };

    const navigateToProfile = () => {
        navigate('/profile'); 
    };
  
    const units = [
        { id: 'unit1', title: 'Unit 1', path: '/unit/unit1', description: 'Alphabet Words🔠' },
        { id: 'unit2', title: 'Unit 2', path: '/unit/unit2', description: 'Conversations' },
        { id: 'unit3', title: 'Unit 3', path: '/unit/unit3', description: 'Listen and repeat' },
        { id: 'quiz1', title: 'Exam 1', path: '/quiz', description: 'Exam1' },
        { id: 'unit4', title: 'Unit 4', path: '/unit/unit4', description: 'Grammar conversation' },
        { id: 'unit5', title: 'Unit 5', path: '/unit/unit5', description: 'Listen to School Vocabulary' },
        { id: 'unit6', title: 'Unit 6', path: '/unit/unit6', description: 'Listen to Colors' },
        { id: 'quiz2', title: 'Exam 2', path: '/quiz2', description: 'Exam2' },
        { id: 'unit7', title: 'Unit 7', path: '/unit/unit7', description: 'Learn with Zootopia movie💞' },
        { id: 'unit8', title: 'Unit 8', path: '/unit/unit8', description: 'Listen to song💞' },
        { id: 'unit9', title: 'Unit 9', path: '/unit/unit9', description: 'Daily Life' },
        { id: 'quiz3', title: 'Exam 3', path: '/quiz3', description: 'Exam3' },
        { id: 'unit10', title: 'Unit 10', path: '/unit/unit10', description: 'Learn English with SpongeBob' },
        { id: 'unit11', title: 'Unit 11', path: '/unit/unit11', description: 'Went to London🚀' },
        { id: 'unit12', title: 'Unit 12', path: '/unit/unit12', description: 'Learn English with Monsters Inc' },
        { id: 'quiz4', title: 'Exam 4', path: '/quiz4', description: 'Exam4' },
        { id: 'unit13', title: 'Unit 13', path: '/unit/unit13', description: 'The Bird and the Country Whale' },
        { id: 'unit14', title: 'Unit 14', path: '/unit/unit14', description: 'Listen to song💞' },
        { id: 'unit15', title: 'Unit 15', path: '/unit/unit15', description: 'Learn English with The Incredibles' },
        { id: 'quiz5', title: 'Exam 5', path: '/quiz5', description: 'Exam5' },
        { id: 'unit16', title: 'Unit 16', path: '/unit/unit16', description: 'Listen to song💞' },
    ];

    return (
        <>
            <div className="footer">
                <FontAwesomeIcon icon={faHouse} className="icon2" onClick={setHomePage} />
                <FontAwesomeIcon icon={faReadme} className="icon2" onClick={navigateToStories} />

                <FontAwesomeIcon icon={faUser} className="icon2" onClick={navigateToProfile} />
             
            </div>
            <div className="contal">
                <div className="begin"> 
                    <h1>Hello, {name}!</h1>
                    <p>{`Let's Begin your journey`} </p>
                </div>
                <div className="all">
                    {units.map((unit, index) => (
                        <div className={`unit1 ${index === units.length - 1 ? 'unit2' : ''}`} key={unit.id} onClick={() => handleUnitClick(unit.path, unit.id)}>
                            <div className="cont1">
                                <h1>{unit.title}</h1>
                                <p>{unit.description}</p>
                            </div>
                            <FontAwesomeIcon 
                                icon={
                                    unit.id === 'unit1' || unit.id === 'unit2' 
                                        ? faBookOpen 
                                        : unit.id.startsWith('quiz') 
                                            ? (paymentStatus === 'locked' ? faLock : faBook) 
                                            : (paymentStatus === 'locked' ? faLock : faBookOpen)
                                } 
                                className="icon1" 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
