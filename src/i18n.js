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
            'About us': 'About Us',
            'Web and Mobile application': 'Web and Mobile application',
            'tech application':
                'We stay at the forefront of technology to provide cutting-edge solutions for our clients',
            'tech analytics': 'We offer data analytics services that can help our clients grow their businesses',
            'tech bussiness':
                'We deliver our enterprise business inteligence solutions to help you make better decisions',
            'tech artificial': 'We offer AI solutions that will help you achieve your business objectives faster',
            'tech cloud': 'We offer scalable and secure cloud solutions tailored to your needs',
            'tech data': 'Our big data solutions are designed to help enterprises leverage the power of data',
            'tech internet':
                'We develop reliable IoT solutions that provide optimal support for the digitization of your business',
            'tech blockchain': 'Our blockchain solutions can help promote trust, transparency and efficiency',
            'Data Analytics': 'Data Analytics',
            'Business Intelligence': 'Business Intelligence',
            'Artificial Intelligence': 'Artificial Intelligence',
            'Cloud Computing': 'Cloud Computing',
            'Big Data': 'Big Data',
            'Internet of things': 'Internet of things',
            'Email sent successfully': 'Email sent successfully!',
            Blockchain: 'Blockchain',
            'Transform Your World with Innovative Technology': 'Transform Your World with Innovative Technology',
            'We believe that technology':
                "We believe that technology can make the world a better place. That's why we commit to develop innovative, effective and reliable software solutions that help you transform your dream into reality.",
            'Learn more': 'Learn More',
            address: '163/22 Huynh Van Banh, Ward 11, Phu Nhuan District, Ho Chi Minh City, Vietnam',
            '2021 Odyssey': '2021 Odyssey. All rights reserved.',
            contact: 'Contact us',
            'Stay Up to Date with Odyssey': 'Stay Up to Date with Odyssey',
            'Follow Us': 'Follow Us',
            'Our Solutions': 'Our Solutions',
            'Cooperate to innovate your company': 'Cooperate to innovate your company',
            'Explore how you can digitalize your business with Odyssey':
                'Explore how you can digitalize your business with Odyssey',
            'Our Mission: Making the world a better place': 'Our Mission: Making the world a better place',
            'We apply the modern software':
                'We apply the modern software development methodologies such as Waterfall, Agile, Scrum, Kanban, XP and so on to meet customer requirements and deliver the software with highest quality. Our track record is marked by the successful completion of many projects, each earning accolades and commendations from our valued clients. These accomplishments stand as a testament to our commitment to excellence and our unwavering dedication to delivering results that exceed expectations.',
            'Why Choose Odyssey': 'Why Choose Odyssey',
            'Our team comprises':
                'Our team comprises individuals who have undergone rigorous training and education at world-class universities. Our objective is to deliver creative and effective software solutions, enabling you to transform your aspirations into tangible outcomes.',
            'Are you ready to transform your business ?': 'Are you ready to transform your business ?',
            'We commit to help you': `We commit to help you achieve your goals. Whether you're looking to streamline your operations, improve customer engagement, or gain a competitive edge, we've got the tools and expertise you need to succeed.`,
            'Get Started': 'Get Started',
            'Innovative Software Solutions for a Better World': 'Innovative Software Solutions for a Better World',
            'We commit to integrate': `We commit to integrate with your ecosystem and providing reliable and scalable solutions that
        help you achieve your business goals. Our team of experts constantly strives to stay ahead of
        the curve and bring you the latest technology solutions that drive innovation and progress.`,
            'Innovative Solutions for Modern Businesses': 'Innovative Solutions for Modern Businesses',
            'We provide unprecedented': `We provide unprecedented velocity and impeccable reliability. Our innovative solutions are designed to help you stay ahead of the competition and achieve your goals. From cloud-based analytics to customized software applications, we've got the tools and expertise you need to succeed.`,
            'We create stunning websites': `We create stunning websites and mobile applications that will help your business stand out. With our innovative and creative web and mobile application solutions we help you build your brands. We provide to your customer awesome web experiences and offer excellent mobile application development services to bring your products to market on every device and platform.`,
            'Our data science team':
                'Our data science team is dedicated to providing you with the insights you need to make informed decisions. We use the latest technologies and techniques to analyze your data and help you identify opportunities for growth.',
            'We translate data into':
                'We translate data into actionable insights and informed decisions with reliable business intelligence solutions. You can automate your manual and time-consuming work to make smarter business decisions. With our tools and support, you will stay ahead of the competition and make informed decisions.',
            'We specialize in artificial':
                'We specialize in artificial intelligence (AI), machine learning (ML), and generative AI solutions to help you transform your business. Our AI/ML and insights solutions are technology agnostic and designed keeping your business goals in mind. We can help you put AI into action now by focusing on the areas of your business where AI can deliver real benefits.',
            'We have a team':
                'We have a team of professionals that build all kinds of cloud-based automated solutions that offer fast, smooth, and secure migration of your business, client-centric, and enterprise apps to the cloud. We provide cost-effective, flexible, and scalable cloud computing solutions. Our cloud computing solutions free up space on your system, reduce unwanted hardware, save you money and enhance mobility. ',
            'We solve big data':
                'We solve big data challenges for clients to help them become a truly digital business. Our big data services encompass big data strategy, real time big data processing services, machine learning, data platform management, and analytics solutions. We help you implement a comprehensive big data strategy and shine the spotlight on big data analytics solutions.',
            'We are a complete':
                'We are a complete IoT solutions provider focused on the remote accessibility and control of any device. We can assist with electronic component designing and development through embedded software development and a highly scalable integration platform.',
            'We leverage blockchain technology':
                'We leverage blockchain technology for solutions that make company operations more efficient. You can focus on high-level business concerns while we handle the nitty-gritty of implementing your blockchain project with speed and security. You can increase your revenue and prepare your organization for the digital economy of the future with our blockchain solutions.',
            'Our blockchain solutions can help promote trust':
                'Our blockchain solutions can help promote trust, transparency and efficiency',
            '​Odyssey consists of enthusiastic': `​Odyssey consists of enthusiastic young individuals in software development committed to incorporating new technological progressions into daily life, aiming to enhance the world. Our objective is to deliver creative and effective software solutions, enabling you to transform your aspirations into tangible outcomes.`,
            'Our Team': 'Our Team',
            'Our Partners': 'Our Partners',
            'Our partners stand':
                'Our partners stand as the cornerstone of our collaborations, comprising some of the most distinguished names in the global technology sphere and prestigious universities known for their academic excellence. Through these invaluable alliances, we foster innovative synergies, drawing from the expertise of top-tier technological enterprises and the intellectual prowess of esteemed academic institutions',
            'Our Clients': 'Our Clients',
            'Our client comprises':
                'Our client comprises a wide array of organizations and businesses operating across multiple sectors within Vietnam. We serve entities spanning various scales, from small and medium enterprises to larger corporations, each contributing uniquely to the vibrant landscape of Vietnam economic activities.',
            'Our Mission': 'Our Mission',
            'We are dedicated':
                'We are dedicated to delivering optimal advantages to your organization or company while maintaining cost-effectiveness. Our commitment lies in empowering your company to operate with heightened efficiency, ensuring a seamless and enhanced customer experience. We prioritize the alignment of our services with your objectives, tailoring solutions that not only optimize operations but also elevate customer satisfaction.',
            'We understand what you need': 'We understand what you need',
            'We understand that every business': `We understand that every business is unique. That's why we offer customized software applications tailored to your specific needs. Whether you're looking to streamline your operations or improve customer engagement, we've got you covered. We commit to provide exceptional customer service from start to finish. Our team of experts is available to answer your questions and provide support whenever you need it.`,
            'At Odyssey, we are':
                'At Odyssey, we are proud to have an experienced leadership team that brings a wealth of knowledge and expertise to our company. Our leaders have a proven track record of success in the technology industry and are dedicated to driving our company forward. We believe that our people are our greatest asset, and we are committed to creating a supportive and inclusive work environment that fosters creativity and innovation. Our team is made up of talented developers, designers, and project managers who work together to deliver exceptional results.',
            'We are ready to help you': 'We are ready to help you',
            'Transform Your Business with Odyssey': 'Transform Your Business with Odyssey',
            'Let’s give your business': 'Let’s give your business what it needs to grow.',
            'At Odyssey, we are dedicated':
                'At Odyssey, we are dedicated to helping your business grow. Contact us today to learn more about how our software solutions can help you achieve your goals.',
            'First name': 'First name',
            'Last name': 'Last name',
            Company: 'Company',
            Phone: 'Phone',
            'Job Title': 'Job Title',
            'Your Messengers': 'Your Messengers',
            profile: 'Odyssey profile',
            'Digital Transformation Services': 'Digital Transformation Services that Help Businesses Champion Change',
            'Exciting IT Outsourcing': 'Exciting IT Outsourcing Services We Offer',
            'IT Consulting Build': 'IT Consulting Build a Roadmap to Better Business',
            'We offer a wide range spectrum':
                'We offer a wide range spectrum of services to help organisations work better. We can combine any of our products and services to create a package that’s tailored to your business. This removes the complexity and unnecessary cost of getting you where you want to be – whatever your starting point.',
            'Our digital transformation service':
                'Our digital transformation service helps businesses adapt to modern technology and helps you with your software development projects. Our company can guide your business in an area of development',
            'Delegate your IT-related functions to':
                'Delegate your IT-related functions to us who will organize corresponding processes as well as deliver necessary competences & software outsourcing services. We will help you f ill in competence gaps, scale your IT capacity',
            'Our IT consulting services provide':
                'Our IT consulting services provide access to experienced consultants for specialized projects and strategic guidance to foster business expansion. We help businesses utilize cutting-edge technologies and optimal methodologies to achieve a competitive advantage in the market.',
            'We believe every business':
                'We believe every business is unique, with its own set of challenges, opportunities, and goals- strongly rejecting the one-size-fits-all approach. Our digital transformation strategies are designed to work from day one and continue to evolve with your business needs. With a focus on leveraging the latest technology, industry best practices, and a deep understanding of your business, we help you navigate the complex digital roadmap and transform your organization to meet the challenges of tomorrow.',
            'Outsourced IT services':
                'Outsourced IT services enable you to collaborate with the best experts without making large upfront time and financial investments. Outsourcing enables your company to count on more flexible solutions. In an ever-evolving technological landscape, businesses require dynamic and tailored solutions. We pride ourselves on offering a diverse range of IT outsourcing services, each designed to address specific challenges and drive operational efficiency.',
            'With a team steeped in deep':
                "With a team steeped in deep tech expertise, we're more than just consultants. We're your partners in shaping a future-ready IT roadmap. Our approach is tailored, ensuring your business not only adapts but thrives. From digitizing operations and optimizing your software portfolio to harnessing the power of mobile solutions, we're here to elevate your journey every step of the way. Likewise, our business consultants help you implement processes and systems that support long-term business advantage.",
            'Our services will help': 'Our services will help you grow your bussiness',
            'At Odyssey, we understand':
                'At Odyssey, we understand the importance of digital transformation in today’s fast-moving world. That’s why we specialize in offering top-tier services that are known for their reliability and precision. Our team of experts will work with your company to provide a customized plan that fits your specific needs and will take your business to the next level.',
            'Our digital business transformation services':
                'Our digital business transformation services drive impactful benefits by optimizing processes, automating systems, and propelling innovation. As a renowned digital transformation services company, we utilize a forward-thinking approach that not only addresses your immediate digital concerns but also guides you in making well-informed, future-proof decisions for your business.',
            'Outsourced IT services enable you':
                'Outsourced IT services enable you to collaborate with the best experts without making large upfront time and financial investments. Outsourcing enables your company to count on more flexible solutions. In an ever-evolving technological landscape, businesses require dynamic and tailored solutions. We pride ourselves on offering a diverse range of IT outsourcing services, each designed to address specific challenges and drive operational efficiency.',
            'We are committed to delivering':
                'We are committed to delivering world-class technology solutions for complex business opportunities and challenges, leveraging from our five most compelling strengths of Speed, Scale, Global Presence, Quality and Compliance. Our Consulting Services help you build a roadmap to better business outcomes by optimizing and transforming your existing IT environment.',
        },
    },
    vn: {
        translation: {
            home: 'Trang chủ',
            profile: 'Hồ sơ Odyssey',
            solution: 'Giải pháp',
            Misson: 'Sứ mệnh',
            'About us': 'Chúng tôi',
            'Web and Mobile application': 'Ứng dụng di động và web',
            'tech application':
                'Chúng tôi đi đầu về công nghệ để cung cấp những giải pháp tiên tiến nhất cho khách hàng',
            'tech analytics':
                'Chúng tôi cung cấp dịch vụ dữ liệu và phân tích để hỗ trợ khách hàng mở rộng hoạt động kinh doanh của họ',
            'tech bussiness':
                'Chúng tôi cung cấp các giải pháp trí tuệ doanh nghiệp để giúp bạn đưa ra quyết định tốt hơn',
            'tech artificial': 'Chúng tôi cung cấp các giải pháp AI giúp bạn đạt mục tiêu kinh doanh nhanh hơn',
            'tech cloud':
                'Chúng tôi cung cấp các giải pháp đám mây linh hoạt và an toàn, được tùy chỉnh theo nhu cầu cụ thể của bạn',
            'tech data':
                'Các giải pháp dữ liệu lớn của chúng tôi được thiết kế để giúp doanh nghiệp tận dụng sức mạnh của dữ liệu',
            'tech internet':
                'Chúng tôi phát triển các giải pháp Internet vạn vật đáng tin cậy, cung cấp hỗ trợ tối ưu cho quá trình số hóa doanh nghiệp bạn',
            'tech blockchain':
                'Các giải pháp blockchain của chúng tôi thúc đẩy niềm tin, tăng tính minh bạch và hiệu quả',
            'Data Analytics': 'Phân tích dữ liệu',
            'Business Intelligence': 'Trí tuệ doanh nghiệp',
            'Artificial Intelligence': 'Trí tuệ nhân tạo',
            'Cloud Computing': 'Điện toán đám mây',
            'Big Data': 'Dữ liệu lớn',
            'Internet of things': 'Internet vạn vật',
            'Email sent successfully': 'Gửi mail thành công!',
            Blockchain: 'Blockchain',
            'Get started': 'Bắt đầu',
            'Transform Your World with Innovative Technology': 'Thay đổi thế giới của bạn bằng đổi mới công nghệ',
            'We believe that technology':
                'Chúng tôi tin rằng công nghệ có thể làm thế giới trở nên tốt đẹp hơn. Đó là lý do tại sao chúng tôi cam kết phát triển các giải pháp phần mềm mới hiệu quả và đáng tin cậy để giúp bạn biến ước mơ của mình thành hiện thực.',
            'Learn more': 'Xem Thêm',
            address: '163/22 Huỳnh Văn Bánh, Phường 11, Quận Phú Nhuận, Thành phố Hồ Chí Minh, Việt Nam',
            '2021 Odyssey': '2021 Odyssey. Đã đăng ký bản quyền.',
            contact: 'Liên hệ',
            'Stay Up to Date with Odyssey': 'Cập Nhật Thông Tin với Odyssey',
            'Follow Us': 'Theo dõi chúng tôi',
            'Our Solutions': 'Giải pháp của chúng tôi',
            'Cooperate to innovate your company': 'Hợp tác để đổi mới công ty của bạn',
            'Explore how you can digitalize your business with Odyssey':
                'Khám phá cách bạn có thể số hóa doanh nghiệp của mình với Odyssey',
            'Our Mission: Making the world a better place': 'Sứ mệnh của chúng tôi: Làm thế giới tốt đẹp hơn',
            'We apply the modern software':
                'Chúng tôi áp dụng các phương pháp phát triển phần mềm hiện đại như Waterfall, Agile, Scrum, Kanban, XP và các phương pháp khác để đáp ứng yêu cầu của khách hàng và cung cấp phần mềm với chất lượng cao nhất. Lịch sử hoạt động của chúng tôi được đánh dấu bởi việc hoàn thành nhiều dự án, mỗi dự án đều nhận được sự khen ngợi và ghi nhận từ khách hàng. Những thành tựu này là minh chứng cho sự xuất sắc và tận tâm của chúng tôi trong việc thực hiện cam kết của mình nhằm mang đến cho khách hàng kết quả vượt mong đợi.',
            'Why Choose Odyssey': 'Tại sao chọn Odyssey',
            'Our team comprises':
                'Đội ngũ của chúng tôi gồm những người đã được đào tạo tại các trường đại học đẳng cấp thế giới. Mục tiêu của chúng tôi là cung cấp các giải pháp phần mềm sáng tạo và hiệu quả, giúp bạn biến ước mơ của mình thành hiện thực.',
            'Are you ready to transform your business ?': 'Bạn đã sẵn sàng để chuyển đổi doanh nghiệp của mình?',
            'We commit to help you': `Chúng tôi cam kết giúp bạn đạt mục tiêu của mình. Cho dù bạn đang tìm cách tối ưu hóa hoạt động, cải thiện quan hệ với khách hàng hay muốn tạo ra lợi thế cạnh tranh, chúng tôi có đủ năng lực để giúp bạn thành công.`,
            'Get Started': 'Liên hệ',
            'Innovative Software Solutions for a Better World': 'Giải pháp phần mềm mới cho một thế giới tốt đẹp hơn',
            'We commit to integrate':
                'Chúng tôi cam kết cung cấp các giải pháp đáng tin cậy và có khả năng mở rộng giúp bạn đạt được mục tiêu kinh doanh của mình. Đội ngũ chuyên gia của chúng tôi luôn nỗ lực để dẫn đầu và mang đến cho bạn những giải pháp công nghệ mới nhất thúc đẩy sự đổi mới và tiến bộ.',
            'Innovative Solutions for Modern Businesses': 'Giải pháp đổi mới cho các doanh nghiệp hiện đại',
            'We provide unprecedented': `
            Chúng tôi thực hiện những giải pháp của mình một cách nhanh chóng và đáng tin cậy. Những giải pháp của chúng tôi được thiết kế để giúp bạn luôn dẫn đầu khi cạnh tranh với đối thủ và đạt được mục tiêu của mình. Từ phân tích dữ liệu trên nền tảng điện toán đám mây đến các ứng dụng phần mềm có thể tùy chỉnh, chúng tôi có đủ công cụ và chuyên môn để giúp bạn thành công.`,
            'We create stunning websites': `Chúng tôi tạo ra những trang web và ứng dụng di động đẹp mắt giúp doanh nghiệp của bạn vượt trội. Với những giải pháp sáng tạo và đổi mới trong việc phát triển ứng dụng di động và web, chúng tôi giúp bạn xây dựng thương hiệu của mình. Chúng tôi cung cấp dịch vụ phát triển ứng dụng di động xuất sắc nhằm mang đến trải nghiệm tuyệt vời cho khách hàng của bạn để quảng bá sản phẩm của bạn trên mọi thiết bị và nền tảng.`,
            'Our data science team':
                'Đội ngũ khoa học dữ liệu của chúng tôi làm việc hết lòng để cung cấp cho bạn hiểu biết sâu sắc bản chất vấn đề từ đó giúp bạn đưa ra quyết định sáng suốt. Chúng tôi sử dụng các công nghệ và kỹ thuật mới nhất để phân tích dữ liệu của bạn nhằm giúp bạn nhận ra cơ hội phát triển. Chúng tôi cung cấp dịch vụ dữ liệu và phân tích để hỗ trợ khách hàng mở rộng hoạt động kinh doanh của họ.',
            'We translate data into':
                'Chúng tôi tạo ra những trang web và ứng dụng di động đẹp mắt giúp doanh nghiệp của bạn vượt trội. Với những giải pháp sáng tạo và đổi mới trong việc phát triển ứng dụng di động và web, chúng tôi giúp bạn xây dựng thương hiệu của mình. Chúng tôi cung cấp dịch vụ phát triển ứng dụng di động xuất sắc nhằm mang đến trải nghiệm tuyệt vời cho khách hàng của bạn để quảng bá sản phẩm của bạn trên mọi thiết bị và nền tảng.',
            'We specialize in artificial':
                'Chúng tôi chuyên sâu về trí tuệ nhân tạo (AI), học máy (ML) và các giải pháp AI tạo sinh (generative AI) để giúp bạn chuyển đổi số doanh nghiệp của mình. Các giải pháp của chúng tôi không phụ thuộc vào công nghệ cụ thể và được thiết kế để đáp ứng mục tiêu kinh doanh của bạn. Chúng tôi có thể giúp bạn triển khai AI ngay bây giờ bằng cách tập trung vào lĩnh vực kinh doanh của bạn mà AI có thể mang lại lợi ích thực sự.',
            'We have a team':
                'Chúng tôi có đội ngũ chuyên gia xây dựng các giải pháp tự động dựa trên điện toán đám mây cho mọi loại ứng dụng. Chúng tôi triển khai ứng dụng của khách hàng và doanh nghiệp lên nền tảng đám mây nhanh chóng, thông suốt và an toàn. Chúng tôi cung cấp các giải pháp điện toán đám mây tiết kiệm, linh hoạt và có khả năng mở rộng. Các giải pháp điện toán đám mây của chúng tôi giúp giải phóng tài nguyên trên hệ thống của bạn, giảm thiểu phần cứng không cần thiết, tiết kiệm chi phí và nâng cao tính di động.',
            'We solve big data':
                'Chúng tôi giải quyết các thách thức về dữ liệu lớn cho khách hàng để giúp họ thật sự trở thành doanh nghiệp số. Dịch vụ dữ liệu lớn của chúng tôi bao gồm chiến lược dữ liệu lớn, dịch vụ xử lý dữ liệu lớn thời gian thực, học máy, quản lý nền tảng dữ liệu và các giải pháp phân tích dữ liệu. Chúng tôi giúp bạn triển khai chiến lược dữ liệu lớn toàn diện và tập trung vào các giải pháp phân tích dữ liệu lớn.',
            'We are a complete':
                'Chúng tôi là một nhà cung cấp giải pháp Internet vạn vật (Internet of things) toàn diện tập trung vào khả năng truy cập và kiểm soát từ xa mọi thiết bị. Chúng tôi có thể hỗ trợ thiết kế và phát triển linh kiện điện tử thông qua việc phát triển phần mềm nhúng và cung cấp một nền tảng tích hợp có khả năng mở rộng cao.',
            'We leverage blockchain technology':
                'Chúng tôi tận dụng công nghệ blockchain để tạo ra các giải pháp làm cho hoạt động của công ty hiệu quả hơn. Bạn có thể tập trung vào những vấn đề kinh doanh trong khi chúng tôi xử lý các chi tiết cụ thể của việc triển khai dự án blockchain của bạn nhanh chóng và bảo mật. Bạn có thể tăng doanh thu và chuẩn bị cho nền kinh tế số tương lai với các giải pháp blockchain của chúng tôi.',
            'Our blockchain solutions can help promote trust':
                'Các giải pháp blockchain của chúng tôi thúc đẩy niềm tin, tăng tính minh bạch và hiệu quả',
            '​Odyssey consists of enthusiastic':
                'Odyssey gồm những người trẻ đầy nhiệt huyết trong lĩnh vực phát triển phần mềm, cam kết tích hợp các tiến bộ công nghệ mới vào cuộc sống hàng ngày nhằm làm cho thế giới tốt đẹp hơn. Mục tiêu của chúng tôi là cung cấp các giải pháp phần mềm sáng tạo và hiệu quả, giúp bạn biến ước mơ thành hiện thực.',
            'Our Team': 'Đội ngũ chúng tôi',
            'Our Partners': 'Đối tác của chúng tôi',
            'Our partners stand':
                'Đối tác của chúng tôi bao gồm những tên tuổi đáng chú ý nhất trong lĩnh vực công nghệ toàn cầu và các trường đại học danh tiếng xuất sắc trong học thuật. Qua những liên kết quý báu này, chúng tôi nhận được sự hỗ trợ từ chuyên môn của các doanh nghiệp công nghệ hàng đầu và sức mạnh trí tuệ của các cơ sở giáo dục uy tín.',
            'Our Clients': 'Khách hàng của chúng tôi',
            'Our client comprises':
                'Khách hàng của chúng tôi gồm các tổ chức và doanh nghiệp hoạt động trong nhiều lĩnh vực khác nhau tại Việt Nam. Chúng tôi phục vụ các đơn vị với quy mô đa dạng, từ doanh nghiệp nhỏ và vừa đến các tập đoàn lớn trong bối cảnh sôi động của nền kinh tế Việt Nam.',
            'Our Mission': 'Sứ mệnh của chúng tôi',
            'We are dedicated':
                'Chúng tôi mong muốn mang lại lợi ích tối đa cho tổ chức và công ty của bạn với chi phí tối thiểu. Chúng tôi cam kết tăng cường khả năng vận hành của công ty bạn một cách hiệu quả, đảm bảo nâng cao trải nghiệm khách hàng. Chúng tôi sẵn sàng điều chỉnh dịch vụ của mình với mục tiêu tạo ra các giải pháp không chỉ tối ưu hóa hoạt động mà còn nâng cao sự hài lòng của khách hàng.',
            'We understand what you need': 'Chúng tôi hiểu những gì bạn cần',
            'We understand that every business':
                'Chúng tôi hiểu rằng mỗi doanh nghiệp đều là duy nhất. Đó là lý do tại sao chúng tôi cung cấp các ứng dụng phần mềm được thiết kế đặc biệt cho nhu cầu cụ thể của bạn. Cho dù bạn muốn tối ưu hóa hoạt động hay cải thiện quan hệ với khách hàng, chúng tôi có đủ kỹ năng để đáp ứng. Chúng tôi cam kết cung cấp dịch vụ khách hàng tốt nhất với đội ngũ chuyên gia luôn sẵn sàng trả lời bất cứ câu hỏi nào của bạn và hỗ trợ bất cứ khi nào bạn cần.',
            'At Odyssey, we are':
                'Tại Odyssey, chúng tôi tự hào có một đội ngũ lãnh đạo giàu kinh nghiệm mang đến cho công ty chúng tôi khả năng quản lý tốt. Lãnh đạo của công ty từng đạt được nhiều thành công trong lĩnh vực công nghệ thông tin và không ngừng thúc đẩy sự phát triển của công ty. Chúng tôi tin rằng con người là tài sản quý báu nhất của Odyssey do đó chúng tôi cam kết tạo ra một môi trường làm việc hỗ trợ và thúc đẩy sự sáng tạo và đổi mới. Đội ngũ của chúng tôi bao gồm những nhà phát triển, nhà thiết kế và quản lý dự án tài năng cùng nhau làm việc để mang lại kết quả xuất sắc.',
            'We are ready to help you': 'Chúng tôi sẵn sàng giúp đỡ bạn',
            'Transform Your Business with Odyssey': 'Chuyển đổi doanh nghiệp của bạn cùng Odyssey',
            'Let’s give your business': 'Hãy cung cấp cho doanh nghiệp của bạn những gì cần để phát triển.',
            'At Odyssey, we are dedicated':
                'Chúng tôi cam kết hỗ trợ doanh nghiệp bạn phát triển. Hãy liên hệ với chúng tôi ngay hôm nay để tìm hiểu thêm về giải pháp phần mềm của chúng tôi nhằm giúp bạn đạt được mục tiêu của mình.',
            'First name': 'Tên',
            'Last name': 'Họ',
            Company: 'Công ty',
            Phone: 'Số điện thoại',
            'Job Title': 'Chức danh',
            'Your Messengers': 'Lời nhắn của bạn',
            'Ours Services': 'Dịch vụ của chúng tôi',
            'Digital Transformation': 'Chuyển đổi kỹ thuật số',
            Outsourcing: 'Gia công phần mềm',
            'IT consulting': 'Tư vấn CNTT',
            'More Info': 'Thông tin thêm',
            Services: 'Những dịch vụ',
            More: 'Hơn',
            'Digital Transformation Services': 'Dịch vụ chuyển đổi kỹ thuật số giúp doanh nghiệp thay đổi thành công',
            'Exciting IT Outsourcing': 'Dịch vụ gia công CNTT thú vị mà chúng tôi cung cấp',
            'IT Consulting Build': 'Tư vấn CNTT Xây dựng lộ trình để kinh doanh tốt hơn',
            'We offer a wide range spectrum':
                'Chúng tôi cung cấp nhiều loại dịch vụ để giúp các tổ chức hoạt động tốt hơn. Chúng tôi có thể kết hợp bất kỳ sản phẩm và dịch vụ nào của mình để tạo ra một gói phù hợp với doanh nghiệp của bạn. Điều này loại bỏ sự phức tạp và chi phí không cần thiết để đưa bạn đến nơi bạn muốn - bất kể điểm xuất phát của bạn là gì.',
            'We believe every business':
                'Chúng tôi tin rằng mỗi doanh nghiệp là duy nhất, có những thách thức, cơ hội và mục tiêu riêng - phản đối mạnh mẽ cách tiếp cận một quy mô phù hợp cho tất cả. Các chiến lược chuyển đổi kỹ thuật số của chúng tôi được thiết kế để hoạt động ngay từ ngày đầu tiên và tiếp tục phát triển theo nhu cầu kinh doanh của bạn. Với trọng tâm là tận dụng công nghệ mới nhất, các phương pháp hay nhất trong ngành và sự hiểu biết sâu sắc về doanh nghiệp của bạn, chúng tôi giúp bạn điều hướng lộ trình kỹ thuật số phức tạp và chuyển đổi tổ chức của bạn để đáp ứng những thách thức trong tương lai.',
            'Outsourced IT services':
                'Dịch vụ CNTT thuê ngoài cho phép bạn cộng tác với các chuyên gia giỏi nhất mà không cần đầu tư tài chính và thời gian trả trước lớn. Gia công phần mềm cho phép công ty của bạn tin cậy vào các giải pháp linh hoạt hơn. Trong bối cảnh công nghệ không ngừng phát triển, các doanh nghiệp cần có các giải pháp năng động và phù hợp. Chúng tôi tự hào cung cấp nhiều dịch vụ gia công CNTT đa dạng, mỗi dịch vụ được thiết kế để giải quyết những thách thức cụ thể và thúc đẩy hiệu quả hoạt động.',
            'With a team steeped in deep':
                'Với đội ngũ có chuyên môn sâu về công nghệ, chúng tôi không chỉ đóng vai trò là nhà tư vấn. Chúng tôi là đối tác của bạn trong việc định hình lộ trình CNTT sẵn sàng cho tương lai. Cách tiếp cận của chúng tôi được điều chỉnh phù hợp, đảm bảo doanh nghiệp của bạn không chỉ thích ứng mà còn phát triển. Từ số hóa các hoạt động và tối ưu hóa danh mục phần mềm của bạn đến khai thác sức mạnh của các giải pháp di động, chúng tôi sẵn sàng nâng tầm hành trình của bạn trên từng bước đi. Tương tự như vậy, các chuyên gia tư vấn kinh doanh của chúng tôi sẽ giúp bạn triển khai các quy trình và hệ thống hỗ trợ lợi thế kinh doanh lâu dài.',
            'Our digital transformation service':
                'Dịch vụ chuyển đổi kỹ thuật số của chúng tôi giúp doanh nghiệp thích ứng với công nghệ hiện đại và hỗ trợ bạn thực hiện các dự án phát triển phần mềm. Công ty chúng tôi có thể hướng dẫn doanh nghiệp của bạn trong một lĩnh vực phát triển',
            'Delegate your IT-related functions to':
                'Giao các chức năng liên quan đến CNTT của bạn cho chúng tôi, những người sẽ tổ chức các quy trình tương ứng cũng như cung cấp các dịch vụ gia công phần mềm và năng lực cần thiết. Chúng tôi sẽ giúp bạn lấp đầy những khoảng trống về năng lực, mở rộng năng lực CNTT của bạn',
            'Our IT consulting services provide':
                'Dịch vụ tư vấn CNTT của chúng tôi cung cấp cơ hội tiếp cận với các chuyên gia tư vấn giàu kinh nghiệm cho các dự án chuyên ngành và hướng dẫn chiến lược để thúc đẩy mở rộng kinh doanh. Chúng tôi giúp doanh nghiệp sử dụng các công nghệ tiên tiến và phương pháp tối ưu để đạt được lợi thế cạnh tranh trên thị trường',
            'Our services will help': 'Dịch vụ của chúng tôi sẽ giúp bạn phát triển doanh nghiệp của mình',
            'Digital transformation': 'Chuyển đổi kỹ thuật số',
            'At Odyssey, we understand':
                'Tại Odyssey, chúng tôi hiểu tầm quan trọng của chuyển đổi kỹ thuật số trong thế giới chuyển động nhanh ngày nay. Đó là lý do tại sao chúng tôi chuyên cung cấp các dịch vụ hàng đầu nổi tiếng về độ tin cậy và độ chính xác. Đội ngũ chuyên gia của chúng tôi sẽ làm việc với công ty của bạn để cung cấp một kế hoạch tùy chỉnh phù hợp với nhu cầu cụ thể của bạn và sẽ đưa doanh nghiệp của bạn lên một tầm cao mới.',
            'Our digital business transformation services':
                'Các dịch vụ chuyển đổi kinh doanh kỹ thuật số của chúng tôi mang lại lợi ích to lớn bằng cách tối ưu hóa quy trình, tự động hóa hệ thống và thúc đẩy đổi mới. Là một công ty dịch vụ chuyển đổi kỹ thuật số nổi tiếng, chúng tôi sử dụng phương pháp tiếp cận có tư duy tiến bộ, không chỉ giải quyết các mối quan tâm kỹ thuật số trước mắt của bạn mà còn hướng dẫn bạn đưa ra các quyết định sáng suốt, phù hợp với tương lai cho doanh nghiệp của mình.',
            'Outsourced IT services enable you':
                'Dịch vụ CNTT thuê ngoài cho phép bạn cộng tác với các chuyên gia giỏi nhất mà không cần đầu tư tài chính và thời gian trả trước lớn. Gia công phần mềm cho phép công ty của bạn tin cậy vào các giải pháp linh hoạt hơn. Trong bối cảnh công nghệ không ngừng phát triển, các doanh nghiệp cần có các giải pháp năng động và phù hợp. Chúng tôi tự hào cung cấp nhiều dịch vụ gia công CNTT đa dạng, mỗi dịch vụ được thiết kế để giải quyết những thách thức cụ thể và thúc đẩy hiệu quả hoạt động.',
            'We are committed to delivering':
                'Chúng tôi cam kết cung cấp các giải pháp công nghệ đẳng cấp thế giới cho các cơ hội và thách thức kinh doanh phức tạp, tận dụng năm thế mạnh hấp dẫn nhất của chúng tôi là Tốc độ, Quy mô, Hiện diện toàn cầu, Chất lượng và Tuân thủ. Dịch vụ tư vấn của chúng tôi giúp bạn xây dựng lộ trình đạt được kết quả kinh doanh tốt hơn bằng cách tối ưu hóa và chuyển đổi môi trường CNTT hiện tại của bạn.',
        },
    },
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
