// import classNames from 'classnames/bind';
// import styles from './ChangePassword.module.scss';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import axios from 'axios';

// const cx = classNames.bind(styles);

// function ChangePassword() {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//         name: '',
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Kiểm tra validation
//         if (!formData.email || !formData.password) {
//             alert('Vui lòng điền đầy đủ thông tin.');
//             return;
//         }

//         // Kiểm tra định dạng email
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(formData.email)) {
//             alert('Email không hợp lệ.');
//             return;
//         }

//         try {
//             // Gửi dữ liệu biểu mẫu qua email
//             const data = await axios.post('http://14.225.254.135:8000/api/register', formData);
//             // Đặt trạng thái hoặc thực hiện các hành động khác sau khi gửi email thành công
//             if (data.status === 200) {
//                 alert('đăng nhập thành công');
//             }
//         } catch (error) {
//             console.error('Error sending email:', error);
//         }
//     };

//     return (
//         <div className={cx('login')}>
//             <div className={cx('container', 'login__wrapper')} style={{ padding: '0px' }}>
//                 <form className={cx('login__form')} onSubmit={handleSubmit}>
//                     <div className={cx('login__form-group')}>
//                         <label>Name</label>
//                         <input
//                             name="name"
//                             type="text"
//                             placeholder="Enter your name"
//                             required
//                             value={formData.name}
//                             onChange={handleChange}
//                         />
//                     </div>

//                     <div className={cx('login__form-group')}>
//                         <label>Email</label>
//                         <input
//                             name="email"
//                             type="email"
//                             placeholder="Enter your email"
//                             required
//                             value={formData.email}
//                             onChange={handleChange}
//                         />
//                     </div>

//                     <div className={cx('login__form-group')}>
//                         <label>Password</label>
//                         <input
//                             name="password"
//                             type="password"
//                             placeholder="Enter your password"
//                             required
//                             value={formData.password}
//                             onChange={handleChange}
//                         />
//                     </div>

//                     <div className={cx('login__form-submit')}>
//                         <button>Đăng Ký</button>

//                         <Link to="/login">
//                             Bạn đã có tài khoản? <span>Đăng nhập</span>
//                         </Link>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default ChangePassword;
