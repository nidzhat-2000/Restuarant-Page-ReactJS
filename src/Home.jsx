import React from 'react';
import ControlledCarousel from './Components/Slider/Slider';
import About from './Pages/About/About';
import TakeAway from './Components/TakeAway/TakeAway';
import Desserts from './Components/Gallery/Desserts/Desserts';
import Gallery from './Components/Gallery/Dishes/Gallery';

export default function Home({ data }) {
  // console.log(data);
  const slider = data?.slider;
  const dessertsPage = data?.dessertsPage;
  const gallery = data?.gallery;
  const about = data?.about;

  return (
    <div>
      <ControlledCarousel data={slider} />
      <Desserts data={dessertsPage} />
      <About data={about} />
      <Gallery data={gallery} />
      <TakeAway />
    </div>
  );
}
