const express = require("express");
const app = express();
const connectDB = require("./db/connectDB");
const routes = require("./routes/routes");
const PORT = 3000;
const not_found = require("./middlewares/not_found");
require("dotenv").config();


app.use(express.json());

app.use("/", routes);

app.use(not_found);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => console.log(`Server is llistening on port ${PORT}`));
  } catch (error) {
    console.log("error", error);
  }
};

start();
