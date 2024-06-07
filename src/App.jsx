import  { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Payment from './Components/Payment';
import Home from './Components/home/Home'; 
import Loading from './Components/Loading';
import Stories from './Components/Stories';
import Homeques from './Components/home/Homeques';
import Startlog from './Components/Startlog';
import Signin from './Components/auth/Signin';
import Signup from './Components/auth/Signup';
import Ques1 from './Components/Ques1';
import QuizPage1 from './Components/exams/QuizPage1';
import QuizPage2 from './Components/exams/QuizPage2';
import QuizPage3 from './Components/exams/QuizPage3';
import QuizPage4 from './Components/exams/QuizPage4';
import QuizPage5 from './Components/exams/QuizPage5';
import QuizPage6 from './Components/exams/QuizPage6';
import Profile from './Components/Profile';
import Unit from './Components/units/Unit';
import Story1 from './Components/stories/Story1';


function App() {
  const [userEmail, setUserEmail] = useState('');
 return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home userEmail={userEmail} />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/" element={<Homeques />} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/startlog" element={<Startlog />} />
          <Route path="/signin" element={<Signin setUserEmail={setUserEmail} />} />
          <Route path="/signup" element={<Signup setUserEmail={setUserEmail} />} />
          <Route path="/load" element={<Loading />} />
          <Route path="/ques1" element={<Ques1/>} />
          <Route path="/quiz" element={<QuizPage1/>} />
          <Route path="/quiz2" element={<QuizPage2/>} />
          <Route path="/quiz3" element={<QuizPage3/>} />
          <Route path="/quiz4" element={<QuizPage4/>} />
          <Route path="/quiz5" element={<QuizPage5/>} />
          <Route path="/quiz6" element={<QuizPage6/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/unit/:unitId" element={<Unit />} />
          <Route path="/story/:storyId" element={<Story1 />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
