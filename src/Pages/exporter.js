import { lazy } from 'react';

const About = lazy(() => import('./About/About'));
const Branches = lazy(() => import('./Branches/Branches'));
const OurTeam = lazy(() => import('./OurTeam/OurTeam'));
const Menu = lazy(() => import('./Menu/Menu'));
const Error = lazy(() => import('./Error/Error'));
const SubMenuNames = lazy(() => import('./Menu/SubMenus/SubMenuNames'));
const Interier = lazy(() => import('./Interier/Interier'));

export { About, Branches, OurTeam, Menu, Error, SubMenuNames, Interier };
