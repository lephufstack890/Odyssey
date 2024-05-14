import classNames from 'classnames/bind';
import styles from './ForgotPassword.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_URL from '~/config';

const cx = classNames.bind(styles);

function ForgotPassword() {
    const [step, setStep] = useState(1); // Bước mặc định là 1 (Nhập email)
    const [formData, setFormData] = useState({
        email: '',
        code: '',
        newPassword: '',
        confirmPassword: '',
    });
    const [isLoading, setIsLoading] = useState(false); // Trạng thái hiển thị loading

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSendCode = async (e) => {
        e.preventDefault();

        // Kiểm tra tính hợp lệ của email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Email không hợp lệ.');
            return;
        }

        setIsLoading(true); // Bắt đầu hiển thị loading

        try {
            // Gửi yêu cầu gửi mã code reset qua email
            await axios.post(`${API_URL}/password/reset-request`, { email: formData.email });
            alert('Password reset code sent successfully');
            setStep(2); // Chuyển sang bước 2 (Nhập code và mật khẩu mới)
        } catch (error) {
            console.error('Error sending reset code:', error);
            alert(`Failed to send reset code\n${error.response.data.message}`);
        } finally {
            setIsLoading(false); // Kết thúc hiển thị loading
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();

        // Kiểm tra tính hợp lệ của mật khẩu
        if (formData.newPassword !== formData.confirmPassword) {
            alert('Mật khẩu không khớp.');
            return;
        }

        setIsLoading(true); // Bắt đầu hiển thị loading

        try {
            // Gửi yêu cầu đặt lại mật khẩu với code và mật khẩu mới
            await axios.post(`${API_URL}/password/reset`, {
                email: formData.email,
                code: formData.code,
                new_password: formData.newPassword,
            });
            alert('Password reset successfully');
            window.location.href = '/login';// Chuyển hướng người dùng về trang đăng nhập sau khi đặt lại mật khẩu thành công
        } catch (error) {
            console.error('Error resetting password:', error);
            alert(`Failed to reset password\n${error.response.data.message}`);
        } finally {
            setIsLoading(false); // Kết thúc hiển thị loading
        }
    };

    return (
        <div className={cx('login')}>
            <div className={cx('container', 'login__wrapper')} style={{ padding: '0px' }}>
                {step === 1 && (
                    <form className={cx('login__form')} onSubmit={handleSendCode}>
                        <div className={cx('login__form-group')}>
                            <label>Email</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={cx('login__form-submit')}>
                            <button disabled={isLoading}>{isLoading ? 'Loading...' : 'Send reset code'}</button>
                            <Link to="/login">Login?</Link>
                        </div>
                        
                    </form>
                )}

                {step === 2 && (
                    <form className={cx('login__form')} onSubmit={handleResetPassword}>
                        <div className={cx('login__form-group')}>
                            <label>Code</label>
                            <input
                                name="code"
                                type="text"
                                placeholder="Enter the code sent to your email"
                                required
                                value={formData.code}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={cx('login__form-group')}>
                            <label>New Password</label>
                            <input
                                name="newPassword"
                                type="password"
                                placeholder="Enter your new password"
                                required
                                value={formData.newPassword}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={cx('login__form-group')}>
                            <label>Confirm New Password</label>
                            <input
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirm your new password"
                                required
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={cx('login__form-submit')}>
                            <button disabled={isLoading}>{isLoading ? 'Loading...' : 'Change password'}</button>
                            <Link to="/login">Login?</Link>
                        </div>
                        
                    </form>
                )}
            </div>
        </div>
    );
}

export default ForgotPassword;
