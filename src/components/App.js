import AddTodo from "../containers/AddTodo"
import VisibleTodoList from "../containers/VisibleTodoList"
import Footer from "./Footer"
import * as React from "react";

const App = () => (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
);

export default App
