import Navbar from "./Navbar"
import akhil from "./images/akhil.jpg";
import swajal from './images/swajal.jpg';
import kashvi from './images/kashvi.jpg';
import asheni from './images/asheni.jpg';
import ridhima from './images/ridhima.jpg';
import aakarshan from './images/aakarshan.jpg';
import lohendra from './images/lohendra.jpg';
import saharsh from './images/saharsh.jpg';
import sangkarshan from './images/sangkarshan.jpg';
import Footer from "./Footer"
export default function Team(){
    return (
        <div className="team-page">
            <Navbar />
            <div className="team-info">
                <div className="team">
                    <div className="President">
                        <h2 style={{color:'white',textShadow: '1px 1px 1px black, 1px 2px 1px black, 1px 3px 1px black, 1px 4px 1px black, 1px 5px 1px black, 1px 6px 1px black, 1px 7px 1px black, 1px 8px 1px black, 1px 9px 1px black, 1px 10px 1px black, 1px 18px 6px rgba(16,16,16,0.4), 1px 22px 10px rgba(16,16,16,0.2), 1px 25px 35px rgba(16,16,16,0.2), 1px 30px 60px rgba(16,16,16,0.4)'}}>President- Akhil Morusupalli</h2>
                        <img src={akhil} style={{width:'27vw',height:'50vh',borderRadius:'30%',marginTop:'3vh',boxShadow:'10px 10px 44px -12px rgba(0,0,0,0.75)'}}/>
                    </div>
                    <div className="VicePresident">
                        <h2 style={{color:'white',textShadow: '1px 1px 1px black, 1px 2px 1px black, 1px 3px 1px black, 1px 4px 1px black, 1px 5px 1px black, 1px 6px 1px black, 1px 7px 1px black, 1px 8px 1px black, 1px 9px 1px black, 1px 10px 1px black, 1px 18px 6px rgba(16,16,16,0.4), 1px 22px 10px rgba(16,16,16,0.2), 1px 25px 35px rgba(16,16,16,0.2), 1px 30px 60px rgba(16,16,16,0.4)'}}>Vice President- Swajal Padhi</h2>
                        <img src={swajal} style={{width:'22vw',height:'50vh',borderRadius:'30%',marginTop:'3vh',boxShadow:'10px 10px 44px -12px rgba(0,0,0,0.75)'}}/>
                    </div>
                    <div className="Secretary">
                        <h2 style={{color:'white',textShadow: '1px 1px 1px black, 1px 2px 1px black, 1px 3px 1px black, 1px 4px 1px black, 1px 5px 1px black, 1px 6px 1px black, 1px 7px 1px black, 1px 8px 1px black, 1px 9px 1px black, 1px 10px 1px black, 1px 18px 6px rgba(16,16,16,0.4), 1px 22px 10px rgba(16,16,16,0.2), 1px 25px 35px rgba(16,16,16,0.2), 1px 30px 60px rgba(16,16,16,0.4)'}}>Secretary- Kashvi Vijay</h2>
                        <img src={kashvi} style={{width:'22vw',height:'50vh',borderRadius:'30%',marginTop:'3vh',boxShadow:'10px 10px 44px -12px rgba(0,0,0,0.75)'}}/>
                    </div>
                    <div className="SocialMediaManager">
                        <h2 style={{color:'white',textShadow: '1px 1px 1px black, 1px 2px 1px black, 1px 3px 1px black, 1px 4px 1px black, 1px 5px 1px black, 1px 6px 1px black, 1px 7px 1px black, 1px 8px 1px black, 1px 9px 1px black, 1px 10px 1px black, 1px 18px 6px rgba(16,16,16,0.4), 1px 22px 10px rgba(16,16,16,0.2), 1px 25px 35px rgba(16,16,16,0.2), 1px 30px 60px rgba(16,16,16,0.4)'}}>Social Media Manager- Asheni Agarwal</h2>
                        <img src={asheni} style={{width:'22vw',height:'50vh',borderRadius:'30%',marginTop:'3vh',boxShadow:'10px 10px 44px -12px rgba(0,0,0,0.75)'}}/>
                    </div>
                    <div className="GraphicDesignManger">
                        <h2 style={{color:'white',textShadow: '1px 1px 1px black, 1px 2px 1px black, 1px 3px 1px black, 1px 4px 1px black, 1px 5px 1px black, 1px 6px 1px black, 1px 7px 1px black, 1px 8px 1px black, 1px 9px 1px black, 1px 10px 1px black, 1px 18px 6px rgba(16,16,16,0.4), 1px 22px 10px rgba(16,16,16,0.2), 1px 25px 35px rgba(16,16,16,0.2), 1px 30px 60px rgba(16,16,16,0.4)'}}>Graphic Design Manager- Sangkarshan Singh</h2>
                        <img src={sangkarshan} style={{width:'22vw',height:'50vh',borderRadius:'30%',marginTop:'3vh',boxShadow:'10px 10px 44px -12px rgba(0,0,0,0.75)'}}/>
                    </div>
                    <div className="Graphic Design Manager">
                        <h2 style={{color:'white',textShadow: '1px 1px 1px black, 1px 2px 1px black, 1px 3px 1px black, 1px 4px 1px black, 1px 5px 1px black, 1px 6px 1px black, 1px 7px 1px black, 1px 8px 1px black, 1px 9px 1px black, 1px 10px 1px black, 1px 18px 6px rgba(16,16,16,0.4), 1px 22px 10px rgba(16,16,16,0.2), 1px 25px 35px rgba(16,16,16,0.2), 1px 30px 60px rgba(16,16,16,0.4)'}}>Graphic Design Manager- Ridhima Singh</h2>
                        <img src={ridhima} style={{width:'22vw',height:'50vh',borderRadius:'30%',marginTop:'3vh',boxShadow:'10px 10px 44px -12px rgba(0,0,0,0.75)'}}/>
                    </div>
                    <div className="TD">
                        <h2 style={{color:'white',textShadow: '1px 1px 1px black, 1px 2px 1px black, 1px 3px 1px black, 1px 4px 1px black, 1px 5px 1px black, 1px 6px 1px black, 1px 7px 1px black, 1px 8px 1px black, 1px 9px 1px black, 1px 10px 1px black, 1px 18px 6px rgba(16,16,16,0.4), 1px 22px 10px rgba(16,16,16,0.2), 1px 25px 35px rgba(16,16,16,0.2), 1px 30px 60px rgba(16,16,16,0.4)'}}>Graphic Design Manager- Aakarshan Kumar</h2>
                        <img src={aakarshan} style={{width:'22vw',height:'50vh',borderRadius:'30%',marginTop:'3vh',boxShadow:'10px 10px 44px -12px rgba(0,0,0,0.75)'}}/>
                    </div>
                    <div className="TD">
                        <h2 style={{color:'white',textShadow: '1px 1px 1px black, 1px 2px 1px black, 1px 3px 1px black, 1px 4px 1px black, 1px 5px 1px black, 1px 6px 1px black, 1px 7px 1px black, 1px 8px 1px black, 1px 9px 1px black, 1px 10px 1px black, 1px 18px 6px rgba(16,16,16,0.4), 1px 22px 10px rgba(16,16,16,0.2), 1px 25px 35px rgba(16,16,16,0.2), 1px 30px 60px rgba(16,16,16,0.4)'}}>Tournament Director- Lohendra Hariharan</h2>
                        <img src={lohendra} style={{width:'22vw',height:'50vh',borderRadius:'30%',marginTop:'3vh',boxShadow:'10px 10px 44px -12px rgba(0,0,0,0.75)'}}/>
                    </div>
                    <div className="Treasurer">
                        <h2 style={{color:'white',textShadow: '1px 1px 1px black, 1px 2px 1px black, 1px 3px 1px black, 1px 4px 1px black, 1px 5px 1px black, 1px 6px 1px black, 1px 7px 1px black, 1px 8px 1px black, 1px 9px 1px black, 1px 10px 1px black, 1px 18px 6px rgba(16,16,16,0.4), 1px 22px 10px rgba(16,16,16,0.2), 1px 25px 35px rgba(16,16,16,0.2), 1px 30px 60px rgba(16,16,16,0.4)'}}>Graphic Design Manager- Saharsh Lavu</h2>
                        <img src={saharsh} style={{width:'22vw',height:'50vh',borderRadius:'30%',marginTop:'3vh',boxShadow:'10px 10px 44px -12px rgba(0,0,0,0.75)'}}/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}