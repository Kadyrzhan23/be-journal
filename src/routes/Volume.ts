import {Router} from "express";
import {createVolume, getVolumes} from "../controllers/Volume.js";

const router = Router();

router.get("/", getVolumes)
router.post("/", createVolume)


export default router;