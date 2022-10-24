import { Button, useForkRef } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import InputField from "../../components/Form/InputFields";
import MultiField from "../../components/Form/MultiplyFields";
function BlogUpdate(props) {
  const { id } = useParams();
  const navigate = useNavigate();
 
  const [blog,setBlog]=useState()
  axios.get("http://localhost:5000/blog/" + id).then((res) => {
    setBlog(res.data);
    
  });

 
  const form = useForm({
    defaultValues: {
      title: "",
      content: "",
    },
    
  });
  const handle = (values) => {
    
    if (values) {
      let data = {
        id: id,
        title: values.title.length>0?values.title:blog.title,
        content: values.content.length>0?values.content:blog.content,
        commentList: blog.commentList,
      };
      axios.put(`http://localhost:5000/blog/${id}/update`, data)
      .then((res) => {
        navigate("/");
      });
     
    }
  };
  if(setBlog){
    return (
      <div>
        <form onSubmit={form.handleSubmit(handle)}>
          
          <InputField
            name="title"
            label="Tieu de blog"
            form={form}
            value={blog.title}
          />
          <MultiField
            name="content"
            label="Noi dung"
            form={form}
            value={blog.content}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ m: "20px 0px 2px 0px" }}
            type="submit"
          >
            Upload
          </Button>
        </form>
      </div>
    );  
  }
  
}
export default BlogUpdate;
