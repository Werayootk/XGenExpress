const fs = require('fs');

const profile_for_nodejs = `
<packagedElement xmi:id="AAAAAAGMmYYazF13nfo=" name="UML_profile_for_NodeJs" visibility="public" xmi:type="uml:Profile">
<packagedElement xmi:id="AAAAAAGMmc+pm15OkLo=" name="Route" visibility="public" isAbstract="false" isFinalSpecialization="false" isLeaf="false" xmi:type="uml:Stereotype" isActive="false">
  <ownedMember xmi:id="AAAAAAGNm/uVCvvZQa4=" xmi:type="uml:Extension">
    <memberEnd xmi:idref="AAAAAAGMtN6dTFg9ixA="/>
    <ownedEnd xmi:id="AAAAAAGNm/uVCvva+cQ=" xmi:type="uml:ExtensionEnd" type="AAAAAAGMmc+pm15OkLo="/>
  </ownedMember>
  <ownedAttribute xmi:id="AAAAAAGMtN6dTFg9ixA=" xmi:type="uml:Property" name="base_Class" association="AAAAAAGNm/uVCvvZQa4=">
    <type href="http://schema.omg.org/spec/UML/2.0/uml.xml#Class"/>
  </ownedAttribute>
</packagedElement>
<packagedElement xmi:id="AAAAAAGMmdUuwV9zed8=" name="HTTPMethod" visibility="public" isAbstract="false" isFinalSpecialization="false" isLeaf="false" xmi:type="uml:Stereotype" isActive="false">
  <ownedMember xmi:id="AAAAAAGNm/uVCvvb7hU=" xmi:type="uml:Extension">
    <memberEnd xmi:idref="AAAAAAGMmfkBCWv/o80="/>
    <ownedEnd xmi:id="AAAAAAGNm/uVCvvcRj0=" xmi:type="uml:ExtensionEnd" type="AAAAAAGMmdUuwV9zed8="/>
  </ownedMember>
  <ownedAttribute xmi:id="AAAAAAGMmfkBCWv/o80=" xmi:type="uml:Property" name="base_Class" association="AAAAAAGNm/uVCvvb7hU=">
    <type href="http://schema.omg.org/spec/UML/2.0/uml.xml#Class"/>
  </ownedAttribute>
</packagedElement>
<packagedElement xmi:id="AAAAAAGMmdhx6F/AjOw=" name="Controller" visibility="public" isAbstract="false" isFinalSpecialization="false" isLeaf="false" xmi:type="uml:Stereotype" isActive="false">
  <ownedMember xmi:id="AAAAAAGNm/uVCvvdWic=" xmi:type="uml:Extension">
    <memberEnd xmi:idref="AAAAAAGMtN6oOVhOzPk="/>
    <ownedEnd xmi:id="AAAAAAGNm/uVCvvea48=" xmi:type="uml:ExtensionEnd" type="AAAAAAGMmdhx6F/AjOw="/>
  </ownedMember>
  <ownedAttribute xmi:id="AAAAAAGMtN6oOVhOzPk=" xmi:type="uml:Property" name="base_Class" association="AAAAAAGNm/uVCvvdWic=">
    <type href="http://schema.omg.org/spec/UML/2.0/uml.xml#Class"/>
  </ownedAttribute>
</packagedElement>
<packagedElement xmi:id="AAAAAAGMmdjJmGABFtE=" name="Model" visibility="public" isAbstract="false" isFinalSpecialization="false" isLeaf="false" xmi:type="uml:Stereotype" isActive="false">
  <ownedMember xmi:id="AAAAAAGNm/uVCvvf0jw=" xmi:type="uml:Extension">
    <memberEnd xmi:idref="AAAAAAGMtN607FhfT5Q="/>
    <ownedEnd xmi:id="AAAAAAGNm/uVCvvg8aI=" xmi:type="uml:ExtensionEnd" type="AAAAAAGMmdjJmGABFtE="/>
  </ownedMember>
  <ownedAttribute xmi:id="AAAAAAGMtN607FhfT5Q=" xmi:type="uml:Property" name="base_Class" association="AAAAAAGNm/uVCvvf0jw=">
    <type href="http://schema.omg.org/spec/UML/2.0/uml.xml#Class"/>
  </ownedAttribute>
</packagedElement>
<packagedElement xmi:id="AAAAAAGMmgLI/3Kpf3A=" name="GET" visibility="public" isAbstract="false" isFinalSpecialization="false" isLeaf="false" xmi:type="uml:Stereotype" isActive="false">
  <generalization xmi:id="AAAAAAGMmgO7DXOiR3k=" visibility="public" xmi:type="uml:Generalization" specific="AAAAAAGMmgLI/3Kpf3A=" general="AAAAAAGMmdUuwV9zed8="/>
</packagedElement>
<packagedElement xmi:id="AAAAAAGMmgLxTHLXFS4=" name="POST" visibility="public" isAbstract="false" isFinalSpecialization="false" isLeaf="false" xmi:type="uml:Stereotype" isActive="false">
  <generalization xmi:id="AAAAAAGMmgOvtXORM3c=" visibility="public" xmi:type="uml:Generalization" specific="AAAAAAGMmgLxTHLXFS4=" general="AAAAAAGMmdUuwV9zed8="/>
</packagedElement>
<packagedElement xmi:id="AAAAAAGMmgMTNnMFpHg=" name="DELETE" visibility="public" isAbstract="false" isFinalSpecialization="false" isLeaf="false" xmi:type="uml:Stereotype" isActive="false">
  <generalization xmi:id="AAAAAAGMmgPGgnOz878=" visibility="public" xmi:type="uml:Generalization" specific="AAAAAAGMmgMTNnMFpHg=" general="AAAAAAGMmdUuwV9zed8="/>
</packagedElement>
<packagedElement xmi:id="AAAAAAGMmgM/jHMzGcI=" name="PUT" visibility="public" isAbstract="false" isFinalSpecialization="false" isLeaf="false" xmi:type="uml:Stereotype" isActive="false">
  <generalization xmi:id="AAAAAAGMmgPlxHPVg88=" visibility="public" xmi:type="uml:Generalization" specific="AAAAAAGMmgM/jHMzGcI=" general="AAAAAAGMmdUuwV9zed8="/>
</packagedElement>
<packagedElement xmi:id="AAAAAAGMmgNrlHNizAM=" name="PATCH" visibility="public" isAbstract="false" isFinalSpecialization="false" isLeaf="false" xmi:type="uml:Stereotype" isActive="false">
  <generalization xmi:id="AAAAAAGMmgRKFnP6RUQ=" visibility="public" xmi:type="uml:Generalization" specific="AAAAAAGMmgNrlHNizAM=" general="AAAAAAGMmdUuwV9zed8="/>
</packagedElement>
<packagedElement xmi:id="AAAAAAGMmgYuNHQtJpU=" name="Database" visibility="public" isAbstract="false" isFinalSpecialization="false" isLeaf="false" xmi:type="uml:Stereotype" isActive="false">
  <ownedMember xmi:id="AAAAAAGNm/uVCvvh8n4=" xmi:type="uml:Extension">
    <memberEnd xmi:idref="AAAAAAGMtN7AQVhwLFQ="/>
    <ownedEnd xmi:id="AAAAAAGNm/uVCvviagE=" xmi:type="uml:ExtensionEnd" type="AAAAAAGMmgYuNHQtJpU="/>
  </ownedMember>
  <ownedAttribute xmi:id="AAAAAAGMtN7AQVhwLFQ=" xmi:type="uml:Property" name="base_Class" association="AAAAAAGNm/uVCvvh8n4=">
    <type href="http://schema.omg.org/spec/UML/2.0/uml.xml#Class"/>
  </ownedAttribute>
</packagedElement>
<packagedElement xmi:id="AAAAAAGMt9vIbknkDC0=" name="ResourcePath" visibility="public" isAbstract="false" isFinalSpecialization="false" isLeaf="false" xmi:type="uml:Stereotype" isActive="false">
  <ownedMember xmi:id="AAAAAAGNm/uVC/vjjUM=" xmi:type="uml:Extension">
    <memberEnd xmi:idref="AAAAAAGMt9vWmUoQc98="/>
    <ownedEnd xmi:id="AAAAAAGNm/uVC/vkRfw=" xmi:type="uml:ExtensionEnd" type="AAAAAAGMt9vIbknkDC0="/>
  </ownedMember>
  <ownedAttribute xmi:id="AAAAAAGMt9vWmUoQc98=" xmi:type="uml:Property" name="base_Class" association="AAAAAAGNm/uVC/vjjUM=">
    <type href="http://schema.omg.org/spec/UML/2.0/uml.xml#Class"/>
  </ownedAttribute>
</packagedElement>
<packagedElement xmi:id="AAAAAAGNm4m4d2OgCNQ=" name="API" visibility="public" isAbstract="false" isFinalSpecialization="false" isLeaf="false" xmi:type="uml:Stereotype" isActive="false">
  <ownedMember xmi:id="AAAAAAGNm/uVC/vlsWs=" xmi:type="uml:Extension">
    <memberEnd xmi:idref="AAAAAAGNm4tWemPOfdU="/>
    <ownedEnd xmi:id="AAAAAAGNm/uVC/vm4U0=" xmi:type="uml:ExtensionEnd" type="AAAAAAGNm4m4d2OgCNQ="/>
  </ownedMember>
  <ownedAttribute xmi:id="AAAAAAGNm4tWemPOfdU=" xmi:type="uml:Property" name="base_Class" association="AAAAAAGNm/uVC/vlsWs=">
    <type href="http://schema.omg.org/spec/UML/2.0/uml.xml#Class"/>
  </ownedAttribute>
</packagedElement>
<packagedElement xmi:id="AAAAAAGNm5lfNROkcaQ=" name="ControllerPackage" visibility="public" isAbstract="false" isFinalSpecialization="false" isLeaf="false" xmi:type="uml:Stereotype" isActive="false">
  <ownedMember xmi:id="AAAAAAGNm/uVC/vnuec=" xmi:type="uml:Extension">
    <memberEnd xmi:idref="AAAAAAGNm5nWSRQxsbc="/>
    <ownedEnd xmi:id="AAAAAAGNm/uVC/vo6qU=" xmi:type="uml:ExtensionEnd" type="AAAAAAGNm5lfNROkcaQ="/>
  </ownedMember>
  <ownedAttribute xmi:id="AAAAAAGNm5nWSRQxsbc=" xmi:type="uml:Property" name="base_Class" association="AAAAAAGNm/uVC/vnuec=">
    <type href="http://schema.omg.org/spec/UML/2.0/uml.xml#Class"/>
  </ownedAttribute>
</packagedElement>
<packagedElement xmi:id="AAAAAAGNm5l9ehPS+rU=" name="ModelPackage" visibility="public" isAbstract="false" isFinalSpecialization="false" isLeaf="false" xmi:type="uml:Stereotype" isActive="false">
  <ownedMember xmi:id="AAAAAAGNm/uVC/vp9cc=" xmi:type="uml:Extension">
    <memberEnd xmi:idref="AAAAAAGNm5nicxRCy/c="/>
    <ownedEnd xmi:id="AAAAAAGNm/uVC/vqFxY=" xmi:type="uml:ExtensionEnd" type="AAAAAAGNm5l9ehPS+rU="/>
  </ownedMember>
  <ownedAttribute xmi:id="AAAAAAGNm5nicxRCy/c=" xmi:type="uml:Property" name="base_Class" association="AAAAAAGNm/uVC/vp9cc=">
    <type href="http://schema.omg.org/spec/UML/2.0/uml.xml#Class"/>
  </ownedAttribute>
</packagedElement>
<packagedElement xmi:id="AAAAAAGNm5mxXRQB3tc=" name="DatabasePackage" visibility="public" isAbstract="false" isFinalSpecialization="false" isLeaf="false" xmi:type="uml:Stereotype" isActive="false">
  <ownedMember xmi:id="AAAAAAGNm/uVC/vrprg=" xmi:type="uml:Extension">
    <memberEnd xmi:idref="AAAAAAGNm5nuPRRTAr8="/>
    <ownedEnd xmi:id="AAAAAAGNm/uVC/vsm2c=" xmi:type="uml:ExtensionEnd" type="AAAAAAGNm5mxXRQB3tc="/>
  </ownedMember>
  <ownedAttribute xmi:id="AAAAAAGNm5nuPRRTAr8=" xmi:type="uml:Property" name="base_Class" association="AAAAAAGNm/uVC/vrprg=">
    <type href="http://schema.omg.org/spec/UML/2.0/uml.xml#Class"/>
  </ownedAttribute>
</packagedElement>
</packagedElement>
`;

const type_for_uml = `
<packagedElement xmi:id="String_id" name="String" xmi:type="uml:DataType"/>
<packagedElement xmi:id="Boolean_id" name="Boolean" xmi:type="uml:DataType"/>
<packagedElement xmi:id="Integer_id" name="Integer" xmi:type="uml:DataType"/>
<packagedElement xmi:id="Float_id" name="Float" xmi:type="uml:DataType"/>
<packagedElement xmi:id="Date_id" name="Date" xmi:type="uml:DataType"/>
<packagedElement xmi:id="Id_id" name="Id" xmi:type="uml:DataType"/>
`;

const core_template = `
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.1" xmlns:uml="http://schema.omg.org/spec/UML/2.0" xmlns:xmi="http://schema.omg.org/spec/XMI/2.1">
	<xmi:Documentation exporter="StarUML" exporterVersion="2.0"/>
	<uml:Model xmi:id="AAAAAAGNF26N3wz4sgM=" xmi:type="uml:Model" name="RootModel">
		<!-- <<UML_MODEL>> -->
	    <!-- <<PROFILE_NODE.JS>> -->
        <!-- <<type_for_uml>> -->
    </uml:Model>
</xmi:XMI>
`;

const type_model = [
  { String_id: 'String' },
  { Boolean_id: 'Boolean' },
  { Integer_id: 'Integer' },
  { Float_id: 'Float' },
  { Date_id: 'Date' },
  { Id_id: 'Id' },
];

function mapType(inputType) {
  for (const typeObj of type_model) {
    const [typeId, type] = Object.entries(typeObj)[0];
    if (type === inputType) {
      return typeId;
    }
  }
  return inputType; // Return the original type if not found in type_model
}

function generateId() {
  let lengthId = 16;
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < lengthId; i++) {
    const randomChar = characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
    id += randomChar;
  }
  return btoa(id);
}

function mapToID(resources) {
  const resultMapID = [];
  resources.forEach((resource) => {
    resultMapID.push({ [resource]: generateId() });
  });
  return resultMapID;
}

function mappingController(data) {
  let result = ``;
  let resultEachClass = [];
  const packaged_controller = `
  <packagedElement xmi:id="${generateId()}" name="Controller" xmi:type="uml:Package">
    <!-- <<CONTROLLER_ELEM>> -->
  </packagedElement>
    `;
  data.forEach((element) => {
    let operationMapped = [];
    let controllerPackaged = `
            <packagedElement xmi:id="${generateId()}" name="${element.className[0]}" xmi:type="uml:Class">
                <!-- <<CONTROLLER_OPERATION>> -->
            </packagedElement>
          `;
    element.controllerName.forEach((elem) => {
      let operationMap = `<ownedOperation xmi:id="${generateId()}" name="${elem}" xmi:type="uml:Operation"/>`;
      operationMapped.push(operationMap);
    });
    const operationContent = operationMapped.join('');
    const controllerMapped = controllerPackaged.replace(
      '<!-- <<CONTROLLER_OPERATION>> -->',
      operationContent
    );
    resultEachClass.push(controllerMapped);
  });
  let resultClass = resultEachClass.join('');
  result = packaged_controller.replace(
    '<!-- <<CONTROLLER_ELEM>> -->',
    resultClass
  );
  return result;
}

function mappingRoute(data) {
  let result = ``;
  let resultEachPath = [];
  let packaged_resource = `
  <packagedElement xmi:id="${generateId()}" name="Route" xmi:type="uml:Package">
    <!-- <<RESOURCE_ELEM>> -->
  </packagedElement>
  `;
  const filteredDuplicate = [];
  data.forEach((element) => {
    const seenKeys = {};
    element.resource.forEach((obj) => {
      const key = obj;
      if (!seenKeys[key]) {
        seenKeys[key] = true;
        filteredDuplicate.push(obj);
      }
    });
  });

  const outputMappedID = mapToID(filteredDuplicate);
  let mapOperation = '';
  let mapRoute = '';
  let resultMappedOperation = [];
  let resultMappedRoute = [];

  outputMappedID.forEach((item) => {
    resultMappedRoute = [];
    resultMappedOperation = [];
    const uniqueCombinations = new Set();
    let packaged_route = `
    <packagedElement xmi:id="${Object.values(item)[0]}" name="${Object.keys(item)[0]}" xmi:type="uml:Class">
      <!-- <<ROUTE_ELEM>> -->
    </packagedElement>
    `;

    // Mapped Route
    for (let i = 0; i < data.length; i++) {
      data[i].dependencyName.forEach((j) => {
        const combination = `${j.name}-${j.value}-${j.supplier}`;
        if (Object.keys(item)[0] == j.name) {
          if (!uniqueCombinations.has(combination)) {
            uniqueCombinations.add(combination);
            const supplierValue = outputMappedID.find((obj) =>
              obj.hasOwnProperty(j.supplier)
            )[j.supplier];
            mapRoute = `<ownedMember xmi:id="${generateId()}=" name="${j.value}" xmi:type="uml:Dependency" client="${
              Object.values(item)[0]
            }" supplier="${supplierValue}"/>
            `;
            resultMappedRoute.push(mapRoute);
          }
        }
      });
    }
    // Mapped Operation
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].resource.length; j++) {
        if (data[i].resource[j] == Object.keys(item)[0]) {
          mapOperation = `<ownedOperation xmi:id="${generateId()}" name="${
            data[i].controllerName[j]
          }" xmi:type="uml:Operation"/>
          `;
          resultMappedOperation.push(mapOperation);
        }
      }
    }
    const concatenatedString =
      resultMappedRoute.join('') + resultMappedOperation.join('');
    packaged_route = packaged_route.replace(
      '<!-- <<ROUTE_ELEM>> -->',
      concatenatedString
    );
    resultEachPath.push(packaged_route);
  });
  result = packaged_resource.replace(
    '<!-- <<RESOURCE_ELEM>> -->',
    resultEachPath
  );
  return result;
}

function mappingModel(data) {
  let result = ``;
  let resultEachModel = [];
  let resultDB = [];
  let packaged_model = `
  <packagedElement xmi:id="${generateId()}" name="Model" xmi:type="uml:Package">
    <!-- <<MODEL_ELEM>> -->
  </packagedElement>
  `;
  let packaged_database = `
  <packagedElement xmi:id="${generateId()}" name="Database" xmi:type="uml:Package">
    <!-- <<DATABASE_ELEM>> -->
  </packagedElement>
  `;
  let packaged_db = `
  <packagedElement xmi:id="${generateId()}" name="${data[0].database[0]}" xmi:type="uml:Class">
    <!-- <<DB_ELEM>> -->
  </packagedElement>`;
  let attr_db = `
  <ownedAttribute xmi:id="${generateId()}" name="${data[0].database[0]}" xmi:type="uml:Property"/>
  `;
  packaged_db = packaged_db.replace('<!-- <<DB_ELEM>> -->', attr_db);
  packaged_database = packaged_database.replace(
    '<!-- <<DATABASE_ELEM>> -->',
    packaged_db
  );
  resultDB.push(packaged_database);

  let getModelList = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].model.length; j++) {
      getModelList.push(data[i].model[j]);
    }
  }

  let mappedID = mapToID(getModelList);
  data.forEach((item) => {
    let attrMapped = [];
    let ownedMemberMapped = [];

    const idValue = mappedID.find((obj) => obj.hasOwnProperty(item.model[0]))[
      item.model[0]
    ];
    let modelPackaged = `
  <packagedElement xmi:id="${idValue}" name="${item.model[0]}" xmi:type="uml:Class">
      <!-- <<Model_MEMBER_ATTR>> -->
  </packagedElement>
  `;

    item.relations.forEach((i) => {
      let storeEndID = generateId();
      let storeStartID = generateId();
      const idEndValue = mappedID.find((obj) => obj.hasOwnProperty(i))[i];
      let ownedMember = `
      <ownedMember xmi:id="${generateId()}" xmi:type="uml:Association">
        <!-- <<Model_MEMBER>> -->
      </ownedMember>
      `;
      let ownedStart = `
      <ownedEnd xmi:id="${storeStartID}" xmi:type="uml:Property" type="${idValue}" />
      `;
      let ownedEnd = `
        <ownedEnd xmi:id="${storeEndID}" xmi:type="uml:Property" type="${idEndValue}" />
      `;
      let memberStart = `
      <memberEnd xmi:idref="${storeStartID}"/>
      `;
      let memberEnd = `
      <memberEnd xmi:idref="${storeEndID}"/>
      `;
      let member = ownedStart + ownedEnd + memberStart + memberEnd;
      ownedMember = ownedMember.replace('<!-- <<Model_MEMBER>> -->', member);
      ownedMemberMapped.push(ownedMember);
    });
    item.attribute.forEach((a) => {
      const mappedType = mapType(a.type);
      const outputMapped = { ...a, type: mappedType };
      let attrModel = `
      <ownedAttribute xmi:id="${generateId()}" name="${a.name}" type="${outputMapped.type}" xmi:type="uml:Property"/>
      `;
      attrMapped.push(attrModel);
    });
    const attrContent = ownedMemberMapped.join('') + attrMapped.join('');
    const modelMapped = modelPackaged.replace(
      '<!-- <<Model_MEMBER_ATTR>> -->',
      attrContent
    );
    resultEachModel.push(modelMapped);
  });
  let resultModel = resultEachModel.join('');
  result = packaged_model.replace('<!-- <<MODEL_ELEM>> -->', resultModel);
  let result_DB = resultDB.join('');
  return { result, result_DB };
}

function generateXMI(data) {
  let xmi = ``;
  const core_packaged_template = `
    <packagedElement xmi:id="${generateId()}" name="backend" xmi:type="uml:Model">
        <!-- <<PACKAGED_MODEL>> -->
        <!-- <<PACKAGED_CONTROLLER>> -->
        <!-- <<PACKAGED_DATABASE>> -->
        <!-- <<PACKAGED_RESOURCE>> -->
    </packagedElement>
    `;
  // Map Controller
  let mappedController = mappingController(data.controller);
  // Map Route
  let mappedRoute = mappingRoute(data.route);
  // Map Model // Map Database
  let mappedModel = mappingModel(data.model);
  // Compound All
  let mapProfileAndType = core_template.replace(
    '<!-- <<PROFILE_NODE.JS>> -->',
    profile_for_nodejs
  );
  mapProfileAndType = mapProfileAndType.replace(
    '<!-- <<type_for_uml>> -->',
    type_for_uml
  );
  let mapToCoreController = core_packaged_template.replace(
    '<!-- <<PACKAGED_CONTROLLER>> -->',
    mappedController
  );
  let mapToCoreRoute = mapToCoreController.replace(
    ' <!-- <<PACKAGED_RESOURCE>> -->',
    mappedRoute
  );
  let mapToCoreModel = mapToCoreRoute.replace(
    '<!-- <<PACKAGED_MODEL>> -->',
    mappedModel.result
  );
  let mapToCoreDb = mapToCoreModel.replace(
    '<!-- <<PACKAGED_DATABASE>> -->',
    mappedModel.result_DB
  );
  mapToCoreDb = mapProfileAndType.replace(
    '<!-- <<UML_MODEL>> -->',
    mapToCoreDb
  );
  xmi = mapToCoreDb.replace(/^\s+|\s+$/g, '');
  // xmi = mapToCore.replace(/(\r\n|\n|\r)/gm, '');  // One Line
  const fileName = './output/output.xmi';
  fs.writeFileSync(fileName, xmi);
}

module.exports = {
  generateXMI,
};
