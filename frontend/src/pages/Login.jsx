import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateClient } from "aws-amplify/data";

const client = generateClient();

export default function Login() {
  const [username, setUsername] = useState("zamarin");
  const [password, setPassword] = useState("zamarin");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { data: users } = await client.models.User.list({
        filter: { username: { eq: username } }
      });

      if (users.length === 0) {
        alert("User not found");
        return;
      }

      const user = users[0];

      if (user.passwordHash !== password) {
        alert("Invalid password");
        return;
      }

      navigate(`/patients/${user.userID}`);
    } catch (err) {
      console.error("Login error:", err);
      alert("Unexpected error: " + err.message);
    }
  };

  return (
    <div className="login-container">
      <h1>DAIgnostics</h1>
      <div className="card" style={{ cursor: "default" }}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

