const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const models = require("./models/index");

app.use(cors());
app.use(express.json());

// Get All
app.get("/api/products", async (req, res) => {
  const data = await models.product.findAll();
  return res.status(200).send({ message: "Product", data: data });
});

// Insert
app.post("/api/products", async (req, res) => {
  if (req.body.productName === "")
    return res.status(500).send({ message: "duplicate" })

  const isAble = await models.product.findOne({ where: req.body })
  if (isAble) {
    return res.status(500).send({ message: "duplicate" });
  } else {
    models.product.create(req.body);
    return res.status(200).send({ message: "Success!", data: req.body });
  }
});

// Update
app.put("/api/products/:id", async (req, res) => {
  const isAble = await models.product.findOne({ where: req.body });
  if (isAble) {
    return res.status(500).send({ message: "duplicate" });
  } else {
    models.product.update(req.body, { where: { id: req.params.id } });
    return res.status(200).send({ message: "Success!", data: req.body });
  }
});

// Delete
app.delete("/api/products/:id", (req, res) => {
  models.product.destroy({ where: { id: req.params.id } });
  return res.status(200).send({ message: "Success!", data: req.body });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
