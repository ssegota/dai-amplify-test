import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// 1. Import the Amplify client
import { generateClient } from 'aws-amplify/data';
// 2. Import your mutation from the generated files
// Adjust the path as needed relative to this component's location
import { loginUser } from './amplify-client/mutations'; // Assuming a loginUser mutation exists

// Create the GraphQL client instance
const client = generateClient();

export default function Login() {
  const [username, setUsername] = useState('zamarin');
  const [password, setPassword] = useState('zamarin');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // 3. Replace the fetch call with the Amplify client mutation call
      const { data, errors } = await client.models.User.loginUser({ // Check your generated API.ts/mutations.ts for the correct structure
        username: username,
        password: password
      });

      // Handle the response
      if (data) {
        // Assuming your mutation returns a structure that includes the user's ID
        const uid = data.userid ?? data.UserID ?? data.userID; // Adjust based on the actual field name
        
        // Assuming success is implicitly handled by the presence of data
        navigate(`/patients/${uid}`);
      } else if (errors) {
        // Handle GraphQL errors
        const errorMessage = errors[0]?.message || 'Login failed due to an error.';
        alert(errorMessage);
        console.error("Login Errors:", errors);
      } else {
        // Handle other potential non-error failures if your backend logic returns a specific 'failure' state without throwing an error
        alert('Invalid credentials or unknown failure.');
      }
    } catch (error) {
      // Handle network or other unexpected errors
      alert(`An unexpected error occurred: ${error.message}`);
      console.error("Amplify Login Error:", error);
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
