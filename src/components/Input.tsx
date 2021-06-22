import React from "react";
import TextField, {TextFieldProps} from "@material-ui/core/TextField";

type Props = {
    id: string,
    type: string,
    label: string,
    name: string,
    helperText?: string,
    error: boolean,

}
export const Input = React.forwardRef<HTMLButtonElement, Props & TextFieldProps>((props, ref) => {
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