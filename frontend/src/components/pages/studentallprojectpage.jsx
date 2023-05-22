import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Studentproject from '../layouts/studentallproject';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../layouts/header2'

function Studentallproject(){
    const Navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('id')){
          Navigate("/studentlogin");
          (toast.error('Please login to access', {
            position: toast.POSITION.TOP_CENTER
        }))
        };
      },[])
    return(
        
        <div>
            <Studentproject className='disable-scrolling'/>
            
        </div>
    )
}

export default Studentallproject;