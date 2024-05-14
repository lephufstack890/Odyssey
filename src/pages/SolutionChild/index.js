import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SolutionChild.module.scss';
import { useLocation } from 'react-router-dom';
import angular from './../../assets/images/solution/angular.svg';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function SolutionChild() {
    let { pathname } = useLocation();
    let [indexPage, setIndexPage] = useState(0);
    const { t } = useTranslation();
    const data = [
        {
            title: t('Web and Mobile application'),
            titleTech: t('tech application'),
            video: 'https://video.wixstatic.com/video/11062b_f97f2d088d4949ea996a4f8a3ac1c1cd/720p/mp4/file.mp4',
            poster: 'https://static.wixstatic.com/media/11062b_f97f2d088d4949ea996a4f8a3ac1c1cdf000.jpg/v1/fill/w_761,h_532,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/11062b_f97f2d088d4949ea996a4f8a3ac1c1cdf000.jpg',
            content: t('We create stunning websites'),
            images: [
                'https://static.wixstatic.com/media/c794a2_6d0e648ad0be4505bb44a1f96478a7a0~mv2.png/v1/crop/x_8,y_67,w_1007,h_890/fill/w_93,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Angular_full_color_logo_svg.png',
                'https://static.wixstatic.com/media/c794a2_0f4cd580d7844f1eb4fd5438c51cacc8~mv2.png/v1/fill/w_87,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c794a2_0f4cd580d7844f1eb4fd5438c51cacc8~mv2.png',
                'https://static.wixstatic.com/media/c794a2_29dcebbcea744329aec5f1afbd8be04f~mv2.png/v1/crop/x_0,y_0,w_224,h_272/fill/w_69,h_82,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c794a2_29dcebbcea744329aec5f1afbd8be04f~mv2.png',
                'https://static.wixstatic.com/media/c794a2_d58ad571820f4c0abfc64f790842f6f6~mv2.png/v1/crop/x_0,y_0,w_399,h_395/fill/w_87,h_86,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c794a2_d58ad571820f4c0abfc64f790842f6f6~mv2.png',
                'https://static.wixstatic.com/media/c794a2_8b8757ee50e147eba782d4f561d4d4df~mv2.png/v1/fill/w_99,h_86,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c794a2_8b8757ee50e147eba782d4f561d4d4df~mv2.png',
                'https://static.wixstatic.com/media/c794a2_b9ebe2c757094f4587031b258320c88b~mv2.png/v1/crop/x_105,y_145,w_282,h_247/fill/w_99,h_86,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c794a2_b9ebe2c757094f4587031b258320c88b~mv2.png',
                require('~/assets/images/solution/django.png'),
            ],
            name: [
                'Angular',
                'Laravel',
                'Flutter',
                'Swift',
                'React',
                'Xamarin',
                'Django',
            ]
        },
        {
            title: t('Data Analytics'),
            titleTech: t('tech analytics'),
            video: 'https://video.wixstatic.com/video/11062b_91f1ae429baf467eba9f9ba98b5a7fc1/720p/mp4/file.mp4',
            poster: 'https://static.wixstatic.com/media/11062b_91f1ae429baf467eba9f9ba98b5a7fc1f000.jpg/v1/fill/w_761,h_532,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/11062b_91f1ae429baf467eba9f9ba98b5a7fc1f000.jpg',
            content: t('Our data science team'),
            images: [
                require('~/assets/images/solution/aws.png'),
                require('~/assets/images/solution/horizontal.png'),
                require('~/assets/images/solution/spark.png'),
                'https://static.wixstatic.com/media/c794a2_9e070f0f2fe34ca9a3ea420301e88a33~mv2.png/v1/crop/x_39,y_0,w_1241,h_332/fill/w_217,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1280px-Hadoop_logo_svg.png',
                'https://static.wixstatic.com/media/c794a2_a6f9b0c6611244bb83ad86baec33ceaa~mv2.png/v1/crop/x_0,y_0,w_246,h_198/fill/w_107,h_86,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Google_Cloud_logo_svg.png',
                './sas_logo.svg',
                'https://static.wixstatic.com/media/c794a2_82385deba5d144b6bc46f994602657b4~mv2.png/v1/crop/x_312,y_570,w_2387,h_866/fill/w_152,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Microsoft_Azure-Logo_wine.png',
            ],
            name: [
                'Aws',
                'Rapidminer',
                'Apache Spark',
                'Hadoop',
                'Google Cloud',
                'Sas',
                'Microsoft Azure',
            ]
        },
        {
            title: t('Business Intelligence'),
            titleTech: t('tech bussiness'),
            video: 'https://video.wixstatic.com/video/11062b_50f6f6470c9642078f20bc034734c14b/720p/mp4/file.mp4',
            poster: 'https://static.wixstatic.com/media/11062b_50f6f6470c9642078f20bc034734c14bf000.jpg/v1/fill/w_761,h_532,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/11062b_50f6f6470c9642078f20bc034734c14bf000.jpg',
            content: t('We translate data into'),
            images: [
                'https://static.wixstatic.com/media/c794a2_b2e12532853a422d8a9e5f17cf80db44~mv2.png/v1/fill/w_89,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1024px-New_Power_BI_Logo_svg.png',
                'https://static.wixstatic.com/media/c794a2_05c3c1f6c2824a189a4725a85a41d4df~mv2.png/v1/fill/w_152,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SAP-logo.png',
                'https://static.wixstatic.com/media/c794a2_767dc6eaa7c14e5b933582dac96ccbdd~mv2.png/v1/fill/w_186,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pngwing_com%20(3).png',
                require('~/assets/images/solution/TABlogo.png'),
            ],
            name: [
                'Power BI',
                'SAP',
                'Oracle',
                'Tableau',
            ]
        },
        {
            title: t('Artificial Intelligence'),
            titleTech: t('tech artificial'),
            video: 'https://video.wixstatic.com/video/11062b_2d0218bd0ba34344b5b3b18775206ae4/720p/mp4/file.mp4',
            poster: 'https://static.wixstatic.com/media/11062b_2d0218bd0ba34344b5b3b18775206ae4f000.jpg/v1/fill/w_761,h_532,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/11062b_2d0218bd0ba34344b5b3b18775206ae4f000.jpg',
            content: t('We specialize in artificial'),
            images: [
                'https://static.wixstatic.com/media/c794a2_82c5b13834d840ecbbaa256d2ed035f2~mv2.png/v1/crop/x_0,y_0,w_547,h_611/fill/w_105,h_118,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/google-ai-seeklogo.png',
                'https://static.wixstatic.com/media/c794a2_f10a02227fd24a3f8aa48e74721ba7fb~mv2.png/v1/crop/x_0,y_0,w_390,h_439/fill/w_100,h_113,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/lockup.png',
                require('~/assets/images/solution/openAI.png'),
                require('~/assets/images/solution/aws.png'),
                'https://static.wixstatic.com/media/c794a2_28b7e902ddd54c2aa432ecc7918a209a~mv2.png/v1/fill/w_268,h_63,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IBM%20Cloud.png',
                'https://static.wixstatic.com/media/c794a2_82385deba5d144b6bc46f994602657b4~mv2.png/v1/crop/x_314,y_572,w_2387,h_866/fill/w_190,h_69,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Microsoft_Azure-Logo_wine.png',
            ],
            name: [
                'Google Cloud AI',
                'TensorFlow',
                'OpenAI',
                'AWS',
                'IBM Watson',
                'Microsoft Azure',
            ]
        },
        {
            title: t('Cloud Computing'),
            titleTech: t('tech cloud'),
            video: 'https://video.wixstatic.com/video/c794a2_d6ad9110e59a4b77941ded5246eda6cb/720p/mp4/file.mp4',
            poster: 'https://static.wixstatic.com/media/c794a2_d6ad9110e59a4b77941ded5246eda6cbf000.jpg/v1/fill/w_761,h_532,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/c794a2_d6ad9110e59a4b77941ded5246eda6cbf000.jpg',
            content: t('We have a team'),
            images: [
                'https://static.wixstatic.com/media/c794a2_a6f9b0c6611244bb83ad86baec33ceaa~mv2.png/v1/crop/x_5,y_0,w_236,h_193/fill/w_91,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Google_Cloud_logo_svg.png',
                'https://static.wixstatic.com/media/c794a2_767dc6eaa7c14e5b933582dac96ccbdd~mv2.png/v1/crop/x_0,y_216,w_1024,h_387/fill/w_152,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pngwing_com%20(3).png',
                'https://static.wixstatic.com/media/c794a2_51364d5aed944cfa9cc248a284b85712~mv2.png/v1/crop/x_7,y_0,w_884,h_113/fill/w_250,h_32,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Alibaba-Cloud.png',
                'https://static.wixstatic.com/media/c794a2_8300f35d07b84b8faf1f33ff13356bdc~mv2.png/v1/crop/x_0,y_0,w_425,h_299/fill/w_117,h_82,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c794a2_8300f35d07b84b8faf1f33ff13356bdc~mv2.png',
                require('~/assets/images/solution/aws.png'),
                'https://static.wixstatic.com/media/c794a2_28b7e902ddd54c2aa432ecc7918a209a~mv2.png/v1/fill/w_214,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IBM%20Cloud.png',
                'https://static.wixstatic.com/media/c794a2_82385deba5d144b6bc46f994602657b4~mv2.png/v1/crop/x_314,y_572,w_2387,h_866/fill/w_152,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Microsoft_Azure-Logo_wine.png',
            ],
            name: [
                'Google Cloud',
                'Oracle',
                'Alibaba Cloud',
                'Tencent Cloud',
                'AWS',
                'IBM Cloud',
                'Microsoft Azure',
            ]
        },
        {
            title: t('Big Data'),
            titleTech: t('tech data'),
            video: 'https://video.wixstatic.com/video/11062b_40d3bbdabcd3461abfe2a96c4d0219b0/720p/mp4/file.mp4',
            poster: 'https://static.wixstatic.com/media/11062b_40d3bbdabcd3461abfe2a96c4d0219b0f000.jpg/v1/fill/w_761,h_532,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/11062b_40d3bbdabcd3461abfe2a96c4d0219b0f000.jpg',
            content: t('We solve big data'),
            images: [
                'https://static.wixstatic.com/media/c794a2_a199d6d1269044009e26b43ddeb3b82f~mv2.png/v1/fill/w_127,h_76,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/hortonworks-icon.png',
                require('~/assets/images/solution/Vertica.png'),
                require('~/assets/images/solution/aws.png'),
                'https://static.wixstatic.com/media/c794a2_9e070f0f2fe34ca9a3ea420301e88a33~mv2.png/v1/crop/x_39,y_0,w_1241,h_332/fill/w_217,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1280px-Hadoop_logo_svg.png',
            ],
            name: [
                'Hortonworks',
                'Vertica',
                'Spark',
                'Hadoop',
            ]
        },
        {
            title: t('Internet of things'),
            titleTech: t('tech internet'),
            video: 'https://video.wixstatic.com/video/c794a2_c670a6a7ee3643e1a7c33ac6543b1b02/720p/mp4/file.mp4',
            poster: 'https://static.wixstatic.com/media/c794a2_c670a6a7ee3643e1a7c33ac6543b1b02f000.jpg/v1/fill/w_761,h_532,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/c794a2_c670a6a7ee3643e1a7c33ac6543b1b02f000.jpg',
            content: t('We are a complete'),
            images: [
                'https://static.wixstatic.com/media/c794a2_b3d09a81cbce47e2b1d4df93c3e6375c~mv2.png/v1/crop/x_6,y_0,w_872,h_881/fill/w_93,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/camera.png',
                'https://static.wixstatic.com/media/c794a2_9afd74f0bd5c44ac8e0f5522b5945817~mv2.png/v1/crop/x_0,y_0,w_783,h_297/fill/w_182,h_69,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/auto.png',
                'https://static.wixstatic.com/media/c794a2_d69b935992c3429185923e2aaf83b7b2~mv2.png/v1/crop/x_0,y_0,w_486,h_463/fill/w_105,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/sensor.png',
            ],
            name: [
                'Home Security',
                'Activity Tracker',
                'Automotive',
            ]
        },
        {
            title: t('Blockchain'),
            titleTech: t('tech blockchain'),
            video: 'https://video.wixstatic.com/video/c794a2_d7a966842d80429e8ae5fa3199ed9a45/720p/mp4/file.mp4',
            poster: 'https://static.wixstatic.com/media/c794a2_d7a966842d80429e8ae5fa3199ed9a45f000.jpg/v1/fill/w_761,h_532,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/c794a2_d7a966842d80429e8ae5fa3199ed9a45f000.jpg',
            content: t('We leverage blockchain technology'),
            images: [
                'https://static.wixstatic.com/media/c794a2_932a942746d441f1bcab3bc9f16e2fc8~mv2.png/v1/fill/w_115,h_105,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%205.png',
                'https://static.wixstatic.com/media/c794a2_1c960b90a36f40e4910c5d9325030dd5~mv2.png/v1/fill/w_109,h_97,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%206.png',
                'https://static.wixstatic.com/media/c794a2_6993b88780a54692bf3aa17d29cfe7e6~mv2.png/v1/crop/x_0,y_3,w_263,h_259/fill/w_101,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%204.png',
            ],
            name: [
                'Custom Blockchain',
                'Smart Contract',
                'NFT Marketplace',
            ]
        },
    ];

    useEffect(() => {
        if (pathname === '/web-and-mobile-application') {
            setIndexPage(0);
        } else if (pathname === '/data-analytics') {
            setIndexPage(1);
        } else if (pathname === '/business-intelligence') {
            setIndexPage(2);
        } else if (pathname === '/artificial-tntelligence') {
            setIndexPage(3);
        } else if (pathname === '/cloud-computing') {
            setIndexPage(4);
        } else if (pathname === '/big-data') {
            setIndexPage(5);
        } else if (pathname === '/internet-of-things') {
            setIndexPage(6);
        } else if (pathname === '/blockchain') {
            setIndexPage(7);
        }
    }, [pathname]);

    return (
        <div className={cx('solution')}>
            <div className={cx('solution__intro')}>
                <div className={cx('solution__intro-wraper')} style={{ position: 'absolute', maxWidth: '798px', left: '110px', bottom: ' 43px' }}>
                    <div className={cx('solution__intro__title')}>{data[indexPage].title}</div>
                    <div className={cx('solution__intro__description')}>{data[indexPage].content}</div>
                </div>
            </div>

            <div className={cx('solution__new')}>
                {/* <div className={cx('solution__new__top')}>
                    <div className={cx('solution__new__top__text')}>{data[indexPage].title}</div>
                    <div className={cx('solution__new__top__text-two')}>{data[indexPage].content}</div>
                </div> */}

                <div className={cx('solution__new__video')}>
                    {/* <video autoPlay muted loop>
                        <source  type="video/mp4"></source>
                    </video> */}
                    {window.innerWidth > 768 ? (
                        <video
                            crossOrigin="anonymous"
                            playSinline=""
                            preload="auto"
                            loop
                            tabIndex="-1"
                            autoPlay
                            muted
                            src={data[indexPage].video}
                            className='desktop-video'
                        ></video>
                    ) : (
                        <img style={{ width: '100%' }} src={data[indexPage].poster} alt="Mobile Image" className="mobile-image" />
                    )}

                </div>
            </div>

            <div className={cx('solution__new', 'solution__new--three')}>
                <div className={cx('solution__new__top')}>
                    <div className={cx('solution__new__top__text')}>
                        {data[indexPage].titleTech}
                    </div>
                </div>

                <div className={cx('solution__new__bottom')}>
                    {data[indexPage].images.map((item, index) => {
                        return (
                            <div className={cx('image-container')} key={index}>
                                <img src={item} alt={`Image ${index}`} />
                                <span class="icon-text">{data[indexPage].name[index]}</span>
                                
                                {/* <p>{data[indexPage].name[index]}</p> */}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default SolutionChild;
