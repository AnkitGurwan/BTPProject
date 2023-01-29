import React from 'react';
import { Link } from 'react-router-dom';


function Projectcard(props){
    const {project}=props;
   
    return(
    <div className='projectcardmaindiv'>
        
            <div class="card" style={{width:"27vw"}}>
            <div class="card-body" className='cardbody'>
                <h3 class="card-title" style={{"textDecoration":"underline" ,"padding-bottom":"15px"}}>{project.title}</h3>
                <h5 class="card-subtitle mb-2 text-muted" style={{"text-align":"center"}}>{project.co_supervisor}<h6 style={{"text-align":"center"}}>(co-supervisor)</h6></h5>
                <p class="card-text" style={{"text-align":"center"}}>{project.brief_abstract.slice(0,150)}<Link to={project._id} style={{"textDecoration":"none"}}><h6>...read more</h6></Link></p>
                <p class="card-text"style={{"text-align":"center"}}> <h5 style={{"text-align":"center"}}>Specialisation</h5>{project.specialization}</p>
                <h6 class="card-title" style={{"text-align":"center"}}>{project.creation_date} </h6>
                <h6 class="card-title" style={{"text-align":"center"}}>{project.creation_time} </h6>
                <div className='projectcardupdate'>
                <Link className='projectcardlink1' style={{width:"90px"}} to={project._id}>Interested</Link>
                
                </div>


                
                
            </div>
        </div>
    </div>
    

    )}

export default Projectcard