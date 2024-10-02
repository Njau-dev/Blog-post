import useFetch from "./useFetch";
import BlogList from "./bloglist";


const Home = () => {
    const {data:blogs} = useFetch('http://localhost:4000/blogs')

    return (
        <div className="home">
            
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}

        </div>
    );
}

export default Home;
