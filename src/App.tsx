import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Login} from "./components/Login";
import {Header} from "./components/Header";
import {SecretPage} from "./components/SecretPage";
import {Home} from "./components/Home";

const App: React.FC = () => {
    return (
        <>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route path={"/auth"} component={Login}/>
                    <Route path={"/secret-page"} component={SecretPage}/>
                </Switch>
            </Router>
        </>
    )
}

export default App