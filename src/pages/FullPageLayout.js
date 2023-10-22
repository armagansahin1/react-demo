
import {Link, Outlet} from "react-router-dom";


function FullPageLayout() {


    const handleClick = (path)=>{
    }
    return (
        <div className="container">
            <div className="row" style={{background:"blue",color:"white"}}>
                <Link to={'/fullPages/home'}><div className="col-6">Home</div></Link>
                <Link to={'/fullPages/detail'}><div className="col-6">Detail</div></Link>
            </div>
            <div className="row">
                <div className="col-3">
                    Side Bar
                </div>
                <div className="col-9">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default FullPageLayout