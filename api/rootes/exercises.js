import express from "express";

import {createExercise,
        getExercise,
        getExercises,
        updateExercise,
        deleteExercise
        } 
        from "../controllers/exercise.js";

const router = express.Router();

//CREATE
router.post("/:add", createExercise);

router.put("/:id", updateExercise);

router.delete("/:id", deleteExercise);

router.get("/:id", getExercise);

router.get("/", getExercises);

export default router;
