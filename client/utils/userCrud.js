const { MongoClient } = require('mongodb');

async function connectToCluster(uri) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(uri);
        console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');
 
        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
}

async function executeUserCrudOperations() {
    const uri = process.env.DATABASE;
    let mongoClient;
 
    try {
        mongoClient = await connectToCluster(uri);
        const db = mongoClient.db('beThere');
        const collection = db.collection('users');
    } finally {
        await mongoClient.close();
    }
}

module.exports = {
    connectToCluster,
    executeUserCrudOperations,
};
