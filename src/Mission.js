import Navbar from "./Navbar"
import image from "./images/mission.jpg";
import Footer from "./Footer";
import image_2 from "./images/handshake.png"
export default function Mission(){
    return (
        <div className='mission-page'>
            <Navbar />
            <div className="mission-top">
                <img src={image} className="missionImage"/>
                <div className="mission-description">
                    <h1>A New Way to Play</h1>
                    <p>Chess is not just a game; it is a sport that focuses on sportsmanship, logic, and critical thinking skills. Despite this, there aren't many competitive high school chess leagues in Texas. We are pleased to remedy this, with the Texas High School Chess League. Monthly in-person matches between schools will occur, and at the end of the year there will be a in-person tournament in which the top schools and players will be invited to show off their skills.</p>
                    
                </div>
            </div>
            <div className="mission-bottom">
                <h1>Our Mission</h1>
                <div className="flex-mission">
                    <div className="flex-image">
                        <img src={image_2} />
                    </div>
                    <div className="flex-description">
                    <h2>Chess For All</h2><br />
                        <p>We want this league to become something great; an emblem of sportsmanship, respect, and friendly competition that will make our community better. We want everyone to be able to find joy in chess, no matter where they go to school.
                        Our mission is to teach, improve, and unite high school students through a love of chess. Our vision is for all people to recognize chess as an inclusive sport that promotes a friendly environment while maintaining healthy competition.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}