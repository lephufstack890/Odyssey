import React from 'react';
import classNames from 'classnames/bind';
import styles from './Mission.module.scss';
import m1 from './../../assets/images/mission/m1.png';
import m2 from './../../assets/images/mission/m2.png';

const cx = classNames.bind(styles);

function Mission() {

    return (
        <div className={cx('Mission')}>
            <div className={cx('Mission__intro')}>
                <div className={cx('Mission__intro-wrapper')}>
                    <div className={cx('Mission__intro__title')}>
                        Our Mission
                    </div>
                    <div className={cx('Mission__intro__description')}>
                        We are dedicated to delivering optimal advantages to your organization or company while maintaining cost-effectiveness. Our commitment lies in empowering your company to operate with heightened efficiency, ensuring a seamless and enhanced customer experience. We prioritize the alignment of our services with your objectives, tailoring solutions that not only optimize operations but also elevate customer satisfaction.
                    </div>
                </div>
            </div>

            <div className={cx('Mission__video')}>
                <video autoPlay muted loop>
                    <source
                        src="https://video.wixstatic.com/video/c794a2_587ca1159a1a4b779fb87f455bdab19f/1080p/mp4/file.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>

            <div className={cx('Mission__need')}>
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        <div className={cx('Mission__need-left', 'col-lg-5', 'col-md-5', 'col-sm-12')}>
                            <img style={{ width: '100%' }} src={m1} alt='mission' />
                            <p>We understand what you need</p>
                        </div>
                        <div className={cx('Mission__need-right', 'col-lg-7', 'col-md-5', 'col-sm-12')}>
                            <p>
                                We understand that every business is unique. That's why we offer customized software applications tailored to your specific needs. Whether you're looking to streamline your operations or improve customer engagement, we've got you covered. We commit to provide exceptional customer service from start to finish. Our team of experts is available to answer your questions and provide support whenever you need it.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('Mission__help')}>
                <div className={cx('container')} style={{ padding: '0' }}>
                    <div className={cx('row', 'Mission__help-wrapper')}>
                        <div className={cx('Mission__help-left', 'col-lg-7')}>
                            <p>
                                At Odyssey, we are proud to have an experienced leadership team that brings a wealth of knowledge and expertise to our company. Our leaders have a proven track record of success in the technology industry and are dedicated to driving our company forward. We believe that our people are our greatest asset, and we are committed to creating a supportive and inclusive work environment that fosters creativity and innovation. Our team is made up of talented developers, designers, and project managers who work together to deliver exceptional results.
                            </p>
                        </div>
                        <div className={cx('Mission__help-right', 'col-lg-5')}>
                            <img style={{ width: '100%' }} src={m2} alt='mission' />
                            <p>We are ready to help you</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mission;
