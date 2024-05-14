import classNames from 'classnames/bind';
import styles from './AdminLayout.module.scss';
import { Link, NavLink } from 'react-router-dom';
import f1 from '~/assets/images/footer/f1.png';
import axios from 'axios';
import GlobalStateContext from '~/GlobalStateContext ';
import { useContext } from 'react';
import API_URL from '~/config';
const cx = classNames.bind(styles);

function AdminLayout({ children }) {
    const accessToken = localStorage.getItem('access_token');
    const { token, setToken } = useContext(GlobalStateContext);

    const onLogout = () => {
        axios
            .post(`${API_URL}/logout`, null, {
                headers: {
                    Authorization: `Bearer ${token || accessToken}`,
                },
            })
            .then((response) => {
                setToken('');
                localStorage.clear();
                window.location.reload();
            })
            .catch((error) => {
                // Xử lý lỗi
                console.error('Error fetching data:', error);
            });
    };

    return (
        <div className={cx('admin')}>
            <div className={cx('admin__top')}>
                <Link to="/" style={{ textDecoration: 'none' }}>
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
                </Link>

                <div className={cx('admin__user')}>
                    <span>Admin</span>

                    <button onClick={onLogout}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                            />
                        </svg>
                        <span>đăng xuất</span>
                    </button>
                </div>
            </div>

            <div className={cx('admin__main')}>
                
                <div className={cx('admin__sidebar')}>
                    
                    <div className={cx('admin__item')}>
                        <NavLink to="/list-contact-admin">Danh sách contact</NavLink>
                    </div>

                    <div className={cx('admin__item')}>
                        <NavLink to="/list-contact-subscribe">Danh sách subscribe</NavLink>
                    </div>

                    <div className={cx('admin__item')}>
                        <NavLink to="/change-password">Thay đổi mật khẩu</NavLink>
                    </div>

                    <div className={cx('admin__item')}>
                        <NavLink to="/mail-config">Thay thiết lập Mail</NavLink>
                    </div>
                    
                </div>

                <div className={cx('admin__content')}>{children}</div>
            </div>
        </div>
    );
}

export default AdminLayout;
