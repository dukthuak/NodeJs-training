const path = require("path");
const express = require("express");
const engine = require("express-handlebars");
const app = express();
const morgan = require("morgan");

// HTTP logger
app.use(morgan("combined"));

// express-handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views")); // Sửa lỗi ở đây, đặt path.join vào trong dấu ngoặc

console.log("__dirname: ", __dirname);
app.get("/", (req, res) => {
  // res.send("Hoàng Đức Thuận");
  return res.send(`
  <h1>Hoàng Đức Thuận</h1>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
