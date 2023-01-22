import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainNav from './Components/Navbar/Navbar';
import Home from './Home';
import Footer from './Components/Footer/Footer';
import useFetch from './utils/useFetch';

// LazyLoaded components ⤵
const Menu = lazy(() => import('./Pages/Menu/Menu'));
const About = lazy(() => import('./Pages/About/About'));
const Branches = lazy(() => import('./Pages/Branches/Branches'));
const OurTeam = lazy(() => import('./Pages/OurTeam/OurTeam'));

function App() {
  const { data } = useFetch('../data/data.json');
  const branches = data?.restaurants;
  const about = data?.about;
  const menuCover = data?.menuCover;
  const menu = data?.menu;
  const footer = data?.footer;

  return (
    <div className="App">
      <MainNav />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Home data={data} />} path="/" />
          <Route element={<About data={about} />} path="/about" />
          <Route element={<Branches data={branches} />} path="/branches" />
          <Route
            element={<Menu data={menu} menuCover={menuCover} />}
            path="/menu/:submenu"
          />
          <Route element={<OurTeam />} path="/our_team" />
        </Routes>
      </Suspense>
      <Footer data={footer} />
    </div>
  );
}

export default App;
