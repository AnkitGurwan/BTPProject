import React,{useContext,useEffect} from 'react';
import { Link,useNavigate,useParams } from 'react-router-dom';
import ItemContext from '../../context/project/ItemContext';
import Ownerprojectcard from './ownerprojectcard'


function Projectcard(props){
    const {project}=props;
    const {selectproject,deselectproject,ownerdetails,details} = useContext(ItemContext);
    const navigate=useNavigate();
    
    const params=useParams();
    const id=params.id;

    const getItem=async ()=>{
      await ownerdetails(id);
    }
    const Store = [];
    useEffect(()=>{
      getItem();
       
      
    },[])
    Store.push(details);
    console.log(details)
    console.log(Store)


    
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
const email="a.gurwan@iitg.ac.in"
const click=()=>{}


    const clickHandler = async (e)=>{
        e.preventDefault();
        const x=await selectproject(id,email);
        console.log("Registered successfully")
        document.getElementById("myBtn").className="projectcardlink2234";
        document.getElementById("myBtn2").className="projectcardlink2230b";
        document.getElementById("myBtn").innerText="Registered";
        if(x===200)
        navigate('/')
    }


    const click2 = async (e)=>{
        e.preventDefault();
        const x=await deselectproject(id,email);
        console.log("Registered successfully")
        document.getElementById("myBtn").className="projectcardlink2234";
        document.getElementById("myBtn").innerText="Registered";
        if(x===200)
        navigate('/')
    }

   

    return(
    <div className='projectcardmaindiv'>
      {Store.map((detail,i)=>{return (<Ownerprojectcard key={i} detail={detail} />)})}
        
            <div class="card" style={{width:"auto",height:"auto"}}>
            <div class="card-body">
                <h1 class="card-title">{project.title}</h1>
                <h3 class="card-subtitle mb-2 text-muted">{project.co_supervisor}<h6>(co-supervisor)</h6></h3>
                <p class="card-text">{project.brief_abstract}</p>
                <p class="card-text"><h4>Specialisation</h4>{project.specialization}</p>
                <h6 class="card-title">Created on {project.creation_date} </h6>
                <h6 class="card-title">Created at {project.creation_time} </h6>
                

                <button id="myBtn" className='projectcardlink223' onclick={click}>Register</button>
                <button id="myBtn2" className='projectcardlink2230a' onclick={click2}>De-Register</button>
            </div>
            {/* modal */}
                
            <div id="myModal" class="modal">
                    <div class="modal-content">
                    <span class="close">&times;</span>
                    <p className='modalp'>Are you sure you want to register? <Link className='projectcardlink222' onClick={clickHandler}>Register</Link></p>
                </div>
                </div>
        </div>

        

    </div>
    

    )}

export default Projectcard