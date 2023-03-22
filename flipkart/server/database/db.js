
import mongoose from "mongoose";


export const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-3r6b7p9-shard-00-00.ucfm87u.mongodb.net:27017,ac-3r6b7p9-shard-00-01.ucfm87u.mongodb.net:27017,ac-3r6b7p9-shard-00-02.ucfm87u.mongodb.net:27017/?ssl=true&replicaSet=atlas-8jmrwn-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error){
        console.log('Error while connecting the database ', error.message);
    }
}


export default Connection;