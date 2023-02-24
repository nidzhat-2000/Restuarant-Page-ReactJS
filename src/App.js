import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Home from './Home';
import { MainNav, Footer } from './Components/exporter';
import {
  About,
  Branches,
  Menu,
  OurTeam,
  SubMenuNames,
  Error,
  Interier,
} from './Pages/exporter';

function App() {
  return (
    <div className="App">
      <MainNav />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Home />} exact path="/" />
          <Route element={<Error />} path="*" />
          <Route element={<About />} path="/about" />
          <Route element={<Branches />} path="/branches" />
          <Route element={<Menu />} path="/menu/:category">
            <Route element={<SubMenuNames />} path=":submenu" />
          </Route>
          <Route element={<OurTeam />} path="/our_team" />
          <Route element={<Interier />} path="/interier" />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
