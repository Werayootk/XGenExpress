// Template Router
function generateRouter(data) {
  let result = [];
  const mapProfileObj = data.profile
    .filter((item) =>
      ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'Route'].includes(item.name)
    )
    .reduce((acc, item) => {
      acc[item.id] = item.name;
      return acc;
    }, {});
  const filteredData = data.package.filter(
    (item) => mapProfileObj[item.stereotype] === 'Route'
  );
  let endPathList = [];
  filteredData.forEach((element) => {
    if (element.routePath.length != 0) {
      element.routePath.forEach((path) => endPathList.push(path.endPath));
    }
  });

  const idToNameMap = {};
  filteredData.forEach((obj) => {
    idToNameMap[obj.nameId] = obj.name;
  });

  let allDependency = [];
  filteredData.forEach((e) => {
    let pathNext = [];
    if (e.routePath.length != 0) {
      e.routePath.forEach((p) => {
        let obj = {
          name: e.name,
          value: p.param,
          supplier: idToNameMap[p.endPath],
        };
        pathNext.push(obj);
      });
      allDependency.push(pathNext);
    }
  });

  filteredData.forEach((element) => {
    let newPath = {
      nameOfFile: '',
      contentFile: [],
      contentWithComment: [],
    };

    if (!endPathList.includes(element.nameId)) {
      newPath.nameOfFile = `${element.name
        .toLowerCase()
        .replace('route', '')}.route.js`;
      let dependency = [];
      let resource = [];
      let methodName = [];
      let controllerName = [];
      let content = '';
      let method = '';
      let path = '';
      let controller = '';
      let templateRoute = '';
      element.operation.forEach((opr) => {
        method = mapProfileObj[opr.method];
        path = element.name.toLowerCase().replace('route', '');
        controller = opr.nameOpr;
        templateRoute = `\nrouter.${method.toLowerCase()}("/${path}/${controller}", ${controller});`;
        content = templateRoute;
        resource.push(element.name);
        methodName.push(method);
        controllerName.push(controller);
        newPath.contentFile.push(content);
      });
      const uniqueCombinations = new Set();
      function nextRoutePath(route, currentPath) {
        if (route.length == 0) {
          return;
        }
        for (const iterator of route) {
          for (const elem of filteredData) {
            if (iterator.endPath == elem.nameId) {
              allDependency.forEach((i) => {
                i.forEach((j) => {
                  if (iterator.fromPath == j.name) {
                    const combination = `${j.name}-${j.value}-${j.supplier}`;
                    if (!uniqueCombinations.has(combination)) {
                      uniqueCombinations.add(combination);
                      dependency.push(j);
                    }
                  }
                });
              });
              elem.operation.forEach((elem_opr) => {
                resource.push(elem.name);
                method = mapProfileObj[elem_opr.method];
                methodName.push(method);
                isCheckPath = iterator.param;
                let defineNewPath = '';
                if (isCheckPath == '/') {
                  defineNewPath = '';
                } else {
                  defineNewPath = iterator.param;
                }
                path = `${currentPath}/${elem.name
                  .toLowerCase()
                  .replace('route', '')}${defineNewPath}`;
                controller = elem_opr.nameOpr;
                templateRoute = `\nrouter.${method.toLowerCase()}("/${path}/${controller}", ${controller});`;
                content = templateRoute;
                controllerName.push(controller);
                newPath.contentFile.push(content);
              });
              nextRoutePath(
                elem.routePath,
                path.toLowerCase().replace('route', '')
              );
            }
          }
        }
      }
      nextRoutePath(
        element.routePath,
        element.name.toLowerCase().replace('route', '')
      );
      let commentSection = `
/**
 * @route :${JSON.stringify(resource)}
 * @methodName :${JSON.stringify(methodName)}
 * @controllerName :${JSON.stringify(controllerName)}
 * @dependency :${JSON.stringify(dependency)}
 */

const express = require("express");

const router = express.Router();
        `;
      let exportSection = `

module.exports = router;
      `;
      const concatenatedString = newPath.contentFile.join('');
      commentSection = commentSection + concatenatedString + exportSection;
      newPath.contentWithComment.push(commentSection);
      result.push(newPath);
    }
  });
  return result;
}

// Template Model
function generateModel(data) {
  let result = [];
  const mapType = data.type
    .filter((item) =>
      ['String', 'Boolean', 'Integer', 'Float', 'Date', 'Id'].includes(
        item.name
      )
    )
    .reduce((acc, item) => {
      acc[item.id] = item.name;
      return acc;
    }, {});
  const mapProfile = data.profile
    .filter((item) => ['Model', 'Database'].includes(item.name))
    .reduce((acc, item) => {
      acc[item.id] = item.name;
      return acc;
    }, {});

  const filteredDataModel = data.package.filter(
    (item) => mapProfile[item.stereotype] === 'Model'
  );
  const idToNameMap = {};
  filteredDataModel.forEach((obj) => {
    idToNameMap[obj.nameId] = obj.name;
  });
  const filteredDataDB = data.package.filter(
    (item) => mapProfile[item.stereotype] === 'Database'
  );
  const isSQL = filteredDataDB[0].name === 'MySql';
  let database = [];
  database.push(filteredDataDB[0].name);

  if (isSQL) {
    filteredDataModel.forEach((element) => {
      let newModel = {
        nameOfFile: '',
        contentFile: [],
      };
      newModel.nameOfFile = `${element.name
        .toLowerCase()
        .replace('model', '')}.model.js`;
      let model = [];
      model.push(element.name);
      let relations = [];
      if (element.pairModel?.length) {
        for (const a of element.pairModel) {
          const filteredRelations = element.association.filter(
            (item) => item.assId === a.id2
          );
          relations.push(idToNameMap[filteredRelations[0].modelId]);
        }
      }
      let fieldTemplate = '';
      let attribute = [];
      if (element.attribute?.length != 0) {
        element.attribute.forEach((attr) => {
          attribute.push({ name: attr.attrName, type: mapType[attr.attrType] });
          fieldTemplate += `
${attr.attrName}: {
type: DataTypes.${mapType[attr.attrType].toUpperCase()},
},`;
        });
        let commentSection = `
/**
 * @model :${JSON.stringify(model)}
 * @database :${JSON.stringify(database)}
 * @attribute :${JSON.stringify(attribute)}
 * @relations :${JSON.stringify(relations)}
 */
      `;
        let modelTemplate = `
${commentSection}
module.exports = (sequelize, DataTypes) => {
  const ${element.name.replace('Model', '')} = sequelize.define(
    "${element.name.replace('Model', '')}",
    {
      ${fieldTemplate}
    },{
      timestamps: false
    }
  );

  return ${element.name.replace('Model', '')};
};
      `;
        newModel.contentFile.push(modelTemplate);
        result.push(newModel);
      }
    });
  } else {
    filteredDataModel.forEach((element) => {
      let newModel = {
        nameOfFile: '',
        contentFile: [],
      };
      newModel.nameOfFile = `${element.name
        .toLowerCase()
        .replace('model', '')}.model.js`;
      let model = [];
      model.push(element.name);
      let relations = [];
      if (element.pairModel?.length) {
        for (const a of element.pairModel) {
          const filteredRelations = element.association.filter(
            (item) => item.assId === a.id2
          );
          relations.push(idToNameMap[filteredRelations[0].modelId]);
        }
      }
      let fieldTemplate = '';
      let attribute = [];
      if (element.attribute?.length != 0) {
        element.attribute.forEach((attr) => {
          attribute.push({ name: attr.attrName, type: mapType[attr.attrType] });
          fieldTemplate += `
  ${attr.attrName}: {
    type: ${mapType[attr.attrType] || ''}
  },
    `;
        });
        let commentSection = `
/**
 * @model :${JSON.stringify(model)}
 * @database :${JSON.stringify(database)}
 * @attribute :${JSON.stringify(attribute)}
 * @relations :${JSON.stringify(relations)}
 */
  `;
        let modelTemplate = `
${commentSection}
const mongoose = require("mongoose");
const ${element.name.toLowerCase().replace('model', '') + 'Schema'} = mongoose.Schema(
  {
    ${fieldTemplate}
  },
  {
    timestamps: true,
  }
);
const ${element.name.replace('Model', '')} = mongoose.model("${element.name.replace('Model', '')}", ${element.name.toLowerCase().replace('model', '') + 'Schema'});
module.exports = ${element.name.replace('Model', '')};
  `;
  // let modelTemplate = `
  // ${commentSection}
  // class ${element.name.replace('Model', '')} {
  //   constructor() {
  //     this.schema = new mongoose.Schema({
  //       ${fieldTemplate}              
  //     });
  //     this.model = mongoose.model('${element.name.replace(
  //       'Model',
  //       ''
  //     )}', this.schema);
  //   }
  // }
  
  // module.exports = ${element.name.replace('Model', '')};
  //   `;
        newModel.contentFile.push(modelTemplate);
        result.push(newModel);
      }
    });
  }
  return result;
}

// Template Controller
function generateController(data) {
  let result = [];
  const mapProfile = data.profile
    .filter((item) => ['Controller'].includes(item.name))
    .reduce((acc, item) => {
      acc[item.id] = item.name;
      return acc;
    }, {});
  const filteredData = data.package.filter(
    (item) => mapProfile[item.stereotype] === 'Controller'
  );
  filteredData.forEach((element) => {
    let newController = {
      nameOfFile: '',
      contentFile: [],
    };
    let controllerTemplate = '';
    newController.nameOfFile = `${element.name
      .toLowerCase()
      .replace('controller', '')}.controller.js`;
    let className = [];
    className.push(element.name);
    let controllerContent = '';
    if (element.operation?.length != 0) {
      let controllerName = [];
      element.operation.forEach((opr) => {
        controllerName.push(opr.nameOpr);
        controllerTemplate +=
          `${opr.nameOpr},\n`;
        let templateController = `
const ${opr.nameOpr} = asyncHandler(async (req, res) => { })\n`;
        controllerContent += templateController;
      });
      let commentSection = `
/**
 * @controllerName :${JSON.stringify(controllerName)}
 * @className :${JSON.stringify(className)}
 */

const asyncHandler = require("express-async-handler");
      `;

      let exportSection = `
module.exports = {
  ${controllerTemplate}
};
      `
      let contentWithComment = commentSection + controllerContent + exportSection;
      newController.contentFile.push(contentWithComment);
    }
    result.push(newController);
  });
  return result;
}

module.exports = {
  generateRouter,
  generateModel,
  generateController,
};
