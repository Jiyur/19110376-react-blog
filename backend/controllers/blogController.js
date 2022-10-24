let  myblog=require('../models/blogModel');
const {initBlog}=require('../models/blogModel');
const getListBlog=(req,res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(myblog));
}
const getBlogById=(req,res)=>{
    let blog=myblog.find((blog)=>blog.id==req.params.id);
    res.end(JSON.stringify(blog));
}
const createNewBlog=(req,res)=>{
    var text=req.body.content;
    let newBlog={
        id:myblog.length+1,
        title:req.body.title,
        content:text,
        comments:[]
    }
    myblog.push(newBlog);
    res.end(JSON.stringify(myblog));
}
const getForm=(req,res)=>{
    res.render('blogForm');
}
const addComment=(req,res)=>{
    let blog=myblog.find((blog)=>blog.id==req.params.id);
    console.log(req.body)
    let newComment={
        id:blog.commentList.length+1,
        content:req.body.content,
    }
    blog.commentList.push(newComment);
    res.end(JSON.stringify(myblog));
}
const deleteBlog=(req,res)=>{
    let blog=myblog.find((blog)=>blog._id==req.params.id);
    let index=myblog.indexOf(blog);
    myblog.splice(index,1);
    res.end(JSON.stringify(myblog));
}

const getUpdateForm=(req,res)=>{
    let blog=myblog.find((blog)=>blog._id==req.params.id);
    res.render('updateForm',{blog:blog});
}
const handleUpdate=(req,res)=>{
    console.log(req.params.id);
    let blog=myblog.find((blog)=>blog.id==req.params.id);
    console.log(blog)

    blog.title=req.body.title;
    blog.content=req.body.content;
    res.end(JSON.stringify(myblog));

}
module.exports={
    getListBlog,
    getBlogById,
    createNewBlog,
    getForm,
    addComment,
    deleteBlog,
    getUpdateForm,
    handleUpdate
}