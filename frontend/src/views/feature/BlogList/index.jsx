import React from 'react';
import Blog from '../Blog/blog';
import './style.scss'

function BlogList({blogList,onDelete,onUpdate}) {
   
    const handleDelete = () => {
        onDelete()
    }
    const handleUpdate=()=>{
        onUpdate()
    }
    return (
        blogList.map(blog=>(
            <Blog key={blog.id} blog={blog}
             onDelete={handleDelete}
             onUpdate={handleUpdate}
             />
        ))
    );
}

export default BlogList;    