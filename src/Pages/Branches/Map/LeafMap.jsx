import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { clusterIcon, markers } from './mapData';
import './map.css';
import ViewChanger from './ViewChanger';

const LeafMap = ({ center = [40.37489381753142, 49.82802427176571], zoom }) => {
  return (
    <MapContainer center={center} zoom={15}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup chunkedLoading iconCreateFunction={clusterIcon}>
        {markers?.map(({ geoLoc, popUp, icon }, i) => {
          return (
            <Marker
              position={geoLoc}
              icon={icon}
              key={i}
              eventHandlers={{
                mouseover: e => e.target.openPopup(),
                mouseout: e => e.target.closePopup(),
              }}
            >
              <Popup>
                <span className="popup"> {popUp}</span>
              </Popup>
            </Marker>
          );
        })}
        {center !== [40.37489381753142, 49.82802427176571] ? (
          <ViewChanger center={center} zoom={zoom} />
        ) : (
          <ViewChanger />
        )}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default LeafMap;
