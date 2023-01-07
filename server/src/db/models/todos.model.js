import { model } from "mongoose";
import todoSchema from "../schemas/todos.schema";

const Todos = model("todos", todoSchema);

export class TodosModel {
  async create(todoInfo) {
    return await Todos.create(todoInfo);
  }
  async findAll() {}
  async findOneByTodoid() {}
  async updateByTodoid() {}
  async delete() {}
}

const todosModel = new TodosModel();
module.exports = todosModel;
