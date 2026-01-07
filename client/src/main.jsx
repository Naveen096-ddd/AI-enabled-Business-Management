import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import { store } from "./app/store";
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)


























// import React, { useState, useEffect } from "react";
// import Cookies from "js-cookie";
// import {jwtDecode }from "jwt-decode";
// import { FaHome, FaListAlt, FaShoppingCart, FaReceipt, FaHeart, FaUser, FaQuestion } from "react-icons/fa";

// import "./Customer.css";

// const menuItems = [
//   { label: "Home", icon: <FaHome /> },
//   { label: "Menu", icon: <FaListAlt /> },
//   { label: "Cart", icon: <FaShoppingCart /> },
//   { label: "Orders", icon: <FaReceipt /> },
//   { label: "Favorites", icon: <FaHeart /> },
//   { label: "Profile", icon: <FaUser /> },
//   { label: "Support", icon: <FaQuestion /> },
// ];

// const CustomerDashboard = ({ navigate }) => {
//   const [selectedMenuItem, setSelectedMenuItem] = useState("Home");
//   const [collapsed, setCollapsed] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("access_token");
//     if (!token) return navigate("/");
//     try {
//       const decoded = jwtDecode(token);
//       if (decoded.role !== "user") {
//         localStorage.clear();
//         navigate("/");
//       }
//     } catch {
//       localStorage.clear();
//       navigate("/");
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.clear();
//     sessionStorage.clear();
//     Cookies.remove("access_token");
//     navigate("/");
//   };

//   return (
//     <div className={`dashboard-container ${darkMode ? "dark" : ""}`}>
//       {/* Fixed Navbar */}
//       <div className={`header ${darkMode ? "dark" : ""}`}>
//         <span>Customer Dashboard</span>
//         <div>
//           <button onClick={() => setDarkMode(!darkMode)}>
//             {darkMode ? "☀️" : "🌙"}
//           </button>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       </div>

//       {/* Sidebar */}
//       <div className={`sidebar ${collapsed ? "collapsed" : ""} ${darkMode ? "dark" : ""}`}>
//         <div className="toggle-button" onClick={() => setCollapsed(!collapsed)}>
//           ☰
//         </div>
//         {menuItems.map((item) => (
//           <div
//             key={item.label}
//             className={`menu-item ${selectedMenuItem === item.label ? "selected" : ""}`}
//             onClick={() => setSelectedMenuItem(item.label)}
//           >
//             <span className="menu-icon">{item.icon}</span>
//             <span className="menu-text">{item.label}</span>
//           </div>
//         ))}
//       </div>

//       {/* Main content */}
//       <div className={`main-content ${darkMode ? "dark" : ""}`}>
//         <div className={`content-box ${darkMode ? "dark" : ""}`}>
//           {selectedMenuItem === "Home" && <p>Welcome Back! Check out today's specials.</p>}
//           {selectedMenuItem === "Menu" && <p>Here is the menu (replace with your component).</p>}
//           {selectedMenuItem === "Cart" && <p>Your cart items (replace with your component).</p>}
//           {selectedMenuItem === "Orders" && <p>Your orders history.</p>}
//           {selectedMenuItem === "Favorites" && <p>Your favorite dishes.</p>}
//           {selectedMenuItem === "Profile" && <p>Manage your profile.</p>}
//           {selectedMenuItem === "Support" && <p>Contact support for help.</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerDashboard;


// /* CustomerDashboard.css */

// /* General layout */
// .dashboard-container {
//   display: flex;
//   height: 100vh;
//   font-family: Arial, sans-serif;
//   overflow: hidden;
// }

// /* Fixed top navbar */
// .header {
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   height: 60px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 20px;
//   background: linear-gradient(90deg, #1517b3ff, #0072ff);
//   color: white;
//   z-index: 1000;
// }

// .header.dark {
//   background-color: #1f1f1f;
// }

// .header button {
//   margin-left: 10px;
//   cursor: pointer;
// }

// /* Sidebar below navbar */
// .sidebar {
//   width: 250px;
//   margin-top: 60px; /* below navbar */
//   height: calc(100vh - 60px);
//   transition: width 0.3s ease;
//   background-color: #fff;
//   overflow-y: auto;
//   box-shadow: 2px 0 5px rgba(0,0,0,0.1);
// }

// .sidebar.collapsed {
//   width: 80px;
// }

// .sidebar.dark {
//   background-color: #1e1e1e;
//   color: #fff;
// }

// /* Sidebar toggle */
// .toggle-button {
//   display: block;
//   padding: 10px;
//   cursor: pointer;
//   text-align: right;
// }

// .toggle-button:hover {
//   background-color: #c1cddaff;
// }

// /* Menu items */
// .menu-item {
//   display: flex;
//   align-items: center;
//   padding: 12px 20px;
//   cursor: pointer;
//   border-radius: 8px;
//   margin: 5px 10px;
//   transition: all 0.3s ease;
// }

// .menu-item:hover {
//   background: linear-gradient(to right, #1e3a8a, #3b82f6, #06b6d4);
//   color: #fff;
// }

// .menu-item.selected {
//   background: linear-gradient(to right, #1e3a8a, #3b82f6, #06b6d4);
//   color: #fff;
// }

// .menu-icon {
//   margin-right: 10px;
//   display: inline-block;
//   width: 24px;
//   text-align: center;
// }

// .sidebar.collapsed .menu-text {
//   display: none;
// }

// .sidebar.collapsed .menu-icon {
//   margin-right: 0;
// }

// /* Main content */
// .main-content {
//   flex-grow: 1;
//   margin-top: 60px; /* below navbar */
//   padding: 20px;
//   background-color: #f5f5f5;
//   overflow-y: auto;
//   height: calc(100vh - 60px);
//   transition: background-color 0.3s;
// }

// .main-content.dark {
//   background-color: #1f1f1f;
//   color: #fff;
// }

// /* Content box */
// .content-box {
//   padding: 16px;
//   border-radius: 8px;
//   background-color: #fff;
//   margin-bottom: 20px;
// }

// .content-box.dark {
//   background-color: #1f1f1f;
//   color: #fff;
// }


// //signup

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./SignupPage.css"; // Import the CSS file

// const SignupPage = () => {
//   const [name, setName] = useState("");
//   const [mobile_number, setMobileNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [role, setRole] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const signupData = { name, mobile_number, email, password, role };

//     try {
//       const response = await fetch("http://127.0.0.1:8000/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(signupData),
//       });

//       if (response.ok) {
//         alert("Signup successful!");
//       } else {
//         alert("Signup failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error during signup:", error);
//     }
//   };

//   return (
//     <div className="signup-container">
//       <form className="signup-card" onSubmit={handleSubmit}>
//         <h2 className="signup-title">Signup</h2>

//         <label>Full Name:</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />

//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <label>Mobile Number:</label>
//         <input
//           type="text"
//           value={mobile_number}
//           onChange={(e) => setMobileNumber(e.target.value)}
//           required
//         />

//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <label>Role:</label>
//         <select value={role} onChange={(e) => setRole(e.target.value)} required>
//           <option value="">Select Role</option>
//           <option value="admin">Admin</option>
//           <option value="user">Customer</option>
//           <option value="restaurant">Restaurant</option>
//         </select>

//         <p className="login-text">
//           Already have an account?{" "}
//           <Link to="/login" className="login-link">
//             Login
//           </Link>
//         </p>

//         <button type="submit" className="signup-button">
//           Signup
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignupPage;
// /* Container */
// .signup-container {
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 1.5rem;
//   background: linear-gradient(to bottom right, #4b0082, #1e3a8a, #5a67d8);
// }

// /* Card */
// .signup-card {
//   background: rgba(255, 255, 255, 0.2);
//   backdrop-filter: blur(10px);
//   width: 32rem;
//   padding: 2rem;
//   border-radius: 1rem;
//   border: 1px solid rgba(255, 255, 255, 0.3);
//   box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
//   display: flex;
//   flex-direction: column;
// }

// /* Title */
// .signup-title {
//   font-size: 2.5rem;
//   font-weight: 800;
//   color: white;
//   text-align: center;
//   margin-bottom: 1.5rem;
// }

// /* Labels */
// .signup-card label {
//   font-size: 1.1rem;
//   color: white;
//   margin-top: 0.5rem;
// }

// /* Inputs and Select */
// .signup-card input,
// .signup-card select {
//   width: 100%;
//   padding: 0.75rem 1rem;
//   margin-top: 0.25rem;
//   margin-bottom: 1rem;
//   border-radius: 0.5rem;
//   border: 1px solid rgba(255, 255, 255, 0.4);
//   background: rgba(255, 255, 255, 0.2);
//   color: white;
//   outline: none;
//   font-size: 1rem;
// }

// .signup-card select {
//   color: black;
// }

// /* Login Text */
// .login-text {
//   text-align: center;
//   color: white;
//   margin-top: 1rem;
//   font-size: 1rem;
// }

// .login-link {
//   color: #00f7ff;
//   font-weight: 600;
//   text-decoration: none;
// }

// .login-link:hover {
//   text-decoration: underline;
// }

// /* Button */
// .signup-button {
//   margin-top: 1.5rem;
//   padding: 0.75rem 1.5rem;
//   font-size: 1rem;
//   font-weight: bold;
//   color: white;
//   background: linear-gradient(to bottom right, rgba(0, 247, 255, 0.7), rgba(0, 102, 255, 0.7), rgba(138, 43, 226, 0.7));
//   border: none;
//   border-radius: 0.5rem;
//   cursor: pointer;
//   transition: opacity 0.2s;
// }

// .signup-button:hover {
//   opacity: 0.9;
// }
// //LOGIN

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css"; // Import the separate CSS file

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [forgotEmail, setForgotEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmNewPassword, setConfirmNewPassword] = useState("");
//   const [step, setStep] = useState(1);
//   const [showForgot, setShowForgot] = useState(false);
//   const navigate = useNavigate();

//   const handleLoginSubmit = async (inputEmail, inputPassword) => {
//     try {
//       const response = await fetch("http://127.0.0.1:8000/auth/login_history", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email: inputEmail, password: inputPassword })
//       });
//       const data = await response.json();
//       if (!response.ok) {
//         alert(data.detail || "Login failed");
//         return;
//       }
//       localStorage.setItem("access_token", data.access_token);
//       localStorage.setItem("role", data.role);
//       if (data.role === "admin") navigate("/deliveryDashboard");
//       else if (data.role === "user") navigate("/customerDashboard");
//       else navigate("/restaurantDashboard");
//     } catch (error) {
//       console.error("Login error:", error);
//       alert("Something went wrong");
//     }
//   };

//   const handleForgotEmailSubmit = (e) => {
//     e.preventDefault();
//     if (forgotEmail.trim() !== "") setStep(2);
//   };

//   const handleOtpSubmit = (e) => {
//     e.preventDefault();
//     if (otp.trim() !== "") setStep(3);
//   };

//   const handleResetPasswordSubmit = (e) => {
//     e.preventDefault();
//     if (newPassword.trim() !== "" && confirmNewPassword.trim() !== "") {
//       alert("Password Reset Successfully!");
//       setShowForgot(false);
//       setStep(1);
//     }
//   };

//   return (
//     <div className="login-container">
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           handleLoginSubmit(email, password);
//         }}
//         className="login-card"
//       >
//         <h2 className="login-title">
//           {showForgot ? "Forgot Password" : "Employee Login"}
//         </h2>

//         {!showForgot && (
//           <>
//             <label>Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />

//             <label>Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />

//             <div className="forgot-container">
//               <button
//                 type="button"
//                 onClick={() => setShowForgot(true)}
//                 className="forgot-button"
//               >
//                 Forgot Password?
//               </button>
//             </div>

//             <div className="signup-text">
//               Don’t have an account?{" "}
//               <a href="/" className="signup-link">
//                 Signup
//               </a>
//             </div>

//             <button type="submit" className="login-button">
//               Login
//             </button>
//           </>
//         )}

//         {showForgot && (
//           <>
//             {step === 1 && (
//               <>
//                 <label>Enter Your Email:</label>
//                 <input
//                   type="email"
//                   value={forgotEmail}
//                   onChange={(e) => setForgotEmail(e.target.value)}
//                   required
//                 />
//                 <button
//                   onClick={handleForgotEmailSubmit}
//                   className="login-button"
//                   type="button"
//                 >
//                   Send OTP
//                 </button>
//               </>
//             )}

//             {step === 2 && (
//               <>
//                 <label>Enter OTP:</label>
//                 <input
//                   type="text"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   required
//                 />
//                 <button
//                   onClick={handleOtpSubmit}
//                   className="login-button"
//                   type="button"
//                 >
//                   Verify OTP
//                 </button>
//               </>
//             )}

//             {step === 3 && (
//               <>
//                 <label>New Password:</label>
//                 <input
//                   type="password"
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                   required
//                 />
//                 <label>Confirm Password:</label>
//                 <input
//                   type="password"
//                   value={confirmNewPassword}
//                   onChange={(e) => setConfirmNewPassword(e.target.value)}
//                   required
//                 />
//                 <button
//                   onClick={handleResetPasswordSubmit}
//                   className="login-button"
//                   type="button"
//                 >
//                   Reset Password
//                 </button>
//               </>
//             )}

//             <button
//               type="button"
//               className="back-button"
//               onClick={() => {
//                 setShowForgot(false);
//                 setStep(1);
//               }}
//             >
//               Back to Login
//             </button>
//           </>
//         )}
//       </form>
//     </div>
//   );
// };

// export default Login;
// /* Container */
// .login-container {
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 1.5rem;
//   background: linear-gradient(to bottom right, #4b0082, #1e3a8a, #5a67d8);
// }

// /* Card */
// .login-card {
//   background: rgba(128, 0, 128, 0.7);
//   width: 32rem;
//   padding: 2rem;
//   border-radius: 1rem;
//   border: 1px solid rgba(255, 255, 255, 0.3);
//   box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
//   display: flex;
//   flex-direction: column;
// }

// /* Title */
// .login-title {
//   font-size: 2.5rem;
//   font-weight: 800;
//   color: white;
//   text-align: center;
//   margin-bottom: 1.5rem;
// }

// /* Labels */
// .login-card label {
//   font-size: 1.1rem;
//   color: white;
//   margin-top: 0.5rem;
// }

// /* Inputs */
// .login-card input,
// .login-card select {
//   width: 100%;
//   padding: 0.75rem 1rem;
//   margin-top: 0.25rem;
//   margin-bottom: 1rem;
//   border-radius: 0.5rem;
//   border: 1px solid rgba(255, 255, 255, 0.4);
//   background: rgba(255, 255, 255, 0.2);
//   color: white;
//   outline: none;
//   font-size: 1rem;
// }

// /* Forgot Password */
// .forgot-container {
//   display: flex;
//   justify-content: flex-end;
//   margin-bottom: 1rem;
// }

// .forgot-button {
//   background: none;
//   border: none;
//   color: #00f7ff;
//   font-size: 0.9rem;
//   font-weight: 600;
//   cursor: pointer;
//   text-decoration: none;
// }

// .forgot-button:hover {
//   text-decoration: underline;
// }

// /* Signup Text */
// .signup-text {
//   text-align: center;
//   color: white;
//   font-size: 1rem;
//   margin-bottom: 1rem;
// }

// .signup-link {
//   color: #00f7ff;
//   font-weight: 600;
//   text-decoration: none;
// }

// .signup-link:hover {
//   text-decoration: underline;
// }

// /* Buttons */
// .login-button {
//   margin-top: 1rem;
//   padding: 0.75rem 1.5rem;
//   font-size: 1rem;
//   font-weight: bold;
//   color: white;
//   background: linear-gradient(
//     to bottom right,
//     rgba(0, 247, 255, 0.7),
//     rgba(0, 102, 255, 0.7),
//     rgba(138, 43, 226, 0.7)
//   );
//   border: none;
//   border-radius: 0.5rem;
//   cursor: pointer;
//   transition: opacity 0.2s;
// }

// .login-button:hover {
//   opacity: 0.9;
// }

// /* Back Button */
// .back-button {
//   margin-top: 1rem;
//   background: none;
//   border: none;
//   color: #00f7ff;
//   font-weight: 600;
//   cursor: pointer;
//   text-align: center;
// }

// .back-button:hover {
//   text-decoration: underline;
// }

