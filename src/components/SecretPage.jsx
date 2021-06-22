import React from "react";
import {Typography} from "@material-ui/core";
import {MainContainer} from "./MainContainer";

export const SecretPage: React.FC = () => {
    return (
        <MainContainer>
            <Typography component={"h1"} variant={"h5"} color={"primary"}>This is Secret Page</Typography>
            <Typography component={"p"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem deleniti
                deserunt dolor est et eum ex expedita, id illum ipsum labore non obcaecati praesentium sequi sit,
                suscipit vel veniam.</Typography>

        </MainContainer>
    )
}