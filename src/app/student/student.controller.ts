import {  Request,  Response } from "express"
import { StudentServices } from "./student.service"


const CreateUser = async(req : Request, res: Response)=>{
 
   try{
     //sending data service
     const student = req.body.student

     const result = await StudentServices.createStudentIntoDB(student)
     
 
     //sending data client
     res.status(200).json({
         success : true,
         messege : "Created successfully",
         data : result 
 
     })
   }catch(err){
    console.log(err)
   }
}

const getAllStudent = async(req : Request , res : Response)=>{
    try{
        const result = await StudentServices.getAllStudentDb()
    
    res.status(200).json({
        success : true,
        messege : "Created successfully",
        data : result 

    })
    }catch(err){
        console.log(err)
    }
    
}

const getSingleStudent = async(req: Request, res: Response)=>{
    
    try{
        const {id} = req.params
    const result = await StudentServices.getSingleStudentDb(id)

    res.status(200).json({
        success : true,
        messege : "singleData get successfully",
        data : result
    })
    }catch(err){
        console.log(err)
    }
}

export const StudentController = {
    CreateUser,
    getAllStudent,
    getSingleStudent
}