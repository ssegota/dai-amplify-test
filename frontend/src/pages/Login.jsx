import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "../graphql/queries"; // adjust path

export default function Login() {
  const [username, setUsername] = useState("zamarin");
  const [password, setPassword] = useState("zamarin");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // 1. Query User table by username
      const result = await API.graphql(
        graphqlOperation(listUsers, {
          filter: { username: { eq: username } }
        })
      );

      const users = result.data.listUsers.items;

      if (users.length === 0) {
        alert("User not found");
        return;
      }

      const user = users[0];

      // 2. Password comparison (temporary until Cognito)
      if (user.passwordHash !== password) {
        alert("Invalid password");
        return;
      }

      // 3. Navigate to patients
      navigate(`/patients/${user.userID}`);

    } catch (error) {
      console.error("Login error:", error);
      alert("Unexpected error: " + error.message);
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

