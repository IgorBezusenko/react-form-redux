import React from "react";
import {MainContainer} from "./MainContainer";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Typography} from "@material-ui/core";

export const Home =()=>{

    const token = useSelector(state=>state.authReducer.token)
    return(
        <MainContainer>
            <Typography component={"h2"} variant={"h5"} color={"primary"}>This is Home Page</Typography>
            <Typography component={"p"} style={{marginBottom:"20px"}} >If you want go to secret page - <Link to={"auth"}>login</Link></Typography>
            {token && <Link to={"/secret-page"}>Go to Secret Page</Link>}
        </MainContainer>
    )
}