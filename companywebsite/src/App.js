import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './root-folder/pages/AboutUs';
import Home from './root-folder/pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
