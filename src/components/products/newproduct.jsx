import { Button, Grid, TextField } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import ProductService from '../../services/Product';
import Auth from '../Auth/Auth';

const NewProduct = (props) => {
    const [name,setName] = React.useState("");
    const [price,setPrice] = React.useState(0);
    const [pid,setPid] = React.useState(0);
    const [Link,setLink] = React.useState("");
    const [category,setCategory] = React.useState("");
    const [details,setDetails] = React.useState("");
    return (
    <Auth> 
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <h1>Add new Product</h1>
        </Grid>
        <Grid item xs ={3}></Grid>
        <Grid item xs ={6}>
            <TextField id="standard-basic" label="link" fullWidth value={Link} onChange={(e=>{setLink(e.target.value)})}/>
            <TextField id="standard-basic" label="name" fullWidth value={name} onChange={(e=>{setName(e.target.value)})}/>
            <TextField id="standard-basic" label="price" fullWidth value={price} onChange={(e=>{setPrice(e.target.value)})}/>
            <TextField id="standard-basic" label="pid" fullWidth value={pid} onChange={(e=>{setPid(e.target.value)})}/> 
            <TextField id="standard-basic" label="category" fullWidth value={category} onChange={(e=>{setCategory(e.target.value)})}/> 
            <TextField id="standard-basic" label="details" fullWidth value={details} onChange={(e=>{setDetails(e.target.value)})}/> 
        </Grid>
        <Grid item xs ={3}></Grid>
        <Grid item xs ={3}></Grid>
        <Grid item xs ={9}>
            <Button variant="contained" color="primary" onClick={e=>{
            ProductService.addProduct({Link,name,price,pid,category,details}).then((data)=>{
                console.log(data);
                props.history.push("/products");
            }).catch(err=>{
                console.log(err);
            });
        }}>Add new Product</Button>
        </Grid>
    </Grid></Auth> );
}
 
export default NewProduct;