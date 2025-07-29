import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log("Database connected")
    })
    // It will create a new     database named prescripto
    await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`)
}

export default connectDB;