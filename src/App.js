import { Route, Routes } from 'react-router-dom';
import MainNav from './Components/Navbar/Navbar';
import About from './Pages/About';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <MainNav />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
      </Routes>
    </div>
  );
}

export default App;
