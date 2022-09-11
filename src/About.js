import Navbar from "./Navbar";
import image from "./images/about.jpg";
import Footer from "./Footer";
export default function About(){
    return (
        <div className='about-page'>
            <Navbar />
            <div className='about'>
                <img src={image} className='aboutImage' />
                <div className='about-info'>
                    <h1>About the League</h1>
                    <p>Our long-term goal is to bring chess to the forefront of competitive high school activities. Over the next few years, we want to see this league grow to encompass not only Texas but the entire nation. We believe students across the country should be able to harness their passion for chess and translate that into scholastic competition. If you haven't already, reach out to us about signing your school up for our chess league and give your students the chance to discover their passion for chess.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}