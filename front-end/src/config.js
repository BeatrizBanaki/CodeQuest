const config = {
  apiBaseUrl: process.env.NODE_ENV === 'production'
    ? 'https://codequest-c3nw.onrender.com/api'
    : '/api',
  };

export default config;