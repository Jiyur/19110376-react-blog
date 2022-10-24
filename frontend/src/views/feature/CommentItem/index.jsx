import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



function CommentItem({comment}) {
    return (
    <Card sx={{ minWidth: 250,mr:5,ml:1,mt:5 }} className='card'>
      <CardContent>
       
        <Typography variant="h6" component="div" >
          {comment.content}
        </Typography>
       
       
      </CardContent>
     
    </Card>
    );
}

export default CommentItem;