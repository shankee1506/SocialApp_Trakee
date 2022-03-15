import React,{useState} from 'react'

import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles.js';
import {useDispatch} from 'react-redux';
import { createPost } from '../../actions/posts'; 
 


const form = () => {
  const classes = useStyles();
  const [postData, setPostData] = useState({ creator: '', title: '', message: '' });
  const dispatch = useDispatch();
  

  const handleSubmit= (e) =>{
    e.preventDefault();

    dispatch(createPost(postData));
  }
  const clear= () =>{
    
  }

  return (
    <Paper className={classes.paper}>
    <form autiComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
    <Typography variant='h6'>
    Creating the Post
    </Typography>

    <TextField name='creator' variant='outlined' label='Creator' fullWidth value={postData.creator} onChange={(e)=> setPostData({...postData, creator: e.target.value})} />
    <TextField name='title' variant='outlined' label='title' fullWidth value={postData.title} onChange={(e)=> setPostData({...postData, title: e.target.value})} />
    <TextField name='message' variant='outlined' label='message' fullWidth value={postData.message} onChange={(e)=> setPostData({...postData, message: e.target.value})} />
    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
    </form>
    </Paper>
  )
}

export default form