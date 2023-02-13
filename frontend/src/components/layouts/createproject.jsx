import React, { useState,useContext,useEffect } from "react";
import { useNavigate,Link } from 'react-router-dom';
import ItemContext from '../../context/project/ItemContext';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
var _ = require('lodash');

const NewProject=()=> {
  const {createProject} = useContext(ItemContext);
  const [itemData, setItemData] = useState({ title:"",abstract:"",cosupervisor:"",specialization:"",date:"",time:"",isbanned:false })
  
  const onChangeHandler = (e) => {
    (setItemData({...itemData,[e.target.name]:e.target.value}));
    
  }

  const navigate=useNavigate()
    const submit = async (e)=>{
        e.preventDefault();
        const x=await createProject(itemData.title,itemData.abstract,itemData.cosupervisor,itemData.specialization,itemData.date,itemData.time,itemData.isbanned);
        
        if(x===200){
        navigate('/owner')
        toast.success('Project created successfully', {
          position: toast.POSITION.TOP_CENTER
      });
    }
    }


    
   
  
  return (
    <div className="readmorepage">
      <br/>
      
    <Link className='goback' to={`/owner`}><i class="fa-sharp fa-solid fa-arrow-left fa-2xl"/></Link>
    <form className="cardformm" onSubmit={submit}>
    <div className="cardheaddiv">Please fill out the information about the project</div>
    <label className="cardlabell">
    <div className="carddiv" id="card-titl">Title:</div>    
    <input name="title" type="text" className="cardinput" autoFocus id="card-title" onChange={onChangeHandler} value={itemData.title} required/>
    </label>
    <label className="cardlabell">
     <div className="carddiv">Brief Abstract:</div>    
    <textarea className="cardinput" name="abstract" rows="7" cols="120" value={itemData.abstract} onChange={onChangeHandler} required></textarea>
    </label>
    <label className="cardlabell">
     <div className="carddiv">Co-Supervisor:</div>    
        <input type="text" name="cosupervisor" className="cardinput" value={itemData.cosupervisor} onChange={onChangeHandler}/>
    </label>
    <label className="cardlabell">
     <div className="carddiv">Specialization:</div>    
   
    <input name="specialization" type="text" className="cardinput" value={itemData.specialization} onChange={onChangeHandler}/>
    </label>
    
    <button className='cardbuttonn' type="submit">Submit</button>
</form>
</div>
  );
}

export default NewProject