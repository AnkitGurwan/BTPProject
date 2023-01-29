import React from 'react';
import { Link } from 'react-router-dom';


function Ownerprojectcard(props){
    const {detail}=props;
   
    return(
    <div className='projectcardmaindiv'>
        
            <div class="card" style={{width:"27vw"}}>
            <div class="card-body">
            <h6 class="card-title">Posted by:-</h6>
                <h3 class="card-title">{detail.name}</h3>
                <h5 class="card-subtitle mb-2 text-muted">{detail.email}</h5>
                {/* <p class="card-text">{detail.brief_abstract.slice(0,150)}<Link to={detail._id} style={{"textDecoration":"none"}}><h6>...read more</h6></Link></p>
                <p class="card-text"><h5>Specialisation</h5>{detail.specialization}</p>
                <h6 class="card-title">{detail.creation_date} </h6>
                <h6 class="card-title">{detail.creation_time} </h6> */}
                             
            </div>
        </div>
    </div>
    

    )}

export default Ownerprojectcard