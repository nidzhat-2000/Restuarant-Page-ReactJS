import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainNav from './Components/Navbar/Navbar';
import Home from './Home';
import About from './Pages/About/About';
import Footer from './Components/Footer/Footer';
import Branches from './Pages/Restuarants/Branches';
import Menu from './Pages/Menu/Menu';

function App() {
  return (
    <div className="App">
      <MainNav />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Branches />} path="/branches" />
          <Route element={<Menu />} path="/menu" />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
