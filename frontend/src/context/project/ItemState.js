import ItemContext from "./ItemContext";
import { useState } from "react";
var _ = require('lodash');


const ItemState=(props)=>{
    const [items,setItems]=useState([])
    const [itemsspecific,setItemsspecific]=useState([])
    const [details,setDetails]=useState([])


    const url="http://localhost:5000"
    
    const userProjects=async()=>{
        
        const response = await fetch(`${url}/project/allprojects`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'auth-token':localStorage.getItem('token')
            }
        })

        
        const json=await response.json()
        json.reverse();
        
        json.map((value)=>{if(value)value.title=_(value.title).capitalize()})
        json.map((value)=>{if(value)value.co_supervisor=_(value.co_supervisor).capitalize()})
        json.map((value)=>{if(value)value.brief_abstract=_(value.brief_abstract).capitalize()})
        json.map((value)=>{if(value)value.specialization=_(value.specialization).capitalize()})
        
        setItems(json)
        // console.log("useritem:- ",json)
         }

    const Projectspecific=async()=>{
        
        const response = await fetch(`${url}/project/projectsposted`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'auth-token':localStorage.getItem('token')
            }
        })

        
        const json=await (response.json())
        
        json.map((value)=>{if(value)value.title=_(value.title).capitalize()})
        json.map((value)=>{if(value)value.co_supervisor=_(value.co_supervisor).capitalize()})
        json.map((value)=>{if(value)value.brief_abstract=_(value.brief_abstract).capitalize()})
        json.map((value)=>{if(value)value.specialization=_(value.specialization).capitalize()})
        
       
        json.reverse();
        setItemsspecific(json)
        // console.log("useritem:- ",json)
         }


         const createProject = async (title,brief_abstract,co_supervisor,specialization) => {
            const response = await fetch(`${url}/project/newproject`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token':localStorage.getItem('token')
                },
                body: JSON.stringify({ title,brief_abstract,co_supervisor,specialization})
            });
            
            const json = await response.json();
            
            return response.status;
            // setUser(user.concat(json));
        }

        const updateProject = async (title,brief_abstract,co_supervisor,specialization,id) => {
            const response = await fetch(`${url}/project/updateproject/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token':localStorage.getItem('token')
                },
                body: JSON.stringify({ title,brief_abstract,co_supervisor,specialization})
            });
            
            const json = await response.json();
          
            // setUser(user.concat(json));
        }
        const deleteProject=async(id)=>{
            const response = await fetch(`${url}/project/deleteproject/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': "application/json",
                    'auth-token':localStorage.getItem('token')
                }
            })
            return response.status;
        }
        const selectproject=async(id,user,email)=>{
           
            const response = await fetch(`${url}/project/projectaddition/${id}/${user}/${email}`,  {
                method: 'GET',
                headers: {
                    'Content-Type': "application/json"
                }
            })
            return response.status
        }

        const deselectproject=async(id,user)=>{
           
            const response = await fetch(`${url}/project/deselectproject/${id}/${user}`,  {
                method: 'GET',
                headers: {
                    'Content-Type': "application/json"
                }
            })
            return response.status;
        }
        const ownerdetails=async(id)=>{
            
              
                const response = await fetch(`${url}/project/ownerdetails/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': "application/json",
                        'auth-token':localStorage.getItem('token')
                    }
                })
        
               
                
                const json=await response.json()
                setDetails(json)
                
                // console.log("useritem:- ",json)
                 }
        


    return (
        <ItemContext.Provider value={{details,userProjects,items,createProject,updateProject,deleteProject,selectproject,deselectproject,ownerdetails,Projectspecific,itemsspecific}}>
            {props.children}
        </ItemContext.Provider>
    )
}
export default ItemState;