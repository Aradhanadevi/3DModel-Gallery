import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import bt from './images/7.jpg'
import '@fortawesome/fontawesome-free/css/all.css';
export const Signup = () => {
    const navigate = useNavigate();
  const[user,setUser] = useState({name:"",email:"",phone:"",work:"",password:"",cpassword:""});
  let name, value;
  const handleInput = (e)=>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({...user,[name]:value});
  }
  const PostData = async(e)=>{
    e.preventDefault();
    const {name, email ,phone ,work ,password ,cpassword } = user;
    const res = await fetch("/register",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            name, email ,phone ,work ,password ,cpassword 
        })
    })
    const data = await res.json();
    if(data.status === 422 || !data){
        window.alert("Invalid");
        console.log('invlaid');
    }else{
        window.alert("Successfull");
        console.log('Successfull');
        navigate('/')
    }
}
    return (
    <>
      <section className="vh-100" style={{backgroundColor:"#eee"}}>
        <div className="container h-100 mt-2">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{borderRadius: "25px"}}>
                <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                        <form id="abc" method="POST" className="mx-1 mx-md-4"  style={{ height: "50%", width: "80%" }}>
                        <div className="d-flex flex-row align-items-center mb-4"> 
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input type="text"  className="form-control" 
                                value={user.name}
                                onChange ={handleInput}
                                name='name'
                            />
                            <label className="form-label" >Name</label><br />
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input type="email"  className="form-control" 
                            value={user.email}
                            onChange ={handleInput}
                            name='email'
                            />
                            <label className="form-label" >Email</label>
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input type="text"  className="form-control" 
                            value={user.phone}
                            onChange ={handleInput}
                            name='phone'
                            />
                            <label className="form-label" >Phone</label>
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-briefcase  fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input type="text"  className="form-control" 
                            value={user.work}
                            onChange ={handleInput}
                            name='work'
                            />
                            <label className="form-label" >Work</label>
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input type="password"  className="form-control" 
                            value={user.password}
                            onChange ={handleInput}
                            name='password'
                            />
                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input type="password" className="form-control" 
                            placeholder='Enter Confirm Password'
                            value={user.cpassword}
                            onChange ={handleInput}
                            name='cpassword'
                            />
                            <label className="form-label" >Confirm password</label>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="button" name="signup" className="btn btn-primary btn-lg btn-block w-100" onClick={PostData}>Register</button>
                        </div>
                        <div>
                          Already have an account? <a href={'/'}>Login</a>
                        </div>
                        </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img src={bt} className="img-fluid" alt="Sample" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default Signup
