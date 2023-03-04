import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

const ViewChanger = ({ center, zoom }) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo(center, zoom);
  }, [center]);
};
export default ViewChanger;
