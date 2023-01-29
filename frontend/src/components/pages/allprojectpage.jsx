import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Allprojects from '../layouts/allprojects';
import Header from '../layouts/header2'

function ProjectPage(){
    const Navigate=useNavigate();

    useEffect(()=>{
        if(!localStorage.getItem('token')){
          
          Navigate("/login");
          (toast.error('Please login to access', {
            position: toast.POSITION.TOP_CENTER
        }))
        };
      },[])
     
    return(
        <div>
            <Header/>
            <Allprojects/>
        </div>
    )
}

export default ProjectPage;