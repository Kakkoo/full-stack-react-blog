import { MongoClient } from 'mongodb';

let db;

async function connectToDb(cb) {
    // connection string from mongoDB project account
//    mongodb+srv://kanchanji:FkNEWKbxRk4BUsJs@full-stack-blog.thuyb.mongodb.net/?retryWrites=true&w=majority&appName=Full-Stack-Blog
const client = new MongoClient(`mongodb+srv://kanchanji:FkNEWKbxRk4BUsJs@full-stack-blog.thuyb.mongodb.net/?retryWrites=true&w=majority&appName=Full-Stack-Blog`, { useNewUrlParser: true, useUnifiedTopology: true });
    //const client = new MongoClient(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@/?retryWrites=true&w=majority`);
    // const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();
    // db = client.db('react-blog-db');
    db = client.db('full-stack-blog');
    //react-blog-db.fullstack-blog.atls-bolg

    cb();
}

export {
    db,
    connectToDb,
};

