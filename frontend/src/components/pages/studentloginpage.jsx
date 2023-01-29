import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../layouts/header';
import Studentlogin from '../layouts/studentlogin';

function Accountpage(){
    return(
        <div>
            <Header />
            <Link className='goback' to={`/`}><i class="fa-sharp fa-solid fa-arrow-left fa-x" style={{"margin-top":"30px"}}/></Link>

            <Studentlogin />
        </div>
   
    )
}
export default Accountpage;