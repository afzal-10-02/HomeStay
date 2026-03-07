import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth.jsx';
import './Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData);
      navigate('/');
    } catch (err) {
      // Error is handled by the auth hook
    }
  };

  return (
    <div className="auth-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="auth-card"
      >
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>Sign in to your HomeStay account</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {error && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="error-message"
            >
              {error}
            </motion.div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="form-input"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle"
              >
                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </button>
            </div>
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" name="remember" />
              <span className="checkmark"></span>
              Remember me
            </label>
            <a href="/forgot-password" className="forgot-link">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="auth-button"
          >
            {loading ? (
              <motion.i
                className="fas fa-spinner fa-spin"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className="auth-divider">
          <span>OR</span>
        </div>

        <div className="social-auth">
          <button className="social-button google">
            <i className="fab fa-google"></i>
            Continue with Google
          </button>
          <button className="social-button facebook">
            <i className="fab fa-facebook-f"></i>
            Continue with Facebook
          </button>
        </div>

        <div className="auth-footer">
          <p>
            Don't have an account?{' '}
            <a href="/signup" className="auth-link">
              Sign up
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
