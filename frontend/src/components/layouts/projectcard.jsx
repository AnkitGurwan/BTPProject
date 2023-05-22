import React from 'react';
import { Link } from 'react-router-dom';

function Projectcard(props){
    const {project}=props;
   
    return(
    <div className='projectcardmaindiv '>
            <div class="card">
                <div class="card-body text-center w-full">
                    <h4 class="card-title pb-2" style={{"textDecoration":"underline","fontSize":"20px"}}>{project.title}</h4>
                    <h6 class="card-subtitle pb-2 text-muted" style={{"display":"flex","flexDirection":"column","alignItems":"center","textAlign":"center"}}>{project.co_supervisor}<h6 className='text-sm'>(co-supervisor)</h6></h6>
                    <p class="card-text text-sm flex flex-col text-center px-2">{project.brief_abstract.slice(0,100)}<a href={`owner/${project._id}`} className='text-sm font-medium' style={{"textDecoration":"none"}}>...read more</a></p>
                    <p class="card-text flex flex-col py-1 md:py-2 text-center"><h6 className='m-0'>Specialization</h6><div className='text-sm'>{project.specialization}</div></p>
                    <h6 class="card-title text-sm mb-1">{project.creation_date} </h6>
                    <h6 class="card-title text-sm mb-1">{project.creation_time} </h6>    
                    <div className='projectcardupdate'>
                    <Link className='projectcardlink1' to={`update/${project._id}`}>
                        <span class="material-symbols-outlined">
                        edit
                        </span>
                    </Link>
                    
                    </div>
                </div>
            </div>
    </div>
    

    )}

export default Projectcard