import {Col, Container, Row} from "react-bootstrap";
import "./navbar.css"
function Navbar() {
    return (
        <nav className="container p-2 navbar ">
            <div className="row col-12 d-flex justify-content-between">
                <div className="col-4">
                    Armağan Şahin
                </div>
                <div className="col-6 row d-flex justify-content-end">
                    <div className="col-4 text-end">
                        Linkedin
                    </div>
                    <div className="col-4 text-end">
                        Linkedin
                    </div>
                    <div className="col-4 text-end">
                        Linkedin
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;