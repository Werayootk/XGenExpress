const fs = require('fs');
const xml2js = require('xml2js');

function convertXMIToJSON(pathFile) {
    fs.readFile(pathFile, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading XMI file:', err);
            return;
        }
        xml2js.parseString(data, { explicitArray: false }, (err, result) => {
            if (err) {
                console.error('Error parsing XML:', err);
                return false;
            }
            const jsonResult = JSON.stringify(result, null, 2);
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