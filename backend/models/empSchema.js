import mongoose from "mongoose";

let employeeSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    gender: String,
    comment: String,
    role: String,
    terms: String,
}, { timestamps: true })

export const emp = mongoose.model("employee", employeeSchema)
