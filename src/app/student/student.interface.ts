// import { Schema, model, connect } from 'mongoose';


export type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';

export type UserName = {
    firstNAme : string;
    LastNAme : string;
   }

export type student = {
    id: string;
    name : UserName,
    email: string;
    presentAdress : string;
    OldAdress : string;
    gender : 'male' | 'female';
    dateOfBirth : string;
    bloodGroup? : BloodGroup;
    contactNo : string;
    isActive : 'active' | 'blocked'


  }