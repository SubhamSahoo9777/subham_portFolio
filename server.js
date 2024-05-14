const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const cors = require("cors");
const path=require("path")
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname,"./client/build")))

// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to Subham PortPolio</h1>");
// });

app.use("/api/v1/portFolio", require("./routs/portPolioRouts"));
app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,"./client/build/index.html"))
})
const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`server is running ${PORT} Port`.bgGreen.white)
);
