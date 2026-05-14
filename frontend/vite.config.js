export default {
  server: {
    proxy: {
      "/health": "http://localhost:3000"
    }
  }
};
