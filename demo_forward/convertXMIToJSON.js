const fs = require('fs');
const xml2js = require('xml2js');

function convertXMIToJSON(pathFile) {
    // Read XMI file
    fs.readFile(pathFile, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading XMI file:', err);
            return;
        }
        // Parse XML to JSON
        xml2js.parseString(data, { explicitArray: false }, (err, result) => {
            if (err) {
                console.error('Error parsing XML:', err);
                return false;
            }
            // Convert JSON to string for pretty print
            const jsonResult = JSON.stringify(result, null, 2);
            // Print or save the JSON result
            // console.log('Converted JSON:', jsonResult);
            // If you want to save the JSON to a file, uncomment the following lines
            const jsonFileName = './input/json/output.json';
            fs.writeFile(jsonFileName, jsonResult, 'utf-8', (err) => {
                if (err) {
                    console.error('Error writing JSON file:', err);
                    return false;
                } else {
                    console.log('JSON file saved successfully:', jsonFileName);
                    return true;
                }
            });
        });
    });
}

module.exports = {
    convertXMIToJSON
}