import {Router} from "express";
import {createIssue} from "../controllers/Issues.js";

const router = Router();

router.post("/",createIssue)

export default router;