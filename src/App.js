import './App.css';
/* import { WebGLCheck } from './components'; */
import { useState, useEffect } from 'react';

function App() {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credientials&client_id=' + process.env.CLIENT_ID + '&client_secret=' + process.env.CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => console.log(data.access_token))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>SSense Trends</h1>
      </header>
      <div>
        {/* <WebGLCheck /> */}
      </div>
    </div>
  );
}

export default App;
