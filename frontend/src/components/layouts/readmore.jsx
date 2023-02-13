import React, { useState,useContext,useEffect } from "react";
import { useNavigate,useParams,Link } from 'react-router-dom';
import ItemContext from '../../context/project/ItemContext';
import Projectcardspecific from "./projectcardspecific";
import AuthContext from '../../context/authentication/AuthContext';


const Specificprojectcard=()=> {
    const {items,userProjects} = useContext(ItemContext);

    const getItem=async ()=>{
        await userProjects()
      }
      useEffect(()=>{
        getItem();
       
      },[])


    const params=useParams();
    const id=params.id
    
     return(
        <div className='readmorepage'>
          
          <br/>
          <Link className='goback' to={`/owner`}><i class="fa-sharp fa-solid fa-arrow-left fa-2xl"></i></Link>
          
          <div className='allprojectsdivread'>{items.filter((project)=>project._id===id).map((projects,i)=>{return (<Projectcardspecific key={i} project={projects}/>)})}</div>
          
        </div>
    )
  
}

export default Specificprojectcard