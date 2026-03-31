import { Post } from "../models/post.model.js";

export const getAllPosts = async () => {
  return await Post.find().populate("author");
};

export const getPostById = async (id) => {
  return await Post.findById(id).populate("author");
};

export const createPost = async (data) => {
  return await Post.create(data);
};

export const updatePost = async (id, data) => {
  return await Post.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  }).populate("author");
};

export const deletePost = async (id) => {
  return await Post.findByIdAndDelete(id);
};