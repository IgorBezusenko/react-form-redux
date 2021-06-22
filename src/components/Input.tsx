import React from "react";
import TextField from "@material-ui/core/TextField";
import {TextFieldProps} from "@material-ui/core/TextField/TextField";

type Props = {
    props:TextFieldProps
}
export const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
    return (
        <TextField
            variant="outlined"
            margin="normal"
            inputRef={ref}
            fullWidth
            {...props}
        />
    );
});