import { Router } from "express";
import {listProfile,createProfile,editProfile,removeProfile, readProfile} from "../controllers/profile"
import { checkAuth } from "../middlewares/checkAuth";

const router = Router()

router.get("/profile",checkAuth,listProfile)
router.get("/profile/:id",checkAuth,readProfile)
router.post("/profile",checkAuth,createProfile)
router.put("/profile/:id",checkAuth,editProfile)
router.delete("/profile/:id",checkAuth,removeProfile)



export default router