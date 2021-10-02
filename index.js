const express = require("express");
const postRoute = require("./routes/post.route");
const mongo = require("./mongo");

const app = express();
const port = 3001;
(async () => {
  try {
    // connecting to mongoDB database
    await mongo.connect();

    // parse req body to json format:
    app.use(express.json());

    // post middleware
    app.use("/post", postRoute);

    // user middleware
    app.use("/users", (req, res, next) => {
      console.log("i am users miidleware ...");
      next();
    });

    // Logging  middleware
    app.use((req, res, next) => {
      // console.log("i am common miidleware ...");
      next();
    });

    // listener
    app.listen(port, () => {
      console.log(`server is running in port ${port}`);
    });
  } catch (error) {
    console.log("error in starting the server", error);
  }
})();
