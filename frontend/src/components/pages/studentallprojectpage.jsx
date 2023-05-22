import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Studentproject from '../layouts/studentallproject';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../layouts/header2'

function Studentallproject(){
        
    return(
        
        <div>
            <Studentproject className='disable-scrolling'/>
            
        </div>
    )
}

export default Studentallproject;