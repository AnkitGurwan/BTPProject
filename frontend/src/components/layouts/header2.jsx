import React from 'react';
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Footer2(){

const newfunc=()=>{
    localStorage.clear('token');
    toast.success('Logged out successfully', {
        position: toast.POSITION.TOP_CENTER
    });

}
    return(
    <div className='footer2maindiv'>

        
        <span className='footer2span1'>
        <div className='footer2div1'>Indian Institute of Technology</div>
        <div className='footer2div2'>Guwahati</div>
        
        </span> 
        
        <i className='footer2i' class="fa-solid fa-right-from-bracket"></i> 
        <span className='footer2span2'><Link className='footer2a' to={'/'} onClick={newfunc} >LogOut</Link></span>
    </div>
)
};
export default Footer2;