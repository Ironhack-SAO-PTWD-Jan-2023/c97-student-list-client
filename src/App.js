import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="*" element={<div>404 - page not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
