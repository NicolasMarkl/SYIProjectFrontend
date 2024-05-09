const API_BASE_URL = 'https://api.example.com/data';  // Change this to your actual API URL

// Function to fetch data
export const fetchData = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error; // Rethrow so calling component can handle the error
  }
};
