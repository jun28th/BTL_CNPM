const express = require("express");
const app = express();
const morgan = require("morgan");
const printerRoutes = require("./routes/printerRoutes");

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/printers", printerRoutes);
module.exports = app;
