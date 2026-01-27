require("dotenv").config();
const { USER_NAME, PASSWORD } = process.env;
const { MongoClient, ObjectId } = require("mongodb");

const uri = `mongodb+srv://${USER_NAME}:${PASSWORD}@otccluster.gzfaumc.mongodb.net/`
const client = new MongoClient(uri);
const database = client.db("OTC_DB");
const inventoryItems = database.collection("Inventory_DB");

async function create_index(property) {
    return inventoryItems.createIndex({ [property] : 1})
}

// await create_index("title").then(console.log).finally(() => client.close())
// await create_index("description").then(console.log).finally(() => client.close())
// await create_index("price").then(console.log).finally(() => client.close())

async function create_product(product_data) {
    await inventoryItems.insertOne(product_data)
    return product_data
}

// await create_product({
//     "title": "Five-bladed razor",
//     "description": "Elaborate device for punishing follicles",
//     "price": 9.99
// }


// READ all products
async function get_all_products() {
    return inventoryItems.find({}).toArray();
}

// READ product by id
async function get_product_by_id(id) {
    return inventoryItems.findOne({ _id: new ObjectId(id) });
}

// async function test() {
//   const products = await get_all_products();
//   console.log(products);
//   await client.close();
// }

// test().catch(console.error);

async function testGetById() {
  const product = await get_product_by_id("6978ea3b936fb09bb523c3d2");
  console.log(product);
  await client.close();
}

testGetById().catch(console.error);

// async function test() {
//   const products = await get_all_products();
//   console.log("Total products:", products.length);
//   console.log("First product:", products[0]);
//   await client.close();
// }

// test().catch(console.error);
