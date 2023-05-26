import { useState,useContext,useEffect } from "react";
import { useNavigate,useParams,Link } from 'react-router-dom';
import ItemContext from '../../context/project/ItemContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

const NewProject=()=> {
    const {userProjects,updateProject,Projectspecific} = useContext(ItemContext);

    const items = useSelector(state => state.allProjects.specificProjects);
    const getItem=async ()=>{
        await Projectspecific();
      }
      useEffect(()=>{
        getItem()
      },[]);

      const params=useParams();
      const id=params.id;

      const project=items.filter((project)=>project._id===id).map((project,i)=>{return project})
      console.log(project)
       
      const [itemData, setItemData] = useState({ title:project[0].title,abstract:project[0].brief_abstract,cosupervisor:project[0].co_supervisor,specialization:project[0].specialization })
  
      const onChangeHandler = (e) => {
        setItemData({...itemData,[e.target.name]:e.target.value});
      }

      const navigate=useNavigate()
        const submit = async (e)=>{
            e.preventDefault();
            
            await updateProject(itemData.title,itemData.abstract,itemData.cosupervisor,itemData.specialization,id);
            toast.success('Updated successfully', {
              position: toast.POSITION.TOP_CENTER
          });
            navigate('/owner')
        }
  
        return (
          <div class=" px-0 py-4" style={{"position":"absolute","width":"100vw","top":"12vh","left":"0",}}>
            <div className="flex ml-1">
              <Link className='goback' to={`/owner`}><i class="fa-sharp fa-solid fa-arrow-left fa-lg"/></Link>
              <div class="text-2xl flex items-center font-bold mx-auto pr-16 md:pr-32">
              <span class="material-symbols-outlined px-2 ">
                edit_note
              </span>
              <div className="border-b-2 border-gray-300 px-2">Update Project</div>
              </div>

            </div>
              

              <form class="w-4/5 md:w-2/3 mx-auto shadow-xl rounded-lg px-8 p-4 pb-3 mb-2 mt-4 " onSubmit={submit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                <div class="mb-2 mr-0 md:mr-24">
                  <label class="block text-gray-700 font-bold mb-1 md:mb-2" for="username">
                    Project Title:
                  </label>
                  <input
                    class="appearance-none border text-sm md:text-md rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Enter project title"
                    name="title"
                    autoFocus
                    onChange={onChangeHandler}
                    value={itemData.title}
                  />
                </div>
                <div className="mb-2 ">
                  <label class="block text-gray-700 font-bold mb-1 md:mb-2" for="email">
                  Brief Abstract:
                  </label>
                  <textarea id="message"
                            rows="5" 
                            class="block w-full text-sm md:text-md text-gray-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-3 py-2" 
                            placeholder="Write project details..."
                            name="abstract"
                            onChange={onChangeHandler}
                            value={itemData.abstract}
                    ></textarea>
                </div>
                <div className="mb-2 mr-0 md:mr-24">
                  <label class="block text-gray-700 font-bold mb-1 md:mb-2" for="confirm-password">
                    Co-Supervisor:
                  </label>
                  <input
                    class="appearance-none border rounded text-sm md:text-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="cosupervisor"
                    type="text"
                    placeholder="Name of Co-Supervisor"
                    name="cosupervisor"
                    onChange={onChangeHandler}
                    value={itemData.cosupervisor}
                  />
                </div>
                <div className="mb-2">
                  <label class="block text-gray-700 font-bold mb-1" for="password">
                  Specialization:
                  </label>
                  <input
                    class="appearance-none border text-sm md:text-md rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Enter the specialization"
                    name="specialization"
                    onChange={onChangeHandler}
                    value={itemData.specialization}
                  />
                </div>
                </div>
                
                <div class="mt-8 flex justify-center mx-auto">
                  <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold text-lg py-1 px-3 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Submit
                  </button>

                </div>
              </form>
        </div>
        );
}

export default NewProject

{/* <div className="readmorepage">
      <br/>
    <Link className='goback' to={`/owner`}><i class="fa-sharp fa-solid fa-arrow-left fa-2xl"/></Link>
    <form className="cardform" onSubmit={submit}>
    <div className="cardheaddiv">Please fill out the information about the project</div>
    <label className="cardlabel">
    <div className="carddiv">Title:</div>    
    <input name="title" type="text" className="cardinput" onChange={onChangeHandler} value={itemData.title} required/>
    </label>
    <label className="cardlabel">
     <div className="carddiv">Brief Abstract:</div>    
    <textarea className="cardinput" name="abstract" rows="7" cols="120" value={itemData.abstract} onChange={onChangeHandler} required></textarea>
    </label>
    <label className="cardlabel">
     <div className="carddiv">Co-Supervisor:</div>    
        <input type="text" name="cosupervisor" className="cardinput" value={itemData.cosupervisor} onChange={onChangeHandler}/>
    </label>
    <label className="cardlabel">
     <div className="carddiv">Specialization:</div>    
   
    <input name="specialization" type="text" className="cardinput" value={itemData.specialization} onChange={onChangeHandler}/>
    </label>
    
    <button className='cardbutton' type="submit">Update</button>
</form>
</div> */}