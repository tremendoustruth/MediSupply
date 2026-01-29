require("dotenv").config();
const { USER_NAME, PASSWORD } = process.env;
const { MongoClient } = require("mongodb");
const {default : baseInventory} = require("./dummyInventory")

const uri = `mongodb+srv://${USER_NAME}:${PASSWORD}@otccluster.gzfaumc.mongodb.net/`
const client = new MongoClient(uri);
const database = client.db("OTC_DB");
const inventoryItems = database.collection("Inventory_DB");


async function main() {
    await inventoryItems.deleteMany({}); // Delete all existing documents
    await inventoryItems.insertMany(baseInventory); // Insert base inventory
    return {
        deleted: "All Existing Products.", 
        inserted: baseInventory.length
    };
}
main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
