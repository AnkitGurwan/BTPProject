import React, { useContext,useEffect } from "react";
import { useParams,Link } from 'react-router-dom';
import ItemContext from '../../context/project/ItemContext';
import AuthContext from '../../context/authentication/AuthContext';
import Projectcardspecific from "./projectcardspecific";
import { useSelector } from 'react-redux';


const Specificprojectcard=()=> {
    const {Projectspecific} = useContext(ItemContext);
    const {downloadDetails} = useContext(AuthContext);

    const items = useSelector(state => state.allProjects.specificProjects);

    const params=useParams();
    const id=params.id;

    const getItem=async ()=>{        
      Projectspecific(); 
      };
      useEffect(()=>{
          getItem();
      },[]) 

    
    
     return(
        <div className='readmorepage'>
          <br/>
          <div className="flex fixed">
            <Link className='goback' to={`/owner`}><i class="fa-sharp fa-solid fa-arrow-left fa-2xl"></i></Link>
           
            </div>
          <div className='allprojectsdivread'>{items.filter((project)=>project._id===id).map((projects,i)=>{return (<Projectcardspecific key={i} project={projects}/>)})}</div>    
      </div>
    ) 
};
export default Specificprojectcard