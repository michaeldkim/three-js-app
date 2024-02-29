import React from 'react';

const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = process.env.REACT_APP_CLIENT_ID
const redirectUri = process.env.REACT_APP_REDIRECT_URI; // Your redirect URI
const scopes = [
    'user-read-private',
    'user-read-email',
    // Add other scopes as needed
];

const SpotifyAuth = () => {
    const handleLogin = () => {
        window.location.href = `${authEndpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes.join(' '))}&response_type=token&show_dialog=true`;
    };

    return (
        <div>
            <button onClick={handleLogin}>Log in with Spotify!</button>
        </div>
    );
};

export default SpotifyAuth;
