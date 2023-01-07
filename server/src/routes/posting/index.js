import express from "express";
import postingsModel from "../../db/models/posting.model.js";
const postingRouter = express.Router();

// Find All
postingRouter.get("/", (req, res) => {
  postingsModel
    .findAll()
    .then((postings) => {
      if (!postings.length)
        return res.status(404).send({ err: "postings not found" });
      res.send(`find successfully: ${postings}`);
    })
    .catch((err) => res.status(500).send(err));
});

// Find One by todoid
postingRouter.get("/posting/:postid", (req, res) => {
  postingsModel
    .findOneByPostid(req.params.postid)
    .then((post) => {
      if (!post) return res.status(404).send({ err: "post not found" });
      res.send(`findOne successfully: ${post}`);
    })
    .catch((err) => res.status(500).send(err));
});

// Create new todo document
postingRouter.post("/", (req, res) => {
  postingsModel
    .create(req.body)
    .then((post) => res.send(post))
    .catch((err) => res.status(500).send(err));
});

// Update by todoid
// router.put("/postid/:postid", (req, res) => {
//   postingsModel.updateByTodoid(req.params.postid, req.body)
//     .then((todo) => res.send(todo))
//     .catch((err) => res.status(500).send(err));
// });

// Delete by todoid
postingRouter.delete("/posting/:postid", (req, res) => {
  postingsModel
    .deleteById(req.params.postid)
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(500).send(err));
});

export default postingRouter;
