import { Router } from 'express';
import {
    createCourse,
    deleteCourse,
    getCourseById,
    getCourses,
    updateCourse
} from "../controllers/course.controller.js";


const coursesRoutes = Router();

coursesRoutes.get("/", getCourses);
coursesRoutes.get("/:id", getCourseById);
coursesRoutes.post("/", createCourse);
coursesRoutes.put("/:id", updateCourse);
coursesRoutes.delete("/:id", deleteCourse);

export default coursesRoutes;
