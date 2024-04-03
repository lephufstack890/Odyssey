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

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
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
    }, []);

    return (
        <div>
            <table className={cx('styled-table')}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Company</th>
                        <th>Phone</th>
                        <th>Job Title</th>
                        <th>Messenger</th>
                        <th>Created At</th>
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
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ListContactAdmin;
