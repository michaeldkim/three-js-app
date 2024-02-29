/* import React, { useCallback, useState, useEffect } from 'react';
import axios from 'axios';

const LoginWithSpotify = ({ onAccessToken }) => {
    const [accessToken, setAccessToken] = useState('');
    const redirectUri = process.env.REACT_APP_REDIRECT_URI;
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const scopesArray = [
        'user-read-private',
        'user-read-email',
    ];
    const scopesString = scopesArray.join(' ');

    console.log(redirectUri)

    const handleLogin = () => {
        window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopesString)}&show_dialog=true`;
    };

    const fetchToken = useCallback(async (code) => {
        
        try {
            const clientId = process.env.REACT_APP_CLIENT_ID;
            const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
            const basicAuth = btoa(`${clientId}:${clientSecret}`);
            
            const params = new URLSearchParams({
                grant_type: 'authorization_code',
                code,
                redirect_uri: redirectUri,
            });
    
            const response = await axios.post('https://accounts.spotify.com/api/token', params.toString(), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Basic ${basicAuth}`,
                },
            });
    
            console.log(response.data); // For debugging
            onAccessToken(response.data.access_token);
        } catch (error) {
            console.error('Error fetching token', error);
        }
    }, [redirectUri, onAccessToken]);
    

    const handleAuthorization = async (code, callback) => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        if (code) {
            try {
                const response = await axios.post('https://accounts.spotify.com/api/token', 
                new URLSearchParams({
                    grant_type: 'authorization_code',
                    code,
                    redirect_uri: redirectUri,
                    client_id: clientId,
                    // Add client secret if needed
                }).toString(), {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                });
                const { access_token } = response.data;
                setAccessToken(access_token);
                onAccessToken(access_token);
            } catch (error) {
                console.error('Error authorizing access:', error);
            }
        }
    };

    useEffect(() => {
        handleAuthorization();
    }, [handleAuthorization]);

    return (
        <div>
            {accessToken ? (
                <p>Access Token: {accessToken}</p>
            ) : (
                <button onClick={handleLogin}>Authorize Access</button>
            )}
        </div>
    );
};

export default LoginWithSpotify;
 */