import React,{useState, useContext}  from 'react';
import { useNavigate,Link } from 'react-router-dom';
import AuthContext from '../../context/authentication/AuthContext';

const Resetpassword=()=>{

    const {resetPassword} = useContext(AuthContext);
    
    const [em, setEm] = useState({email:""});
    const detectChanges = (e)=>{
        setEm({...em,[e.target.name]:e.target.value});
    }
    const navigate=useNavigate();
    const submit = async (e)=>{
        e.preventDefault();
        navigate('/login') ;
        await resetPassword(em.email);
        
    }

    return(
<div className="centerfull">
{/* <Link className='goback' to={`/owner`}><i class="fa-sharp fa-solid fa-arrow-left fa-2xl"/></Link> */}

    <br/>
        <h1>Enter your Gmail</h1>
    <form onSubmit={submit} className='resetform'>
        <div class="text_field">
        <input className='resetpasswordinput' type="email" name='email' value={em.email} placeholder="Email  (including @gmail.com)" required onChange={detectChanges}/>
        </div>
        <button className='resetbutton' type="submit">Send</button>
        <div className='divnote'>You will receive a mail on this Email account to change your password.</div>

    </form>
</div>

)
}
export default Resetpassword;