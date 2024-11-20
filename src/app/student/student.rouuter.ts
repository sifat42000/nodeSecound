import express from 'express'
import { StudentController } from './student.controller'

const router = express.Router()


//Call controller function
router.post('/create-student', StudentController.CreateUser)

router.get('/',StudentController.getAllStudent)

router.get('/:id',StudentController.getSingleStudent)

 export const StudentRoute = router