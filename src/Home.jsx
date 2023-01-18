import React from 'react';
import ControlledCarousel from './Components/Slider/Slider';
import About from './Pages/About/About';
import Desserts from './Pages/Desserts/Desserts';

export default function Home() {
  return (
    <div>
      <ControlledCarousel />
      <Desserts />
      <About />
    </div>
  );
}
