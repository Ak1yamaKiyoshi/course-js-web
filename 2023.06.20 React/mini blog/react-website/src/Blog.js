import './App.css';
import Navigation from './Navigation';
import Post from './Post';


function Blog(props) {
    return (
        <div> 
        <Navigation />
        <Post post={props.post} />
        </div>
    );
}
export default Blog;