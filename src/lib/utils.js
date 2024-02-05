/* import {MongoClient} from "mongodb";

const database_url = process.env.MONGO;

const client = new MongoClient(database_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

export default async function connect(){

client.connect()

const db  = client.db("sample_mflix")
return {db,client}
} */