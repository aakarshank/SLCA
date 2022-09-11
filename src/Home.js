import Cover from './Cover';
import Navbar from './Navbar';
import Posts from './Posts';
import Footer from './Footer';
export default function Home(){
    return (
        <div className='home'>
            <Navbar />
            <Cover />
            <Posts />
            <Footer />
        </div>
    )
}