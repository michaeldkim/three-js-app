import React, { useEffect } from 'react';

const CallbackPage = ({ onAuthSuccess }) => {
    useEffect(() => {
        const hash = window.location.hash;
        let token = window.location.hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1];

        if (token) {
            onAuthSuccess(token);
            // Redirect to home or another page after successful authentication
            window.location.href = '/';
        }
    }, [onAuthSuccess]);

    return <div>Authorizing...</div>;
};
export default CallbackPage;
