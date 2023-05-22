import React from 'react';

function Projectcard(props){
    const {project}=props;
 
    return(
    <div className='projectcardmaindivv'>
        <div class="card" style={{width:"auto",height:"auto","padding-left":"1rem"}}>
            <div class="card-body" style={{"display":"flex","flexDirection":"column","alignItems":"start","padding":"1rem"}}>
                <h2 class="card-title pb-2"><i class="fa-solid fa-book text-2xl" style={{"backgroundColor":"transparent","paddingRight":"0.5rem"}}></i>{project.title}</h2>
                
                <h4 class="card-subtitle text-muted pb-2" style={{}}><i class="fa-solid fa-user text-2xl" style={{"backgroundColor":"transparent","paddingRight":"0.5rem"}}></i>{project.co_supervisor}<h6>(co-supervisor)</h6></h4>
                <p style={{"textAlign":"start"}}>{project.brief_abstract}</p>
                <p class="card-text pb-2" style={{"display":"flex","flexDirection":"column","alignItems":"start"}}><h5 className='flex items-center'><span class="material-symbols-outlined pr-1">
                school
                </span><div>Specialisation</div></h5>{project.specialization}</p>
                <h6 class="card-title ">Created on {project.creation_date} </h6>
                <h6 class="card-title pb-0">Created at {project.creation_time} </h6>
            </div>
        </div>
    </div>
)};
export default Projectcard;