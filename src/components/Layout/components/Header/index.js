import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import f1 from '~/assets/images/footer/f1.png';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";

const cx = classNames.bind(styles);

function Header({ onLanguageChange }) {
    const [isSolutionHovered, setIsSolutionHovered] = useState(false);
    const [language, setLanguage] = useState(1);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
        setPrevScrollPos(currentScrollPos);
    };

    const handleSolutionHover = () => {
        setIsSolutionHovered(true);
    };

    const handleSolutionLeave = () => {
        setIsSolutionHovered(false);
    };

    const languageEN = () => {
        setLanguage(1);
        onLanguageChange(1);
    };

    const languageVN = () => {
        setLanguage(2);
        onLanguageChange(2);
    };

    const Menu = [
        {
            titleEN: 'Web and Mobile application',
            titleVN: 'Ứng dụng di động và web',
            link: '',
        },
        {
            titleEN: 'Data Analytics',
            titleVN: 'Phân tích dữ liệu',
            link: '',
        },
        {
            titleEN: 'Business Intelligence',
            titleVN: 'Trí tuệ doanh nghiệp',
            link: '',
        },
        {
            titleEN: 'Artificial Intelligence',
            titleVN: 'Trí tuệ nhân tạo',
            link: '',
        },
        {
            titleEN: 'Cloud Computing',
            titleVN: 'Điện toán đám mây',
            link: '',
        },
        {
            titleEN: 'Big Data',
            titleVN: 'Dữ liệu lớn',
            link: '',
        },
        {
            titleEN: 'Internet of things',
            titleVN: 'Internet vạn vật',
            link: '',
        },
        {
            titleEN: 'Blockchain',
            titleVN: 'Blockchain',
            link: '',
        },
    ];

    return (
        <header className={cx('header', { 'header--hidden': !visible })}>
            <div className={cx('container')} style={{ padding: '15px 0' }}>
                <div className={cx('row', 'align-items-center')}>
                    <div className={cx('col-lg-3 col-4')}>
                        <NavLink to="/" style={{ textDecoration: 'none' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                                <img src={f1} alt="Logo" />
                                <span
                                    style={{
                                        fontSize: '25px',
                                        color: '#fff',
                                        fontWeight: '500',
                                        marginLeft: '10px',
                                        lineHeight: '1',
                                    }}
                                >
                                    Odyssey
                                </span>
                            </div>
                        </NavLink>
                    </div>
                    <div className={cx('mobile', 'col-lg-6')}>
                        <div className={cx('header__list-menu')}>
                            <NavLink className={cx('header__list-menu--item')} to="/">
                                {language == 1 ? 'Home' : 'Trang chủ'}
                            </NavLink>
                            <NavLink
                                onMouseEnter={handleSolutionHover}
                                onMouseLeave={handleSolutionLeave}
                                className={cx('header__list-menu--item', 'position-relative')}
                                to="/solution"
                            >
                                <span>{language == 1 ? 'Solution' : 'Giải pháp'}</span>

                                {isSolutionHovered && (
                                    <div className={cx('dropdown-content')}>
                                        {Menu?.map((item, index) => (
                                            <Link key={index} to={item?.link}>
                                                {language == 1 ? item?.titleEN : item?.titleVN}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </NavLink>
                            <NavLink className={cx('header__list-menu--item')} to="/mission">
                                {language == 1 ? 'Misson' : 'Về sứ mệnh'}
                            </NavLink>
                            <NavLink className={cx('header__list-menu--item')} to="/about-us">
                                {language == 1 ? 'About us' : 'Về chúng tôi'}
                            </NavLink>
                        </div>
                    </div>
                    <div className={cx('col-lg-3 col-8')}>
                        <div className={cx('d-flex', 'align-items-center', 'justify-content-end')}>
                            <div className={cx('header__language')}>
                                <span onClick={() => languageEN(1)}>EN</span>
                                <span onClick={() => languageVN(2)}>VN</span>
                            </div>
                            <div className={cx('header__started')}>
                                <span>{language == 1 ? 'Get started' : 'Bắt đầu'}</span>
                            </div>
                            <div className={cx('header__bar')}>
                                <span><FaBars /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
