import mongoose from "mongoose"


const Connection = async (username, password) =>{
    const URL=`mongodb://${username}:${password}@ac-vmybz9w-shard-00-00.bq0k6bj.mongodb.net:27017,ac-vmybz9w-shard-00-01.bq0k6bj.mongodb.net:27017,ac-vmybz9w-shard-00-02.bq0k6bj.mongodb.net:27017/?ssl=true&replicaSet=atlas-gk7qh0-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{

       await mongoose.connect(URL, {useNewUrlParser: true});
       console.log("Database connected successfully");
    }catch(error){
        console.log("Error while connecting with the database",error);

    }
}

export default Connection;
