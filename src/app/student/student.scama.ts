import { Schema, model } from 'mongoose';
import { student, UserName } from './student.interface';

const userNameSchema = new Schema<UserName>({
    
        firstNAme : {type:String, require:true},
        LastNAme : {type:String, require:true}
       
})



const studentScama = new Schema<student>({
    id : {type: String},
    name : userNameSchema,
       email : {type:String, require:true},
       presentAdress : {type:String, require:true},
       OldAdress : {type :String},
       dateOfBirth : {type :String},
       bloodGroup :['A+',  'A-',  'B+',  'B-',  'O+',  'O-',  'AB+',  'AB-'] ,
       contactNo : {type:String, require:true} ,
       isActive: {type:String, require:true}

})


// Model

 const StudentModel  = model<student>("Student",studentScama)

 export default StudentModel












