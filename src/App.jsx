import logo from "./logo.png";
import Mlogo from "./Mlogo.png";
import R1 from "./R1.jpg";
import R2 from "./R2.jpg";
import R3 from "./R3.jpg";
import R4 from "./R4.jpg";
import R5 from "./R5.jpg";
import video from "./homeVideo.mp4";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';


import './App.css'

function Header(){
return <>
<header>

<div><img src={logo} alt="logo" /></div>
<ul>
  <li>Home</li>
  <li>Service</li>
  <li>Rentals</li>
  <li>Events</li>
  <li>About</li>
  <li>ContactUs</li>
</ul>
</header>
</>
}


function Home(){
  return <>
  <div id="video">
<img src={Mlogo} alt="videoLogo" />
 
  <video src={video} autoPlay loop muted/>
  </div>
  </>
}



function Card({image,data}){
  return <div className="card">
<img src={image} alt="" />
<h3>{data}</h3>
  </div>
  
}

function App() {
  

  return (
    <>
    
    <Header/>
   
   
    <Home/>
<div id="container">
<Card image={R1} data="DJ Packages" />
<Card image={R2} data="Lighting Production"/>
<Card image={R3} data="BESPOKE STAGING"/>
<Card image={R4} data="MEET THE TEAM"/>
<Card image={R5} data="DANCE FLOORS"/>
<Card image={R2} data="BESPOKE BARS"/>
</div>

<div id="greetCard">
<div id="greenGreet">
<div>
<h1>{`LET'S`}</h1>
 <h1>GET</h1>
 <h1>CREATIVE</h1></div>

 
</div>
<div id="whiteGreet">
  <div>
  <h2>BOOK A FREE</h2>
  <h2>CONSULTATION</h2>

  <p>Come in and visit us from a free consultation.</p>
  <p>We will go through a step by step process with you to create your perfect setup.</p>
  <p>You can pick from oue pre designed package or we can design something completely bespoke to you.</p>
  </div>


</div>
</div>
<div id="container">
<Card image={R1} data="DJ Packages" />
<Card image={R2} data="Lighting Production"/>
<Card image={R3} data="BESPOKE STAGING"/>
<Card image={R4} data="MEET THE TEAM"/>
<Card image={R5} data="DANCE FLOORS"/>
<Card image={R2} data="BESPOKE BARS"/>
</div>

{/* star rating */}

<div id="starRatingBlock">
<div>
  <h1>{`"definitely book them again and again."`}</h1>
  <span>⭐</span>
      <span>⭐</span>
      <span>⭐</span>
      <span>⭐</span>
      <span>⭐</span>

      <p>{`"No words can describe the energy and vibe they created for our reception. From the beginning, they were easy to communicate with and provided sound advice from the day we booked until the event. We trusted them to create our vision and bring it to life on the day ... music selection was epic and guests are still talking about how much they danced until the lights came on!!!"`}</p>
      <h4>Arvinder Kularia</h4>
</div>
<div>
  <h1>{`"definitely book them again and again."`}</h1>
  <span>⭐</span>
      <span>⭐</span>
      <span>⭐</span>
      <span>⭐</span>
      <span>⭐</span>

      <p>{`"No words can describe the energy and vibe they created for our reception. From the beginning, they were easy to communicate with and provided sound advice from the day we booked until the event. We trusted them to create our vision and bring it to life on the day ... music selection was epic and guests are still talking about how much they danced until the lights came on!!!"`}</p>
      <h4>Arvinder Kularia</h4>
</div>
<div>
  <h1>{`"definitely book them again and again."`}</h1>
  <span>⭐</span>
      <span>⭐</span>
      <span>⭐</span>
      <span>⭐</span>
      <span>⭐</span>

      <p>{`"No words can describe the energy and vibe they created for our reception. From the beginning, they were easy to communicate with and provided sound advice from the day we booked until the event. We trusted them to create our vision and bring it to life on the day ... music selection was epic and guests are still talking about how much they danced until the lights came on!!!"`}</p>
      <h4>Arvinder Kularia</h4>
</div>


</div>

{/* footer */}

<footer>
  
    <div>
    <h1>PARAGON</h1>
    <h3>MUSIC</h3>
    </div>
    <div>
      
<p>Unit H, Boyne Valley Industrial Estate</p>

<p>Boyne Valley Road, Maidenhead, SL6 4EJ</p>

<p>Info@paragonmusic.co.uk</p>

<p>999999999</p>

<span style={{color:"yellow"}}>View terms & conditions</span>

<span style={{color:"yellow"}}>
Privacy Policay
</span>


    </div>
    <div>
  <div>

  
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookSquare}  className="icon" id="fb"/>
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" >
          <FontAwesomeIcon icon={faYoutube} className="icon" id="tube"/>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram}  className="icon" id="gram"/>
        </a>
        </div>
    </div>
 

</footer>
    </>
  )
}


export default App
