import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('zamarin');
  const [password, setPassword] = useState('zamarin');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await fetch('http://localhost:5001/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (data.success) {
      const uid = data.user.userid ?? data.user.UserID ?? data.user.userID;
      navigate(`/patients/${uid}`);
    } else {
      alert(data.error || 'Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h1>DAIgnostics</h1>
      <div className="card" style={{ cursor: 'default' }}>
        <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
