const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const {
  getFood,
  addFood,
  updateFood,
  deleteFood,
} = require("./controllers/food.controller");
const { createUser, getUser } = require("./controllers/user.controller");

app.use(cors());
app.use(express.json());

// Food or Menu
app.get("/api/food", getFood);
app.post("/api/food/add", addFood);
app.put("/api/food/update/:food_name", updateFood);
app.delete("/api/food/delete/:food_name", deleteFood);

// Users
app.post("/api/user", createUser);
app.post("/api/user/login", getUser);

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});

// npx sequelize-cli model:generate --name order --attributes username:string,address:string,menuname:string,price:integer,quantity:integer,status:boolean,ordernumber:string