import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import {Login} from "./components/Login";
import {Header} from "./components/Header";


const Home = () => (<Link to={"/auth"}>Авторизироваться</Link>)


const App = () => {
    return (
        <>
            <Header/>
            <Router>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route  path={"/auth"} component={Login}/>
                </Switch>
            </Router>
        </>
    )
}
export default App