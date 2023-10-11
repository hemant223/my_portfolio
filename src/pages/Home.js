import React from 'react'
import { useState } from 'react';

const memuIcon =require('../assets/images/menu.png');
 const Home=()=> {
   const [toogleMenu, setToogleMenu] = useState(false)
    const handleMemuClick=()=>{
        setToogleMenu(!toogleMenu)
    }
  return (
    <div style={{backgroundColor:'#fff',}}>
     <div style={{display:'flex',background:'green',height:60,alignItems:'center',boxShadow:' 0px 15px 10px -15px #111',}}>
     <div onClick={()=>{handleMemuClick();}}>
     <img src={memuIcon} style={{height:35,width:35,}} />
     </div>
     {/* <div>
     <img src={memuIcon} style={{height:35,width:35,}} />
     </div> */}
      </div>

        
    <div style={{height:toogleMenu&&150,backgroundColor:'red', transition: 'opacity 1s ease-in-out',opacity:1}}>
           
      </div>

    </div>
  )
}

export default Home;
