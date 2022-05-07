import { Router } from "express";
import { checkAuth } from "../middlewares/checkAuth";
import {listSkill,createSkill,editSkill,removeSkill, readSkill} from "../controllers/skill"

const router = Router()

router.get("/skill",checkAuth,listSkill)
router.get("/skill/:id",checkAuth,readSkill)
router.post("/skill",checkAuth,createSkill)
router.put("/skill/:id",checkAuth,editSkill)
router.delete("/skill/:id",checkAuth,removeSkill)


export default router