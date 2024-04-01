import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import { useTranslation } from 'react-i18next';

import axios from 'axios';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const cx = classNames.bind(styles);

function Contact() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        company: '',
        phone: '',
        job_title: '',
        yours_messenger: ''
    });

    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Kiểm tra validation
        if (!formData.first_name || !formData.last_name || !formData.email || !formData.company) {
            alert('Vui lòng điền đầy đủ thông tin.');
            return;
        }

        // Kiểm tra định dạng email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Email không hợp lệ.');
            return;
        }

        // Kiểm tra định dạng số điện thoại
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            alert('Số điện thoại không hợp lệ.');
            return;
        }

        setIsSending(true);
        try {
            // Gửi dữ liệu biểu mẫu qua email
            const data = await axios.post('http://14.225.254.135:8000/api/contact', formData);
            // Đặt trạng thái hoặc thực hiện các hành động khác sau khi gửi email thành công
            if (data.status === 200) {
                alert('Gửi mail thành công!')
                setFormData({
                    first_name: '',
                    last_name: '',
                    email: '',
                    company: '',
                    phone: '',
                    job_title: '',
                    yours_messenger: ''
                });
            }
        } catch (error) {
            console.error('Error sending email:', error);
        } finally {
            setIsSending(false); // Kết thúc gửi
        }
    };

    return (
        <div className={cx('Contact')}>
            <div className={cx('Contact__intro')}>
                <div className={cx('Contact__intro-wrapper')}>
                    <div className={cx('Contact__intro__title')}>{t('Transform Your Business with Odyssey')}</div>
                    <div className={cx('Contact__intro__description')}>{t('Let’s give your business')}</div>
                </div>
            </div>

            <div className={cx('Contact__form')}>
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        <div className={cx('Contact__form-left', 'col-lg-5')}>
                            <p>{t('At Odyssey, we are dedicated')}</p>
                        </div>
                        <div className={cx('Contact__form-right', 'col-lg-7')}>
                            <form onSubmit={handleSubmit}>
                                <div className={cx('row')}>
                                    <div className={cx('col-lg-6', 'd-flex', 'flex-column')}>
                                        <label>{t('First name')}</label>
                                        <input type="text" name='first_name' value={formData.first_name} onChange={handleChange} />
                                    </div>
                                    <div className={cx('col-lg-6', 'd-flex', 'flex-column')}>
                                        <label>{t('Last name')}</label>
                                        <input type="text" name='last_name' value={formData.last_name} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className={cx('row')}>
                                    <div className={cx('col-lg-6', 'd-flex', 'flex-column')}>
                                        <label>Email</label>
                                        <input type="text" name='email' value={formData.email} onChange={handleChange} />
                                    </div>
                                    <div className={cx('col-lg-6', 'd-flex', 'flex-column')}>
                                        <label>{t('Company')}</label>
                                        <input type="text" name='company' value={formData.company} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className={cx('row')}>
                                    <div className={cx('col-lg-6', 'd-flex', 'flex-column')}>
                                        <label>{t('Phone')}</label>
                                        <input type="text" name='phone' value={formData.phone} onChange={handleChange} />
                                    </div>
                                    <div className={cx('col-lg-6', 'd-flex', 'flex-column')}>
                                        <label>{t('Job Title')}</label>
                                        <input type="text" name='job_title' value={formData.job_title} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className={cx('row')}>
                                    <div className={cx('col-lg-12', 'd-flex', 'flex-column')}>
                                        <label>{t('Your Messengers')}</label>
                                        <textarea rows="3" cols="12" name='yours_messenger' value={formData.yours_messenger} onChange={handleChange}></textarea>
                                    </div>
                                </div>
                                <div className={cx('d-flex', 'justify-content-center')}>
                                    <button type="submit" disabled={isSending}>
                                        {isSending ? <AiOutlineLoading3Quarters className={cx('spinner')} /> : t('contact')}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
