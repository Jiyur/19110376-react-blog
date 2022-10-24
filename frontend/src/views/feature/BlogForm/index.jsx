import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/Form/InputFields';
import MultiField from '../../components/Form/MultiplyFields';
import myblog from '../../model/blogModel';
function BlogForm(props) {
    const navigate = useNavigate();

    const form = useForm({
        defaultValues: {
          title: "",
          content: "",
        },
      });
    const handleSubmit=(values)=>{
        if(values){

            let data={
                id:myblog.length+1,
                title:values.title,
                content:values.content,
            }
            console.log(data)
            axios.post('http://localhost:5000/blog/add',data)
            .then((res)=>{
                console.log(res.data)
                navigate('/')
            })
        }

    }
   
    return (
        <div style={{width:"100%"
        ,display:'flex'
        ,justifyContent:'center'
        }} >
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name='title' label='Tieu de blog' form={form}/>
                <MultiField name='content' label='Noi dung blog' form={form}/>
                <Button variant='contained' 
                color='primary' 
                fullWidth sx={{m:'20px 0px 2px 0px'}} 
                type='submit'
                >Upload</Button>    
            </form>
        </div>
    );
}

export default BlogForm;