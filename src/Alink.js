import { Link } from "react-router-dom";
function Alink (props) {
    return(
    <li className="m-2"><Link to={props.route} className={props.textcolor}>{props.name}</Link></li>
    )

    }


export default Alink;
