import classNames from 'classnames/bind';
import styles from './ChangePassword.module.scss';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from 'axios';
import GlobalStateContext from '~/GlobalStateContext ';

const cx = classNames.bind(styles);

function ChangePassword() {
    const { token, setToken } = useContext(GlobalStateContext);
    const baseToken = localStorage.getItem('access_token');

    const [formData, setFormData] = useState({
        old_password: '',
        new_password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Kiểm tra validation
        if (!formData.new_password || !formData.old_password) {
            alert('Vui lòng điền đầy đủ thông tin.');
            return;
        }

        try {
            // Gửi dữ liệu biểu mẫu qua email
            const data = await axios.post('http://14.225.254.135:8000/api/change-password', formData, {
                headers: {
                    Authorization: `Bearer ${token || baseToken}`,
                },
            });
            // Đặt trạng thái hoặc thực hiện các hành động khác sau khi gửi email thành công
            if (data.status === 200) {
                alert('Đổi mật khẩu thành công');
            }
        } catch (error) {
            alert(`Error sending email: ${error.response.data.message}`);
        }
    };

    return (
        <div className={cx('login')}>
            <div className={cx('container', 'login__wrapper')} style={{ padding: '0px' }}>
                <form className={cx('login__form')} onSubmit={handleSubmit}>
                    <div className={cx('login__form-group')}>
                        <label>Mật khẩu cũ</label>
                        <input
                            name="old_password"
                            type="password"
                            placeholder="Enter your current password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={cx('login__form-group')}>
                        <label>Mật khẩu mới</label>
                        <input
                            name="new_password"
                            type="password"
                            placeholder="Enter your new password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={cx('login__form-submit')}>
                        <button>Đổi mật khẩu</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ChangePassword;
