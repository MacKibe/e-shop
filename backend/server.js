//
// import app here
const app = require('./app');

//
// import dotenv
const dotenv = require('dotenv');

//
// setting up config file
dotenv.config({ path: "backend/config/config.env" });

app.listen(process.env.PORT, () => {
  console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
});
