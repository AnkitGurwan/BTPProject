
import React, { useContext,useEffect } from "react";
import {useParams,Link } from 'react-router-dom';
import ItemContext from '../../context/project/ItemContext';
import AuthContext from '../../context/authentication/AuthContext';
import Ownerprojectcard from './ownerprojectcard'
import Projectcardspecific from "./studentspecificprojectcard";
import { useSelector } from 'react-redux';

const Specificprojectcard=()=> {
    const {allProjects,details} = useContext(ItemContext);
   
    const {token} = useContext(AuthContext);
    var idtoken=token;

    const Store = [];  
    Store.push(details);

    const items = useSelector(state => state.allProjects.allProjects);

    const getItem=async ()=>{
          await allProjects()
        }
        useEffect(()=>{
          getItem();
        },[]);


    const params=useParams();
    const id=params.id
    
     return(
        <div className='studentspecificdiv'>
          <header class="bg-gray-800 text-white py-2 flex items-center justify-center">
          <Link className='goback' to={`/studentallproject`}><i class="fa-sharp fa-solid fa-arrow-left fa-lg pl-2" /></Link>
            
            <div class="container mx-auto px-2">
              <h1 class="text-xl md:text-2xl font-bold mt-2 text-center">Kindy click on Register if you are ineterested</h1>
            </div>
          </header>
          <br/>
          
          <div className="flex">
           <div className="w-3/4 md:w-2/3 mx-auto md:mx-0">
            {Store.map((detail,i)=>{return (<Ownerprojectcard key={i} detail={detail} />)})}
          </div>
          </div>
          

          <div className='allprojectsdiv2'>{items.filter((project)=>project._id===id).map((projects,i)=>{return (<Projectcardspecific key={i} project={projects} idtoken={idtoken}/>)})}</div>
        </div>
    )
}
export default Specificprojectcard

