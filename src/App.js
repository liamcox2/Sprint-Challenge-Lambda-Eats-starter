import React from "react";
import Form from "./Form";
import Home from "./Home";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

const App = () => {
    return (
        <>
            <h1>Lambda Eats</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/Form'>Order Here</Link>
            </nav>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/Form'>
                <Form />
            </Route>
        </>
    );
};
export default App;
