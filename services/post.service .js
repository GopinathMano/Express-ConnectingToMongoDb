const mongo = require("../mongo");
const { ObjectId } = require("mongodb");

const services = {
  async findpost(req, res) {
    try {
      //   query parameters
      console.log(req.query);

      const data = await mongo.posts.find().toArray();
      console.log(data);
      //    find DB
      res.send(data);
    } catch (error) {
      console.log("error reading data", error);
      res.sendStatus(500);
    }
  },
  async insertingPost(req, res) {
    try {
      const data = await mongo.posts.insertOne(req.body);
      console.log(data);
      //   DB . insertOne()
      res.send({ ...req.body });
    } catch (error) {
      console.log("error querying  data", error);
      res.sendStatus(500);
    }
  },
  async updatingPost(req, res) {
    try {
      const data = await mongo.posts.findOneAndUpdate(
        { _id: ObjectId(req.params.id) },
        { $set: { ...req.body } },
        { new: true }
      );
      console.log(data, "this the data modified");
      //   DB . insertOne()
      res.send(data);
    } catch (error) {
      console.log("error querying  data", error);
      res.sendStatus(500);
    }
  },
  async deletePost(req, res) {
    try {
      await mongo.posts.deleteOne({ _id: ObjectId(req.params.id) });

      //   DB . remove()
      res.end("deleted");
    } catch (error) {
      console.log("error querying  data", error);
      res.sendStatus(500);
    }
  },
};

module.exports=services;
