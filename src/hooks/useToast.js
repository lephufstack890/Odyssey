import { toast } from 'react-toastify';

export const showToast = (message, options = {}) => {
    const defaultOptions = {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
    };

    const toastOptions = { ...defaultOptions, ...options };

    toast.error(message, toastOptions);
};
