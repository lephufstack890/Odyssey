// Pages
import Home from '~/pages/Home';
import Mission from '~/pages/Mission';
import Solution from '~/pages/Solution';
import Contact from '~/pages/Contact';
import AboutUs from '~/pages/AboutUs';
import OdysseyProfile from '~/pages/OdysseyProfile';
import SolutionChild from '~/pages/SolutionChild';
import Login from '~/pages/Login';
import ListContactAdmin from '~/pages/ListContactAdmin';
import ChangePassword from '~/pages/ChangePassword';
import ListSubscribeAdmin from '~/pages/ListSubscribeAdmin';
import ForgotPassword from '~/pages/ForgotPassword';
import ChangeMailConfig from '~/pages/ChangeMailConfig';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/mission', component: Mission },
    { path: '/solution', component: Solution },
    { path: '/contact', component: Contact },
    { path: '/about-us', component: AboutUs },
    { path: '/profile', component: OdysseyProfile },
    { path: '/web-and-mobile-application', component: SolutionChild },
    { path: '/data-analytics', component: SolutionChild },
    { path: '/business-intelligence', component: SolutionChild },
    { path: '/artificial-tntelligence', component: SolutionChild },
    { path: '/cloud-computing', component: SolutionChild },
    { path: '/big-data', component: SolutionChild },
    { path: '/internet-of-things', component: SolutionChild },
    { path: '/blockchain', component: SolutionChild },
    { path: '/login', component: Login },
    { path: '/forgot-password', component: ForgotPassword },
];

const privateRoutes = [
    { path: '/list-contact-admin', component: ListContactAdmin },
    { path: '/list-contact-subscribe', component: ListSubscribeAdmin },
    { path: '/change-password', component: ChangePassword },
    { path: '/mail-config', component: ChangeMailConfig },
];

export { publicRoutes, privateRoutes };
