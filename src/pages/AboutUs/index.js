import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './AboutUs.module.scss';

const cx = classNames.bind(styles);

function AboutUs() {
    return (
        <div className={cx('solution')}>
            <div className={cx('solution__new')}>
                <div className={cx('solution__new__top')}>
                    <div className={cx('solution__new__top__text')}>Về chúng tôi</div>
                    <div className={cx('solution__new__top__text-two')}>
                        Odyssey gồm những người trẻ đầy nhiệt huyết trong lĩnh vực phát triển phần mềm, cam kết tích hợp
                        các tiến bộ công nghệ mới vào cuộc sống hàng ngày nhằm làm cho thế giới tốt đẹp hơn. Mục tiêu
                        của chúng tôi là cung cấp các giải pháp phần mềm sáng tạo và hiệu quả, giúp bạn biến ước mơ
                        thành hiện thực.
                    </div>
                </div>
            </div>

            <div className={cx('solution__video')}>
                <video autoPlay muted loop>
                    <source
                        src="https://video.wixstatic.com/video/11062b_fc39bc30d1b04fa48aa1a5bcefaafe7e/1080p/mp4/file.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>

            <div className={cx('solution__new', 'solution__new--two')}>
                <div className={cx('solution__new__top')}>
                    <div className={cx('solution__new__top__text')}>Đội ngũ của chúng tôi</div>
                    <div className={cx('solution__new__top__text-two')}>
                        Đội ngũ của chúng tôi gồm những người đã trải qua quá trình đào tạo tại các trường đại học đẳng
                        cấp thế giới. Họ không chỉ có hiểu biết sâu rộng trong lĩnh vực của mình mà còn có niềm đam mê
                        mãnh liệt với công nghệ, chính là điều thúc đẩy họ hoàn thành xuất sắc công việc của mình.
                        Chuyên môn và kỹ năng của họ đã được hoàn thiện thông qua việc hoàn thành nhiều dự án biến họ
                        thành tài sản vô giá của chúng tôi.
                    </div>
                </div>

                <div className={cx('container', 'solution__new__bottom', 'justify-content-center')}>
                    <div className={cx('row', 'justify-content-center')}>
                        <div className={cx('item', 'col-lg-3')}>
                            <img src="https://static.wixstatic.com/media/c794a2_cd7f518018094d8295613dfb0ebf78e3~mv2.jpg/v1/crop/x_0,y_0,w_2000,h_2248/fill/w_287,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_3435_edited.jpg" />

                            <div className={cx('item__title')}>
                                <span>Khanh Nguyen</span>
                                <span>Founder & CEO</span>
                            </div>
                        </div>

                        <div className={cx('item', 'col-lg-3')}>
                            <img src="https://static.wixstatic.com/media/c794a2_4477ec376737464dbb009ad42d2dcce1~mv2.jpg/v1/crop/x_0,y_0,w_2000,h_2248/fill/w_287,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_3448_edited.jpg" />

                            <div className={cx('item__title')}>
                                <span>Y Nguyen</span>
                                <span>Project Manager</span>
                            </div>
                        </div>

                        <div className={cx('item', 'col-lg-3')}>
                            <img src="https://static.wixstatic.com/media/c794a2_320bf9a2136948d290884bc6acd2d335~mv2.jpg/v1/crop/x_0,y_0,w_2000,h_2248/fill/w_287,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_3442_edited.jpg" />

                            <div className={cx('item__title')}>
                                <span>Hao Nguyen</span>
                                <span>Tech Lead</span>
                            </div>
                        </div>

                        <div className={cx('item', 'col-lg-3')}>
                            <img src="https://static.wixstatic.com/media/c794a2_7c8d9744cd6c47f9abad98514b2b4a47~mv2.jpg/v1/crop/x_0,y_0,w_2000,h_2248/fill/w_287,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_3427_edited.jpg" />

                            <div className={cx('item__title')}>
                                <span>Quang Tran</span>
                                <span>Product Manager</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('solution__new', 'solution__new--three')}>
                <div className={cx('solution__new__top')}>
                    <div className={cx('solution__new__top__text')}>Đối tác của chúng tôi</div>
                    <div className={cx('solution__new__top__text-two')}>
                        Đối tác của chúng tôi bao gồm những tên tuổi đáng chú ý nhất trong lĩnh vực công nghệ toàn cầu
                        và các trường đại học danh tiếng xuất sắc trong học thuật. Qua những liên kết quý báu này, chúng
                        tôi nhận được sự hỗ trợ từ chuyên môn của các doanh nghiệp công nghệ hàng đầu và sức mạnh trí
                        tuệ của các cơ sở giáo dục uy tín.
                    </div>
                </div>
            </div>

            <div className={cx('solution__new', 'solution__new--three')}>
                <div className={cx('solution__new__top')}>
                    <div className={cx('solution__new__top__text')}>Khách hàng của chúng tôi</div>
                    <div className={cx('solution__new__top__text-two')}>
                        Khách hàng của chúng tôi gồm các tổ chức và doanh nghiệp hoạt động trong nhiều lĩnh vực khác
                        nhau tại Việt Nam. Chúng tôi phục vụ các đơn vị với quy mô đa dạng, từ doanh nghiệp nhỏ và vừa
                        đến các tập đoàn lớn trong bối cảnh sôi động của nền kinh tế Việt Nam.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
