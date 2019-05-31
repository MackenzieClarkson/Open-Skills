import React from 'react';

const Weather = React.lazy(() => import('./views/Weather'));
const NASA = React.lazy(() => import('./views/NASA'));
const Home = React.lazy(() => import('./views/Home'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/NASA', name: 'NASA', component: NASA },
  { path: '/Weather', name: 'Weather', component: Weather }
];

export default routes;
