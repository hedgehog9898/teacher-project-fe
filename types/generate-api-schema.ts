import * as fs from 'fs';
import fetch from 'node-fetch';

// Function to fetch data and save it as JSON file
async function fetchDataAndSaveAsJson(url: string, filePath: string) {
  try {
    // Fetch data from the provided URL
    const response = await fetch(url);

    // Ensure the response is successful
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    }

    // Extract JSON payload from the response
    const data = await response.json();

    // Create directory if it doesn't exist
    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath, { recursive: true });
    }

    // Define the file path
    const jsonFilePath = `${filePath}/api-schema.json`;

    // Write data to JSON file
    fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2));

    console.log(`Data saved successfully as ${jsonFilePath}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

// URL for the API
const apiUrl = 'http://localhost:5000/api-json';

// Directory path where JSON file will be saved
const directoryPath = './types';

// Fetch data and save as JSON
fetchDataAndSaveAsJson(apiUrl, directoryPath);