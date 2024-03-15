import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import f1 from '~/assets/images/footer/f1.png';
import fb from '~/assets/images/footer/fb.png';
import zalo from '~/assets/images/footer/zalo.png';
import inst from '~/assets/images/footer/in.png';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function Footer() {
    const { i18n, t } = useTranslation();
    return (
        <footer className={cx('footer')}>
            <div className={cx('row')}>
                <div className={cx('footer__layout__one', 'col-lg-3', 'col-12')}>
                    <div>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <div className={cx('footer__layout__one-logo')} style={{ display: 'flex', alignItems: 'flex-end' }}>
                                <img src={f1} alt="Logo" />
                                <span
                                    style={{
                                        fontSize: '30px',
                                        color: '#fff',
                                        fontWeight: '500',
                                        marginLeft: '10px',
                                        lineHeight: '1',
                                    }}
                                >
                                    Odyssey
                                </span>
                            </div>
                            <div
                                style={{
                                    marginTop: '15px',
                                    textAlign: 'center',
                                    color: '#fff',
                                    fontSize: '16px',
                                    marginBottom: '17px',
                                    width: '204px',
                                }}
                                className={cx('footer__layout__one-change')}
                            >
                                We change the world
                            </div>
                        </Link>
                    </div>

                    <div style={{ fontSize: '18px', color: 'rgb(138, 138, 138)', lineHeight: '36px' }}>0933621635</div>

                    <div style={{ fontSize: '18px', color: 'rgb(138, 138, 138)', lineHeight: '36px' }}>
                        odysseycompanyvn@gmail.com
                    </div>

                    <div
                        style={{
                            fontSize: '18px',
                            color: 'rgb(138, 138, 138)',
                            marginBottom: '25px',
                            lineHeight: '36px',
                        }}
                    >
                        {t('address')}
                    </div>

                    <div style={{ fontSize: '14px', color: 'rgb(138, 138, 138)' }}>{t('2021 Odyssey')}</div>
                </div>
                <div className={cx('footer__layout__two', 'col-lg-3', 'col-12')}>
                    <ul className={cx('footer__layout__two__list')}>
                        <li className={cx('footer__layout__two__item')}>
                            <Link to="/"> {t('home')}</Link>
                        </li>
                        <li className={cx('footer__layout__two__item')}>
                            <Link to="/solution"> {t('solution')}</Link>
                        </li>
                        <li className={cx('footer__layout__two__item')}>
                            <Link to="/about-us"> {t('About us')}</Link>
                        </li>
                        <li className={cx('footer__layout__two__item')}>
                            <Link to="/contact"> {t('contact')}</Link>
                        </li>
                    </ul>
                </div>
                <div className={cx('footer__layout__three', 'col-lg-3', 'col-12')}>
                    <div
                        style={{
                            fontSize: '18px',
                            color: 'rgb(138, 138, 138)',
                            marginBottom: '20px',
                            lineHeight: '36px',
                        }}
                    >
                        {t('Stay Up to Date with Odyssey')}
                    </div>
                    <form>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <label
                                htmlFor="email"
                                style={{
                                    fontSize: '14px',
                                    color: 'rgb(138, 138, 138)',
                                    marginBottom: '15px',
                                    lineHeight: '10px',
                                }}
                            >
                                Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                style={{
                                    width: '283px',
                                    height: '55px',
                                    marginBottom: '25px',
                                    backgroundColor: 'transparent',
                                    borderRadius: '5px',
                                    padding: '0 10px',
                                    fontSize: '14px',
                                    color: 'rgb(138, 138, 138)',
                                    outline: 'none',
                                    border: '1px solid rgb(138, 138, 138)',
                                }}
                            />
                            <button type="submit">Subscribe</button>
                        </div>
                    </form>
                </div>
                <div className={cx('footer__layout__four', 'col-lg-3', 'col-12')}>
                    <div
                        style={{
                            fontSize: '18px',
                            color: 'rgb(138, 138, 138)',
                            marginBottom: '25px',
                            lineHeight: '10px',
                        }}
                    >
                        {t('Follow Us')}
                    </div>
                    <div>
                        <Link
                            to="#"
                            style={{
                                marginRight: '10px',
                            }}
                        >
                            <img src={inst} alt="LinkedIn" />
                        </Link>
                        <Link
                            to="#"
                            style={{
                                marginRight: '10px',
                            }}
                        >
                            <img src={fb} alt="Facebook" />
                        </Link>
                        <Link
                            to="#"
                            style={{
                                marginRight: '10px',
                            }}
                        >
                            <img src={zalo} alt="Zalo" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
