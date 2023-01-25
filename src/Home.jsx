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

  // const testing = (obj, adi, hali) => {
  //   const objAdi = obj;
  //   return objAdi?.[adi].toLowerCase() === hali.toLowerCase();
  // };

  // const MyObj = {
  //   games: [
  //     { name: 'Dama', repair: 'kart' },
  //     { name: 'Karol', repair: 'Eyyub' },
  //     { name: 'Karol', repair: 'Ezrail' },
  //     { name: 'Karol', repair: 'aYtac' },
  //     { name: 'Karol', repair: 'daMino' },
  //     { name: 'Karol', repair: 'KaraTE' },
  //     { name: 'Karol', repair: 'eshq' },
  //   ],
  // };

  // const result = MyObj.games.find(game => {
  //   // console.log(game);
  //   return testing(game, 'repair', 'Karate');
  // });

  // console.log(result);

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
