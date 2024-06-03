import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/home';
import Quiz from './pages/quiz';
import Result from './pages/result';
// import NavBar from './components/Nav';
import './App.css';

function App() {
  return (
    <>
    <div>
    {/* <NavBar/> */}
<Router>
  <Routes>

  <Route path="/"  element={<Home />} />
  <Route path="/quiz"  element={<Quiz />} />
  <Route path="/result"  element={<Result />} />

  </Routes>
</Router>
    </div>
    </>
  
  );
}

export default App;
