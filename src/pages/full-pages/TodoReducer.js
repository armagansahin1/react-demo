import React,{useReducer} from "react";


const initialState = {
    todos: [],
    todo: ''
}
function reducer(state,action){
    switch (action.type) {
        case "SET_TODO":
            return {
                ...state,
                todo:action.payload
            }
        case "ADD_TODO":
            return {
                ...state,
                todo:"",
                todos:[...state.todos,action.payload]
            }
        case "DELETE_TODO":
            console.log("delete")
            console.log(action.payload)
            return {
                ...state,
                todos:[...action.payload]
            }
    }
}

function TodoReducer() {

    const [state, dispatch] = useReducer(reducer,initialState);

    const handleSubmit = e =>{
        e.preventDefault()

        dispatch({
            type:"ADD_TODO",
            payload:state.todo
        })
    }

    const handleInputChange = e => {
        dispatch({
            type:"SET_TODO",
            payload:e.target.value
        })
    }

    function handleDeleteButtonClick(index){
        console.log(index)
        if (index > -1){
            const todos = [...state.todos]
            todos.splice(index,1)
            dispatch({
                type:"DELETE_TODO",
                payload:todos
            })
        }
    }

    return (
        <>

            <h1>Todo App</h1>
            <h2>useReducer Demo</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" value={state.todo} onChange={handleInputChange}/>
                <button type="submit" disabled={!state.todo}>Ekle</button>
            </form>
            <ul style={{marginTop:"5px"}}>
                {
                    state.todos.map((todo,index) => (
                        <li key={index}>{todo} <button onClick={()=>handleDeleteButtonClick(index)}>Sil</button></li>
                    ))
                }
            </ul>


        </>
    )
}

export default TodoReducer