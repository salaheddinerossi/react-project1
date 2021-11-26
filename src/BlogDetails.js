import { useParams ,useHistory } from "react-router";
import { useState , useEffect } from "react";

const BlogDetails = () => {
    const [isPending, setIsPending] = useState(true);
    const {id} = useParams();
    const [blog, setBlog] = useState(null);
    const history =useHistory();
    useEffect( () => fetch("http://localhost:8000/blogs/"+id)
    .then(res =>res.json())
    .then(data => setBlog(data),setIsPending(false))
        , []);
    const deleteBlog = () => {
        fetch("http://localhost:8000/blogs/"+id ,
        {
            method:'DELETE'
        }
        ).then(() => {
            history.push('/');
        })
    }
    return (
        <div className="container mx-auto">
            {isPending && <p className="text-center text-lg">loading ...</p>}
            <div className="navbarcolor mt-6 rounded  p-6 " >
                {blog && <h1 className=" poppins font-bold text-xl titlecolor">{blog.title}</h1>}
                {blog && <p  className=" poppins my-2">{blog.body}</p>}
                {blog && <h2 className="text-gray-500 text-sm italic">Author:{blog.autor}</h2>}
            </div>
            <button onClick={deleteBlog} className="bg-red-500 text-white mt-4 center px-5 px-2 rounded">Delete</button>
        </div>
    )
}
export default BlogDetails;