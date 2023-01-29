import React,{useState, useContext,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ItemContext from '../../context/project/ItemContext';
import Projectcard from './studentprojectcard'

const Createaccount=()=>{
    const {items,userProjects} = useContext(ItemContext);

    const getItem=async ()=>{
        await userProjects()
      }
      useEffect(()=>{
        getItem()
      },[])

      const[search,setSearch]=useState("");
    
    const detectChanges = async(e)=>{
        
      setSearch(e.target.value);   
  }
    
    return(
        <div >
          <div className='studentallprojectdiv1'>Kindly "Register" to the project you are interested in</div>
          <marquee scrollamount="15" className='studentallprojectdiv2'>Note: These projects selection will be final, no further changes will be made.</marquee>
          <div class="input-group" className='searchdiv'>
            <div class="form-outline">
             <input id="search-input" type="search"  class="form-control" name='search' placeholder="Search by Title name" value={search} onChange={detectChanges} />
         </div>
         </div>
          <div className='allprojectsdiv'>{items.filter((projects)=>{ return search.toString().toLowerCase()==='' ? projects : projects.title.toLowerCase().includes(search)}).map( (project,i)=>{return (<Projectcard key={i} project={project}/>)})}</div>
          
        </div>
    )
}
export default Createaccount;