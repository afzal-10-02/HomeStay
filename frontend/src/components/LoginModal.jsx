import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoginModal = ({ isOpen, onClose, switchToSignup }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  
  const API_URL = 'http://localhost:5000/login';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name] || errors.general) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        delete newErrors.general;
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
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
    setErrors({});

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Invalid email or password');
      }

      // Success
      if (data.access_token) {
        localStorage.setItem('authToken', data.access_token);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', data.user_name || 'User');
      }

      alert('Login successful!');
      setFormData({ email: '', password: '' });
      onClose();

      // Optional: reload or redirect
      // window.location.href = '/dashboard';

    } catch (err) {
      // Provide a more helpful error message for network errors
      if (err instanceof TypeError && err.message === 'Failed to fetch') {
        setErrors({
          general: "Connection failed. Please ensure the backend server is running.",
        });
      } else {
        setErrors({ general: err.message || 'Login failed. Please try again.' });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSwitchToSignup = () => {
    onClose();
    switchToSignup();
  };

  // Framer Motion variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    exit: { opacity: 0, scale: 0.85, y: 40 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal fade show d-block"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-dialog modal-dialog-centered modal-md"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
              {/* Header */}
              <div className="modal-header border-0 pb-0 pt-4 px-4">
                <h2 className="modal-title fs-3 fw-bold text-dark">Welcome Back</h2>
                <button
                  type="button"
                  className="btn-close"
                  onClick={onClose}
                  aria-label="Close"
                ></button>
              </div>

              {/* Body */}
              <div className="modal-body px-4 pb-4">
                {errors.general && (
                  <div className="alert alert-danger alert-dismissible fade show mb-4" role="alert">
                    {errors.general}
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setErrors({})}
                    ></button>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  {/* Email */}
                  <div className=" position-relative">
                    <label htmlFor="email" className="form-label fw-medium text-muted">
                      Email address
                    </label>
                    <div className="input-group input-group-lg">
                      <span className="input-group-text bg-white border-end-0">
                        <i className="bi bi-envelope-fill text-muted"></i>
                      </span>
                      <input
                        type="email"
                        className={`form-control form-control-lg border-start-0 ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        disabled={isSubmitting}
                        required
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>
                  </div>

                  {/* Password */}
                  <div className="mb-4 position-relative">
                    <label htmlFor="password" className="form-label fw-medium text-muted">
                      Password
                    </label>
                    <div className="input-group input-group-lg">
                      <span className="input-group-text bg-white border-end-0">
                        <i className="bi bi-lock-fill text-muted"></i>
                      </span>
                      <input
                        type="password"
                        className={`form-control form-control-lg border-start-0 ${errors.password ? 'is-invalid' : ''}`}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        minLength={6}
                        disabled={isSubmitting}
                        required
                      />
                      {errors.password && (
                        <div className="invalid-feedback">{errors.password}</div>
                      )}
                    </div>
                  </div>

                  {/* Options */}
                  <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="rememberMe"
                      />
                      <label className="form-check-label text-muted" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>

                    <a href="#" className="text-decoration-none small fw-medium text-primary">
                      Forgot password?
                    </a>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="pill-btn theme w-100"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Logging in...
                      </>
                    ) : (
                      'Log in'
                    )}
                  </button>
                </form>

                {/* Switch to Signup */}
                <div className="text-center mt-4">
                  <p className="text-muted mb-0">
                    Don't have an account?{' '}
                    <button
                      type="button"
                      className="btn btn-link text-primary fw-semibold p-0 align-baseline"
                      onClick={handleSwitchToSignup}
                      disabled={isSubmitting}
                    >
                      Sign in
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;