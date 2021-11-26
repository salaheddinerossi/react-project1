import Alink from './Alink';


function Navbar() {
    return (
        <ul className="flex-1 flex justify-center ml-auto  navbarcolor m-1.5 py-1">
            <Alink route="/" textcolor="titlecolor" name="Home"/>
            <Alink route="/blogs" name="Navigate"/>
            <Alink route="/create" name="Create"/>
        </ul>
    );
  }
  
  export default Navbar;
  