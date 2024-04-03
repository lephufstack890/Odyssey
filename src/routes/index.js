// Pages
import Home from '~/pages/Home';
import Mission from '~/pages/Mission';
import Solution from '~/pages/Solution';
import Contact from '~/pages/Contact';
import AboutUs from '~/pages/AboutUs';
import SolutionChild from '~/pages/SolutionChild';
import Login from '~/pages/Login';
import ListContactAdmin from '~/pages/ListContactAdmin';
import ChangePassword from '~/pages/ChangePassword';
import ListSubscribeAdmin from '~/pages/ListSubscribeAdmin';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/mission', component: Mission },
    { path: '/solution', component: Solution },
    { path: '/contact', component: Contact },
    { path: '/about-us', component: AboutUs },
    { path: '/web-and-mobile-application', component: SolutionChild },
    { path: '/data-analytics', component: SolutionChild },
    { path: '/business-intelligence', component: SolutionChild },
    { path: '/artificial-tntelligence', component: SolutionChild },
    { path: '/cloud-computing', component: SolutionChild },
    { path: '/big-data', component: SolutionChild },
    { path: '/internet-of-things', component: SolutionChild },
    { path: '/blockchain', component: SolutionChild },
    { path: '/login', component: Login },
    // { path: '/change-password', component: ChangePassword },
];

const privateRoutes = [
    { path: '/list-contact-admin', component: ListContactAdmin },
    { path: '/list-contact-subscribe', component: ListSubscribeAdmin },
];

export { publicRoutes, privateRoutes };
