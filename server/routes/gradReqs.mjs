import express from 'express'
import axios from 'axios'
import db from '../db/conn.mjs'
import { ObjectId } from 'mongodb'

const COURSES_URL = 'https://ubcexplorer.io/'

const router = express.Router()

// GET all general graduation requirements
router.get('/requirements', async (req, res) => {
    let collection = await db.collection('requirements')
    let cursor = collection.find({})
    let requirements = await cursor.toArray()
    res.send(requirements).status(200)
})

// GET program specific requirements
router.get('/requirements/:program', async (req, res) => {
    let collection = await db.collection('requirements')
    let query = { program: req.params.program }
    let requirement = await collection.findOne(query)

    if (!requirement) res.send('No Requirements').status(404)
    else res.send(requirement).status(200)
})

// GET all courses
router.get('/allCourses', async (req, res) => {
    let response = await axios({
        method: 'get',
        url: COURSES_URL + '/getAllCourses'
    })

    console.log(response)
})

// GET requirement by ID
router.get("/requirement/:id", async (req, res) => {
    let collection = await db.collection("requirements");
    let query = {_id: new ObjectId(req.params.id)};
    let result = await collection.findOne(query);
  
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
  });

export default router