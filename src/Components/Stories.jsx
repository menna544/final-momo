import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faLock } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'; 
import { faReadme } from "@fortawesome/free-brands-svg-icons";
import Image from '../Images/rascal-have-fun.gif';
import Swal from 'sweetalert2';
import '../App.css';

const Stories = () => {
    const [paymentStatus, setPaymentStatus] = useState('locked');
    const navigate = useNavigate(); 

    const navigateToPayment = () => {
        navigate('/payment'); 
    };

    const handleStoryClick = (storyHandler, storyId) => {
        if (storyId === 'story1' || storyId === 'story2') {
            storyHandler();
        } else {
            if (paymentStatus === 'locked') {
                Swal.fire({
                    title: 'This story is locked',
                    text: 'To access this story, you need to enroll.',
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
                storyHandler();
            }
        }
    };

    useEffect(() => {
        const isPaymentSuccessful = localStorage.getItem('isPaymentSuccessful');
        if (isPaymentSuccessful === 'true') {
            setPaymentStatus('unlocked');
        }
    }, []);

    const setHomePage = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "You are in Stories page",
            showConfirmButton: false,
            timer: 1500
        });
    };

    const navigateToHome = () => {
        navigate('/home'); 
    };

    const navigateToProfile = () => {
        navigate('/profile'); 
    };

    const handleNavigation = (storyPath) => {
        navigate(storyPath);
    };

    const stories = [
        { id: 'story1', title: 'Story 1', path: '/story/story1', description: 'Introduce yourself' },
        { id: 'story2', title: 'Story 2', path: '/story/story2', description: 'Colors✨' },
        { id: 'story3', title: 'Story 3', path: '/story/story3', description: 'About Morning🐣' },
        { id: 'story4', title: 'Story 4', path: '/story/story4', description: 'The Ant and the Dove' },
        { id: 'story5', title: 'Story 5', path: '/story/story5', description: 'Cooking🍕' },
        { id: 'story6', title: 'Story 6', path: '/story/story6', description: 'Sharing 🥞🧇🫐🍒🥐' },
        { id: 'story7', title: 'Story 7', path: '/story/story7', description: 'The girl and the ice cream Truck' },
        { id: 'story8', title: 'Story 8', path: '/story/story8', description: `Finally it's time for music🎵🎵` },
        { id: 'story9', title: 'Story 9', path: '/story/story9', description: 'Used To and Would grammar' },
        { id: 'story10', title: 'Story 10', path: '/story/story10', description: 'If I Were You - Conditionals in English' },
        { id: 'story11', title: 'Story 11', path: '/story/story11', description: 'What are you doing?' },
        { id: 'story12', title: 'Story 12', path: '/story/story12', description: `Finally it's time for music🎵🎵` },
    ];

    return (
        <>
            <div className="footer">
                <FontAwesomeIcon icon={faHouse} className="icon2" onClick={navigateToHome} />
                <FontAwesomeIcon icon={faReadme} className="icon2" onClick={setHomePage} />
                <FontAwesomeIcon icon={faUser} className="icon2" onClick={navigateToProfile} />
            </div>
                   
            <div className="contal">
                <div className="begin2"> 
                    <img src={Image} alt="Your Alt Text" className="image" />
                </div>
                <div className="all2">
                    {stories.map((story, index) => (
                        <div className={`unit1 ${index === stories.length - 1 ? 'unit2' : ''}`} key={story.id} onClick={() => handleStoryClick(() => handleNavigation(story.path), story.id)}>
                            <div className="cont1">
                                <h1>{story.title}</h1>
                                <p>{story.description}</p>
                            </div>
                            {story.id === 'story1' || story.id === 'story2' ? (
                                <FontAwesomeIcon icon={faBookOpen} className="icon1" />
                            ) : (
                                <FontAwesomeIcon icon={paymentStatus === 'locked' ? faLock : faBookOpen} className="icon1" onClick={navigateToPayment} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Stories;
