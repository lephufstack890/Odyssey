import { useState } from 'react';
import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header';
import styles from './DefaultLayout.module.scss';
import Footer from '../components/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [language, setLanguage] = useState(1);
    const [showBoxChat, setShowBoxChat] = useState(false);
    // Hàm callback để nhận dữ liệu ngôn ngữ từ Header
    const handleLanguageChange = (lang) => {
        setLanguage(lang);
    };

    return (
        <div>
            <Header onLanguageChange={handleLanguageChange} />
            <div>{children}</div>
            <Footer language={language} />

            <div className={cx('chat')}>
                <button onClick={() => setShowBoxChat(true)} style={{ display: !showBoxChat ? 'block' : 'none' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <path
                            d="M16 2C8.28 2 2 7.8 2 14.93a12.144 12.144 0 001.696 6.15l-1.668 7.51A1.16 1.16 0 003.63 29.9l6.914-3.072A14.835 14.835 0 0016 27.861c7.72 0 14-5.8 14-12.93S23.72 2 16 2zm4.508 16.32h-9.016a1.16 1.16 0 010-2.32h9.016a1.16 1.16 0 010 2.32zm0-4.638h-9.016a1.16 1.16 0 010-2.318h9.016a1.16 1.16 0 110 2.318z"
                            fill="currentColor"
                            fillRule="nonzero"
                        ></path>
                    </svg>
                </button>

                <div className={cx('chat__box')} style={{ display: showBoxChat ? 'block' : 'none' }}>
                    <div className={cx('chat__box__top')}>
                        <div className={cx('chat__box__top__left')}>
                            <span style={{ color: 'rgb(20, 20, 22)', fontSize: '19px', fontWeight: '600' }}>
                                Let's Chat!
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center' }}>
                                <span className={cx('chat__box__top__dot')}></span>
                                Online
                            </span>
                        </div>
                        <div className={cx('chat__box__top__right')}>
                            <button onClick={() => setShowBoxChat(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path
                                        d="M17.077 6l.923.923L12.923 12 18 17.077l-.923.923L12 12.923 6.923 18 6 17.077 11.076 12 6 6.923 6.923 6 12 11.077 17.077 6z"
                                        fill="currentColor"
                                        fillRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className={cx('chat__box__content')}>
                        <div
                            style={{
                                fontSize: '14px',
                                borderRadius: '8px',
                                width: '220px',
                                padding: '12px 16px 12px',
                                background: 'rgb(20, 20, 22)',
                                color: 'rgb(138, 138, 138)',
                                marginBottom: '5px',
                            }}
                        >
                            Hey there, please leave your details so we can contact you even if you are no longer on the
                            site.
                        </div>
                        <div>
                            <form
                                style={{
                                    fontSize: '14px',
                                    borderRadius: '8px',
                                    width: '220px',
                                    padding: '18px 23px',
                                    background: 'rgb(20, 20, 22)',
                                }}
                            >
                                <div>
                                    <input type="text" placeholder="Name" className={cx('chat__box__content__input')} />
                                </div>
                                <div>
                                    <input
                                        type="Email"
                                        placeholder="Email"
                                        className={cx('chat__box__content__input')}
                                    />
                                </div>

                                <div>
                                    <button
                                        style={{
                                            width: '100%',
                                            padding: '1px 6px',
                                            height: '36px',
                                            backgroundColor: 'rgb(138, 138, 138)',
                                            color: 'rgb(20, 20, 22)',
                                            borderRadius: '8px',
                                            boxShadow: 'none',
                                        }}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className={cx('chat__box__text')}>
                        <input
                            type="text"
                            placeholder="Write your message..."
                            style={{
                                flex: '1',
                                marginRight: '10px',
                                border: 'none',
                                outline: 'none',
                            }}
                        />

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <button
                                style={{
                                    height: '100%',
                                    backgroundColor: 'none',
                                    width: 'auto',
                                    marginRight: '15px',
                                    background: 'none',
                                }}
                            >
                                <svg viewBox="0 0 20 20" fill="currentColor" width="16px" height="16px">
                                    <path d="M10,0a10,10,0,1,0,9.85,8.26A10,10,0,0,0,10,0Zm0,19A9,9,0,1,1,18.87,8.44,9.11,9.11,0,0,1,19,10,9,9,0,0,1,10,19Zm4.23-6.88a4.5,4.5,0,0,1-8.72,0l1-.25a3.5,3.5,0,0,0,6.78,0ZM8,8A1,1,0,1,1,7,7,1,1,0,0,1,8,8Zm6,0a1,1,0,1,1-1-1A1,1,0,0,1,14,8Z"></path>
                                </svg>
                            </button>

                            <button
                                style={{ height: '100%', backgroundColor: 'none', width: 'auto', background: 'none' }}
                            >
                                <svg viewBox="0 0 9 23" fill="currentColor" width="7px" height="17px">
                                    <path d="M4.5,23A4.5,4.5,0,0,1,0,18.5V4.5a4.5,4.5,0,0,1,9,0H8a3.5,3.5,0,0,0-7,0v14a3.5,3.5,0,0,0,7,0v-9a1.5,1.5,0,0,0-3,0V17H4V9.5a2.5,2.5,0,0,1,5,0v9A4.5,4.5,0,0,1,4.5,23Z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
