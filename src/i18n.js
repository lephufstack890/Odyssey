import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            home: 'Home',
            solution: 'Solution',
            Misson: 'Misson',
            'Get started': 'Get started',
            'About us': 'About us',
            'Web and Mobile application': 'Web and Mobile application',
            'Data Analytics': 'Data Analytics',
            'Business Intelligence': 'Business Intelligence',
            'Artificial Intelligence': 'Artificial Intelligence',
            'Cloud Computing': 'Cloud Computing',
            'Big Data': 'Big Data',
            'Internet of things': 'Internet of things',
            Blockchain: 'Blockchain',
            'Transform Your World with Innovative Technology': 'Transform Your World with Innovative Technology',
            'We believe that technology':
                "We believe that technology can make the world a better place. That's why we commit to develop innovative, effective and reliable software solutions that help you transform your dream into reality.",
            'Learn more': 'Learn More',
        },
    },
    vn: {
        translation: {
            home: 'Trang chủ',
            solution: 'Giải pháp',
            Misson: 'Về sứ mệnh',
            'About us': 'Về chúng tôi',
            'Web and Mobile application': 'Ứng dụng di động và web',
            'Data Analytics': 'Phân tích dữ liệu',
            'Business Intelligence': 'Trí tuệ doanh nghiệp',
            'Artificial Intelligence': 'Trí tuệ nhân tạo',
            'Cloud Computing': 'Điện toán đám mây',
            'Big Data': 'Dữ liệu lớn',
            'Internet of things': 'Internet vạn vật',
            Blockchain: 'Blockchain',
            'Get started': 'Bắt đầu',
            'Transform Your World with Innovative Technology': 'Thay đổi thế giới của bạn bằng đổi mới công nghệ',
            'We believe that technology':
                'Chúng tôi tin rằng công nghệ có thể làm thế giới trở nên tốt đẹp hơn. Đó là lý do tại sao chúng tôi cam kết phát triển các giải pháp phần mềm mới hiệu quả và đáng tin cậy để giúp bạn biến ước mơ của mình thành hiện thực.',
            'Learn more': 'Xem Thêm',
        },
    },
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
