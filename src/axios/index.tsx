// api.ts
import axios from "axios";

const axiosInstance = axios.create({
  //   baseURL: 'https://api.example.com', // Replace with your API base URL
  timeout: 5000, // Set a timeout for requests (optional)
});

// Add a response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  (response) => {
    // You can modify the response data here
    return response;
  },
  (error) => {
    // Handle response error (if any)
    console.error("Response Interceptor Error:", error);

    // Optionally, you can redirect the user to a login page if the token is expired or invalid
    if (error.response && error.response.status === 401) {
      // Redirect to login page or perform other actions
      console.log("Unauthorized, redirecting to login page...");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
