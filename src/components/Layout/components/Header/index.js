import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import f1 from '~/assets/images/footer/f1.png';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    const [isSolutionHovered, setIsSolutionHovered] = useState(false);

    const handleSolutionHover = () => {
        setIsSolutionHovered(true);
    };

    const handleSolutionLeave = () => {
        setIsSolutionHovered(false);
    };

    const Menu = [
        {
            title: 'Web and Mobile application',
            link: ""
        },
        {
            title: 'Data Analytics',
            link: ""
        },
        {
            title: 'Business Intelligence',
            link: ""
        },
        {
            title: 'Artificial Intelligence',
            link: ""
        },
        {
            title: 'Cloud Computing',
            link: ""
        },
        {
            title: 'Big Data',
            link: ""
        },
        {
            title: 'Internet of things',
            link: ""
        },
        {
            title: 'Blockchain',
            link: ""
        }
    ]

    return (
        <header className={cx('header')}>
            <div className={cx('container')}>
                <div className={cx('row', 'align-items-center')}>
                    <div className={cx('col-lg-4')}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
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
                        </Link>
                    </div>
                    <div className={cx('col-lg-4')}>
                        <div className={cx('header__list-menu')}>
                            <Link className={cx('header__list-menu--item')} to="/">Home</Link>
                            <Link
                                onMouseEnter={handleSolutionHover}
                                onMouseLeave={handleSolutionLeave}
                                className={cx('header__list-menu--item', 'position-relative')} to="/"
                            >
                                <span>Solution</span>
                                {isSolutionHovered && (
                                    <div className={cx('dropdown-content')}>
                                        {Menu?.map((item, index) => (
                                            <Link key={index} to={item?.link}>{item?.title}</Link>
                                        ))}
                                    </div>
                                )}
                            </Link>
                            <Link className={cx('header__list-menu--item')} to="/">Misson</Link>
                            <Link className={cx('header__list-menu--item')} to="/">About us</Link>
                        </div>
                    </div>
                    <div className={cx('col-lg-4')}>
                        <div className={cx('d-flex', 'align-items-center', 'justify-content-end')}>
                            <div className={cx('header__language')}>
                                <span>EN</span>
                                <span>VN</span>
                            </div>
                            <div className={cx('header__started')}>
                                <span>Get started</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
