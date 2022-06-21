import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
    {
        userId:String,
        title:String,
        article:String,
        author:String,
        picture:String
    }
);

const BlogModel = mongoose.model('blogs',BlogSchema);
export default BlogModel;