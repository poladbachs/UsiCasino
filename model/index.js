const mongodb = require('mongodb');

const { MongoClient } = require('mongodb');

require("dotenv").config()

const MONGO_USERNAME = process.env.MONGO_USERNAME; 
const MONGO_PASSWORD = process.env.MONGO_PASSWORD; 

const local_mongodb_uri = 'mongodb://localhost:27017/web-atelier-prj';



const default_mongodb_uri = process.env.MONGO_URI || local_mongodb_uri;

const clients = {};
const connections = {};

// Function to get the current value of the ID from the "counters" collection
async function getCounter() {
    const counter = await model.counters.findOne({ _id: 'user_id' });
    return counter ? counter.value : 0;
}

// Function to increment the ID in the "counters" collection
async function incrementCounter() {
    const result = await model.counters.updateOne(
        { _id: 'user_id' },
        { $inc: { value: 1 } },
        { upsert: true }
    );
    return result.modifiedCount > 0 || result.upsertedCount > 0;
}

// Initialize the model object with the defined interface
let model = {
    counters: null,
    connectToDatabase: connect,
    getCounter: getCounter,
    incrementCounter: incrementCounter
};

function connect(db_name, mongodb_uri) {

    db_name = db_name ?? 'web-atelier-prj';
    mongodb_uri = mongodb_uri ?? default_mongodb_uri;

    let client = clients[mongodb_uri];

    if (client === undefined) {
        client = new mongodb.MongoClient(mongodb_uri);
        clients[mongodb_uri] = client;

        console.log("Connecting to mongodb server");
        connections[mongodb_uri] = client.connect().then(client => {
            console.log("Connected to mongodb server");

            let user_list = require("./user-list-db")(client, db_name, "users");

            model.user_list = user_list;
            model.counters = client.db(db_name).collection("counters"); // Include the "counters" collection

            return { client,
                     user_list,
                     users: client.db(db_name).collection("users"),
                     counters: model.counters, // Include the "counters" collection in the return object
                   }
        }).catch(err => console.error(err));
    }

    return connections[mongodb_uri];

}


module.exports = { connect, model };