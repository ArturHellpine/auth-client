import React from "react";
import { Layout } from "../../components/layout/Layout";
import { Card, Form, Row, Space, Typography } from "antd";
import CustomInput from "../../components/custom-input/CustomInput";
import { PassInput } from "../../components/password-input/PassInput";
import { Link, Navigate } from "react-router-dom";
import { Paths } from "../../paths/Paths";
import { CustomButton } from "../../components/custom-button/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth, selectIsAuth } from "../../app/slices/authSlice";
import { AppDispatch } from "../../app/store";

const Login = () => {
    const dispatch: AppDispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth)

    const onFinish = async (values: any) => {
        // @ts-ignore
        const data = await dispatch(fetchAuth(values))
        if(!data.payload) {
           return alert('Не вдалось авторизуватись')
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
                <Card title='Вхід' style={{width: '30rem'}}>
                    <Form onFinish={onFinish}>
                        <CustomInput type='email' name='email' placeholder='Пошта' />
                        <PassInput name='password' placeholder='Пароль' />
                        <CustomButton type='primary' htmlType='submit'>Ввійти</CustomButton>
                    </Form>
                    <Space direction='vertical' size='large'>
                        <Typography.Text>
                            Немає акаунта? <Link to={Paths.register}>Зареєструватись</Link>
                        </Typography.Text>
                    </Space>
                </Card>
            </Row>
        </Layout>
    );
};

export default Login;