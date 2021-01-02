import React from 'react';
import { withRouter } from 'react-router-dom';
import userService from '../../services/UserService';
const Admin = (props) => {
    React.useEffect(()=>{
        if(!userService.isAdmin())
        {
            props.history.push("/login");
        }
    },[]);
    return  <>
    {props.children}
    </> 
}
 
export default withRouter(Admin);