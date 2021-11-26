import Alink from './Alink';
import { useLocation } from 'react-router';


function Navbar() {
    var a,b,c;
    const location = useLocation();
    if (location.pathname == '/'){
        a='titlecolor'
    }
    if(location.pathname == '/blogs'){
        b='titlecolor'
    }
    if(location.pathname == '/create'){
        c='titlecolor'
    }

    return (
        <ul className="flex-1 flex justify-center ml-auto  navbarcolor m-1.5 py-1">
            <Alink route="/" textcolor={a} name="Home"/>
            <Alink route="/blogs" textcolor={b} name="Navigate"/>
            <Alink route="/create" textcolor={c} name="Create"/>
        </ul>
    );
  }
  
  export default Navbar;
  