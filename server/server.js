const dotenv = require("dotenv");
dotenv.config("./config.env");
const app = require(`${__dirname}/app`);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listen on URL: 127.0.0.1:${port}...`);
});
