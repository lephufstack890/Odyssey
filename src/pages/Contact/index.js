import React from 'react';
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';

const cx = classNames.bind(styles);

function Contact() {

    return (
        <div className={cx('Contact')}>
            <div className={cx('Contact__intro')}>
                <div className={cx('Contact__intro-wrapper')}>
                    <div className={cx('Contact__intro__title')}>
                        Transform Your Business with Odyssey
                    </div>
                    <div className={cx('Contact__intro__description')}>
                        Let’s give your business what it needs to grow.
                    </div>
                </div>
            </div>

            <div className={cx('Contact__form')}>
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        <div className={cx('Contact__form-left', 'col-lg-5')}>
                            <p>At Odyssey, we are dedicated to helping your business grow. Contact us today to learn more about how our software solutions can help you achieve your goals.</p>
                        </div>
                        <div className={cx('Contact__form-right', 'col-lg-7')}>
                            <form>
                                <div className={cx('row')}>
                                    <div className={cx('col-lg-6', 'd-flex', 'flex-column')}>
                                        <label>First name</label>
                                        <input type='text' />
                                    </div>
                                    <div className={cx('col-lg-6', 'd-flex', 'flex-column')}>
                                        <label>Last name</label>
                                        <input type='text' />
                                    </div>
                                </div>
                                <div className={cx('row')}>
                                    <div className={cx('col-lg-6', 'd-flex', 'flex-column')}>
                                        <label>Email</label>
                                        <input type='text' />
                                    </div>
                                    <div className={cx('col-lg-6', 'd-flex', 'flex-column')}>
                                        <label>Company</label>
                                        <input type='text' />
                                    </div>
                                </div>
                                <div className={cx('row')}>
                                    <div className={cx('col-lg-6', 'd-flex', 'flex-column')}>
                                        <label>Phone</label>
                                        <input type='text' />
                                    </div>
                                    <div className={cx('col-lg-6', 'd-flex', 'flex-column')}>
                                        <label>Job Title</label>
                                        <input type='text' />
                                    </div>
                                </div>
                                <div className={cx('row')}>
                                    <div className={cx('col-lg-12', 'd-flex', 'flex-column')}>
                                        <label>Your Messengers</label>
                                        <textarea rows="3" cols="12"></textarea>
                                    </div>
                                </div>
                                <div className={cx('d-flex', 'justify-content-center')}>
                                    <button>Contact Us</button>
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
