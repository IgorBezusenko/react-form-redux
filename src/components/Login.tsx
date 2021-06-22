import React from "react";
import {Redirect} from "react-router-dom";
import {useForm} from "react-hook-form";
import {Typography} from "@material-ui/core";
import * as yup from "yup";
import {MainContainer} from "./MainContainer";
import {Form} from "./Form"
import {Input} from "./Input";
import {PrimaryButton} from "./PrimaryButton";
import {yupResolver} from "@hookform/resolvers/yup";
import {useDispatch, useSelector} from "react-redux";
import {getToken} from "../redux/reducers/authReducer";
import {AppState} from "../redux/store";

const schema = yup.object().shape({
    login: yup.string().required("Field is required").min(4, "min symbols is 4").max(50, "max symbols is 50"),
    password: yup.string().required("Field is required").min(6, "min symbols is 6").max(25, "max symbols is 25")
})

type User = {
    login: string,
    password: string,
    id:string
}
export const Login: React.FC = () => {
    const dispatch = useDispatch()
    const state = useSelector((state: AppState) => state.authReducer);
    const {token, loading, errorMessage} = state

    const {register, handleSubmit, formState: {errors}} = useForm<User>({
        defaultValues: {},
        mode: "onBlur",
        resolver: yupResolver(schema)
    })

    const onSubmit = (data: User)=> {
        dispatch(getToken(data.login, data.password))
    }


    return (
        <>
            {token && <Redirect to={"/"}/>}
            {loading ? <div>Loading....</div> : <MainContainer>
                <Typography component={"h2"} variant={"h5"}>Login</Typography>
                {errorMessage && <p >{errorMessage}</p>}
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        {...register('login',)}
                        id="login"
                        type="text"
                        label="Login"
                        name="login"
                        helperText={errors?.login?.message}
                        error={!!errors.login}

                    />
                    <Input
                        {...register('password',)}
                        id="password"
                        type="password"
                        label="Password"
                        name="password"
                        helperText={errors?.password?.message}
                        error={!!errors.password}
                    />
                    <PrimaryButton>Submit</PrimaryButton>
                </Form>
            </MainContainer>
            }

        </>
    )
}

