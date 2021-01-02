import Generic from "./Generic";
import jwt_decode from "jwt-decode";
class UserService extends Generic
{
    constructor(){ super();}

    login =(email,password)=> new Promise((resolve,reject)=>{
        this.post("users/login",{email,password}).then(token=>{
            localStorage.setItem("token",token);
            resolve(token);
            }).catch(err=>{
                reject(err);
        })
    }); 
    register =(name,email,password)=>this.post("users/register",{password,email,name});
    logout = ()=> {
        localStorage.removeItem("token");
    }
    isLoggedin = ()=>{
        return localStorage.getItem("token")?true : false;
    }

    getLoggedinUser = ()=>{
        try{
            const jwt = localStorage.getItem("token");
            return jwt_decode(jwt);
        }catch(ex){
            return null
        }
    };

    isAdmin = ()=>{
        if(this.isLoggedin())
        {
            if(this.getLoggedinUser().role=="admin") return true;
            else return false;
        } else return false;
    }
}

let userService = new UserService();
export default userService;