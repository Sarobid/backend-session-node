import sessionRepository from "../repositories/sessionRepository.js";
import employeService from "./employeService.js";
import Session from "../models/session.js";

const createSession = async (deviceId,employeData) =>{
    try {
        const employeSaved = await employeService.getOrCreateEmploye(employeData)
        console.log("employed saved")
        console.log(employeSaved)
        const existingSessionEmploye = await sessionRepository.findBydeviceIdAndEmploye(deviceId,employeSaved)
        if(existingSessionEmploye.length > 0){
            throw new Error("Employe est deja creer dans "+deviceId)
        }
        const newSession = new Session({
            deviceId : deviceId,
            employe : employeSaved,
            dateCreated : new Date()
        })
        return await sessionRepository.create(newSession)
    } catch (error) {
        throw error
    }
}

const getSessionsBydeviceId = async (deviceId)=>{
    try {
        const allSessions = await sessionRepository.findBydeviceId(deviceId)
        return allSessions
    } catch (error) {
        throw error;
    }
}
export default {
    createSession,
    getSessionsBydeviceId
}