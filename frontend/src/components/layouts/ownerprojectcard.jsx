import React from 'react';

function Ownerprojectcard(props){
    const {detail}=props;
   
    return(
    <div className='w-full'>
        <div class="w-full flex items-center ml-0 md:ml-16 border rounded bg-gray-100">
            <div class="flex flex-col items-start md:flex-row px-4 py-2">
            <h4 class="font-semibold md:font-bold items-center my-auto md:pr-6">Posted by :-</h4>
            <h5 class="pr-4 text-muted flex items-center justify-center text-lg my-auto md:text-xl pr-4 pt-1 md:pt-0"><i class="fa-solid fa-user text-md pr-2"></i> {detail.name}</h5>
            <h5 class="text-muted flex items-center justify-center text-lg my-auto pt-1 md:pt-0"><i class="fa-solid fa-envelope pr-2"></i> {detail.email}</h5>
            {/* <p class="card-text">{detail.brief_abstract.slice(0,150)}<Link to={detail._id} style={{"textDecoration":"none"}}><h6>...read more</h6></Link></p>
            <p class="card-text"><h5>Specialisation</h5>{detail.specialization}</p>
            <h6 class="card-title">{detail.creation_date} </h6>
            <h6 class="card-title">{detail.creation_time} </h6> */}               
            </div>
        </div>
    </div>
)};
export default Ownerprojectcard