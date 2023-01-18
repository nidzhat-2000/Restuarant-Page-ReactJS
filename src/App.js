import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainNav from './Components/Navbar/Navbar';
import Home from './Home';
import About from './Pages/About/About';
import Footer from './Pages/Footer/Footer';

// const About = lazy(() => import('./Pages/About/About'));

function App() {
  return (
    <div className="App">
      <MainNav />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
