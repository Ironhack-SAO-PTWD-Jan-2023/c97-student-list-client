import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="page">
        <Routes>
          <Route path="*" element={<div>404 - page not found</div>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
