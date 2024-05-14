import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './ChangeMailConfig.module.scss';
import GlobalStateContext from '~/GlobalStateContext ';
import API_URL from '~/config';

const cx = classNames.bind(styles);

function ChangeMailConfig() {
    const { token } = useContext(GlobalStateContext);

    const [formData, setFormData] = useState({
        MAIL_DRIVER: '',
        MAIL_HOST: '',
        MAIL_PORT: '',
        MAIL_USERNAME: '',
        MAIL_PASSWORD: '',
        MAIL_ENCRYPTION: '',
        MAIL_FROM_ADDRESS: '',
        MAIL_FROM_NAME: '',
    });

    const [editing, setEditing] = useState(false); // Trạng thái của việc chỉnh sửa
    const [adding, setAdding] = useState(false);

    const [mailList, setMailList] = useState([]); // Danh sách email

    const [newMail, setNewMail] = useState({
        name: '',
        email: '',
    });

    useEffect(() => {
        // Fetch current mail config when component mounts
        getMailConfig();
        fetchMailList(); // Fetch mail list
    }, []);

    const getMailConfig = async () => {
        try {
            const response = await axios.get(`${API_URL}/admin/mail-config`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setFormData(response.data);
        } catch (error) {
            console.error('Error fetching mail config:', error);
        }
    };

    const fetchMailList = async () => {
        try {
            const response = await axios.get(`${API_URL}/mail-to`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setMailList(response.data.data);
        } catch (error) {
            console.error('Error fetching mail list:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send form data to update mail config
            await axios.post(`${API_URL}/admin/mail-config`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            alert('Mail config updated successfully');
            setEditing(false); // Kết thúc chỉnh sửa khi gửi thành công
        } catch (error) {
            alert(`Error updating mail config: ${error.response.data.message}`);
        }
    };

    const handleAddMail = async () => {
        try {
            await axios.post(`${API_URL}/mail-to`, newMail, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            alert('New mail added successfully');
            setNewMail({
                name: '',
                email: '',
            });
            setAdding(false);
            fetchMailList(); // Fetch updated mail list
        } catch (error) {
            alert(`Error adding new mail: ${error.response.data.message}`);
        }
    };

    const handleDeleteMail = async (id) => {
        try {
            await axios.delete(`${API_URL}/mail-to/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            alert('Mail deleted successfully');
            fetchMailList(); // Fetch updated mail list
        } catch (error) {
            alert(`Error deleting mail: ${error.response.data.message}`);
        }
    };

    return (
        <div className={cx('change-mail-config')}>
            <div className={cx('change-mail-config__wrapper')}>
                {!editing ? (
                    // Hiển thị bảng thông tin cấu hình mail và nút chỉnh sửa
                    <div style={{ width: '100%' }}>
                        <h2>Current Mail Config</h2>
                        <table className={cx('styled-table')}>
                            <tbody>
                                {Object.entries(formData).map(([key, value]) => (
                                    <tr key={key}>
                                        <td>{key}</td>
                                        <td>{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button onClick={() => setEditing(true)}>Edit Mail Config</button>
                    </div>
                ) : (
                    // Hiển thị form chỉnh sửa
                    <form className={cx('change-mail-config__form')} onSubmit={handleSubmit}>
                        {Object.entries(formData).map(([key, value]) => (
                            <div className={cx('change-mail-config__form-group')} key={key}>
                                <label>{key}</label>
                                <input
                                    name={key}
                                    type="text"
                                    placeholder={`Enter ${key.toLowerCase()}`}
                                    value={value}
                                    onChange={handleChange}
                                />
                            </div>
                        ))}
                        <div className={cx('change-mail-config__form-submit')}>
                            <button style={{ margin: '10px' }}>Save Changes</button>
                            <button
                                style={{ margin: '10px' }}
                                type="button"
                                onClick={() => setEditing(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                )}
            </div>
            <div>
                <h2>Email To</h2>
                <table className={cx('styled-table')}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mailList.map((mail) => (
                            <tr key={mail.id}>
                                <td>{mail.name}</td>
                                <td>{mail.email}</td>
                                <td>
                                    <button onClick={() => handleDeleteMail(mail.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {!adding? (<button onClick={() => setAdding(true)}>Thêm mail</button>):(<div className={cx('change-mail-config__form')}>
                    <div className={cx('change-mail-config__form-group')}>
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Enter name"
                            value={newMail.name}
                            onChange={(e) => setNewMail({ ...newMail, name: e.target.value })}
                        />
                    </div>
                    <div className={cx('change-mail-config__form-group')}>
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            value={newMail.email}
                            onChange={(e) => setNewMail({ ...newMail, email: e.target.value })}
                        />
                    </div>
                    <div className={cx('change-mail-config__form-submit')}>
                        <button style={{ margin: '10px' }}
                                    type="button"
                                    onClick={() => setAdding(false)}
                                >
                                    Cancel
                                </button>
                        <button style={{ margin: '10px' }} onClick={handleAddMail}>Add Mail</button>
                    </div>
  
                </div>)}
    
                
            </div>
        </div>
    );
}

export default ChangeMailConfig;
