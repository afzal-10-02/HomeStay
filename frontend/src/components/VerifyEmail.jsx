import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerifyEmail = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    
    // State to handle the UI
    const [status, setStatus] = useState('verifying'); // Options: 'verifying', 'success', 'error'
    const [message, setMessage] = useState('Verifying your email...');

    useEffect(() => {
        const verifyToken = async () => {
            // 1. Get the token from the URL query string
            const token = searchParams.get('token');

            if (!token) {
                setStatus('error');
                setMessage('Invalid link: No token found.');
                return;
            }

            try {
                // 2. Send the token to your Flask backend
                // Make sure this URL matches your backend route exactly
                const response = await axios.get('http://localhost:5000/verify-email', {
                    params: { token: token }
                });

                // 3. Handle Success
                setStatus('success');
                setMessage(response.data.message);

                // Optional: Redirect to login after 3 seconds
                setTimeout(() => {
                    navigate('/login');
                }, 3000);

            } catch (error) {
                // 4. Handle Error
                setStatus('error');
                setMessage(error.response?.data?.message || 'Verification failed. The link might be expired.');
            }
        };

        verifyToken();
    }, [searchParams, navigate]);

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                {status === 'verifying' && (
                    <h2 style={{ color: '#007bff' }}>⏳ Verifying...</h2>
                )}
                
                {status === 'success' && (
                    <>
                        <h2 style={{ color: '#28a745' }}>✅ Success!</h2>
                        <p>{message}</p>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>Redirecting to login...</p>
                    </>
                )}

                {status === 'error' && (
                    <>
                        <h2 style={{ color: '#dc3545' }}>❌ Error</h2>
                        <p>{message}</p>
                        <button onClick={() => navigate('/signup')} style={styles.button}>
                            Go to Signup
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

// Simple inline styles for quick UI
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f9',
    },
    card: {
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        backgroundColor: 'white',
        textAlign: 'center',
        maxWidth: '400px',
        width: '100%',
    },
    button: {
        marginTop: '1rem',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }
};

export default VerifyEmail;