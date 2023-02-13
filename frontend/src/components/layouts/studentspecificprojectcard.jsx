import React,{useContext,useEffect,useState} from 'react';
import { Link,useNavigate,useParams } from 'react-router-dom';
import ItemContext from '../../context/project/ItemContext';
import AuthContext from '../../context/authentication/AuthContext';
import Ownerprojectcard from './ownerprojectcard'
import Studentprojectcard from './interestedStudentprojectcard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Projectcard(props){
  
    const {project}=props;
    const {selectproject,deselectproject,ownerdetails,details} = useContext(ItemContext);
    const {token,interest,projectdetails} = useContext(AuthContext);
   
const Owner=(props)=>{ 
  if(props)
  return (<div style={{"padding-left":"15px"}}>
      {props.individual} 
  </div> 
  )
}

    //get idtoken
    if(token)
    var user=token.preferredName
   
    const email="a.kumar@iitg.ac.in"
    const params=useParams();
    const id=params.id;

    const [count, setCount] = useState(0);

    const calculate=async ()=>{
      await project.intrestedPeople.map((emailcheck)=>{ emailcheck===user?setCount(count+1):console.log("1");});
      }
   
      const Store = [];
  
      

    const getItem=async ()=>{
      await ownerdetails(id);
      await projectdetails(project._id);
    }
    useEffect(()=>{
      getItem();
      calculate();      
    },[])
    
    Store.push(details);
   
    
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
if(btn){
btn.onclick = function() {
  modal.style.display = "block";
}}

// When the user clicks on <span> (x), close the modal
if(span){
span.onclick = function() {
  modal.style.display = "none";
}}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

const click=()=>{}


    const clickHandler = async (e)=>{
        
        e.preventDefault();
        
        if(document.getElementById("myBtn").innerText==="Register"){
        const x=await selectproject(id,user,email);

        //check
        if(x===200 && count<1){
          setCount(count+1)
          
        
          toast.success('Registered Successfully', {
            position: toast.POSITION.TOP_CENTER
        });

        
          
          document.getElementById("myBtn").className="projectcardlink2230a";
          
          document.getElementById("myBtn").innerText="De-Register";
        
  }
      if(x===400)
       {
        toast.error('Already Registered', {
          position: toast.POSITION.TOP_CENTER
      });
       }

      if(x===401)
       {
        toast.error('You have already Registered for a project', {
          position: toast.POSITION.TOP_CENTER
      });
       }
        }


        //already registered
        else {
          
          const x=await deselectproject(id,user);
        
          //check
          if(x===200 && count>0){
            setCount(count-1)
            Store.length=0
           
            toast.success('De-Registered', {
              position: toast.POSITION.TOP_CENTER
          });          
            document.getElementById("myBtn").className="projectcardlink223";
            document.getElementById("myBtn").innerText="Register";  
    }
        if(x===400)
         {
          toast.error('No Project Alloted Yet.', {
            position: toast.POSITION.TOP_CENTER
        });
         }
  
        if(x===401)
         {
          toast.error('This Project is not alloted to you.', {
            position: toast.POSITION.TOP_CENTER
        });
         }
          }
        
        
}

   

    return(
    <div className='projectcardmaindivv1'>
      <span className="zindexdiv">Students Registered : 
      {project.intrestedPeople.map((individual,i)=>{return (<Owner key={i}  individual={individual}></Owner> )})}
      </span>
      <br/>
      
      {Store.map((detail,i)=>{return (<Ownerprojectcard key={i} detail={detail} />)})}
      {/* {Store.map((interestedStudent,i)=>{return (<Studentprojectcard key={i} detail={interestedStudent} />)})} */}
        
            <div class="card" style={{width:"auto",height:"auto"}}>
            <div class="card-body">
                <h1 class="card-title">{project.title}</h1>
                <h3 class="card-subtitle mb-2 text-muted">{project.co_supervisor}<h6>(co-supervisor)</h6></h3>
                <p class="card-text">{project.brief_abstract}</p>
                <p class="card-text"><h4>Specialisation</h4>{project.specialization}</p>
                <h6 class="card-title">Created on {project.creation_date} </h6>
                <h6 class="card-title">Created at {project.creation_time} </h6>
               
                
                {count===1?(<button id="myBtn" className='projectcardlink2230a' onclick={click}>De-Register</button>):(<button id="myBtn" className='projectcardlink223' onclick={click}>Register</button>)}

                
                
            </div>
            {/* modal */}
                
            <div id="myModal" class="modal">
                    <div class="modal-content">
                    <span class="close">&times;</span>
                    {count===1?
                    <p className='modalp'>Are you sure you want to De-register? <Link className='projectcardlink222a' onClick={clickHandler}>De-Register</Link></p>:
                    <p className='modalp'>Are you sure you want to register? <Link className='projectcardlink222' onClick={clickHandler}>Register</Link></p>}
                </div>
                </div>
        </div>

        

    </div>
    

    )}

export default Projectcard