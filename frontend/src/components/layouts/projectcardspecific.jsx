import React,{useContext,useEffect} from 'react';
import { Link,useNavigate,useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemContext from '../../context/project/ItemContext';
import AuthContext from '../../context/authentication/AuthContext';



function Projectcard(props){
    const {project}=props;
    const {deleteProject} = useContext(ItemContext);
    const navigate=useNavigate();
    const {downloadDetails,user,ownerdetails} = useContext(AuthContext);

    const params=useParams();
    const id=params.id;

    const getItem=async ()=>{
      await ownerdetails(id);
    }
    useEffect(()=>{
      getItem();
    },[])

    
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
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const click=()=>{}


    const clickHandler = async (e)=>{
        e.preventDefault();
        const x=await deleteProject(id);
        if(x===200)
        {
        navigate('/owner');
        toast.success('Deleted successfully', {
          position: toast.POSITION.TOP_CENTER
      });
    }
    else if(x===403)
        {
          navigate('')
        toast.error('You cannot delete projects of others', {
          position: toast.POSITION.TOP_CENTER
      });
    }
  }
  
  if(user)
  var userEmail=user.email
 
  const download = async (e)=>{
    e.preventDefault();
    console.log("hii");
  await downloadDetails(userEmail);
  }

    return(
    <div className='projectcardmaindiv'>
      
      <button class="btn btn-primary" style={{"margin-left":"30vw","margin-bottom":"2vh"}} onclick={download}>Download List of Interested Students</button>
        
            <div class="card" style={{width:"auto",height:"auto"}}>
            <div class="card-body">
                <h1 class="card-title">{project.title}</h1>
                <h3 class="card-subtitle mb-2 text-muted">{project.co_supervisor}<h6>(co-supervisor)</h6></h3>
                <p class="card-text">{project.brief_abstract}</p>
                <p class="card-text"><h4>Specialisation</h4>{project.specialization}</p>
                <h6 class="card-title">Created on {project.creation_date} </h6>
                <h6 class="card-title">Created at {project.creation_time} </h6>
                <button id="myBtn" className='projectcardlink22' onclick={click}>Delete</button>
            </div>
            {/* modal */}
                
            <div id="myModal" class="modal">
                    <div class="modal-content">
                    <span class="close">&times;</span>
                    <p className='modalp'>Are you sure you want to delete? <Link className='projectcardlink22a' onClick={clickHandler}>Delete</Link></p>
                </div>
                </div>
        </div>
    </div>
    

    )}


export default Projectcard