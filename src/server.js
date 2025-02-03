const express = require("express");
const sequelize = require("./config/db");
const config = require("./config/config");
const jwt = require("jsonwebtoken");
const routes = require("./routes");



const {verifyToken,restrictToRole}=require("./middleware/authMiddleware")
const app = express();
const PORT = config.port || 3000;
const JWT_SECRET = config.JWT_SECRET;

app.use(express.json());
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection to the database has been established successfully.");
    await sequelize.sync({ force: false }); 
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}


testConnection();

app.use("/api", routes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found." });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//First Point
// response Formate
// json:{
//   status:"success" // if success or else error,
//   message:"add a success message according to api",// for example data fetched successfully, user registered successfully etc.
//   data:[{}]
// }

// second point
// => R&D on bcrypt
// => apply bcrypt on all the password fields 

// use multer to add image // suggestions