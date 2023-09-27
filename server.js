const mysql = require("mysql2");
const inquirer = require("inquirer");
require("dotenv").config();

// APP / PORT
const PORT = process.env.PORT || 3001;
const app = express();

// MIDDLEWARES
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Create the connection
const db = mysql.createConnection(
  {
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log(`Connected to the employee_tracker database.`)
);

module.exports = db;
