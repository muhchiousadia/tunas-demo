const employee = require("./employee.json");

const jsonData = JSON.stringify(employee);

console.log(jsonData);

const objectData = JSON.parse(jsonData);

console.log(objectData);

console.log(objectData.name);
