
import exercise from "../models/exercise.js";


export const createExercise = async (req, res, next) => {
    const newexercise = new exercise(req.body);

    try {
      const savedexercise = await newexercise.save();
      //correct but it's return json
      //res.status(200).json(savedexercise); 
      res.status(200).json("Exercise has been created.");
    } catch (err) {
      next(err);
    }
  };

  export const updateExercise = async (req,res,next)=>{
    try {
      const updatedExercise = await exercise.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedExercise);
    } catch (err) {
      next(err);
    }
  }

  export const deleteExercise = async (req,res,next)=>{
    try {
      await exercise.findByIdAndDelete(req.params.id);
      res.status(200).json("Exercise has been deleted.");
    } catch (err) {
      next(err);
    }
  }

  export const getExercise = async (req, res, next) => {
    try {
      const exercisee = await exercise.findById(req.params.id);
      res.status(200).json(exercisee);
    } catch (err) {
      next(err);
    }
  };  

  export const getExercises = async (req,res,next)=>{
    try {
      const Exercises = await exercise.find();
      res.status(200).json(Exercises);
    } catch (err) {
      next(err);
    }
  }
