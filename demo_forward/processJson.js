const fs = require("fs");

function processJsonFile(jsonFileName) {
  const profileConfig = [];
  const dataTypeConfig = [];
  const packageConfig = [];

  function mapProfile(obj) {
    for (const item of obj) {
      if (item.$["xmi:type"] === "uml:Stereotype") {
        let objProfileMap = {
          id: "",
          name: "",
        };
        objProfileMap.id = item.$["xmi:id"];
        objProfileMap.name = item.$.name;
        profileConfig.push(objProfileMap);
      }
    }
    return profileConfig;
  }
  
  function mapDataType(obj) {
    let objDataTypeMap = {
      id: "",
      name: "",
    };
    objDataTypeMap.id = obj["xmi:id"];
    objDataTypeMap.name = obj.name;
    dataTypeConfig.push(objDataTypeMap);
    return dataTypeConfig;
  }
  
  function mapPackage(obj) {
    for (const item of obj) {
      if (item.$["xmi:type"] === "uml:Package") {
        if (item.$.name === "Model") {
          for (const elem of item.packagedElement) {
            let objModel = {
              nameId: "",
              name: "",
              stereotype: "",
              attribute: [],
              association: [],
              pairModel: [],
            };
            objModel.nameId = elem.$["xmi:id"];
            objModel.name = elem.$.name;
            objModel.stereotype = elem["xmi:Extension"].stereotype.$.value;
            if (elem["ownedAttribute"]?.length) {
              for (const attr of elem["ownedAttribute"]) {
                let objAttr = {
                  attrId: attr.$["xmi:id"],
                  attrName: attr.$.name,
                  attrType: attr.$.type || "",
                };
                objModel.attribute.push(objAttr);
              }
            }
            if (elem["ownedMember"]?.length) {
              for (const ass of elem["ownedMember"]) {
                if (ass.ownedEnd?.length) {
                  for (const e of ass.ownedEnd) {
                    let objAss = {
                      assId: e.$["xmi:id"],
                      modelId: e.$.type,
                      lowerValue: e.lowerValue.$.value,
                      upperValue: e.upperValue.$.value,
                    };
                    objModel.association.push(objAss);
                  }
                  let objPairModel = {
                    id1: ass.memberEnd[0].$["xmi:idref"],
                    id2: ass.memberEnd[1].$["xmi:idref"],
                  };
                  objModel.pairModel.push(objPairModel);
                }
              }
            } else if (elem["ownedMember"]) {
              if (elem["ownedMember"]?.ownedEnd?.length) {
                for (const e of elem["ownedMember"].ownedEnd) {
                  let objAss = {
                    assId: e.$["xmi:id"],
                    modelId: e.$.type,
                    lowerValue: e.lowerValue.$.value,
                    upperValue: e.upperValue.$.value,
                  };
                  objModel.association.push(objAss);
                }
                let objPairModel = {
                  id1: elem["ownedMember"].memberEnd[0].$["xmi:idref"],
                  id2: elem["ownedMember"].memberEnd[1].$["xmi:idref"],
                };
                objModel.pairModel.push(objPairModel);
              }
            }
            packageConfig.push(objModel);
          }
        } else if (item.$.name === "Route") {
          for (const elem of item.packagedElement) {
            let objResource = {
              nameId: "",
              name: "",
              stereotype: "",
              operation: [],
              routePath: []
            };
            objResource.nameId = elem.$["xmi:id"];
            objResource.name = elem.$.name;
            objResource.stereotype = elem["xmi:Extension"].stereotype.$.value;
            if (elem.ownedOperation?.length) {
              for (const opr of elem.ownedOperation) {
                let objOperation = {
                  nameOpr: opr.$.name,
                  method: opr["xmi:Extension"].stereotype.$.value,
                };
                objResource.operation.push(objOperation);
              }
            } else if (elem.ownedOperation) {
              let objOperation = {
                nameOpr: elem.ownedOperation.$.name,
                method: elem.ownedOperation["xmi:Extension"].stereotype.$.value,
              };
              objResource.operation.push(objOperation);
            }
            if (elem.ownedMember?.length) {
              for (const path of elem.ownedMember) {
                let objRoute = {
                  fromPath: elem.$.name,
                  param: path.$.name,
                  startPath: path.$.client,
                  endPath: path.$.supplier,                  
                };
                objResource.routePath.push(objRoute);
              }
            } else if (elem.ownedMember) {
              let objRoute = {
                fromPath: elem.$.name,
                param: elem.ownedMember.$.name,
                startPath: elem.ownedMember.$.client,
                endPath: elem.ownedMember.$.supplier,
              };
              objResource.routePath.push(objRoute);
            }
            packageConfig.push(objResource);
          }
        } else if (item.$.name === "Controller") {
          for (const elem of item.packagedElement) {
            let objController = {
              nameId: "",
              name: "",
              stereotype: "",
              operation: [],
            };
            objController.nameId = elem.$["xmi:id"];
            objController.name = elem.$.name;
            objController.stereotype = elem["xmi:Extension"].stereotype.$.value;
            if (elem.ownedOperation?.length) {
              for (const opr of elem.ownedOperation) {
                let objOperation = {
                  nameOpr: opr.$.name,
                  method: opr["xmi:Extension"].stereotype.$.value,
                };
                objController.operation.push(objOperation);
              }
            } else if (elem.ownedOperation) {
              let objOperation = {
                nameOpr: elem.ownedOperation.$.name,
                method:
                  elem.ownedOperation["xmi:Extension"]?.stereotype.$.value ||
                  "",
              };
              objController.operation.push(objOperation);
            }
            packageConfig.push(objController);
          }
        } else if (item.$.name === "Database") {
          let objDatabase = {
            nameId: "",
            name: "",
            stereotype: "",
          };
          objDatabase.nameId = item.packagedElement.$["xmi:id"];
          objDatabase.name = item.packagedElement.$.name;
          objDatabase.stereotype = item.packagedElement["xmi:Extension"].stereotype.$.value;
          packageConfig.push(objDatabase);
        }
      }
    }
    return packageConfig;
  }

  try {
    // Read JSON file
    const jsonData = fs.readFileSync(jsonFileName, "utf-8");
    // Parse JSON
    const jsonObj = JSON.parse(jsonData);
    if (
      jsonObj["xmi:XMI"]["uml:Model"].$["xmi:type"] === "uml:Model" &&
      jsonObj["xmi:XMI"]["uml:Model"].$.name === "RootModel"
    ) {
      // Mapping Profile
      const uml = jsonObj["xmi:XMI"]["uml:Model"].packagedElement;
      let package;
      for (const obj of uml) {
        if (obj.$["xmi:type"] === "uml:Profile") {
          mapProfile(obj.packagedElement);
        } else if (obj.$["xmi:type"] === "uml:DataType") {
          mapDataType(obj.$);
        } else if (obj.$["xmi:type"] === "uml:Model") {
          package = obj.packagedElement;
        }
      }
      mapPackage(package);
    }
  } catch (error) {
    console.error("Error:", error);
  }

  return {
    profileConfig,
    dataTypeConfig,
    packageConfig,
  };
}

module.exports = processJsonFile;
