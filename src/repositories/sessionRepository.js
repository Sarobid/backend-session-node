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

const findBydeviceIdAndEmploye = async (deviceId,employe)=>{
    return await Session.find({deviceId : deviceId,employe : employe._id})
                 .populate(sessionPopulate)
}

const findBydeviceId = async (deviceId) => {
  return await Session.find({ deviceId : deviceId}).populate(sessionPopulate);
};

const deleteById = async (id) => {
  return await Session.findByIdAndDelete(id);
};

export default {
  create,
  findById,
  findBydeviceIdAndEmploye,
  findBydeviceId,
  deleteById
};