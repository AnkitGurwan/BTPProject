import React,{useContext,useEffect,useState} from 'react';
import { Link,useParams } from 'react-router-dom';
import ItemContext from '../../context/project/ItemContext';
import AuthContext from '../../context/authentication/AuthContext';
import Ownerprojectcard from './ownerprojectcard'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector,useDispatch } from 'react-redux';
import { upperCase } from 'lodash';
var capitalize = require('capitalize')



function Projectcard(){
  
    // const {project}=props;
    const {selectproject,deselectproject,ownerdetails,details,allProjects,createStudent} = useContext(ItemContext);
    const {token,projectdetails} = useContext(AuthContext);

    const [itemData, setItemData] = useState({ name:"",partnerId:"",partnerRoll:"",isbanned:false })
  

    const items = useSelector(state => state.allProjects.allProjects);
    

    const params=useParams();
    const id=params.id;


    const project=items.filter((project)=>project._id===id).map((project,i)=>{return project})

   
    // const Owner=(props)=>{ 
    //   if(props)
    //   return (<div style={{"padding-left":"15px"}}>
    //       {props.individual} 
    //   </div> 
    //   )
    // };

    //get idtoken
    // if(token)
    // var user=token.preferredName



    //check if user has registered for the project or not
   const user=localStorage.getItem('id');

    var studRegisteredCount=0;
    var isRegistered=0;
    project[0].intrestedPeople.map((emailcheck)=>{studRegisteredCount++; if(emailcheck===user)isRegistered=1;});
     console.log("studRegisteredCount",studRegisteredCount) 
   
    const Store = [];  
    console.log(isRegistered)
    

    const getItem = async ()=>{
      await ownerdetails(id);
      await allProjects();
    }
    
    useEffect(()=>{
      getItem();  
    },[]);
    
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
console.log(upperCase("jii"))

const click=()=>{}

const onChangeHandler = (e) => {
  (setItemData({...itemData,[e.target.name]:e.target.value}));
}

const user1email=localStorage.getItem('id');
const user1name=localStorage.getItem('name');
const user1roll=localStorage.getItem('roll');
const user2email=itemData.partnerId;
const user2name=upperCase(itemData.name);
const user2roll=itemData.partnerRoll;

const submit = async (e)=>{
      e.preventDefault();
      document.getElementById("myBtn").style.width='140px'
      
      if(document.getElementById("myBtn").innerText==="Register"){
      await createStudent(user1email,user1name,user1roll,user2email,user2name,user2roll,id);
      const x=await selectproject(id,user1email,user2email);

      //check
      if(x===200){
        toast.success('Registered Successfully', {
          position: toast.POSITION.TOP_CENTER
      });
        
        document.getElementById("myBtn").className="projectcardlink2230a";
        document.getElementById("myBtn").innerText="De-Register"; 
        modal.style.display = "none";
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
          if(x===200){
            Store.length=0
           
            toast.success('De-Registered', {
              position: toast.POSITION.TOP_CENTER
          });          
            document.getElementById("myBtn").className="projectcardlink223";
            document.getElementById("myBtn").innerText="Register"; 
            modal.style.display = "none"; 
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
      {/* <span className="zindexdiv">Students Registered : 
      {project[0].intrestedPeople.map((individual,i)=>{return (<Owner key={i}  individual={individual}></Owner> )})}
      </span> */}
      <br/>
      
      
      {/* {Store.map((interestedStudent,i)=>{return (<Studentprojectcard key={i} detail={interestedStudent} />)})} */}
        
            <div class="card" style={{width:"90vw",height:"auto"}}>
            <div class="card-body">
                <h2 class="card-name pb-1 md:pb-2 mb-2 flex items-center"><i class="fa-solid fa-book text-xl md:text-2xl" style={{"backgroundColor":"transparent","paddingRight":"0.5rem"}}></i>{project[0].title}</h2>
                <h5 class="card-subtitle text-muted pb-2">
                  <div className='flex items-center'><span class="material-symbols-outlined pr-1">
                person
                </span><div className='text-lg md:text-xl'>{project[0].co_supervisor}</div></div><h6 className='text-sm pl-2'>(co-supervisor)</h6>
                </h5>
                <p class="card-text font-sans pl-2 pb-2 pt-1">{project[0].brief_abstract}</p>
                <p class="card-text pb-0 md:pb-4"><h5 className='flex items-center pb-0 mb-0'><span class="material-symbols-outlined pr-1">
                school
                </span><div className='font-semibold text-sm md:text-lg '>Specialization</div></h5><div className='pl-0 text-sm pl-1'>{project[0].specialization}</div></p>
                <h6 class="card-name text-sm  flex">Created on {project[0].creation_date} <div className='pl-1 text-xs my-auto'>(day, month, year)</div> </h6>
                <h6 class="card-name text-sm">Created at {project[0].creation_time} </h6>
                  
                {isRegistered===1?(<button id="myBtn" className='projectcardlink2230a mt-4' onclick={click}>De-Register</button>):
                studRegisteredCount===2?(<div className='mt-4' style={{"textAlign":"center","color":"red","fontSize":"larger","fontWeight":"600"}}>2 Students have already registered for this project.</div>):
                (<button id="myBtn" className='projectcardlink223 mt-4' no-autoFocus onclick={click}>Register</button>)}
                
                

                {/* modal on new project */}
            {isRegistered===1?(<div id="myModal" class="modal">
                    <div class="modal-content">
                    <span class="close">&times;</span>
                    
                    <p className='modalp'>Are you sure you want to De-register? <Link className='projectcardlink222a' onClick={submit}>De-Register</Link></p>
                     </div>
                </div>):(
            <div id="myModal" class="modal2">
                <div class="modal-content2">
                  <span class="close pt-1 " style={{"justify-content":"start","height":"60px"}}>&times;</span>
                  <form class="w-100 mx-auto bg-white px-8 mb-4" onSubmit={submit}>
                    <div class="mb-4 ">
                      <label class="block text-gray-600 font-bold mb-2 text-sm d-flex justify-content-start items-center" for="username">
                      Partner Name
                      </label>
                      <input
                        class="appearance-none border uppercase rounded text-sm w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Partner name"
                        name="name"
                        autoFocus
                        onChange={onChangeHandler}
                        value={itemData.name}
                        required
                      />
                    </div>
                    
                    <div class="mb-4 ">
                      <label class="block text-gray-600 text-sm font-bold mb-2 d-flex justify-content-start items-center" for="confirm-password">
                     
                      Partner Outlook id <div class='px-1 font-medium'>(including @iitg.ac.in)</div>
                      </label>
                      <input
                        class="appearance-none border text-sm rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                        id="confirm-password"
                        type="text"
                        placeholder="Outlook id"
                        name="partnerId"
                        onChange={onChangeHandler}
                        value={itemData.partnerId}
                        required
                      />
                    </div>
                    <div class="mb-8">
                      <label class="block text-gray-600 text-sm font-bold mb-2 d-flex justify-content-start items-center" for="password">
                      
                      Partner Roll No:
                      </label>
                      <input
                        class="appearance-none border text-sm rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        placeholder="Roll Number"
                        name="partnerRoll"
                        onChange={onChangeHandler}
                        value={itemData.partnerRoll}
                        required
                      />
                    </div>
                    
                    <div class="flex items-center justify-center">
                      <button class="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-100" type="submit">
                        Register
                      </button>

                    </div>
                  </form>
                </div>
              </div>)}
            </div>
            {/* modal */}
                
            
        </div>
    </div>
    )}
export default Projectcard