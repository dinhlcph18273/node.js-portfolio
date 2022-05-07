import { Router } from "express";
import { createProject, editProject, listProject, readProject, removeProject } from "../controllers/projects";
import { checkAuth } from "../middlewares/checkAuth";

const router = Router()

router.get("/project", checkAuth,listProject)
router.get("/project/:id", checkAuth,readProject)
router.post("/project", checkAuth,createProject)
router.put("/project/:id", checkAuth,editProject)
router.delete("/project/:id", checkAuth,removeProject)

export default router