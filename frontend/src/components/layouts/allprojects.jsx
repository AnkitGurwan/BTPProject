import { includes } from 'lodash';
import React,{useContext,useEffect,useState} from 'react';
import { Link,  useNavigate,useParams } from 'react-router-dom';
import ItemContext from '../../context/project/ItemContext';
import Projectcard from './projectcard2'


const Createaccount=()=>{
    const {items,userProjects} = useContext(ItemContext);

  
    const getItem=async ()=>{
        
        await userProjects();
        
      }

      useEffect(()=>{
        getItem();
      },[]) ;



    const[search,setSearch]=useState("");
    
    const detectChanges = async(e)=>{
        
      setSearch(e.target.value);   
  }
    
 
    
    return(
             
      <div class="container-fluid1 text-center">    
        
          <div class="sidenavbar">
          <Link className='myprojectsdiva' to={`/owner`}>
            
          <div className='myprojectsdiv1'><i class="fa-solid fa-user fa-xl"></i></div>
          <div className='myprojectsdiv2'>My Projects</div>
            </Link>
          <Link className='myprojectsdivb' to={``}>
          
          <div className='myprojectsdiv2'>All Projects</div>
            </Link>
          
          </div>

          
          

          <div class="text-left"> 

          <div class="input-group" className='searchdiv'>
            <div class="form-outline">
             <input id="search-input" type="search"  class="form-control" name='search' placeholder="Search by Title name" value={search} onChange={detectChanges} />
         </div>
         </div>

          <div className='allprojectsdiv'>{items.filter((projects)=>{ return search.toString().toLowerCase()==='' ? projects : projects.title.toLowerCase().includes(search)}).map( (project,i)=>{ return (<Projectcard key={i} project={project}/>)})}</div>
          </div>
          
      
      </div>
      
    )
}
export default Createaccount;

{/* <div className=''>
          <div className='allprojectslinkdiv'><Link to='/newproject' className='allprojectslink'  ><h1>+</h1>ADD NEW PROJECT</Link></div>
          <div className='allprojectsdiv'>{itemsspecific.map( (project,i)=>{ return (<Projectcard key={i} project={project}/>)})}</div>
          
        </div> */}