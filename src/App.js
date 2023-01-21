import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import MainNav from './Components/Navbar/Navbar';
import Home from './Home';
import Footer from './Components/Footer/Footer';
import useFetch from './utils/useFetch';

// LazyLoaded components ⤵
const Menu = lazy(() => import('./Pages/Menu/Menu'));
const About = lazy(() => import('./Pages/About/About'));
const Branches = lazy(() => import('./Pages/Branches/Branches'));

function App() {
  const { data } = useFetch('../data/data.json');
  const adtapmadim = data?.adTapmadim;
  const branches = data?.restaurants;
  const about = data?.about;
  const menu = data?.menu;
  const first = data?.menu[0].products;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  return (
    <div className="App">
      <MainNav />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Home data={data} />} path="/" />
          <Route element={<About data={about} />} path="/about" />
          <Route element={<Branches data={branches} />} path="/branches" />
          <Route
            element={<Menu data={menu} img={adtapmadim} first={first} />}
            path="/menu"
          />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
