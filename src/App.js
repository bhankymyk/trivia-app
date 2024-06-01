import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/home';
import Quiz from './pages/quiz';
import Result from './pages/result';
import './App.css';

function App() {
  return (
    
<Router>
  <Routes>

  <Route path="/"  element={<Home />} />
  <Route path="/quiz"  element={<Quiz />} />
  <Route path="/result"  element={<Result />} />

  </Routes>
</Router>
  
  );
}

export default App;
