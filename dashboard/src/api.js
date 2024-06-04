export const fetchData = async (url) => {
  try {
    console.log('Fetching data from URL:', url);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch data failed:', error);
    throw error;
  }
};
