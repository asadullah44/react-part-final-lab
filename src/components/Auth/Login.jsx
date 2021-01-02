import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import userService from '../../services/UserService';
import {FaRegUserCircle} from "react-icons/fa"
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme)=>({
    container:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height :"600px",
    },
    child:{
        width:"60%",
    },
    button:{
        marginTop:"50px"
    }
}));              
const Login = (props) => {
    const classes = useStyles();
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
    return ( <div className={classes.container}>
        <div className={classes.child}>
        <FaRegUserCircle size="5rem" style={{marginLeft:"360px"}}/>
        <h1 className="text-center">Login</h1>
        <TextField style={{}} label="Email" fullWidth value={email} onChange={(e)=>{
            setEmail(e.target.value);
        }}/><br/>
        <TextField style={{}} label="Password" type="password" fullWidth value={password} onChange={(e)=>{
            setPassword(e.target.value);
        }}/><br/>
        <a href="/register" style={{color:"purple",marginLeft:"300px"}}>Don't have an account Sign Up</a>
        <Button variant="contained" color="primary" style ={{marginLeft:"360px",marginBottom:"30px"}}className={classes.button} onClick={(e)=>{
            userService.login(email,password).then((data)=>{
                console.log(data);
                window.location.href="/";
            }).catch(err=>{
                console.log(err);
                toast.error(err.response.data,{
                    position: toast.POSITION.TOP_LEFT
                });
            });
        }}>Login</Button>
        </div>
    </div> );
}
 
export default Login;