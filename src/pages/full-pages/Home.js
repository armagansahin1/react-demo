import {useEffect} from "react";

function Home() {

    useEffect(()=>{
        console.log("Home")
    },[])
    return (
        <>
            Home Page
        </>
    )
}

export default Home