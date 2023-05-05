import { MongoClient } from 'mongodb'
const connStr = process.env.ATLAS_URI || ''

const client = new MongoClient(connStr)

let conn

try {
    conn = await client.connect()
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch (e) {
    console.error(e)
}

let db = conn.db('requirements')

export default db