import React from 'react';
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function Contact() {
    const { t } = useTranslation();
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
                            <form>
                                <div className={cx('row')}>
                                    <div className={cx('col-lg-6', 'd-flex', 'flex-column')}>
                                        <label>{t('First name')}</label>
                                        <input type="text" />
                                    </div>
                                    <div className={cx('col-lg-6', 'd-flex', 'flex-column')}>
                                        <label>{t('Last name')}</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className={cx('row')}>
                                    <div className={cx('col-lg-6', 'd-flex', 'flex-column')}>
                                        <label>Email</label>
                                        <input type="text" />
                                    </div>
                                    <div className={cx('col-lg-6', 'd-flex', 'flex-column')}>
                                        <label>{t('Company')}</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className={cx('row')}>
                                    <div className={cx('col-lg-6', 'd-flex', 'flex-column')}>
                                        <label>{t('Phone')}</label>
                                        <input type="text" />
                                    </div>
                                    <div className={cx('col-lg-6', 'd-flex', 'flex-column')}>
                                        <label>{t('Job Title')}</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className={cx('row')}>
                                    <div className={cx('col-lg-12', 'd-flex', 'flex-column')}>
                                        <label>{t('Your Messengers')}</label>
                                        <textarea rows="3" cols="12"></textarea>
                                    </div>
                                </div>
                                <div className={cx('d-flex', 'justify-content-center')}>
                                    <button>{t('contact')}</button>
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
