import React from 'react';
import About from './Pages/About/About';
import {
  Gallery,
  TakeAway,
  Desserts,
  ControlledCarousel,
} from './Components/exporter';

export default function Home() {
  return (
    <main>
      <ControlledCarousel />
      <Desserts />
      <About />
      <Gallery />
      <TakeAway />
    </main>
  );
}
