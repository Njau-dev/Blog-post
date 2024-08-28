import Home from './Home';
import Create from './Create';

const Navbar = () => {
    return (
        <div className="nav">
            <div className="logo">
                <h1>Blog Post</h1>
            </div>
            <div className="nav-links">
                <ul>
                    <li><a href={Home} >Home</a></li>
                    <li><a href={Create} >Create</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar