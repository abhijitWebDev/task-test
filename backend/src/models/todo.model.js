import mongoose from "mongoose";

const toDoSchema = new mongoose.Schema({
    name: {
        type:String,
    },
    description: {
        type:String
    },
    status: {
        status: Boolean,
    }
    
})

export const todos = mongoose.model("Todos", toDoSchema);