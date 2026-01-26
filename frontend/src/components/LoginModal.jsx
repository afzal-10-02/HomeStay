import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoginModal = ({ isOpen, onClose, switchToSignup }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Define API Endpoint (Replace with your actual backend URL)
  const API_URL = 'http://localhost:5000/login';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear specific error when user starts typing
    if (errors[name] || errors.general) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        delete newErrors.general; // Clear general API errors on retry
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({}); // Clear previous errors

    try {
      // 1. Call the Backend
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();

      // 2. Handle Backend Errors
      if (!response.ok) {
        throw new Error(data.message || 'Invalid email or password');
      }

      console.log('Login successful:', data);

      // 3. Store the Token
      // Adjust 'token' to match your backend response key (e.g., access_token, jwt)
      if (data.access_token) {
        localStorage.setItem('authToken', data.access_token);
        // Optional: Store user data if needed
        // localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem("isLoggedIn", "True");
        localStorage.setItem("username", data.user_name);

      }

      // 4. Success Actions
      alert('Login successful!');
      setFormData({ email: '', password: '' });
      onClose();

      // Optional: Force a page reload or trigger a global state update to update the UI
      // window.location.reload(); 

    } catch (error) {
      console.error('Login error:', error);
      // Set a general error to be displayed at the top of the form
      setErrors(prev => ({
        ...prev,
        general: error.message || 'Something went wrong. Please try again.'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSwitchToSignup = () => {
    onClose();
    switchToSignup();
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.12,
      },
    },
    exit: { opacity: 0, scale: 0.9, y: 30 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content login-modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>Login to Your Account</h2>
              <button className="close-btn" onClick={onClose} aria-label="Close">
                ×
              </button>
            </div>

            <div className="modal-body">
              <form onSubmit={handleSubmit} className="auth-form" noValidate>

                {/* --- NEW: General API Error Display --- */}
                {errors.general && (
                  <motion.div
                    className="error-alert"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    style={{
                      background: '#fee2e2',
                      color: '#dc2626',
                      padding: '10px',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      marginBottom: '15px',
                      border: '1px solid #fecaca'
                    }}
                  >
                    {errors.general}
                  </motion.div>
                )}

                <div className="form-group">
                  <div className="input-with-icon">
                    <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#666" />
                    </svg>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email Address"
                      className={errors.email ? 'error' : ''}
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <div className="input-with-icon">
                    <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z" fill="#666" />
                    </svg>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      placeholder="Password"
                      className={errors.password ? 'error' : ''}
                      disabled={isSubmitting}
                      minLength={6}
                    />
                  </div>
                  {errors.password && <span className="error-message">{errors.password}</span>}
                </div>



                <div className="form-options ">
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>

                  <button type="button" className="forgot-password">
                    Forgot Password?
                  </button>
                </div>



                <button
                  type="submit"
                  className="btn-primary auth-submit btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Logging in...
                    </>
                  ) : (
                    'Login'
                  )}
                </button>
                {/* Social Login Buttons (Same as before) */}

              </form>

              <div className="auth-switch">
                <p>
                  Don't have an account?{' '}
                  <button
                    type="button"
                    className="link-btn"
                    onClick={handleSwitchToSignup}
                    disabled={isSubmitting}
                  >
                    Sign Up
                  </button>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;