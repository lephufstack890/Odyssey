import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('main-page')}>
            <div className={cx('main-page__sectionOne')}>
                <video autoPlay muted loop>
                    <source
                        src="https://video.wixstatic.com/video/c794a2_553d56f3fda64a6bb01d8a7b545f8665/1080p/mp4/file.mp4"
                        type="video/mp4"
                    />
                </video>

                <div className={cx('main-page__sectionOne__content')}>
                    <div style={{ fontSize: '64px', marginBottom: '20px', lineHeight: '76px' }}>
                        Transform Your World with Innovative Technology
                    </div>
                    <div style={{ fontSize: '24px', marginBottom: '19px' }}>
                        We believe that technology can make the world a better place. That's why we commit to develop
                        innovative, effective and reliable software solutions that help you transform your dream into
                        reality.
                    </div>
                    <div>
                        <Link to={'/'}>Lean More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
