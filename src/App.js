import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import {Login} from "./components/Login";
import {Header} from "./components/Header";
import {SecretPage} from "./components/SecretPage";
import {Home} from "./components/Home";


// const Home = () => (<Link to={"/auth"}>Авторизироваться</Link>)


const App = () => {
    return (
        <>

            <Router>
                <>
                    <Route  path={"/"} component={Header}/>
                    <Route exact path={"/"} component={Home}/>

                    <Route  path={"/auth"} component={Login}/>
                    <Route  path={"/secret-page"} component={SecretPage}/>
                </>
            </Router>
        </>
    )
}


export default App