const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://jaimepaok:<Link2000>@cluster0.57f7y.mongodb.net/unantest?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});


module.exports = client;