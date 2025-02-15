const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const app = express();

const PORT = 8000;

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("Mongodb Connected")
);

app.use(express.json());
app.use("/url", urlRoute);

app.listen(PORT, () => {
  console.log(`Server run on this port ${PORT}`);
});
