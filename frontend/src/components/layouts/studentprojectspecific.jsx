
import React, { useState,useContext,useEffect } from "react";
import { useNavigate,useParams,Link,useLocation } from 'react-router-dom';
import ItemContext from '../../context/project/ItemContext';
import AuthContext from '../../context/authentication/AuthContext';
import Projectcardspecific from "./studentspecificprojectcard";



const Specificprojectcard=(props)=> {
  const {items,userProjects} = useContext(ItemContext);
  const {token} = useContext(AuthContext);
  var idtoken=token
   const getItem=async ()=>{
        await userProjects()
      }
      useEffect(()=>{
        getItem();
      },[]);


    const params=useParams();
    const id=params.id
    
    
    

     return(
        <div className='studentspecificdiv'>
          <div></div>
          <br/>
          
          <Link className='goback' style={{"padding-top":"20px"}} to={`/studentallproject`}><i class="fa-sharp fa-solid fa-arrow-left fa-2xl" /></Link>
          
          <div className='allprojectsdiv2'>{items.filter((project)=>project._id===id).map((projects,i)=>{return (<Projectcardspecific key={i} project={projects} idtoken={idtoken}/>)})}</div>
          
        </div>
    )
  
}

export default Specificprojectcard

