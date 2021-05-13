import React from "react";
import {useHistory} from "react-router-dom";
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


const schema = yup.object().shape({
    login: yup.string().min(4, "Минимум 4 сивмола").max(50, "Максимум 50 символов").required("Поле обьязательно для закполнения"),
    password: yup.string().min(6, "Минимум 6 сивмолов").max(25, "Максимум 25 символов").required("Поле обьязательно для закполнения")
})

export const Login = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const state = useSelector((state) => state.authReducer);
    console.log(state)
    const {token, loading} = state
    console.log(token)
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {},
        mode: "onBlur",
        resolver: yupResolver(schema)

    })
    const onSubmit = (data) => {
        dispatch(getToken(data.login, data.password))
        history.push("/")
           }

    return (
        <>
            {loading ? <div>Loading....</div> :  <MainContainer>
                    <Typography component={"h2"} variant={"h5"}>Авторизация</Typography>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            {...register('login',)}
                            id="login"
                            type="text"
                            label="Логин"
                            name="login"
                            helperText={errors?.login?.message}
                            error={!!errors.login}

                        />
                        <Input
                            {...register('password',)}
                            id="password"
                            type="password"
                            label="Пароль"
                            name="password"
                            helperText={errors?.password?.message}
                            error={!!errors.password}
                        />
                        <PrimaryButton>Войти</PrimaryButton>
                    </Form>
                </MainContainer>
            }

        </>
    )
}

