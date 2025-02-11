import React from "react";
import ReactDOM from "react-dom/client";
import Todo from "./components/Todo";

const Applayout = () => {
    return(
        <div className="App">
            <Todo/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Applayout />)