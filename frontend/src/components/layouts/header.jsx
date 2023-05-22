import React from 'react';

function Header(){
    return(
            <header className='mainheader'>
                <img className='headerimage' src='https://iitg.ac.in/mech/static/images/logo.png'/>
                <div className='headerdiv'>
                    <div className='headerh1'>
                    Department of Mechanical Engineering
                    </div>
                    <h3 className='headerh3'>Indian Institute of Technology Guwahati</h3>
                </div>
                <a href='https://iitg.ac.in/mech/academics/undergraduate/latest/sem-5/btp-phase-i/' className='headerspan2'>BTP Phase 1</a>
                <a href='https://iitg.ac.in/mech/academics/undergraduate/latest/sem-5/' className='headerspan2'>Sem 5</a>
            </header>
    )
}

export default Header;