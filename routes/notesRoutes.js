import express from 'express'
import mongoose from 'mongoose'
import NotesModel  from '../models/Notes.js'



const router=express.Router();


// GET /api/notes/:chapterId
router.get('/:chapterId',async(req,res)=>{
    try{
        const {chapterId}=req.params;
        if(!mongoose.Types.ObjectId.isValid(chapterId)){
            return res.status(400).json({message:"No notes found"});
        }
        const notes=await NotesModel.find({chapterId}).sort({type:1});
        res.json(notes);
    }
    catch(error){

    }
})


export default router