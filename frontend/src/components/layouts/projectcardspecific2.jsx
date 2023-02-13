import React,{useContext} from 'react';
import { Link,useNavigate,useParams } from 'react-router-dom';
import ItemContext from '../../context/project/ItemContext';


function Projectcard(props){
    const {project}=props;
 
   
    

    return(
    <div className='projectcardmaindiv'>
       
            <div class="card" style={{width:"auto",height:"auto"}}>
            <div class="card-body">
                <h1 class="card-title">{project.title}</h1>
                <h3 class="card-subtitle mb-2 text-muted">{project.co_supervisor}<h6>(co-supervisor)</h6></h3>
                <p class="card-text">{project.brief_abstract}</p>
                <p class="card-text"><h4>Specialisation</h4>{project.specialization}</p>
                <h6 class="card-title">Created on {project.creation_date} </h6>
                <h6 class="card-title">Created at {project.creation_time} </h6>
               
                
            </div>
           
        </div>
    </div>
    

    )}

export default Projectcard