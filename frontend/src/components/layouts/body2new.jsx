import React,{useState,useContext} from 'react'
import './styles.css'
import {Link ,useNavigate} from 'react-router-dom'
import AuthContext from '../../context/authentication/AuthContext'

const Body2 = ()=>{

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const {loginUser} = useContext(AuthContext);

    const navigate=useNavigate()
    const onChangeHandler = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    const loginSubmitHandler = async (event) => {
       
        event.preventDefault();
        const x=await loginUser(user.email,user.password)
        console.log(user);
        if(x === 200){
            ;
            alert("Login Successfully");
            navigate('/mainpage')
            setUser({email:"", password:""})
            
        }else alert('Invalid id or password')
    }
    

    return(
        
    <div className="center">
        
 <div className='formshadow'>    
<ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li class="nav-item" role="presentation">
    <div class="nav-link active" className="newfunc3" id="tab-login" data-mdb-toggle="pill" role="tab"
      aria-controls="pills-login" aria-selected="true">Login</div>
  </li>
  <li class="nav-item" role="presentation">
    <div class="nav-link" className="newfunc4" id="tab-register" data-mdb-toggle="pill" role="tab"
      aria-controls="pills-register" aria-selected="false">Register</div>
  </li>
</ul>

<div class="tab-content">

  <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
    <form >
     
      <div class="form-outline mb-4">
        <input type="text" id="registerUsername" class="form-control" />
        <label class="form-label" for="registerUsername">Username</label>
      </div>

    
      <div class="form-outline mb-4">
        <input type="email" id="registerEmail" class="form-control" />
        <label class="form-label" for="registerEmail">Email</label>
      </div>


    
      <button type="submit" class="btn btn-primary btn-block mb-6">Create Account</button>
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
