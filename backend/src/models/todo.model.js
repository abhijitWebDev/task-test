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
    },
    priority: {
       type: Array,
    }
    
})

export const todos = mongoose.model("Todos", toDoSchema);