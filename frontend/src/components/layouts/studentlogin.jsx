import React from 'react';
import MicrosoftLogin from "react-microsoft-login";

function createaccount(){
    return(
<div class="center">
    <br/>
        <h1>Welcome to the Student Login</h1>
        <MicrosoftLogin clientId={process.env.CLIENT_ID}/>      
</div>
)
}
export default createaccount;