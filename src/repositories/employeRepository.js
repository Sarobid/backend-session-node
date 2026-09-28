import Employe from "../models/employe.js";

const create = async (employeData) => {
  return await Employe.create(employeData);
};

const findById = async (id) => {
  return await Employe.findById(id);
};

const findByEmployeIdOdoo = async (employeIdOdoo) => {
  return await Employe.findOne({ employeIdOdoo });
};

const deleteById = async (id) => {
  return await Employe.findByIdAndDelete(id);
};

export default {
  create,
  findById,
  findByEmployeIdOdoo,
  deleteById
};