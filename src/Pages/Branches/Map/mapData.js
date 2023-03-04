import { divIcon, Icon, point } from 'leaflet';

const restIcon = new Icon({
  iconSize: [40, 40],
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/281/281478.png',
});

export const markers = [
  {
    geoLoc: [40.37048570721264, 49.83773981333679],
    popUp: 'Fountains Square',
    icon: restIcon,
  },
  {
    geoLoc: [40.377649261658505, 49.83853831313499],
    popUp: 'Winter Park',
    icon: restIcon,
  },
  {
    geoLoc: [40.37611703327178, 49.80864165554099],
    popUp: 'Elmlar',
    icon: restIcon,
  },
  {
    geoLoc: [40.39991378816844, 49.85215734012215],
    popUp: 'Ganjlik Mall',
    icon: restIcon,
  },
  {
    geoLoc: [40.40225377199543, 49.85036486895778],
    popUp: 'Ataturk Park',
    icon: restIcon,
  },
];

export const clusterIcon = cluster =>
  new divIcon({
    html: '<span>' + cluster.getChildCount() + '</span>',
    className: 'cluster-icon',
    iconSize: point(40, 40, true),
  });
