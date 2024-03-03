// Pages
import Home from '~/pages/Home';
import Mission from '~/pages/Mission';
import Solution from '~/pages/Solution';
import Contact from '~/pages/Contact';
import AboutUs from '~/pages/AboutUs';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/mission', component: Mission },
    { path: '/solution', component: Solution },
    { path: '/contact', component: Contact },
    { path: '/about-us', component: AboutUs },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
