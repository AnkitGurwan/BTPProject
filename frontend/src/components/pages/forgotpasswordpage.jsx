import React from 'react';
import {Link } from 'react-router-dom';
import Header from '../layouts/header';
import Forgotpassword from '../layouts/forgotpassword';
import 'react-toastify/dist/ReactToastify.css';

function Resetpasswordfunction(){
    return(
        <div>
            <Header />
          <Link className='goback' to={`/login`}><i class="fa-sharp fa-solid fa-arrow-left fa-2x" style={{"margin-top":"30px"}}/></Link>

            <Forgotpassword />
        </div>
   
    )
}
export default Resetpasswordfunction;