import React,{useState, useContext} from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../../context/authentication/AuthContext';

const Createaccount=()=>{
    const {registerUser} = useContext(AuthContext);
    const [user, setUser] = useState({ name: "", email: "" });
    const detectChanges = (e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    const navigate=useNavigate()
    const submit = async (e)=>{
        e.preventDefault();
        const x=await registerUser(user.name, user.email);
        console.log(x);
        if(x===200){
            
            navigate('/login');}
        if(x===400){
          toast.warning('Email already exist', {
            position: toast.POSITION.TOP_CENTER
        });}
        
    }
    const newfunc=async ()=>{
     
      navigate('/login');
    }
    return(
        
        <div className="center">
            
     <div className='formshadow'>    
    <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
      <li class="nav-item" role="presentation">
        <div class="nav-link active" className="newfunc3" id="tab-login" data-mdb-toggle="pill" role="tab"
          aria-controls="pills-login" aria-selected="true"  onClick={newfunc}>Login</div>
      </li>
      <li class="nav-item" role="presentation">
        <div class="nav-link" className="newfunc4"  id="tab-register" data-mdb-toggle="pill" role="tab"
          aria-controls="pills-register" aria-selected="false">Register</div>
      </li>
    </ul>
    
    
<div class="tab-content">
  <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
        <form className='formcreateaccount' onSubmit={submit} >
         
          <div class="form-outline mb-4">
          <input className='form-control' name='name' value={user.name}  placeholder="Name" required onChange={detectChanges}/>
          </div>
    
        
          <div class="form-outline mb-4">
            <input className='form-control' name='email' value={user.email} type='email' placeholder="Email" required onChange={detectChanges}/>
          </div>
    
    
        
          {/* <button type="submit" class="btn btn-primary btn-block">Create Account</button>
           */}
           <button class="btn btn-primary btn-block btnlength" type="submit" >Signup</button>
           <div className='divnote'>NOTE:Once you "Signup" you will receive a mail on this Email account.</div>
        </form>
      
           </div>
           </div>
           
    </div>   
    
            
        
        </div>
    
        )

//     return(
// <div className="center">
//     <br/>
//         <h1>Create account</h1>
//         <form className='formcreateaccount' onSubmit={submit}>
//     <div className="text_field">
//         <input className='body2input' name='name' value={user.name}  placeholder="Name" required onChange={detectChanges}/>
//         <span></span>
//       </div><br/>
// <div className="text_field">
//         <input className='body2input' name='email' value={user.email} type='email' placeholder="Email" required onChange={detectChanges}/>
//         <span></span>
//         </div><br/><br/>
//     <button className='cardbutton1' type="submit" >Signup</button>
//     <div className='divnote'>NOTE:Once you "Signup" you will receive a mail on this Email account.</div>
// </form>
// </div>
// )

}
export default Createaccount;