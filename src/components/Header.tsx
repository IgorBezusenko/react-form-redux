import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {clearToken} from "../redux/reducers/authReducer";
import {AppState} from "../redux/store";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3, 0, 2),
        fontFamily: "Permanent Marker",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "40px",
        color: "deeppink",
        textShadow: "1px 1px darkred",
    },
    logo: {
        marginLeft: "20px"
    },
    login: {
        marginRight: "20px"
    },

}));

export const Header = () => {
    const styles = useStyles();
    const token = useSelector((state:AppState) => state.authReducer.token)
    const dispatch = useDispatch()
    const logOut = ()=> {
        localStorage.removeItem('token')
        dispatch(clearToken())
    }
    return (
        <Typography component={"div"} className={styles.root}>
            <Typography component={"h1"} variant={"h5"} className={styles.logo}><Link to={"/"}>Home Page</Link></Typography>
            <Typography component={"div"} className={styles.login}>
                <Link to={"/auth"}>{!token ? "Login" : <p onClick={logOut}>Logout</p>}</Link> </Typography>
        </Typography>
    );
}