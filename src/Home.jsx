import React from 'react';
import ControlledCarousel from './Components/Slider/Slider';
import About from './Pages/About/About';
import TakeAway from './Components/TakeAway/TakeAway';
import Desserts from './Components/Gallery/Desserts/Desserts';
import Gallery from './Components/Gallery/Dishes/Gallery';

export default function Home() {
  return (
    <div>
      <ControlledCarousel />
      <Desserts />
      <About />
      <Gallery />
      <TakeAway />
    </div>
  );
}
