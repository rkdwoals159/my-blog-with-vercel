import { model } from "mongoose";
import postingSchema from "../schemas/posting.schema";

const Postings = model("posting", postingSchema);

export class PostingsModel {
  async create(postInfo) {
    return await Postings.create(postInfo);
  }
  async findAll() {
    return await Postings.find({}).lean().exec();
  }
  async findOneByPostid(postid) {
    const filter = { postid };
    return await Postings.findOne(filter).lean().exec();
  }
  async updateContentByTodoid() {}
  async deleteById(postid) {
    return await Postings.findOneAndDelete({ postid });
  }
}

const postingsModel = new PostingsModel();
module.exports = postingsModel;
