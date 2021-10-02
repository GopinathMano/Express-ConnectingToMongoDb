const { MongoClient } = require("mongodb");

const mongo_url =
  "mongodb+srv://gopinath:danger123@cluster0.0ec9d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongo_DB = "guvi_test1";

const client = new MongoClient(mongo_url);

module.exports = {
  // Connection for all DB
  db: null,
  // connection for specific database
  posts: null,
  users: null,

  async connect() {
    // connecting to database
    await client.connect();
    console.log("connect to the data url 2701", mongo_url);

    // sellecting the database
    this.db = client.db(mongo_DB);
    console.log("connected to database selected", mongo_DB);

    // intialize collection
    this.posts = this.db.collection("posts");
    this.users = this.db.collection("users");
  },
};
