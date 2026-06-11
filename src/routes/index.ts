import express from "express";
import articleRouter from "./Article.js";
import volumeRouter from './Volume.js'
import issueRouter from './Issue.js'
const router = express.Router();
router.use("/articles", articleRouter);
router.use("/issues", issueRouter)
router.use("/volumes", volumeRouter);

export default router;