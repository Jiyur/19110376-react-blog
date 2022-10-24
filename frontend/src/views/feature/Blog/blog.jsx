import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Button, ButtonGroup } from "@mui/material/";
import Typography from "@mui/material/Typography";

import "./style.scss";
import { Link } from "react-router-dom";
import myblog from "../../model/blogModel";
import axios from "axios";
Blog.propTypes = {
  blog: PropTypes.object,
};

export default function Blog({ blog , onDelete, onUpdate}) {
  function getHost() {
    return "/blog/" + blog.id;
  }
  const myLink = (props) => <Link to={getHost()} {...props} />;
  const editLink=(props)=><Link to={"/edit/"+blog.id} {...props} />
  const handleDelete = () => {
    axios.delete("http://localhost:5000/blog/"+ blog.id+'/delete')
    .then((res) => {
      console.log(res.data);
      onDelete();
    })

    
  };
  const handleUpdate=()=>{
    onUpdate();
  }
  return (
    <Card sx={{ minWidth: 250 }} className="blog">
      <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5" component="div">
          {blog.title}
        </Typography>
        <div style={{marginLeft:50}}>
          <ButtonGroup 
          variant="text" 
          aria-label="text button group"
          >
            <Button 
            component={editLink}
            style={{
              color:'green'
              
            }}
            >Edit</Button>
            <Button onClick={handleDelete} style={{
              color:'red'
            }}>Delete</Button>
          </ButtonGroup>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small" component={myLink}>
          View{" "}
        </Button>
      </CardActions>
    </Card>
  );
}
