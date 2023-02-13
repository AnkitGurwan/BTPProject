import React,{useState, useContext}  from 'react';
import {useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/authentication/AuthContext';
import * as Msal from 'msal'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Createaccount=()=>{
    const {SigninStudent}=useContext(AuthContext);

    const Navigate=useNavigate();

    const Submit=async ()=> {
      const x=await SigninStudent();
            if (x===200) {
             Navigate('/studentallproject')

             toast.success('Login Success', {
              position: toast.POSITION.TOP_CENTER
          });
            }
          }
      
    return(


<div class="centerdiv">
    <br/>
        <h2>Welcome to the Student Login</h2>
        <hr/>

  <div class="bsk-container">
    <button class="bsk-btn bsk-btn-default" onClick={Submit}>
      <object type="image/svg+xml" data="https://s3-eu-west-1.amazonaws.com/cdn-testing.web.bas.ac.uk/scratch/bas-style-kit/ms-pictogram/ms-pictogram.svg" class="x-icon"></object> 
      <h5 style={{"margin":"4px"}}>Sign in with Microsoft</h5></button>
  </div>

 
</div>
)
}
export default Createaccount;