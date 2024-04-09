// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./LoginPage.css";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [loginError, setLoginError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
//    const handleSubmit = async (e) => {
//       e.preventDefault();
//       setLoading(true);

//       try {
//         const response = await fetch("/api/user/login", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         });

//         if (response.ok) {
//           const userData = await response.json();
//           console.log("User Data:", userData);

//           if (userData && userData.is_admin) {
//             window.location.href = `/admin/${userData._id}`; // Redirect admin to admin page
//           } else {
//             window.location.href = `/${userData.user._id}`; // Redirect regular user to homepage with user ID
//           }
//         } else {
//           const errorData = await response.json();
//           setLoginError(errorData.message || "An error occurred during login.");
//         }
//       } catch (error) {
//         console.error("Login failed:", error.message);
//         setLoginError(
//           "An error occurred during login. Please try again later."
//         );
//       } finally {
//         setLoading(false);
//       }
//    };

//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           {loginError && <p className="error-message">{loginError}</p>}
//           {loading ? <p>Loading...</p> : <button type="submit">Login</button>}
//           <p>
//             Don't have an account? <Link to="/signup">Sign Up</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const userData = await response.json();
        console.log("User Data:", userData);

        if (userData && userData.is_admin) {
          window.location.href = `/admin/${userData._id}`; // Redirect admin to admin page
        } else {
          window.location.href = `/${userData.user._id}`; // Redirect regular user to homepage with user ID
        }
      } else {
        const errorData = await response.json();
        setLoginError(errorData.message || "An error occurred during login.");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      setLoginError("An error occurred during login. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              {showPassword ? "👁️" : "👁️"}
            </span>
          </div>
          {loginError && <p className="error-message">{loginError}</p>}
          {loading ? <p>Loading...</p> : <button type="submit">Login</button>}
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
