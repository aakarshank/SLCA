import { Button, shouldSkipGeneratingVar} from '@mui/material';

export default function Posts(){
    return (
        <div className='post-section'>
            <div className="label">
                <h1 style={{borderStyle:'solid',borderColor:'black',borderWidth:'.05em',padding:'.15em',borderRadius:'.15em'}}>All Posts</h1>
                {/*<Button className="signup-button" sx={{marginTop:4,border:1}}>Login/Sign Up</Button>*/}
            </div>
            <div className="posts">
                <div className="post">No posts yet</div>
            </div>
        </div>
    )
}