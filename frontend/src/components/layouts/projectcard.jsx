import React from 'react';
import { Link } from 'react-router-dom';

function Projectcard(props){
    const {project}=props;
   
    return(
    <div className='projectcardmaindiv '>
            <div class="card">
                <div class="card-body text-center w-full">
                    <h4 class="card-title" style={{"textDecoration":"underline","padding-bottom":"15px","fontSize":"24px"}}>{project.title}</h4>
                    <h6 class="card-subtitle pb-2 text-muted" style={{"padding-bottom":"5px","display":"flex","flexDirection":"column","alignItems":"center","textAlign":"center"}}>{project.co_supervisor}<h6>(co-supervisor)</h6></h6>
                    <p class="card-text text-sm" style={{"padding-bottom":"4px","display":"flex","flexDirection":"column","textAlign":"center"}}>{project.brief_abstract.slice(0,100)}<a href={`owner/${project._id}`} style={{"textDecoration":"none"}}><h6 text-sm>...read more</h6></a></p>
                    <p class="card-text" style={{"padding-bottom":"4px","display":"flex","flexDirection":"column","alignItems":"center"}}><h6 className='pb-1 m-0'>Specialization</h6><div className='text-sm'>{project.specialization}</div></p>
                    <h6 class="card-title">{project.creation_date} </h6>
                    <h6 class="card-title">{project.creation_time} </h6>   
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