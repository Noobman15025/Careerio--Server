import Blog from "../models/blog.model.js";

// creating blogs
export const postBlog = async (req, res) => {
    try {
        const blog = await Blog.create(req.body);
        res.status(201).json({
            success: true,
            message: "Blog created successfully",
            blog,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create blog",
            error: error.message,
        });
    }
};

// get all blogs
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json({
            success: true,
            message: "Blogs fetched successfully",
            blogs,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch blogs",
            error: error.message,
        });
    }
};

// get single blog
export const getSingleBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        res.status(200).json({
            success: true,
            message: "Blog fetched successfully",
            blog,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch blog",
            error: error.message,
        });
    }
};

// update blog
export const updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json({
            success: true,
            message: "Blog updated successfully",
            blog,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update blog",
            error: error.message,
        });
    }
};

// delete blog
export const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: "Blog deleted successfully",
            blog,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete blog",
            error: error.message,
        });
    }
};

