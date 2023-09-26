const db = require("./db/db.js");

switch (action) {
  case "Add a department":
    const { departmentName } = await inquirer.prompt([
      {
        type: "input",
        name: "departmentName",
        message: "What is the name of the department?",
      },
    ]);
    await db.query("INSERT INTO department (name) VALUES (?)", departmentName);
    break;
}
