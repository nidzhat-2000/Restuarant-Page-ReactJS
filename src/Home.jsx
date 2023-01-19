import React from 'react';
import ControlledCarousel from './Components/Slider/Slider';
import About from './Pages/About/About';
import TakeAway from './Pages/TakeAway/TakeAway';
import Desserts from './Pages/Desserts/Desserts';
import Dishes from './Pages/Dishes/Dishes';

export default function Home() {
  return (
    <div>
      <ControlledCarousel />
      <Desserts />
      <About />
      <Dishes />
      <TakeAway />
    </div>
  );
}
