import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";
import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";
import myblog from "../model/blogModel";
import {Link} from 'react-router-dom';
function BlogFeater(props) {
  const [blogList, setBlogList] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  useEffect(() => {
    handleGetData();
  }, [isDelete],[isUpdate]);
  const handleGetData=()=>{
    axios.get("http://localhost:5000")
    .then((res) => {
      setBlogList(res.data);
    })
    
  }
  const myLink = (props) => <Link to="/add" {...props} />;
  return (
    <div>
      <div style={{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
      }}>
      <BlogList blogList={blogList} onDelete={()=>{
        console.log(isDelete)
        setIsDelete(!isDelete)
      }}
      onUpdate={()=>{
        console.log(isUpdate)
        setIsUpdate(!isUpdate)
      }} />

      </div>
      <div 
       style={{
        display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          flexDirection: 'column',
    }}
      >
        <h3 style={{alignSelf:'center'}}>Click here to add new blog</h3>
       
        <Fab color="primary" aria-label="add" style={{
          alignSelf: 'center',
        }}
        component={myLink}>
          <AddIcon/>
          </Fab> 
        
      </div>
    </div>
  );
}

export default BlogFeater;
