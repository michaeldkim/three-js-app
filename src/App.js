import './App.css';
import { CallbackPage, SpotifyAuth } from './components';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [accessToken, setAccessToken] = useState(null);

  const handleAuthSuccess = token => {
    setAccessToken(token);
    // You can also store the token in localStorage or context for app-wide access
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/callback" element={<CallbackPage onAuthSuccess={handleAuthSuccess} />} />
          <Route path="/" element={accessToken ? <div>Logged in!</div> : <SpotifyAuth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
