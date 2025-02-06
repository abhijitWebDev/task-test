import mongoose from 'mongoose';

const connectDb = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DB_HOST}`);
        console.log(`Mongo db connected to ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Mongo db connection failed",error);
        process.exit(1);
    }
}

export default connectDb;