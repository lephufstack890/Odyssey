import { Fragment, useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollMagic from 'scrollmagic';
import AdminLayout from './components/Layout/AdminLayout';
import GlobalStateContext from './GlobalStateContext ';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const accessToken = localStorage.getItem('access_token');
    const { token, setToken } = useContext(GlobalStateContext);

    useEffect(() => {
        if (token || accessToken) {
            setIsLoggedIn(true);
        } else setIsLoggedIn(false);
    }, [token, accessToken]);

    return (
        <Router>
            <div className="App" style={{ overflowX: 'hidden' }}>
                <Routes>
                    {
                        publicRoutes.map((route, index) => {
                            const Page = route.component;
                            let Layout = DefaultLayout;

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}

                    {isLoggedIn &&
                        privateRoutes.map((route, index) => {
                            const Page = route.component;
                            let Layout = AdminLayout;

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}

                    {/* Redirect đến trang đăng nhập nếu chưa đăng nhập và cố gắng truy cập private routes */}
                    {!isLoggedIn &&
                        privateRoutes.map((route, index) => {
                            return <Route path={route.path} element={<Navigate to="/login" />} />;
                        })}

                    {
                        publicRoutes.map((route, index) => {
                            return (
                                <Route path={route.path} element={<Navigate to="/list-contact-admin" key={index} />} />
                            );
                        })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
