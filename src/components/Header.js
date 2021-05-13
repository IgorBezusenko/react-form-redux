import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3, 0, 2),
        fontFamily: "Permanent Marker",
        textAlign: "center",
        fontSize: "40px",
        color: "deeppink",
        textShadow: "1px 1px darkred",
    },
}));

export const Header = () => {
    const styles = useStyles();

    return (
       <Typography component={"h1"} variant={"h5"} className={styles.root}>Header</Typography>
    );
}