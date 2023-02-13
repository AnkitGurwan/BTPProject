import React,{useState,useContext} from 'react'
import './styles.css'
import {Link ,useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AuthContext from '../../context/authentication/AuthContext'

const Body2 = ()=>{

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const {loginUser} = useContext(AuthContext);

    const navigate=useNavigate();

    const onChangeHandler = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    const loginSubmitHandler = async (event) => {
       
        event.preventDefault();
        const x=await loginUser(user.email,user.password)
       
        if(x === 200){
          toast.success('Login Success', {
            position: toast.POSITION.TOP_CENTER
        });
        
            navigate('/mainpage');
            setUser({email:"", password:""});
            
            
        }else {
          toast.error('Invalid email or password', {
            position: toast.POSITION.TOP_CENTER
        });
        }
    }
    
    
    const newfunc=async ()=>{
     
     navigate('/createaccount');
    }

    return(
        
    <div className="center" style={{"padding":"0px"}}>
      
        
 <div className='formshadow'>    
<ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li class="nav-item " role="presentation" >
    <div class="nav-link active" className="newfunc1" id="tab-login" data-mdb-toggle="pill" role="tab"
      aria-controls="pills-login" aria-selected="true" >Login</div>
  </li>
  <li class="nav-item" role="presentation" >
    <div class="nav-link" className="newfunc2" id="tab-register" data-mdb-toggle="pill"  role="tab"
      aria-controls="pills-register" aria-selected="false" onClick={newfunc}>Register</div>
  </li>
</ul>

<div class="tab-content">
  <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <form onSubmit={loginSubmitHandler}>
      <div class="form-outline mb-4">
        <input type="email" id="loginName" class="form-control"  placeholder="Email (i.e. 123@gmail.com)" required name="email" value={user.email} onChange={onChangeHandler}/>
      </div>

      
      <div class="form-outline mb-4">
        <input type="password" id="loginPassword" class="form-control" placeholder="Password"  required  name="password" value={user.password} onChange={onChangeHandler}/>
        
      </div>

     
      <div class="row mb-4">
        
        <div class="col-md-6 d-flex justify-content-center">
         
        <Link to="/resetpassword">Forgot password?</Link>
        </div>
      </div>

     
      <button type="submit" class="btn btn-primary btn-block mb-4 buttonmodify" id='proflogin'>Sign in</button>

      
    </form>
  </div>

</div>
</div>   

        
    
    </div>

    )
}
export default Body2;

{/* <form  onSubmit={loginSubmitHandler}>
    
    <div className="text_field">
        <input type="email" required placeholder='User email' className='body2input' name="email" value={user.email} onChange={onChangeHandler} />
    </div>

    <div className="text_field">
        <input type="password" required placeholder='Password' className='body2input' name="password" value={user.password} onChange={onChangeHandler}/>

    </div>
    <br/>
    <Link to="/resetpassword" className="pass">Forgot password?</Link><br/><br/>
    <button className='body2button1' type="submit" id='proflogin'>Login</button>
    <br/>
    

    <div className="signup_link"> Not a member?  <Link to="/createaccount">Signup</Link>
    </div>
    </form> */}
