import React, { useState,useContext,useEffect } from "react";
import { useNavigate,useParams,Link } from 'react-router-dom';
import ItemContext from '../../context/project/ItemContext';
import Projectcardspecific from "./projectcardspecific2";


const Specificprojectcard=()=> {
    const {items,userProjects} = useContext(ItemContext);

    const getItem=async ()=>{
        await userProjects()
      }
      useEffect(()=>{
        getItem()
      },[])


    const params=useParams();
    const id=params.id
    

     return(
        <div className='readmorepage2'>
          <br/>
          <Link className='goback' to={`/mainpage`}><i class="fa-sharp fa-solid fa-arrow-left fa-2xl"></i></Link>
          <div className='allprojectsdiv'>{items.filter((project)=>project._id===id).map((projects,i)=>{return (<Projectcardspecific key={i} project={projects}/>)})}</div>
          
        </div>
    )
  
}

export default Specificprojectcard