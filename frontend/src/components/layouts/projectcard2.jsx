import React from 'react';
import { Link } from 'react-router-dom';

function Projectcard(props){
    const {project}=props;
   
    return(
    <div className='projectcardmaindiv'>
            <div class="card">
                <div class="card-body text-center w-full">
                    <h4 class="card-title" style={{"textDecoration":"underline","padding-bottom":"15px","fontSize":"24px"}}>{project.title}</h4>
                    <h6 class="card-subtitle mb-2 text-muted" style={{"padding-bottom":"5px","display":"flex","flexDirection":"column","alignItems":"center","textAlign":"center"}}>{project.co_supervisor}<h6>(co-supervisor)</h6></h6>
                    <p class="card-text text-sm" style={{"padding-bottom":"4px","display":"flex","flexDirection":"column","textAlign":"center"}}>{project.brief_abstract.slice(0,100)}<a href={`mainpage/${project._id}`} style={{"textDecoration":"none"}}><h6 classname='text-sm'>...read more</h6></a></p>
                    <p class="card-text flex flex-col pb-2 items-center justify-center"><h6> Specialization</h6>{project.specialization}</p>
                    <h6 class="card-title">{project.creation_date} </h6>
                    <h6 class="card-title">{project.creation_time} </h6>   
                </div>
            </div>
    </div>
    

    )}

export default Projectcard