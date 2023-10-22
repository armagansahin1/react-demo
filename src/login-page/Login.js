import {useNavigate} from "react-router-dom";

function Login({setIsLogged}) {

    const navigate = useNavigate()
    return (
        <div onClick={()=>{navigate("/fullPages")}}>
            Login Page
        </div>
    )

}

export default Login