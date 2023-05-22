import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layouts/header';
import Proflogin from '../layouts/proflogin';

function Mainlogin(){
    return(
        <div>
            <Header />
            <div className='body2div'>
                <Link className='goback' to={`/`}><i class="fa-sharp fa-solid fa-arrow-left fa-xl" style={{"margin-top":"30px"}}/></Link>
                <Proflogin />
            </div>
        </div>
    )
}
export default Mainlogin;