import image from './images/king.png';
export default function Cover(){
    return (
        <div className='cover'>
            <div className='title'>
                <h1>Texas <br />Student Led Chess Association</h1>
            </div>
            <img src={image}/>
        </div>
    )
}