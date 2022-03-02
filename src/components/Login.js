import react, {useEffect,useState} from "react";

const Login = (props) => {
    const[user,setUser] = useState({
        "username" :null,
        "password":null,
        "access": "",
        "refresh":""
    })

    const handlechange = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user)
    }

    const handlesubmit=(e) => {
        if(user.username){
            const url="http://localhost:8000/api/token/"
            const params ={
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'},
                body: JSON.stringify(
                    {"username":user.username ,
                    "password":user.password 

                    })
            }
            fetch(url,params)
            .then(res => res.json())
            .then((data)=>{
                localStorage.setItem("access",data.access)
                localStorage.setItem("refresh",data.refresh)
                setUser({...user,["access"]:localStorage.getItem("access"),["refresh"]:localStorage.getItem("refresh")})
                console.log(user)
            }
            
            )
               
        }

        e.preventDefault();
            
    }
    return (
        <div className="container mt-5">
            
            <form onSubmit={handlesubmit} method="Post">
                <div className="form-group">
                    <label >Username:</label>
                    <input type="text" name="username" className="form-control" required  onChange={handlechange}/>
                </div>
                <div className="form-group">
                    <label >Password:</label>
                    <input type="password" name="password" className="form-control" required  onChange={handlechange}/>
                    
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>

    )

}

export default Login

