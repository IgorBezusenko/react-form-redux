
import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
}));

type Props = {
    props?:any
}
export const MainContainer: React.FC<Props> = ({ children, props }) => {
    const styles = useStyles();

    return (
        <Container
            className={styles.root}
            component="main"
            maxWidth="xs"
            {...props}
        >
            {children}
        </Container>
    );
};