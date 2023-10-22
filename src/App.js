import { useState} from "react";
import Login from "./login-page/Login";
import FullPageLayout from "./pages/FullPageLayout";
import { Route, Routes} from "react-router-dom";
import Home from "./pages/full-pages/Home";
import Detail from "./pages/full-pages/Detail";
import TodoReducer from "./pages/full-pages/TodoReducer";

function App() {
    const [counter, setCounter] = useState(0);

    const [isLogged, setIsLogged] = useState(false);

    return (

        <>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/todo-reducer" element={<TodoReducer/>}/>
                <Route path="/fullPages" element={<FullPageLayout/>}>
                    <Route index={true}  element={<Home/>}/>
                    <Route  path="home" element={<Home/>}/>
                    <Route path="detail" element={<Detail/>}/>
                </Route>
            </Routes>


        </>


  );
}

export default App;
