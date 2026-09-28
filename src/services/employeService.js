import employeRepository from "../repositories/employeRepository.js";
import Employe from "../models/employe.js";

const getOrCreateEmploye = async (employeData) => {
    try {
        const existingEmploye = employeRepository.findByEmployeIdOdoo(employeData.employeIdOdoo)
        if(existingEmploye){
            return existingEmploye
        }
        const newEmploye = new Employe(employeData)
        return await employeRepository.create(newEmploye)   
    } catch (error) {
        console.log("Erreur sur getOrCreateEmploye")
        console.log(error)
        throw error
    }
}

export default {
    getOrCreateEmploye
};