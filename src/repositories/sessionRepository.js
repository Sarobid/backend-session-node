import Session from "../models/session.js";

const sessionPopulate = {
    path: 'employe'
}

const create = async (SessionData) => {
  return await Session.create(SessionData);
};

const findById = async (id) => {
  return await Session.findById(id).populate(sessionPopulate);
};

const findByPhoneConnectionAndEmploye = async (phoneConnection,employe)=>{
    return await Session.find({phoneConnection : phoneConnection,employe : employe._id})
                 .populate(sessionPopulate)
}

const findByPhoneConnection = async (phoneConnection) => {
  return await Session.find({ phoneConnection : phoneConnection}).populate(sessionPopulate);
};

const deleteById = async (id) => {
  return await Session.findByIdAndDelete(id);
};

export default {
  create,
  findById,
  findByPhoneConnectionAndEmploye,
  findByPhoneConnection,
  deleteById
};