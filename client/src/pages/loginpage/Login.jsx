import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../app/AuthSlice";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotEmail, setForgotEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [step, setStep] = useState(1);
  const [showForgot, setShowForgot] = useState(false);
  const [role, setRole] = useState("");
  const { user, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "",
  });
  const handleLoginSubmit = () => {
    if (!email || !password || !role) {
      setAlert({
        show: true,
        message: "❌ Please enter email, password and select role",
        type: "error",
      });
      return;
    }
    dispatch(loginUser({ email, password, role }));
  };
  useEffect(() => {
    if (user) {
      setAlert({
        show: true,
        message: `✅ Login successful as ${user.role.toUpperCase()}`,
        type: "success",
      });
      setTimeout(() => {
        if (user.role === "Hr") navigate("/hrDashboard");
        if (user.role === "Employee") navigate("/employeeDashboard");
        if (user.role === "Manager") navigate("/managerDashboard");
      }, 1000);
    }
    if (error) {
      setAlert({
        show: true,
        message: "❌ Invalid email, password or role",
        type: "error",
      });
    }
  }, [user, error, navigate]);
  const handleForgotEmailSubmit = (e) => {
    e.preventDefault();
    const emailFormate = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+[a-zA-Z]{2,4}$/;
    if (!emailFormate.test(forgotEmail)) {
      alert("Please enter a valid email address");
      setForgotEmail("");
    } else {
      setStep(2);
    }
  };
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    const otpFormate = /^[0-9]{6}$/;
    if (!otpFormate.test(otp)) {
      alert("Please enter a valid OTP");
      setOtp("");
    } else {
      setStep(3);
    }
  };
  const handleResetPasswordSubmit = (e) => {
    e.preventDefault();
    const newpasswordFormate = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!newpasswordFormate.test(newPassword)) {
      alert("Please enter a valid password");
      setNewPassword("");
      setConfirmNewPassword("");
    } else if (newPassword !== confirmNewPassword) {
      alert("Passwords do not match");
      setNewPassword("");
      setConfirmNewPassword("");
    } else {
      setStep(4);
    }
  };
  return (
    <div className="login-container-total">
      <form onSubmit={(e) => {e.preventDefault(); handleLoginSubmit(email, password);}} className="login-card">
        {alert.show && (
          <div className={`alert ${alert.type}`}>
            {alert.message}
          </div>
        )}
        <h2 className="login-title">{showForgot ? "Forgot Password" : "Login"}</h2>
        {!showForgot && (
          <>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Role:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} className="role">
              <option value="" className="options">Select Role</option>
              <option value="Employee" className="options">Employee</option>
              <option value="Hr" className="options">Hr</option>
              <option value="Manager" className="options">Manager</option>
            </select>
            <div className="forgot-container">
              <button
                type="button"
                onClick={() => setShowForgot(true)}
                className="forgot-button"
              >
                Forgot Password?
              </button>
            </div>
            <div className="signup-text">
              Don’t have an account?{" "}
              <Link to="/signup">Signup</Link>
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </>
        )}
        {showForgot && (
          <>
            {step === 1 && (
              <>
                <label>Enter Your Email:</label>
                <input
                  type="email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  required
                />
                <button
                  onClick={handleForgotEmailSubmit}
                  className="login-button"
                  type="button"
                >
                  Send OTP
                </button>
              </>
            )}
            {step === 2 && (
              <>
                <label>Enter OTP:</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
                <button
                  onClick={handleOtpSubmit}
                  className="login-button"
                  type="button"
                >
                  Verify OTP
                </button>
              </>
            )}
            {step === 3 && (
              <>
                <label>New Password:</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <label>Confirm Password:</label>
                <input
                  type="password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  required
                />
                <button
                  onClick={handleResetPasswordSubmit}
                  className="login-button"
                  type="button"
                >
                  Reset Password
                </button>
              </>
            )}
            <button
              type="button"
              className="back-button"
              onClick={() => {
                setShowForgot(false);
                setStep(1);
              }}
            >
              Back to Login
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Login;