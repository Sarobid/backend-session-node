import sessionRepository from "../repositories/sessionRepository.js";
import employeService from "./employeService.js";
import Session from "../models/session.js";

const createSession = async (phoneConnection,employeData) =>{
    try {
        const employeSaved = await employeService.getOrCreateEmploye(employeData)
        const existingSessionEmploye = await sessionRepository.findByPhoneConnectionAndEmploye(phoneConnection,employeSaved)
        if(existingSessionEmploye.length > 0){
            throw new Error("Employe est deja creer dans "+phoneConnection)
        }
        const newSession = new Session({
            phoneConnection : phoneConnection,
            employe : employeSaved,
            dateCreated : new Date()
        })
        return await sessionRepository.create(newSession)
    } catch (error) {
        throw error
    }
}

const getSessionsByPhoneConnection = async (phoneConnection)=>{
    try {
        const allSessions = await sessionRepository.findByPhoneConnection(phoneConnection)
        return allSessions
    } catch (error) {
        throw error;
    }
}
export default {
    createSession,
    getSessionsByPhoneConnection
}