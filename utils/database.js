import mongoose from 'mongoose';


let isConnected= false;

const connectToDatabase = async () => {
    mongoose.set('strictQuery', false);

    if(isConnected){
        console.log('Using existing connection');
        return;
    }

    try{
        const db= await mongoose.connect(
                                        process.env.MONGODB_URI,
                                        {
                                            dbName: process.env.MONGODB_DBNAME,
                                        });
        isConnected=true;
        console.log('Database connected');
    }
    catch(error){
        console.log('Error connecting to database');
    }
}

export default connectToDatabase;