const path = require('path');
const extractData = require('./extractDataFromProject');
const { generateXMI } = require('./reverseTemplate');
try {
  const folderPath = path.join(__dirname, './input/backend');
  extractData(folderPath).then((result) => {
    // Access the results
    const { modelData, controllerData, routeData } = result;
    // Use the results as needed
    const data = {
      model: modelData,
      controller: controllerData,
      route: routeData,
    };
    // console.log(JSON.stringify(data, null, 2));
    generateXMI(data);
  });
} catch (err) {
  console.error('Error reading the file:', err.message);
}
