import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layouts/header';
import Body2 from '../layouts/body2';

function Mainlogin(){
    return(
        <div>
            <Header />
            <div className='body2div'>
            <Link className='goback' to={`/`}><i class="fa-sharp fa-solid fa-arrow-left fa-xl" style={{"margin-top":"30px"}}/></Link>
            <Body2 />
            </div>
            
        </div>
   
    )
}
export default Mainlogin;