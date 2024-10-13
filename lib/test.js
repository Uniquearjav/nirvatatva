// testMongoConnection.js
const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://arjavchoudhary608:amJZxbIDFzsC392g@nt-arjav.leeka.mongodb.net/';

async function run() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log("Connected to MongoDB!");
    await client.close();
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
}

run();
