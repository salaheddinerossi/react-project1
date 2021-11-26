import { Link } from "react-router-dom";
function Blog(props){
    return (
        <div className="navbarcolor mt-6 rounded  p-6">
            <Link to={`/blogs/${props.id}`} className=" poppins font-bold text-xl titlecolor">{props.title}</Link>
            <p className=" poppins my-2">{props.body}</p>
            <h2 className="text-gray-500 text-sm italic">Author:{props.autor}</h2>
        </div>
    )
}
export default Blog ; 