import { student } from "./student.interface";
import StudentModel from "./student.scama";


const createStudentIntoDB = async(student : student )=>{
    const result = await StudentModel.create(student)
    return result
}

const getAllStudentDb = async() =>{
    const result = await StudentModel.find()
    return result
}

const getSingleStudentDb = async(id : string) =>{
     const result = await StudentModel.findOne({id})
     return result
}

 export const StudentServices = {
    createStudentIntoDB,
    getAllStudentDb,
    getSingleStudentDb
 }