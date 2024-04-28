const fs = require('fs');
const path = require('path');

// Convert XMI To Json
const fileNameSQL = './input/xmi/xmi_mysql.xmi';
const fileNameNoSQL = './input/xmi/xmi_mongodb.xmi';
const fileOutput = './input/json/output.json';
const { convertXMIToJSON } = require('./convertXMIToJSON');
let isConverted = convertXMIToJSON(fileNameNoSQL); 
function main() {
    if (isConverted || fs.existsSync(fileOutput)) {
        const processJsonFile = require('./processJson');
        const { generateRouter, generateController, generateModel } = require('./forwardTemplate');
        
        // Replace 'path/to/your/json/file.json' with the actual path to your JSON file
        const pathFileJson = './input/json/output.json';
        const result = processJsonFile(pathFileJson);
        
        // Access the results
        const { profileConfig, dataTypeConfig, packageConfig } = result;
        // Use the results as needed
        const data = {
            profile: profileConfig,
            type: dataTypeConfig,
            package: packageConfig
        }        
        
        const routeContent = generateRouter(data);
        const modelContent = generateModel(data);
        const controllerContent = generateController(data);
       
        // Define the folder and file names
        const folderNameService = 'output/backend';
        const folderNameRoute = folderNameService+'/'+'routes';
        const folderNameModel = folderNameService+'/'+'models';
        const folderNameController = folderNameService+'/'+'controllers';
        
        function createRouteFiles(pathFile) {
            routeContent.forEach(item => {
                const pathFolderAndFile = pathFile + "/" + item.nameOfFile;
                const fileContent = item.contentWithComment.join('');
                fs.writeFileSync(pathFolderAndFile, fileContent, (err) => {
                    if (err) {
                        console.error('Error writing to file:', err);
                    } else {
                        console.log(`Content writing to ${item.nameOfFile}`);
                    }
                });
            });
        }
        
        function createModelFiles(pathFile) {
            modelContent.forEach(item => {
                const pathFolderAndFile = pathFile + "/" + item.nameOfFile;
                const fileContent = item.contentFile.join('');
                fs.writeFileSync(pathFolderAndFile, fileContent, (err) => {
                    if (err) {
                        console.error('Error writing to file:', err);
                    } else {
                        console.log(`Content writing to ${item.nameOfFile}`);
                    }
                });
            });
        }
        
        function createControllerFiles(pathFile) {
            controllerContent.forEach(item => {
                const pathFolderAndFile = pathFile + "/" + item.nameOfFile;
                const fileContent = item.contentFile.join('');
                fs.writeFileSync(pathFolderAndFile, fileContent, (err) => {
                    if (err) {
                        console.error('Error writing to file:', err);
                    } else {
                        console.log(`Content writing to ${item.nameOfFile}`);
                    }
                });
            });
        }
        
        // Create Root Folder
        const folderRootPath = path.join(__dirname, folderNameService);
        if (!fs.existsSync(folderRootPath)) {
            fs.mkdirSync(folderRootPath);
            console.log(`Folder '${folderNameService}' created.`);
        } else {
            console.log(`Folder '${folderNameService}' already exists.`);
        }
        
        // Create Routes Folder
        const folderRoutePath = path.join(__dirname, folderNameRoute)
        if (!fs.existsSync(folderRoutePath)) {
            fs.mkdirSync(folderRoutePath);
            console.log(`Folder '${folderNameRoute}' created.`);
            createRouteFiles(folderRoutePath);
        } else {
            console.log(`Folder '${folderNameRoute}' already exists.`);
            createRouteFiles(folderRoutePath);
        }
        
        // Create Model Folder
        const folderModelPath = path.join(__dirname, folderNameModel)
        if (!fs.existsSync(folderModelPath)) {
            fs.mkdirSync(folderModelPath);
            console.log(`Folder '${folderNameModel}' created.`);
            createModelFiles(folderModelPath);
        } else {
            console.log(`Folder '${folderNameModel}' already exists.`);
            createModelFiles(folderModelPath);
        }
        
        // Create Controller Folder
        const folderControllerPath = path.join(__dirname, folderNameController)
        if (!fs.existsSync(folderControllerPath)) {
            fs.mkdirSync(folderControllerPath);
            console.log(`Folder '${folderNameController}' created.`);
            createControllerFiles(folderControllerPath);
        } else {
            console.log(`Folder '${folderNameController}' already exists.`);
            createControllerFiles(folderControllerPath);
        }
    }
}
setTimeout(main, 5000);


