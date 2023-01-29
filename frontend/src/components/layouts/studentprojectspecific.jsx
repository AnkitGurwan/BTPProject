
import React, { useState,useContext,useEffect } from "react";
import { useNavigate,useParams,Link } from 'react-router-dom';
import ItemContext from '../../context/project/ItemContext';
import Projectcardspecific from "./studentspecificprojectcard";


const Specificprojectcard=()=> {
    const {items,userProjects} = useContext(ItemContext);

    const getItem=async ()=>{
        await userProjects()
      }
      useEffect(()=>{
        getItem();
      },[]);


    const params=useParams();
    const id=params.id
    
    

     return(
        <div className=''>
          <Link className='goback' to={`/studentallproject`}>Go Back</Link>
          <div className='allprojectslinkdiv'></div>
          <div className='allprojectsdiv'>{items.filter((project)=>project._id===id).map((projects,i)=>{return (<Projectcardspecific key={i} project={projects}/>)})}</div>
          
        </div>
    )
  
}

export default Specificprojectcard

