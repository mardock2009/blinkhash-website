import Endpoints from './pages/Endpoints/index';
import Overview from './pages/Overview/index';
import Questions from './pages/Questions/index';
import Tutorials from './pages/Tutorials/index';

export const Routes = [
  {
    path: '/',
    exact: true,
    component: Overview
  },
  {
    path: '/endpoints',
    component: Endpoints
  },
  {
    path: '/overview',
    component: Overview
  },
  {
    path: '/questions',
    component: Questions
  },
  {
    path: '/tutorials',
    component: Tutorials
  },
];
