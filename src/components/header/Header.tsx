import React, { FC } from "react";
import { Button, Layout, Space, Typography } from "antd";
import { LoginOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { Paths } from "../../paths/Paths";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuth } from "../../app/slices/authSlice";
import { AppDispatch } from "../../app/store";

const Header: FC = () => {
    const isAuth = useSelector(selectIsAuth)
    const dispatch: AppDispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout())
        window.localStorage.removeItem('token')
    }

    return (
        <Layout.Header className={styles.header}>
            <Space>
                <Link to={Paths.home}>
                    <Button type='ghost'>
                        <Typography.Title level={1}>
                            Vandal Vape
                        </Typography.Title>
                    </Button>
                </Link>
            </Space>
            {
                isAuth ?
                    <Link to={Paths.login}>
                        <Button onClick={onLogout} type='primary' icon={<LogoutOutlined />}>Вийти</Button>
                    </Link>
                    :
                    <Space>
                        <Link to={Paths.login}>
                            <Button type='primary' icon={<LoginOutlined />}>Ввійти</Button>
                        </Link>
                        <Link to={Paths.register}>
                            <Button type='primary' icon={<UserOutlined />}>Зареєструватись</Button>
                        </Link>
                    </Space>
            }

        </Layout.Header>
    );
};

export default Header;