import { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-owl-carousel2/lib/styles.css';
import { FaArrowRightLong } from 'react-icons/fa6';
import startedVideo from './../../assets/video/home/started.mp4';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function Home() {
    const { i18n, t } = useTranslation();
    const [destopSliderOpen, setDestopSliderOpen] = useState(null);
    const [mobileSliderOpen, setMobileSliderOpen] = useState(null);
    const sliderRef = useRef(null);
    const [indexMenu, setIndexMenu] = useState(0);

    const handleMobileSliderToggle = (index) => {
        setMobileSliderOpen(index === mobileSliderOpen ? null : index);
    };

    const handleAfterChange = (index) => {
        // Xác định phần tử hiện tại và số lượng phần tử
        const currentSlide = index;
        const slideCount = sliderRef.current.props.children.length;

        // Kiểm tra xem innerSlider và list có tồn tại không
        if (sliderRef.current.innerSlider && sliderRef.current.innerSlider.list) {
            const slides = sliderRef.current.innerSlider.list.childNodes;

            // Kiểm tra xem slides có tồn tại không và có đủ số phần tử không
            if (slides && slides.length === slideCount) {
                for (let i = 0; i < slideCount; i++) {
                    if (i === currentSlide) {
                        slides[i].classList.add('desktop-active-slide');
                    } else {
                        slides[i].classList.remove('desktop-active-slide');
                    }
                }
            }
        }
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 7,
        centerMode: true,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 6,
                },
            },
        ],
        afterChange: handleAfterChange, // Gọi hàm này sau mỗi lần slider thay đổi
    };

    const Menu = [
        {
            title: 'Web & Application',
            link: 'web-and-mobile-application',
        },
        {
            title: 'Data Analytic',
            link: 'data-analytics',
        },
        {
            title: 'Business Intelligence',
            link: 'business-intelligence',
        },
        {
            title: 'Artificial Intelligence',
            link: 'artificial-tntelligence',
        },
        {
            title: 'Cloud Computing',
            link: 'cloud-computing',
        },
        {
            title: 'Internet of things',
            link: 'internet-of-things',
        },
        {
            title: 'Big Data',
            link: 'big-data',
        },
        {
            title: 'Blockchain',
            link: 'blockchain',
        },
    ];

    const handleActiveSliderDesstop = (index) => {
        setDestopSliderOpen(index === destopSliderOpen ? null : index);
        sliderRef.current.slickGoTo(index); // Di chuyển slider tới vị trí của slider được click
        // Thêm class .desktop-active-slide cho item được click
        const slider = sliderRef.current;
        if (slider) {
            const currentSlide = slider.innerSlider.list.querySelector('.slick-current');
            if (currentSlide) {
                currentSlide.classList.remove('desktop-active-slide');
            }
            const items = slider.innerSlider.list.querySelectorAll('.main-page__solutions-contentDestop-item');
            items.forEach((item, i) => {
                if (i === index) {
                    item.classList.add('desktop-active-slide');
                } else {
                    item.classList.remove('desktop-active-slide');
                }
            });
        }
    };

    return (
        <div className={cx('main-page')}>
            <div className={cx('main-page__sectionOne')}>
                <div className={cx('main-page__video')}>
                    {window.innerWidth > 768 ? (
                        <video autoPlay muted loop>
                            <source
                                src="https://video.wixstatic.com/video/c794a2_553d56f3fda64a6bb01d8a7b545f8665/1080p/mp4/file.mp4"
                                type="video/mp4"
                            />
                        </video>
                    ) : (
                        <img
                            src="https://static.wixstatic.com/media/c794a2_553d56f3fda64a6bb01d8a7b545f8665f000.jpg/v1/fill/w_1519,h_820,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/c794a2_553d56f3fda64a6bb01d8a7b545f8665f000.jpg"
                            alt="Mobile Image"
                        />
                    )}

                    <div className={cx('main-page__sectionOne__content')}>
                        <div style={{ fontSize: '64px', marginBottom: '20px', lineHeight: '76px' }}>
                            {t('Transform Your World with Innovative Technology')}
                        </div>
                        <div style={{ fontSize: '24px', marginBottom: '19px', lineHeight: '40px' }}>
                            {t('We believe that technology')}
                        </div>
                        <div>
                            <Link to={'/solution'}>{t('Learn more')}</Link>
                        </div>
                    </div>
                </div>

                <div className={cx('main-page__solutions')}>
                    <div className={cx('main-page__solutions-top')}>
                        <span> {t('Our Solutions')}</span>
                        <span>{t('Cooperate to innovate your company')}</span>
                        <span>{t('Explore how you can digitalize your business with Odyssey')}</span>
                    </div>
                    <div className={cx('main-page__solutions-content')}>
                        {Menu?.map((item, index) => (
                            <div
                                key={index}
                                className={cx('main-page__solutions-contentDestop-item')}
                                style={{ width: indexMenu === index ? '45%' : '12.5%' }}
                                onClick={() => setIndexMenu(index)}
                            >
                                <>
                                    <img
                                        className={cx('sl-img', 'enlarge-img')} // Thêm lớp enlarge-img
                                        src={require(`./../../assets/images/home/big${index + 1}.png`)}
                                        alt=""
                                    />
                                    <div className={cx('overlay-content')}>
                                        <span style={{ fontSize: indexMenu === index ? '20px' : '16px' }}>
                                            {item?.title}
                                        </span>
                                        <Link
                                            to={item?.link}
                                            style={{ display: indexMenu === index ? 'flex' : 'none' }}
                                        >
                                            {t('Learn more')}
                                        </Link>
                                    </div>
                                </>
                            </div>
                        ))}
                    </div>
                    <div className={cx('main-page__solutions-contentMobile')}>
                        <div>
                            {Menu?.map((item, index) => (
                                <div className={cx('row')} onClick={() => handleMobileSliderToggle(index)} key={index}>
                                    <div className={cx('col-12', 'pb-4', 'position-relative')}>
                                        {mobileSliderOpen === index ? (
                                            <>
                                                <img
                                                    style={{ width: '100%', cursor: 'pointer' }}
                                                    className={cx('sl-img-mobile')}
                                                    src={require(`./../../assets/images/home/mobile/sl-big${index + 1
                                                        }.png`)}
                                                    alt=""
                                                />
                                                <div className={cx('content-img')}>
                                                    <p>{item?.title}</p>
                                                    {/* <span>
                                                        <FaArrowRightLong />
                                                    </span> */}
                                                    <Link to={item?.link}>
                                                        <FaArrowRightLong />
                                                    </Link>
                                                </div>
                                            </>
                                        ) : (
                                            <img
                                                style={{ width: '100%', cursor: 'pointer' }}
                                                className={cx('sl-img-mobile')}
                                                src={require(`./../../assets/images/home/mobile/sl${index + 1}.png`)}
                                                alt=""
                                            />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ background: '#141416', paddingTop: '100px' }}>
                    <div className={cx('container')}>
                        <div className={cx('row')}>
                            <div className={cx('col-lg-5', 'col-md-6', 'col-12', 'main-page__missons-left')}>
                                <h3>{t('Our Mission: Making the world a better place')}</h3>
                                <p>{t('We apply the modern software')}</p>
                                <div style={{ margin: '10px 120px' }}>
                                    <Link to={'/mission'}>{t('Learn more')}</Link>
                                </div>
                            </div>
                            <div className={cx('col-lg-7', 'col-md-6', 'col-12', 'main-page__missons-right')}>
                                {window.innerWidth > 768 ? (
                                    <video autoPlay muted loop className="desktop-video">
                                        <source
                                            src="https://video.wixstatic.com/video/11062b_cca29298dbe547f4983e127aba1c1966/1080p/mp4/file.mp4"
                                            type="video/mp4"
                                        />
                                    </video>
                                ) : (
                                    <img
                                        style={{ height: '350px', width: '100%' }}
                                        src="https://static.wixstatic.com/media/11062b_cca29298dbe547f4983e127aba1c1966f000.jpg/v1/fill/w_825,h_912,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/11062b_cca29298dbe547f4983e127aba1c1966f000.jpg"
                                        alt="Mobile Image"
                                        className="mobile-image"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('main-page__odyssey')}>
                    {window.innerWidth > 768 ? (
                        <video autoPlay muted loop>
                            <source
                                src="https://video.wixstatic.com/video/c794a2_4f8fe01f8e54496a922159eb6ea3894a/720p/mp4/file.mp4"
                                type="video/mp4"
                            />
                        </video>
                    ) : (
                        <img
                            src="https://static.wixstatic.com/media/c794a2_4f8fe01f8e54496a922159eb6ea3894af000.jpg/v1/fill/w_1152,h_566,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/c794a2_4f8fe01f8e54496a922159eb6ea3894af000.jpg"
                            alt="Mobile Image"
                        />
                    )}
                    <div className={cx('main-page__odyssey-content')}>
                        <h3> {t('Why Choose Odyssey')}</h3>
                        <p>{t('Our team comprises')}</p>
                    </div>
                    <div className={cx('main-page__odyssey-actions', 'container')}>
                        <div className={cx('d-flex', 'flex-wrap', 'align-items-center')}>
                            <div className={cx('main-page__odyssey-actions-item')}>
                                <span>Our Partners</span>
                            </div>
                            <div className={cx('main-page__odyssey-actions-item')}>
                                <img
                                    src="https://static.wixstatic.com/media/c794a2_d951ecbf103042f8bc74eaeeb369d448~mv2.png/v1/fill/w_170,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo-microsoft-404px-grey.png"
                                    alt=""
                                />
                            </div>
                            <div className={cx('main-page__odyssey-actions-item')}>
                                <img
                                    src="https://static.wixstatic.com/media/c794a2_34e01f8153284b68811bd5570305082a~mv2.png/v1/fill/w_163,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Google_2015_logo_colorless_mourning_period.png"
                                    alt=""
                                />
                            </div>
                            <div className={cx('main-page__odyssey-actions-item')}>
                                <img
                                    src="https://static.wixstatic.com/media/c794a2_5c7ffbef9b8448d0a20681a7ebff5784~mv2.png/v1/fill/w_190,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pngwing_com%20(1).png"
                                    alt=""
                                />
                            </div>
                            <div className={cx('main-page__odyssey-actions-item')}>
                                <img
                                    src="https://static.wixstatic.com/media/c794a2_5bfd6dbe922a4e5fbc3915deb7201eef~mv2.png/v1/fill/w_170,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c794a2_5bfd6dbe922a4e5fbc3915deb7201eef~mv2.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className={cx('d-flex', 'flex-wrap')}>
                            <div
                                className={cx('main-page__odyssey-actions-startedLeft')}
                                style={{ border: '1px solid rgb(138, 138, 138)' }}
                            >
                                {window.innerWidth > 768 ? (
                                    <video autoPlay muted loop className="desktop-video">
                                        <source
                                            src="https://video.wixstatic.com/video/c794a2_553d56f3fda64a6bb01d8a7b545f8665/1080p/mp4/file.mp4"
                                            type="video/mp4"
                                        />
                                    </video>
                                ) : (
                                    <img
                                        style={{ width: '100%' }}
                                        src="https://static.wixstatic.com/media/c794a2_553d56f3fda64a6bb01d8a7b545f8665f000.jpg/v1/fill/w_1519,h_820,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/c794a2_553d56f3fda64a6bb01d8a7b545f8665f000.jpg"
                                        alt="Mobile Image"
                                        className="mobile-image"
                                    />
                                )}
                                <p>{t('Are you ready to transform your business ?')}</p>
                            </div>
                            <div
                                className={cx('main-page__odyssey-actions-startedRight')}
                                style={{ border: '1px solid rgb(138, 138, 138)' }}
                            >
                                <p>{t('We commit to help you')}</p>
                                <div>
                                    <Link to={'/contact'}>{t('Get Started')}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
