import { useEffect , useState} from 'react';
import Blog from './Blog';


function ShowBlogs(){
    const [isPending, setIsPending] = useState(true);
    const[blogs,setBlogs] = useState(null);
    useEffect(() => fetch('http://localhost:8000/blogs')
    .then(res => res.json())
    .then(data => setBlogs(data) , setIsPending(false)) ,[])
    return (
        <div className="container mx-auto mt-20">
            {isPending && <p className="text-center text-lg">loading ...</p>}
            {blogs && blogs.map( (blog) => (
                <Blog title={blog.title} body={blog.body} autor={blog.autor} id={blog.id}/>
            ))}
        </div>
    )
}
export default ShowBlogs;