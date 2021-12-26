const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");

const PORT = 3000;
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.all("*", (req, res, next) => {
  console.log(req);
  console.log(res);
  next();
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`App is running on a  port ${PORT}`);
});
