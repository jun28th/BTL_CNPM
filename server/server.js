const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connect database success !!!");
  });
const app = require(`${__dirname}/app`);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});
