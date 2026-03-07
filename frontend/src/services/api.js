import axios from 'axios';

// Create axios instance with default configuration
const api = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('access_token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API endpoints
export const authAPI = {
  signup: (userData) => api.post('/signup', userData),
  login: (credentials) => api.post('/login', credentials),
  logout: () => {
    localStorage.removeItem('access_token');
    return Promise.resolve();
  },
  getCurrentUser: () => api.get('/user/current'),
};

// User API endpoints
export const userAPI = {
  getProfile: () => api.get('/user/profile'),
  updateProfile: (userData) => api.put('/user/profile', userData),
  getBookings: () => api.get('/user/bookings'),
  createBooking: (bookingData) => api.post('/user/bookings', bookingData),
};

// HomeStay API endpoints
export const homestayAPI = {
  getDestinations: () => api.get('/destinations'),
  getDestinationById: (id) => api.get(`/destinations/${id}`),
  getRooms: () => api.get('/rooms'),
  getRoomById: (id) => api.get(`/rooms/${id}`),
  searchRooms: (params) => api.get('/rooms/search', { params }),
};

// Contact API endpoints
export const contactAPI = {
  sendContactForm: (formData) => api.post('/contact', formData),
  subscribeNewsletter: (email) => api.post('/newsletter/subscribe', { email }),
};

export default api;
