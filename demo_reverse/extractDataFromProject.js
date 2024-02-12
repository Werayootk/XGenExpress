const fs = require('fs').promises;
const path = require('path');

async function dataInRoute(pathFile) {
  try {
    const fileRouteContent = await fs.readFile(pathFile, 'utf-8');
    // Define regex patterns
    const resourcePattern = /@route\s*:\s*\[([^\]]+)\]/;
    const methodNamePattern = /@methodName\s*:\s*\[([^\]]+)\]/;
    const controllerNamePattern = /@controllerName\s*:\s*\[([^\]]+)\]/;
    const dependencyRegex = /@dependency\s*:\s*(\[[\s\S]*?\])/;
    
    // Extract matches using regex
    const resourceMatches = fileRouteContent.match(resourcePattern);
    const methodNameMatches = fileRouteContent.match(methodNamePattern);
    const controllerNameMatches = fileRouteContent.match(
      controllerNamePattern
    );
    const dependencyMatch = fileRouteContent.match(dependencyRegex);

    // Convert matches to arrays
    const resource = resourceMatches
      ? JSON.parse(`[${resourceMatches[1]}]`)
      : [];
    const methodName = methodNameMatches
      ? JSON.parse(`[${methodNameMatches[1]}]`)
      : [];
    const controllerName = controllerNameMatches
      ? JSON.parse(`[${controllerNameMatches[1]}]`)
      : [];
    const dependencyData = dependencyMatch
    ? JSON.parse(`[${dependencyMatch[1]}]`)
      : [];
    dependencyName = dependencyData[0];
    // Create the final object
    const data = {
      resource,
      dependencyName,
      methodName,
      controllerName,
    };
    return await data;
  } catch (err) {
    console.error('Error reading the file:', err.message);
  }
}

async function dataInModel(pathFile) {
  try {
    const fileModelContent = await fs.readFile(pathFile, 'utf-8');
    // Define regex patterns
    const modelPattern = /@model\s*:\s*\[([^\]]+)\]/;
    const databasePattern = /@database\s*:\s*\[([^\]]+)\]/;
    const attributePattern = /@attribute\s*:\s*\[([^\]]+)\]/;
    const relationsPattern = /@relations\s*:\s*\[([^\]]+)\]/;

    // Extract matches using regex
    const modelMatches = fileModelContent.match(modelPattern);
    const databaseMatches = fileModelContent.match(databasePattern);
    const attributeMatches = fileModelContent.match(attributePattern);
    const relationsMatches = fileModelContent.match(relationsPattern);
    // Convert matches to arrays
    const model = modelMatches ? JSON.parse(`[${modelMatches[1]}]`) : [];
    const database = databaseMatches
      ? JSON.parse(`[${databaseMatches[1]}]`)
      : [];
    const attribute = attributeMatches
      ? JSON.parse(`[${attributeMatches[1]}]`)
      : [];
    const relations = relationsMatches
      ? JSON.parse(`[${relationsMatches[1]}]`)
      : [];

    // Create the final object
    const data = {
      model,
      database,
      attribute,
      relations,
    };
    return await data;
  } catch (err) {
    console.error('Error reading the file:', err.message);
  }
}

async function dataInController(pathFile) {
  try {
    const fileControllerContent = await fs.readFile(pathFile, 'utf-8');
    // Define regex patterns
    const controllerNamePattern = /@controllerName\s*:\s*\[([^\]]+)\]/;
    const classNamePattern = /@className\s*:\s*\[([^\]]+)\]/;

    // Extract matches using regex
    const controllerNameMatches = fileControllerContent.match(
      controllerNamePattern
    );
    const classNameMatches = fileControllerContent.match(classNamePattern);

    // Convert matches to arrays
    const controllerName = controllerNameMatches
      ? JSON.parse(`[${controllerNameMatches[1]}]`)
      : [];
    const className = classNameMatches
      ? JSON.parse(`[${classNameMatches[1]}]`)
      : [];

    // Create the final object
    const data = {
      controllerName,
      className,
    };
    return await data;
  } catch (err) {
    console.error('Error reading the file:', err.message);
  }
}

async function extractDataFromProject(projectPath) {
  const modelData = [];
  const controllerData = [];
  const routeData = [];

  try {
    // Specify the subfolders you want to include
    const targetSubfolders = ['models', 'controllers', 'routes'];
    // Read the contents of the main folder
    const subfolders = await fs.readdir(projectPath);

    // Filter the subfolders to include only the target subfolders
    const filteredSubfolders = subfolders.filter((subfolder) =>
      targetSubfolders.includes(subfolder)
    );

    // Loop through subfolders
    await Promise.all(
      filteredSubfolders.map(async (subfolder) => {
        const subfolderPath = path.join(projectPath, subfolder);

        // Check if it's a directory
        const isDirectory = (await fs.stat(subfolderPath)).isDirectory();

        if (isDirectory) {
          // Read the contents of the subfolder
          const files = await fs.readdir(subfolderPath);

          // Loop through the files in the subfolder
          await Promise.all(
            files.map(async (file) => {
              // You can do something with each file here
              if (file.includes('.model.js')) {
                const filePath = path.join(subfolderPath, file);
                const result = await dataInModel(filePath);
                modelData.push(result);
              } else if (file.includes('.controller.js')) {
                const filePath = path.join(subfolderPath, file);
                const result = await dataInController(filePath);
                controllerData.push(result);
              } else if (file.includes('.route.js')) {
                const filePath = path.join(subfolderPath, file);
                const result = await dataInRoute(filePath);
                routeData.push(result);
              }
            })
          );
        }
      })
    );
    return {
      modelData,
      controllerData,
      routeData,
    };
  } catch (error) {
    console.error('Error reading the file:', error.message);
  }
}

module.exports = extractDataFromProject;
