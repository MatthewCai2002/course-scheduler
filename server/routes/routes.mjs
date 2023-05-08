import express from 'express'
import axios from 'axios'
import db from '../db/conn.mjs'
import { ObjectId } from 'mongodb'

const router = express.Router()

// GET faculty specific requirements
router.get('/requirements/:faculty', async (req, res) => {
    let collection = await db.collection(req.params.faculty)
    let requirements = await collection.find({}).toArray()
    res.send(requirements).status(200)
})

// GET program specific requirements
router.get('/requirements/:faculty-:program', async (req, res) => {
    let collection = await db.collection(req.params.faculty)
    let query = { program: req.params.program }
    let requirement = await collection.findOne(query)

    if (!requirement) res.send('No Program Requirements').status(404)
    else res.send(requirement).status(200)
})

// GET requirement by ID
router.get("/requirement/:id", async (req, res) => {
    let collection = await db.collection("science");
    let query = {_id: new ObjectId(req.params.id)};
    let result = await collection.findOne(query);
  
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
  });

export default router