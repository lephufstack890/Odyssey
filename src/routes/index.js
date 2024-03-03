
// Pages
import Home from '~/pages/Home';
import Mission from '~/pages/Mission';
import Solution from '~/pages/Solution';
import Contact from '~/pages/Contact';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/mission', component: Mission },
    { path: '/solution', component: Solution },
    { path: '/contact', component: Contact },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
