import React, { useState,useContext,useEffect } from "react";
import { useNavigate,useParams,Link } from 'react-router-dom';
import ItemContext from '../../context/project/ItemContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const NewProject=()=> {
    const {items,userProjects,updateProject} = useContext(ItemContext);

    const getItem=async ()=>{
        await userProjects()
      }
      useEffect(()=>{
        getItem()
      },[]);

      const params=useParams();
      const id=params.id;

        

      const project=items.filter((project)=>project._id===id).map((project,i)=>{return project})
       

  const [itemData, setItemData] = useState({ title:project[0].title,abstract:project[0].brief_abstract,cosupervisor:project[0].co_supervisor,specialization:project[0].specialization })
  
  const onChangeHandler = (e) => {
    setItemData({...itemData,[e.target.name]:e.target.value});
  }

  const navigate=useNavigate()
    const submit = async (e)=>{
        e.preventDefault();
        
        await updateProject(itemData.title,itemData.abstract,itemData.cosupervisor,itemData.specialization,id);
        toast.success('Updated successfully', {
          position: toast.POSITION.TOP_CENTER
      });
        navigate('/owner')
    }
  
  return (
    <div className="readmorepage">
      <br/>
    <Link className='goback' to={`/owner`}><i class="fa-sharp fa-solid fa-arrow-left fa-2xl"/></Link>
    <form className="cardform" onSubmit={submit}>
    <div className="cardheaddiv">Please fill out the information about the project</div>
    <label className="cardlabel">
    <div className="carddiv">Title:</div>    
    <input name="title" type="text" className="cardinput" onChange={onChangeHandler} value={itemData.title} required/>
    </label>
    <label className="cardlabel">
     <div className="carddiv">Brief Abstract:</div>    
    <textarea className="cardinput" name="abstract" rows="7" cols="120" value={itemData.abstract} onChange={onChangeHandler} required></textarea>
    </label>
    <label className="cardlabel">
     <div className="carddiv">Co-Supervisor:</div>    
        <input type="text" name="cosupervisor" className="cardinput" value={itemData.cosupervisor} onChange={onChangeHandler}/>
    </label>
    <label className="cardlabel">
     <div className="carddiv">Specialization:</div>    
   
    <input name="specialization" type="text" className="cardinput" value={itemData.specialization} onChange={onChangeHandler}/>
    </label>
    
    <button className='cardbutton' type="submit">Update</button>
</form>
</div>
  );
}

export default NewProject