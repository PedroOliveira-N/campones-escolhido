import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ClassAttributPage from './pages/ClassAttributePage';
import RacesPage from './pages/RacesPage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/topicos/' element={<MenuPage/>}/>
          <Route path='/topicos/sobre' element={<AboutPage/>}/>
          <Route path='/topicos/classes-e-atributos/' element={<ClassAttributPage/>}/>
          <Route path='/topicos/racas/' element={<RacesPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
