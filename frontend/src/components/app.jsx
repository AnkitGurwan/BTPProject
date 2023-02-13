import React,{useEffect,useState} from 'react';
import { BrowserRouter,Route,Routes} from 'react-router-dom';

import Main from './pages/main';
import Mainlogin from './pages/mainlogin';
import Studentlogin from './pages/studentloginpage';
import Accountpage from './pages/accountpage';
import Createpassword from './pages/createpasswordpage';
import Resetpassword from './pages/resetpasswordpage';
import AllProjectpage from './pages/allprojectpage'
import OwnerProjectpage from './pages/ownerprojectpage'
import AuthState from "../context/authentication/AuthState";
import Resetpasswordinterface from './pages/resetpasswordinterfacepage';
import Newprojectpage from './pages/newprojectpage';
import Readmoreproject1 from './pages/readmorepage2';
import Readmoreproject2 from './pages/readmorepage';
import Updateproject from './pages/updateprojectpage';
import Studentallproject from './pages/studentallprojectpage'
import Studentspecificproject from './pages/studentspecificprojectpage'
import Newpage from './pages/newpage'
import ItemState from '../context/project/ItemState';

function App(){
    return(
        <AuthState>
            <ItemState>
            <BrowserRouter>
            <Routes>
                
                <Route path='/' element={<Main/>}/>
                <Route path='/login' element={<Mainlogin/>}/>
                <Route path='/studentlogin' element={<Studentlogin/>}/>
                <Route path='/createaccount' element={<Accountpage/>}/>
                <Route path='/set-password/:token' element={<Createpassword/>}/>
                <Route path='/resetpassword' element={<Resetpassword/>}/>
                <Route path='/reset-set-password/:email/:token' element={<Resetpasswordinterface/>}/>
                <Route path='/mainpage' element={<AllProjectpage/>}/>
                <Route path='/owner' element={<OwnerProjectpage/>}/>
                <Route path='/studentallproject' element={<Studentallproject/>}/>
                <Route path='/studentallproject/:id' element={<Studentspecificproject/>}/>
                <Route path='/owner/newproject' element={<Newprojectpage/>}/>
                <Route path='/mainpage/:id' element={<Readmoreproject1/>}/>
                <Route path='/owner/:id' element={<Readmoreproject2/>}/>
                <Route path='/owner/update/:id' element={<Updateproject/>}/>
                <Route path='/newpage' element={<Newpage/>}/>
            </Routes>
            </BrowserRouter>
            </ItemState>
              
        </AuthState>
        
        )}
export default App;