import React from 'react';
import { useNavigate,Link } from 'react-router-dom';
import Header from '../layouts/header';
import Resetpassword from '../layouts/resetpassword';

function Resetpasswordfunction(){
    return(
        <div>
            <Header />
          <Link className='goback' to={`/login`}><i class="fa-sharp fa-solid fa-arrow-left fa-2x" style={{"margin-top":"30px"}}/></Link>

            <Resetpassword />
        </div>
   
    )
}
export default Resetpasswordfunction;