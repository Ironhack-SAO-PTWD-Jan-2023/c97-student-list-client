// import de pacotes
import { Routes, Route } from 'react-router-dom';
import './App.css';

// import de componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// import de páginas
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<div>404 - page not found</div>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
