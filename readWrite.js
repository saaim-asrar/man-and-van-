const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'data.json');

function readData() {
    try {
        const jsonData = fs.readFileSync(dataFilePath, 'utf-8');
        return JSON.parse(jsonData);
    } catch (err) {
        return { users: [] };  // Return empty users array if file doesn't exist
    }
}

function writeData(data) {  // Added data parameter here
    try {
        fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error writing data:', error);
        throw error;  // Re-throw to handle in calling code
    }
}

module.exports = { readData, writeData };