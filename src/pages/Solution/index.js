import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Solution.module.scss';
import { Navigation } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Solution() {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(-1);
    };

    return (
        <div className={cx('solution')}>
            <div className={cx('solution__intro')}>
                <div style={{ position: 'absolute', maxWidth: '798px', left: '110px', bottom: ' 43px' }}>
                    <div className={cx('solution__intro__title')}>
                        Giải pháp phần mềm mới cho một thế giới tốt đẹp hơn
                    </div>
                    <div className={cx('solution__intro__description')}>
                        Chúng tôi cam kết cung cấp các giải pháp đáng tin cậy và có khả năng mở rộng giúp bạn đạt được
                        mục tiêu kinh doanh của mình. Đội ngũ chuyên gia của chúng tôi luôn nỗ lực để dẫn đầu và mang
                        đến cho bạn những giải pháp công nghệ mới nhất thúc đẩy sự đổi mới và tiến bộ.
                    </div>
                </div>
            </div>

            <div className={cx('solution__video')}>
                <video autoPlay muted loop>
                    <source
                        src="https://video.wixstatic.com/video/c794a2_11eba1f5b64f4b7e9a7bde53371293b4/1080p/mp4/file.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>

            <div className={cx('solution__new')}>
                <div className={cx('solution__new__top')}>
                    <div className={cx('solution__new__top__text')}>
                        Giải pháp đổi mới cho các doanh nghiệp hiện đại
                    </div>
                    <div className={cx('solution__new__top__text-two')}>
                        Chúng tôi thực hiện những giải pháp của mình một cách nhanh chóng và đáng tin cậy. Những giải
                        pháp của chúng tôi được thiết kế để giúp bạn luôn dẫn đầu khi cạnh tranh với đối thủ và đạt được
                        mục tiêu của mình. Từ phân tích dữ liệu trên nền tảng điện toán đám mây đến các ứng dụng phần
                        mềm có thể tùy chỉnh, chúng tôi có đủ công cụ và chuyên môn để giúp bạn thành công.
                    </div>
                </div>

                <div className={cx('solution__new__carousel')}>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide>
                            <div className={cx('solution__new__carousel__wrapper')}>
                                <div className={cx('solution__new__carousel__left')}>
                                    <div className={cx('image-item')}>
                                        <img src="https://static.wixstatic.com/media/c794a2_01bb2e456b43420b84e5beb2471f795d~mv2.jpg/v1/fill/w_427,h_540,q_90/c794a2_01bb2e456b43420b84e5beb2471f795d~mv2.webp" />

                                        <div className={cx('overlay')}>
                                            <div>
                                                <h2>Dữ liệu lớn</h2>
                                                <Link to={'/'}>Xem thêm</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('solution__new__carousel__right')}>
                                    <div className={cx('image-item', 'image-item--h270')}>
                                        <img src="https://static.wixstatic.com/media/c794a2_089ed9c3a6514a4fadb9c902123cc8df~mv2.jpg/v1/fill/w_214,h_270,q_90/c794a2_089ed9c3a6514a4fadb9c902123cc8df~mv2.webp" />

                                        <div className={cx('overlay')}>
                                            <div>
                                                <h2>
                                                    Ứng dụng di <br />
                                                    động & Web
                                                </h2>
                                                <Link to={'/'} style={{ width: '140px' }}>
                                                    Xem thêm
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={cx('image-item', 'image-item--h270')}>
                                        <img src="https://static.wixstatic.com/media/c794a2_76c3e074559b474b979df51a5d68b4f3~mv2.jpg/v1/fill/w_214,h_270,q_90/c794a2_76c3e074559b474b979df51a5d68b4f3~mv2.webp" />

                                        <div className={cx('overlay')}>
                                            <div>
                                                <h2>
                                                    Phân tích dữ <br /> liệu
                                                </h2>
                                                <Link to={'/'} style={{ width: '140px' }}>
                                                    Xem thêm
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={cx('image-item', 'image-item--h270')}>
                                        <img src="https://static.wixstatic.com/media/c794a2_bd8fa2fff7ee4fb289be22a78e48c802~mv2.jpg/v1/fill/w_214,h_270,q_90/c794a2_bd8fa2fff7ee4fb289be22a78e48c802~mv2.webp" />

                                        <div className={cx('overlay')}>
                                            <div>
                                                <h2>Trí tuệ doanh nghiệp</h2>
                                                <Link to={'/'} style={{ width: '140px' }}>
                                                    Xem thêm
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={cx('image-item', 'image-item--h270')}>
                                        <img src="https://static.wixstatic.com/media/c794a2_2962dbd66be74847b98fd4728772bfdb~mv2.png/v1/fill/w_214,h_270,q_90/c794a2_2962dbd66be74847b98fd4728772bfdb~mv2.webp" />

                                        <div className={cx('overlay')}>
                                            <div>
                                                <h2>Trí tuệ nhân tạo</h2>
                                                <Link to={'/'} style={{ width: '140px' }}>
                                                    Xem thêm
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide> */}
                    </Swiper>
                    {}
                </div>
            </div>
        </div>
    );
}

export default Solution;
