import {useState,useEffect} from 'react';
import { useHistory } from 'react-router';
import Button from "./Button";

function Create () {
    const history = useHistory();
    const [title, setTitle] = useState(null);
    const [body, setBody] = useState(null);
    const [autor, setAutor] = useState(null);
    const add = (e) => {
        e.preventDefault();
        const blog = {title,body,autor};
        fetch("http://localhost:8000/blogs",{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body : JSON.stringify(blog)
        }).then(history.push('/'))
    }


    return(
        <div className="container mx-auto m-20">
            <form className="text-center" onSubmit={add}>
                <input className="navbarcolor rounded input mt-3 p-2 focus:outline-none" onChange={(e => setTitle(e.target.value))} type="text" placeholder="title" value={title} />
                <br/>
                <textarea className="navbarcolor rounded input mt-3 p-2 focus:outline-none"onChange={(e => setBody(e.target.value))} placeholder="text" value={body}></textarea>
                <br/>
                <input className="navbarcolor rounded input mt-3 p-2 focus:outline-none" onChange={(e => setAutor(e.target.value))}  type="text" placeholder="author" value={autor} />
                <Button type="submit"/>
            </form>
        </div>
    )
}
export default Create ; 