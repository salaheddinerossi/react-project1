import Navbar from './Navbar';
import Content from './Content';
import image from './image.png'

function Home () {
    return(
        <div>
            <div className=" grid grid-cols-2 container mx-auto mt-20">
            <Content />
            <img className="mx-auto" src={image} ></img>
            </div>
        </div>
  
    )
}
export default Home ;