import react,{useEffect,useState} from "react";

const Register =(props) => {
    const [user,setUser] = useState({
        "username":null,
        "name" :null,
        "lastname":null,
        "password": null,
})


const handlechange =(e) => {
    setUser({...user,[e.target.name]:e.target.value,
        [e.target.username]:e.target.value,
        [e.target.lastname]:e.target.value,
        [e.target.password]:e.target.value})
         console.log(user)


}

const handlesubmit =(e) => {
if(user.username){
    const url="http://localhost:8000/admin/auth/user/"
    const params = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'},
        body: JSON.stringify(
            {"username":user.username,
            "email":user.email,
            "password":user.password,
            "firstname":user.firstname,
            "lastname":user.lastname
            })
        }
    fetch(url,params)
    .then(res => res,JSON())
    .then((data)=>{
        // localStorage.setItem("access",data.access)
        // localStorage.setItem("refresh",data.refresh)
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
                    <label >email:</label>
                    <input type="email" name="email" className="form-control" required  onChange={handlechange}/>
                </div>

                <div className="form-group">
                    <label >Password:</label>
                    <input type="password" name="password" className="form-control" required  onChange={handlechange}/>
                </div>

                <div className="form-group">
                    <label >firstname:</label>
                    <input type="text" name="firstname" className="form-control" required  onChange={handlechange}/>
                </div>

                <div className="form-group">
                    <label >lastname:</label>
                    <input type="text" name="lastname" className="form-control" required  onChange={handlechange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
    )
}

export default Register