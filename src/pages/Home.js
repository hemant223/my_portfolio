import React from 'react'
import { useState } from 'react';

const memuIcon =require('../assets/images/menu.png');
const crossIcon =require('../assets/images/cross.png');
const hemuImg =require('../assets/images/hemu.jpeg');
const helloGif =require('../assets/images/hello.gif');
const yooGif =require('../assets/images/yoo.gif');
const welcomeGif =require('../assets/images/welcome.gif');
const hyGif =require('../assets/images/hy.gif');
const bg1 =require('../assets/images/bg1.jpg');
const hacker =require('../assets/images/hacker.png');
const reactjs =require('../assets/images/reactjs.png');
const html_css_js =require('../assets/images/html_css_js.png');
const bootstrap =require('../assets/images/bootstrap.png');
const reactnative =require('../assets/images/reactnative.png');
const nodejs =require('../assets/images/nodejs.png');
const expressjs =require('../assets/images/expressjs.png');
const firebase =require('../assets/images/firebase.png');
const my_sql =require('../assets/images/my_sql.png');
const sonarqube =require('../assets/images/sonarqube.png');
const socket_io =require('../assets/images/socket_io.png');
const materialize =require('../assets/images/materialize.png');
const instagram =require('../assets/images/instagram.png');
const twitter =require('../assets/images/twitter.png');
const fb =require('../assets/images/fb.png');
const call =require('../assets/images/call.png');
const hackerfooter =require('../assets/images/hackerfooter.png');


 const Home=()=> {
   const [toogleMenu, setToogleMenu] = useState(false)
    const handleMemuClick=()=>{
        setToogleMenu(!toogleMenu)
    }




  return (
    <>

{/* header */}
     <div style={{display:'flex',background:'linear-gradient(90deg, rgba(28,30,30,1) 45%, rgba(84,84,85,1) 100%, rgba(0,212,255,1) 100%)',height:60,alignItems:'center',justifyContent:'space-between',}}>
     <div onClick={()=>{handleMemuClick();}} style={{marginLeft:10,top:0}}>
    {!toogleMenu? <img src={memuIcon} style={{height:35,width:35,}} />:
     <img src={crossIcon} style={{height:40,width:45,}} />}
     </div>
     <div style={{fontFamily:'fantasy',color:'#fff',fontSize:20}}>
     Welcome
     </div>
     <div style={{height:50,width:50,}}>
     {/* <img src={yooGif} style={{height:50,width:50,}} /> */}
     </div>
      </div>

       {/* drawer Items  */}
    <div style={{height:toogleMenu?255:0,background:'linear-gradient(90deg, rgba(28,30,30,1) 45%, rgba(84,84,85,1) 100%, rgba(0,212,255,1) 100%)',transition: 'height 0.5s ease',overflow: 'hidden',lineHeight:2,display:'flex',flexDirection:'column',alignItems:'center',zIndex:1}}>  
         <div style={{fontFamily:'serif',color:'#fff',fontWeight:900,fontSize:20,}} >Home</div>
         <div style={{fontFamily:'serif',color:'#fff',fontWeight:900,fontSize:20}}>My Projects</div>
         <div style={{fontFamily:'serif',color:'#fff',fontWeight:900,fontSize:20}}>My Git Hub</div>
         <div style={{fontFamily:'serif',color:'#fff',fontWeight:900,fontSize:20}}>Check Out My Resume</div>
         <div style={{fontFamily:'serif',color:'#fff',fontWeight:900,fontSize:20}}>Go to my Linkedin Profile</div>
         <div style={{fontFamily:'serif',color:'#fff',fontWeight:900,fontSize:20}}>Go to my Instagram</div>

      </div>
      
     
{/* Hello view */}
<div style={{fontFamily:'cursive',fontSize:50,backgroundColor:'#34495e',backgroundImage:`url(${bg1})`,backgroundRepeat:"no-repeat",backgroundSize:'cover',display:toogleMenu?'none':'flex',alignItems:'center',paddingTop:20,height:255,flexDirection:'column'}}>
<div style={{display:'flex',justifyContent:'center',marginTop:20}}>
  <div style={{color:'#fff',textShadow:'2px 2px gray'}}>Hello</div> 
   <div style={{marginLeft:15,textShadow:'2px 2px gray'}}>Guys</div>
    <div><img src={hyGif} style={{height:80,}} /></div>
</div>
<div style={{display:'flex',marginTop:30}}>
  <div style={{color:'#fff',textShadow:'2px 2px gray'}}>
   This
  </div>
  <div  style={{marginLeft:15,color:'#fff',textShadow:'2px 2px gray'}}>
    is 
  </div>
  <div  style={{marginLeft:15,textShadow:'2px 2px gray'}}>
    Hemu !
  </div>
</div>
  </div>


<div  style={{fontFamily:'cursive',textShadow:'2px 2px gray',backgroundImage:`url(${bg1})`,marginTop:-10,color:'#000',fontSize:40,display:'flex',justifyContent:'center',alignItems:'center',paddingLeft:10}}>
     I am a Full Stack Developer,
     <img src={hacker} style={{height:'auto',width:150,}} />
     
</div>

<div  style={{fontFamily:'cursive',backgroundColor:'#fff', backgroundImage:`url(${bg1})`,backgroundRepeat:"no-repeat",backgroundSize:'cover',color:'#000',textShadow:'2px 2px gray',fontSize:20,display:'flex',justifyContent:'center',marginTop:-3,paddingTop:30,flexDirection:'column',paddingBottom:10}}>
   <div style={{marginLeft:20}}>
    Currently I am Working on this Technologies :-✨✨
   </div>
  <div style={{display:'flex',justifyContent:'space-evenly',flexDirection:'row',flexWrap:'wrap',padding:5}}>
  <div>
  <img src={reactjs} style={{height:'auto',width:130,}} />
  </div>
  <div>
  <img src={html_css_js} style={{height:'auto',width:130,}} />
  </div>
  <div style={{}}>
  <img src={bootstrap} style={{height:'auto',width:130,}} />
  </div>
  <div style={{}}>
  <img src={reactnative} style={{height:'auto',width:130,}} />
  </div>
  <div style={{}}>
  <img src={nodejs} style={{height:'auto',width:130,}} />
  </div>
  <div style={{}}>
  <img src={expressjs} style={{height:'auto',width:130,}} />
  </div>
  <div style={{}}>
  <img src={firebase} style={{height:'auto',width:150,}} />
  </div>
  <div>
  <img src={sonarqube} style={{height:'auto',width:130,}} />
  </div>
  <div>
  <img src={socket_io} style={{height:'auto',width:120,}} />
  </div>
  <div>
  <img src={materialize} style={{height:'auto',width:80,}} />
  </div>



  <div style={{marginTop:-20}}>
  <img src={my_sql} style={{height:'auto',width:80,}} />
  </div>

  <div style={{marginTop:20,fontFamily:'inherit',width:'95%',textShadow:'none'}}>
There is no doubt that every website out there has been created for a single purpose and that is to promote 
the services and products that the company holds. It is both convenient and essential to ensure
 that you will generate revenue from your target audience with your work directly from your website. 
  </div>



  </div>
</div>

    <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',}}>
    <img src={hemuImg} style={{height:'auto',width:'100%',}} />
    </div>

{/* footer */}
<div style={{height:200,background:'linear-gradient(90deg, rgba(28,30,30,1) 45%, rgba(84,84,85,1) 100%, rgba(0,212,255,1) 100%)',display:'flex',alignItems:'center'}}>
     <div>
       <div style={{color:'#fff',fontFamily:'monospace',fontSize:16,display:'flex',alignItems:'center',paddingTop:20,paddingLeft:20}}>
         Developed by Hemu
       </div>
       <div style={{color:'#fff',fontFamily:'monospace',fontSize:16,display:'flex',flexDirection:'column',justifyContent:'center',paddingTop:10,paddingLeft:20}}>
      <div style={{borderBottom:'2px solid #fff',width:80,}}>
      Follow Us
      </div>
      <div style={{paddingTop:5}}>
      <img src={instagram} style={{height:'auto',width:20,}} />
      <img src={twitter} style={{height:'auto',width:25,marginLeft:10}} />
      <img src={fb} style={{height:'auto',width:25,marginLeft:10}} />
      </div>
       </div>


       <div style={{color:'#fff',fontFamily:'monospace',fontSize:16,display:'flex',flexDirection:'column',justifyContent:'center',paddingTop:10,paddingLeft:20}}>
      <div style={{borderBottom:'2px solid #fff',width:90,}}>
      Contact Us
      </div>
      <div style={{paddingTop:10}}>
      <img src={call} style={{height:'auto',width:20,marginLeft:10}} />
      </div>
       </div>
     </div>
     <div>
     <img src={hackerfooter} style={{height:'auto',width:200,}} />
     </div>
</div>

    </>
  )
}

export default Home;
