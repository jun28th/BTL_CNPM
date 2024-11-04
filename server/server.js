const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json());
app.use((req, res, next) => {
  console.log("Request received at:", req.path);
  next();
});

app.patch("/api/v1/tours/:id", (req, res) => {
  const id = req.params.id * 1;
  return res.status(200).json({
    status: "success",
    data: {
      tour: "<Updated tour here....>",
    },
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});
