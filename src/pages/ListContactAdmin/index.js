import classNames from 'classnames/bind';
import styles from './ListContactAdmin.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import GlobalStateContext from '~/GlobalStateContext ';

const cx = classNames.bind(styles);

function ListContactAdmin() {
    const [listContact, setListContact] = useState([]);
    const { token, setToken } = useContext(GlobalStateContext);
    const baseToken = localStorage.getItem('access_token');

    useEffect(() => {
        fetchListContact();
    }, []); // Gọi một lần duy nhất khi component được render

    const fetchListContact = () => {
        axios
            .get('http://14.225.254.135:8000/api/admin/contact', {
                headers: {
                    Authorization: `Bearer ${token || baseToken}`,
                },
            })
            .then((response) => {
                setListContact(response.data.data);
            })
            .catch((error) => {
                // Xử lý lỗi
                console.error('Error fetching data:', error);
            });
    };

    const handleDelete = (id) => {
        const confirmDelete = window.confirm(`Bạn có muốn xóa trường có mã ${id} không?`);
        if (!confirmDelete) {
            return;
        }

        axios
            .delete(`http://14.225.254.135:8000/api/admin/contact/${id}`, {
                headers: {
                    Authorization: `Bearer ${token || baseToken}`,
                },
            })
            .then((response) => {
                alert('Xóa thành công');
                // Sau khi xóa thành công, gọi lại API GET để cập nhật danh sách
                fetchListContact();
            })
            .catch((error) => {
                // Xử lý lỗi
                console.error('Error fetching data:', error);
            });
    };

    return (
        <div>
            <table className={cx('styled-table')}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Họ</th>
                        <th>Email</th>
                        <th>Công ty</th>
                        <th>Điện thoại</th>
                        <th>Tên Công Việc</th>
                        <th>Tin nhắn</th>
                        <th>Ngày tạo</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {listContact?.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <th>{index + 1}</th>
                                <th>{item.first_name}</th>
                                <th>{item.last_name}</th>
                                <th>{item.email}</th>
                                <th>{item.company}</th>
                                <th>{item.phone}</th>
                                <th>{item.job_title}</th>
                                <th>{item.yours_messenger}</th>
                                <th>{item.created_at}</th>
                                <th style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <button
                                        className={cx('a1')}
                                        onClick={() => {
                                            handleDelete(item.id);
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                            />
                                        </svg>
                                    </button>
                                </th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ListContactAdmin;
