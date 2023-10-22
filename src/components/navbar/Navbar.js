import {Col, Container, Row} from "react-bootstrap";

function Navbar() {
    return (
        <nav className="container"  style={{background:"#222831",color:"#EEEEEE",height:"80px"}}>
            <li style={{margin:0,padding:0,textDecoration:"none"}}>
                <ul>
                    Linkedin
                </ul>
                <ul>
                    Instagram
                </ul>
                <ul>
                    Twitter
                </ul>
            </li>
        </nav>
    )
}

export default Navbar;