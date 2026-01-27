import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { postBlog, getAllBlogs, getSingleBlog, updateBlog, deleteBlog } from "../controllers/blog.controller.js";

const router = express.Router();


router.route("/get").get(getAllBlogs);
router.route("/get/:id").get(isAuthenticated, getSingleBlog);
router.route("/update/:id").post(isAuthenticated, updateBlog);
router.route("/delete/:id").post(isAuthenticated, deleteBlog);


export default router;
