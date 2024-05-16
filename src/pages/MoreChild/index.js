import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './MoreChild.module.scss';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function MoreChild() {
    let { pathname } = useLocation();
    let [indexPage, setIndexPage] = useState(0);
    const { t } = useTranslation();
    const data = [
        {
            title: t('Ours Services'),
            titleTech: t('We offer a wide range spectrum'),
            titleContent: t('Our services will help'),
            poster: 'https://static.wixstatic.com/media/c794a2_19eb0da47f0746a2a842f79e3844f100f000.jpg/v1/fill/w_1519,h_552,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/c794a2_19eb0da47f0746a2a842f79e3844f100f000.jpg',
            content: t('At Odyssey, we understand'),
            images: [
                'https://static.wixstatic.com/media/c794a2_73c443f86a7f45fe986dd87d1712c18c~mv2.jpg/v1/fill/w_358,h_419,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/roberto-cortese-ejhjSZKTeeg-unsplash.jpg',
                'https://static.wixstatic.com/media/c794a2_256812facd4346fcb14dca63d5a34c1d~mv2.jpg/v1/crop/x_1701,y_0,w_4497,h_5268/fill/w_358,h_419,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/person-working-html-computer.jpg',
                'https://static.wixstatic.com/media/c794a2_9632db8baf1b47b5abbc45d5a5c830b2~mv2.jpg/v1/crop/x_399,y_0,w_1122,h_1314/fill/w_358,h_419,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ai-generated-8211245_1920.jpg',
            ],
            name: [t('Digital transformation'), t('Outsourcing'), t('IT consulting')],
        },
        {
            title: t('Digital Transformation'),
            titleTech: t('We believe every business'),
            titleContent: t('Digital transformation'),
            poster: 'https://static.wixstatic.com/media/c794a2_442ef00b0f1645e28b82ce5d7e3ee3a4f000.jpg/v1/fill/w_761,h_532,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/c794a2_442ef00b0f1645e28b82ce5d7e3ee3a4f000.jpg',
            content: t('Our digital business transformation services'),
        },
        {
            title: t('Exciting IT Outsourcing'),
            titleTech: t('Outsourced IT services'),
            titleContent: t('Outsourcing'),
            poster: 'https://static.wixstatic.com/media/c794a2_335ed2899af5425c953ae39da5819c22f000.jpg/v1/fill/w_761,h_532,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/c794a2_335ed2899af5425c953ae39da5819c22f000.jpg',
            content: t('Outsourced IT services enable you'),
        },
        {
            title: t('IT Consulting Build'),
            titleTech: t('With a team steeped in deep'),
            titleContent: t('IT Consulting'),
            poster: 'https://static.wixstatic.com/media/c794a2_9943cfb9cc4d48dfa8df9ac8cfc4848df000.jpg/v1/fill/w_761,h_532,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/c794a2_9943cfb9cc4d48dfa8df9ac8cfc4848df000.jpg',
            content: t('We are committed to delivering'),
        },
    ];

    useEffect(() => {
        if (pathname === '/services') {
            setIndexPage(0);
        } else if (pathname === '/digital-transformation') {
            setIndexPage(1);
        } else if (pathname === '/outsourcing') {
            setIndexPage(2);
        } else if (pathname === '/it-consulting') {
            setIndexPage(3);
        }
    }, [pathname]);

    return (
        <div className={cx('solution')}>
            {pathname === '/services' ? (
                <>
                    <div className={cx('solution__intro')}>
                        <div
                            className={cx('solution__intro-wraper')}
                            style={{ position: 'absolute', maxWidth: '798px', left: '10px', bottom: ' 43px' }}
                        >
                            <div className={cx('solution__intro__title')}>{data[0].title}</div>
                            <div className={cx('solution__intro__description-service')}>{data[0].titleTech}</div>
                        </div>
                    </div>
                    <div>
                        <img style={{ width: '100%' }} src={data[0].poster} alt="Mobile Image" />
                    </div>
                    <div className={cx('solution__new')}>
                        <div className={cx('solution__new__top')}>
                            <div className={cx('solution__new__top__text')}>{data[0].titleContent}</div>
                            <div className={cx('solution__new__top__text-two')}>{data[0].content}</div>
                        </div>
                    </div>
                    <div className={cx('solution__new', 'solution__new--three')}>
                        <div className={cx('solution__new__bottom')}>
                            {data[0].images.map((item, index) => (
                                <div className={cx('image-container')} key={index}>
                                    <img src={item} alt={`Image ${index}`} />
                                    <div className={cx('name-container')}>{data[0].name[index]}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className={cx('solution__intro')}>
                        <div
                            className={cx('solution__intro-wraper')}
                            style={{
                                position: 'absolute',
                                maxWidth: '798px',
                                left: '110px',
                                top: '150px',
                            }}
                        >
                            <div className={cx('solution__intro__title')}>{data[indexPage].title}</div>
                            <div className={cx('solution__intro__description')}>{data[indexPage].titleTech}</div>
                        </div>
                    </div>

                    <div className={cx('solution__new')}>
                        <div className={cx('solution__new__top')}>
                            <div className={cx('solution__new__top__content')}>{data[indexPage].titleContent}</div>
                            <div className={cx('solution__new__top__content-two')}>{data[indexPage].content}</div>
                        </div>
                        <div>
                            <img style={{ width: '100%' }} src={data[indexPage].poster} alt="Mobile Image" />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default MoreChild;
