import { useState } from 'react';
import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header';
import styles from './DefaultLayout.module.scss';
import Footer from '../components/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [language, setLanguage] = useState(1);

    // Hàm callback để nhận dữ liệu ngôn ngữ từ Header
    const handleLanguageChange = (lang) => {
        setLanguage(lang);
    };

    return (
        <div>
            <Header onLanguageChange={handleLanguageChange} />
            <div>{children}</div>
            <Footer language={language} />
        </div>
    );
}

export default DefaultLayout;
