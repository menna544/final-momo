import  { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Unit2 from './Components/units/Unit2';
import Unit3 from './Components/units/Unit3';
import Unit4 from './Components/units/Unit4';
import Unit5 from './Components/units/Unit5';
import Unit6 from './Components/units/Unit6';
import Unit10 from './Components/units/Unit10';
import Unit9 from './Components/units/Unit9';
import Unit8 from './Components/units/Unit8';
import Unit7 from './Components/units/Unit7';
import Unit15 from './Components/units/Unit15';
import Unit14 from './Components/units/Unit14';
import Unit13 from './Components/units/Unit13';
import Unit12 from './Components/units/Unit12';
import Unit11 from './Components/units/Unit11';
import Unit16 from './Components/units/Unit16';
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
import Story2 from './Components/stories/Story2';
import Story3 from './Components/stories/Story3';
import Story4 from './Components/stories/Story4';
import Story5 from './Components/stories/Story5';
import Story6 from './Components/stories/Story6';
import Story7 from './Components/stories/Story7';
import Story8 from './Components/stories/Story8';
import Story9 from './Components/stories/Story9';
import Story10 from './Components/stories/Story10';
import Story11 from './Components/stories/Story11';
import Story12 from './Components/stories/Story12';

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
          <Route path="/unit" element={<Unit />} />
          <Route path="/unit2" element={<Unit2 />} />
          <Route path="/unit1" element={<Unit />} />
          <Route path="/unit3" element={<Unit3 />} />
          <Route path="/unit4" element={<Unit4 />} />
          <Route path="/unit5" element={<Unit5 />} />
          <Route path="/unit6" element={<Unit6 />} />
          <Route path="/unit7" element={<Unit7 />} />
          <Route path="/unit8" element={<Unit8 />} />
          <Route path="/unit9" element={<Unit9 />} />
          <Route path="/unit10" element={<Unit10 />} />
          <Route path="/unit11" element={<Unit11 />} />
          <Route path="/unit12" element={<Unit12 />} />
          <Route path="/unit13" element={<Unit13 />} />
          <Route path="/unit14" element={<Unit14 />} />
          <Route path="/unit15" element={<Unit15 />} />
          <Route path="/unit16" element={<Unit16 />} />
          <Route path="/story1" element={<Story1 />} />
          <Route path="/story2" element={<Story2 />} />
          <Route path="/story3" element={<Story3 />} />
          <Route path="/story4" element={<Story4 />} />
          <Route path="/story5" element={<Story5 />} />
          <Route path="/story6" element={<Story6 />} />
          <Route path="/story7" element={<Story7 />} />
          <Route path="/story8" element={<Story8 />} />
          <Route path="/story9" element={<Story9 />} />
          <Route path="/story10" element={<Story10 />} />
          <Route path="/story11" element={<Story11 />} />
          <Route path="/story12" element={<Story12 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
