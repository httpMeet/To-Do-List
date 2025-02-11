import { useState, useEffect } from "react";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos"));
        if (savedTodos) {
            setTodos(savedTodos);
        }
    }, []);

    const addTodo = () => {
        if (input.trim() !== "") {
            const updatedTodos = [...todos, input];
            setTodos(updatedTodos);
            localStorage.setItem("todos", JSON.stringify(updatedTodos)); 
            setInput(""); 
        }
    };


    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos)); 
    };

    return (
        <div>
            <div className="header">
                <h1>Todo List</h1>
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder="Enter a task..."
                />
                <button className="Add-btn" onClick={addTodo}>+</button>
            </div>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo} 
                        <button onClick={() => deleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
