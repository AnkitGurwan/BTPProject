import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layouts/header';
import Createaccount from '../layouts/createaccount';

function Accountpage(){
    return(
        <div>
            <Header />
            <Link className='goback' to={`/`}><i class="fa-sharp fa-solid fa-arrow-left fa-xl" style={{"margin-top":"30px"}}/></Link>
            <Createaccount />
        </div>
   
    )
}
export default Accountpage;