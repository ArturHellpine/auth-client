import React from "react";
import { Layout } from "../../components/layout/Layout";
import { Card, Form, Row, Space, Typography } from "antd";
import CustomInput from "../../components/custom-input/CustomInput";
import { PassInput } from "../../components/password-input/PassInput";
import { CustomButton } from "../../components/custom-button/CustomButton";
import {Link, Navigate} from "react-router-dom";
import { Paths } from "../../paths/Paths";
import {AppDispatch} from "../../app/store";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth, fetchRegister, selectIsAuth} from "../../app/slices/authSlice";

const Register = () => {
    const dispatch: AppDispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth)

    const onFinish = async (values: any) => {
        // @ts-ignore
        const data = await dispatch(fetchRegister(values))
        if(!data.payload) {
            return alert('Не вдалось зареєструватись')
        }
        if(data.payload.token) {
            window.localStorage.setItem('token', data.payload.token)
        }
    }

    if(isAuth) {
        return <Navigate to={Paths.home} />
    }

    return (
        <Layout>
            <Row align='middle' justify='center'>
                <Card title='Реєстрація' style={{width: '30rem'}}>
                    <Form onFinish={onFinish}>
                        <CustomInput name='firstName' placeholder='Ім’я' />
                        <CustomInput name='lastName' placeholder='Прізвище' />
                        <CustomInput type='email' name='email' placeholder='Пошта' />
                        <CustomInput name='phone' placeholder='Номер телефону' />
                        <PassInput name='password' placeholder='Пароль' />
                        <PassInput name='confirmPassword' placeholder='Підтвердити пароль' />
                        <CustomButton type='primary' htmlType='submit'>Зареєструватись</CustomButton>
                    </Form>
                    <Space direction='vertical' size='large'>
                        <Typography.Text>
                            Вже є акаунт? <Link to={Paths.login}>Ввійти</Link>
                        </Typography.Text>
                    </Space>
                </Card>
            </Row>
        </Layout>
    );
};

export default Register;