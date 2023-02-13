import React,{useState, useContext,useEffect} from 'react';
import { Link, Route, useLocation, useNavigate } from 'react-router-dom';
import ItemContext from '../../context/project/ItemContext';
import Projectcard from './studentprojectcard'
import AuthContext from '../../context/authentication/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Msal from 'msal'; 

const Createaccount=(props)=>{
  const location=useLocation()
  if(location.state)
  var idtoken=location.state.token
  if(idtoken)
  var name=location.state.token.preferredName

    const {items,userProjects} = useContext(ItemContext);
    const {token} = useContext(AuthContext);
    
    if(token)
    var userEmail=token.preferredName
    const getItem=async ()=>{
        await userProjects()
      }
      useEffect(()=>{
        getItem()
      },[])

      var flag=0;
      items.map(async (array)=>{array.intrestedPeople.map((individual)=>{if(individual==userEmail) {if(document.getElementById('individual')){document.getElementById('individual').style.backgroundColor='green';document.getElementById('individual').innerText='Registered';}} })})
      
      const[search,setSearch]=useState("");
    
    const detectChanges = async(e)=>{
        
      setSearch(e.target.value);   
  }
  const msalConfig = {
    auth: {
      clientId: "9ea87694-877c-4d59-b65e-c4a3fd12799c",
      authority: "https://login.microsoftonline.com/common",
      redirectUri: "http://localhost:3000/studentallproject",
    },
    cache: {
      cacheLocation: "localStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };  
    
  // Add here the scopes to request when obtaining an access token for MS Graph API
  // for more, visit https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-core/docs/scopes.md
  const loginRequest = {
    scopes: ["openid", "profile", "User.Read"]
  };
  
  // Add here scopes for access token to be used at MS Graph API endpoints.
  const tokenRequest = {
    scopes: ["Mail.Read"]
  };

const myMSALObj = new Msal.UserAgentApplication(msalConfig);
  const newfunc=()=>{
    myMSALObj.logout();
    toast.success('Logged out successfully', {
        position: toast.POSITION.TOP_CENTER
    });

}
   
    return(
      <div>
        
      <div className='footer2maindiv'>        
      <span className='footer2span1'>
      
      <div className='footer2div1'>Indian Institute of Technology</div>
      <div className='footer2div2'>Guwahati</div>
      
      </span> 

       <i className='footer2i' class="fa-solid fa-right-from-bracket"></i> 
       <span className='footer2span2'><Link className='footer2a' to={'/'} onClick={newfunc} >LogOut</Link><h6 style={{"color":"white","textDecoration":"underline"}}>{name}</h6></span>
       
      </div>
       <div  className='studentallprojectdivmain'>
          
          <div className='studentallprojectdiv1'>Kindly "Register" to the project you are interested in</div>

          <div className='notregisdiv'><span className='notregisspan1'>Status : <span id='individual' className='notregisspan2'>Not Registered</span></span></div>
          <div class="input-group" className='searchdiv'>
      
            <div className='registrationdiv'>
            <span className='checkboxspan'><input type="checkbox" className='checkboxinput' style={{"margin":"15px"}}></input></span>
            <span>My Registered Project</span>
            </div>
            <div className='searchdiv2'>
            <input id="search-input" type="search"  class="form-control" name='search'placeholder="Search by Title name" value={search} onChange={detectChanges} />
            
           
            </div>
           </div>
          <div className='allprojectsdiv'>{items.filter((projects)=>{ return search.toString().toLowerCase()==='' ? projects : projects.title.toLowerCase().includes(search.toLocaleLowerCase())}).map( (project,i)=>{return (<Projectcard key={i} project={project} idtoken={idtoken}/>)})}</div>
          
       </div>
      </div>
    )
}
export default Createaccount;