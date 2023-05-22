import React from 'react';
import { Link } from 'react-router-dom';


function Projectcard(props){
    const {project}=props;
    const idtoken=props.idtoken
   
    return(
    <div className='mx-auto projectcardmaindiv'>
        
            <div class="card px-1">
            <div class="card-body px-1 md:px-2 text-center w-full">
                <h3 class="card-title pb-1 md:pb-2" style={{"textDecoration":"underline"}}>{project.title}</h3>
                <h5 class="card-subtitle text-sm pb-1 text-muted" style={{"text-align":"center"}}>{project.co_supervisor}<h6 className='text-sm' style={{"text-align":"center"}}>(co-supervisor)</h6></h5>
                <p class="card-text pb-0 md:pb-4 text-sm px-2 pt-2" style={{"text-align":"center"}}>{project.brief_abstract.slice(0,120)}<Link to={project._id} className='no-underline px-1 font-medium'>...read more</Link></p>
                <p class="card-text text-sm pb-1" style={{"display":"flex","flexDirection":"column","alignItems":"center"}}><h6 className='m-0 text-sm font-semibold'>Specialization</h6><div className='text-sm pb-0 md:pb-1'>{project.specialization}</div></p>
                <h6 class="card-title text-sm" style={{"text-align":"center"}}>{project.creation_date} </h6>
                <h6 class="card-title text-sm pb-1" style={{"text-align":"center"}}>{project.creation_time} </h6>
                <div className='projectcardupdate'>
                <Link className='projectcardlink1 mr-3 mt-1' to={project._id} state={{idtoken:idtoken}} >
                    <span class="material-symbols-outlined">group_add
                    </span>
                </Link>
                </div>                
            </div>
        </div>
    </div>
    

    )}

export default Projectcard