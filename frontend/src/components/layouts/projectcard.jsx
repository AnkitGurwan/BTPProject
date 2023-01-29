import React from 'react';
import { Link } from 'react-router-dom';
var _ = require('lodash');

function Projectcard(props){
    const {project}=props;

    
    return(
    <div className='projectcardmaindiv'>
        
            <div class="card" style={{width:"31vw"}}>
            <div class="card-body">
                <h3 class="card-title" id="card-title" style={{"textDecoration":"underline","padding-bottom":"15px","fontSize":"35px"}}>{project.title}</h3>
                <h5 class="card-subtitle mb-2 text-muted" style={{"padding-bottom":"10px"}}>{project.co_supervisor}<h6>(co-supervisor)</h6></h5>
                <p class="card-text" style={{"padding-bottom":"10px"}}>{project.brief_abstract.slice(0,250)}<Link to={project._id} style={{"textDecoration":"none"}}><h6>...read more</h6></Link></p>
                <p class="card-text" style={{"padding-bottom":"10px"}}><h6>Specialisation</h6>{project.specialization}</p>
                <h6 class="card-title">{project.creation_date} </h6>
                <h6 class="card-title">{project.creation_time} </h6>
                <div className='projectcardupdate'>
                <Link className='projectcardlink1' to={`update/${project._id}`}>Update</Link>
                
                </div>


                
                
            </div>
        </div>
    </div>
    

    )}

export default Projectcard