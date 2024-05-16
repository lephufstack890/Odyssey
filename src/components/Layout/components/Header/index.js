import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import f1 from '~/assets/images/footer/f1.png';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function Header() {
    const { i18n, t } = useTranslation();
    const [isSolutionHovered, setIsSolutionHovered] = useState(false);
    const [isMoreHovered, setIsMoreHovered] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileSolutionOpen, setIsMobileSolutionOpen] = useState(false);
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

    const handleMoreHover = () => {
        setIsMoreHovered(true);
    };

    const handleMoreLeave = () => {
        setIsMoreHovered(false);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const handleMenuItemClick = () => {
        setIsMobileMenuOpen(false); // Ẩn menu đi sau khi click vào một mục menu
    };

    const MenuSolution = [
        {
            type: 'Web and Mobile application',
            link: '/web-and-mobile-application',
        },
        {
            type: 'Data Analytics',
            titleVN: 'Phân tích dữ liệu',
            link: '/data-analytics',
        },
        {
            type: 'Business Intelligence',
            titleVN: 'Trí tuệ doanh nghiệp',
            link: '/business-intelligence',
        },
        {
            type: 'Artificial Intelligence',
            titleVN: 'Trí tuệ nhân tạo',
            link: '/artificial-tntelligence',
        },
        {
            type: 'Cloud Computing',
            titleVN: 'Điện toán đám mây',
            link: '/cloud-computing',
        },
        {
            type: 'Big Data',
            titleVN: 'Dữ liệu lớn',
            link: '/big-data',
        },
        {
            type: 'Internet of things',
            titleVN: 'Internet vạn vật',
            link: '/internet-of-things',
        },
        {
            type: 'Blockchain',
            titleVN: 'Blockchain',
            link: '/blockchain',
        },
    ];

    const MenuMore = [
        {
            type: 'Services',
            titleVN: 'Những dịch vụ',
            link: '/services',
        },
        {
            type: 'Digital Transformation',
            titleVN: 'Chuyển đổi kỹ thuật số',
            link: '/digital-transformation',
        },
        {
            type: 'Outsourcing',
            titleVN: 'Gia công phần mềm',
            link: '/outsourcing',
        },
        {
            type: 'IT consulting',
            titleVN: 'Tư vấn CNTT',
            link: '/it-consulting',
        },
    ];

    return (
        <header className={cx('header', { 'header--hidden': !visible })}>
            <div className={cx('container')} style={{ padding: '25px 0' }}>
                <div className={cx('row', 'align-items-center')}>
                    <div className={cx('col-lg-3 col-4')}>
                        <NavLink to="/" style={{ textDecoration: 'none' }}>
                            <div className={cx('header__logo')} style={{ display: 'flex', alignItems: 'flex-end' }}>
                                <img className={cx('header__logo-img')} src={f1} alt="Logo" />
                                <span
                                    className={cx('header__logo-text')}
                                    style={{
                                        fontSize: '23px',
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
                                {t('home')}
                            </NavLink>
                            <NavLink
                                onMouseEnter={handleSolutionHover}
                                onMouseLeave={handleSolutionLeave}
                                className={cx('header__list-menu--item', 'position-relative')}
                                to="/solution"
                            >
                                <span> {t('solution')}</span>

                                {isSolutionHovered && (
                                    <div className={cx('dropdown-content')}>
                                        {MenuSolution?.map((item, index) => (
                                            <NavLink key={index} to={item?.link}>
                                                {t(item.type)}
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                            </NavLink>
                            <NavLink className={cx('header__list-menu--item')} to="/mission">
                                {t('Misson')}
                            </NavLink>
                            <NavLink className={cx('header__list-menu--item')} to="/about-us">
                                {t('About us')}
                            </NavLink>
                            <a
                                onMouseEnter={handleMoreHover}
                                onMouseLeave={handleMoreLeave}
                                className={cx('header__list-menu--item', 'position-relative')}
                            >
                                <span> {t('More')}</span>

                                {isMoreHovered && (
                                    <div className={cx('dropdown-content')}>
                                        {MenuMore?.map((item, index) => (
                                            <NavLink key={index} to={item?.link}>
                                                {t(item.type)}
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                            </a>
                        </div>
                    </div>
                    <div className={cx('col-lg-3 col-8')}>
                        <div className={cx('d-flex', 'align-items-center', 'justify-content-end')}>
                            <div className={cx('header__language')}>
                                <span
                                    className={cx(`enable_${i18n.language == 'en'}`)}
                                    onClick={() => changeLanguage('en')}
                                >
                                    EN
                                </span>
                                <span
                                    className={cx(`enable_${i18n.language == 'vn'}`)}
                                    onClick={() => changeLanguage('vn')}
                                >
                                    VN
                                </span>
                            </div>
                            <Link className={cx('header__started')} to={'/contact'}>
                                <span>{t('Get started')}</span>
                            </Link>
                            <div className={cx('header__bar')} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                <span>
                                    <FaBars />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className={cx('mobile-menu', { 'mobile-menu--open': isMobileMenuOpen })}>
                    <div className={cx('mobile-menu__close')}>
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className={cx('mobile-menu__content')}>
                        <div className={cx('header__language', 'header__language--mobile')}>
                            <span
                                className={cx(`enable_${i18n.language == 'en'}`)}
                                onClick={() => changeLanguage('en')}
                            >
                                EN
                            </span>
                            <span
                                className={cx(`enable_${i18n.language == 'vn'}`)}
                                onClick={() => changeLanguage('vn')}
                            >
                                VN
                            </span>
                        </div>

                        <NavLink className={cx('mobile-menu__item')} to="/" onClick={handleMenuItemClick}>
                            {t('home')}
                        </NavLink>
                        <NavLink
                            onClick={() => {
                                setIsMobileSolutionOpen(!isMobileSolutionOpen);
                                handleMenuItemClick(); // Ẩn menu đi sau khi click vào một mục menu
                            }}
                            className={cx('mobile-menu__item', 'mobile-menu__item--solution')}
                            to="/solution"
                        >
                            <span> {t('solution')}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </NavLink>

                        <div style={{ display: isMobileSolutionOpen ? 'flex' : 'none', flexDirection: 'column' }}>
                            {MenuSolution?.map((item, index) => (
                                <NavLink
                                    key={index}
                                    to={item?.link}
                                    className={cx('mobile-menu__item', 'mobile-menu__item--child')}
                                    onClick={handleMenuItemClick} // Ẩn menu đi sau khi click vào một mục menu
                                >
                                    {t(item.type)}
                                </NavLink>
                            ))}
                        </div>

                        <NavLink className={cx('mobile-menu__item')} to="/mission" onClick={handleMenuItemClick}>
                            {t('Misson')}
                        </NavLink>
                        <NavLink className={cx('mobile-menu__item')} to="/about-us" onClick={handleMenuItemClick}>
                            {t('About us')}
                        </NavLink>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
