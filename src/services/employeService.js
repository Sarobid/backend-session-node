import employeRepository from "../repositories/employeRepository.js";
import Employe from "../models/employe.js";

const getOrCreateEmploye = async (employeData) => {
    try {
        if (!employeData.employeIdOdoo) {
            throw new Error("veuiller declarer employeIdOdoo")
        }
        const existingEmploye = await employeRepository.findByEmployeIdOdoo(employeData.employeIdOdoo)
        console.log(existingEmploye)
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