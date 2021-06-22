import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3, 0, 2)
    }
}))

type Props = {
    props?: any
}
export const PrimaryButton: React.FC<Props> = ({children, props}) => {
    const styles = useStyles()
    return (
        <Button className={styles.root} type={"submit"} fullWidth variant={"contained"} color={"primary"} {...props} >
            {children}
        </Button>
    )
}