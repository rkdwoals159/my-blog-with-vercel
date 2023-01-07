const mongoose = require("mongoose");
const todoSchema = require("../schemas/todos.schema");

const ToDo = mongoose.model("todos", todoSchema);

module.exports = class ToDoModel {
  async create(payload) {
    return await ToDo.create(payload);
  }
};
// Create new todo document
todoSchema.statics.create = function (payload) {
  // this === Model
  const todo = new this(payload);
  // return Promise
  return todo.save();
};

// Find All
todoSchema.statics.findAll = function () {
  // return promise
  // V4부터 exec() 필요없음
  return this.find({});
};

// Find One by todoid
todoSchema.statics.findOneByTodoid = function (todoid) {
  return this.findOne({ todoid });
};

// Update by todoid
todoSchema.statics.updateByTodoid = function (todoid, payload) {
  // { new: true }: return the modified document rather than the original. defaults to false
  return this.findOneAndUpdate({ todoid }, payload, { new: true });
};

// Delete by todoid
todoSchema.statics.deleteByTodoid = function (todoid) {
  return this.remove({ todoid });
};

// Create Model & Export
module.exports = mongoose.model("Todo", todoSchema);
