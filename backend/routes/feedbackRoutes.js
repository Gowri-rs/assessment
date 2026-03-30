const express = require('express');
const router = express.Router();
const feedbackModel = require("../models/feedbackModel");

router.get("/", async (req,res) => {
    try {
        const feedback = await feedbackModel.find();
        res.json(feedback);
        res.status(200).json({message:"data fetched "})
    } catch (error) {
        res.status(500).json({message:"error fetching data", error})
    }
})

router.post("/add", async (req,res) => {
    try {
        const feedback= new feedbackModel(req.body)
        await feedback.save()
        res.status(201).json({message:"data added"})
    } catch (error) {
        res.status(500).json({message:"error adding data", error})
    }
})

router.get("/:id", async (req,res) => {
    try {
       const feedback = await feedbackModel.findById(req.params.id);
       res.json(feedback);

       res.status(200).json({message:"data fetched "})
    } catch (error) {
        res.status(500).json({message:"error getting data", error})
    }
})

router.put("/:id" , async (req,res) => {
    try {
        await feedbackModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
    } catch (error) {
        res.status(500).json({message:"error updating data", error})
    }
})

router.delete("/:id" , async (req,res) => {
    try {
        await feedbackModel.findByIdAndDelete(req.params.id)
    } catch (error) {
        res.status(500).json({message:"error updating data", error})
    }
})

module.exports = router;
