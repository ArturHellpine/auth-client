import React from "react";
import { Layout } from "../../components/layout/Layout";
import { useSelector } from "react-redux";
import { Row, Space } from "antd";

const Home = () => {
    // @ts-ignore
    const userData = useSelector(state => state.auth.data)

    return (
        <Layout>
            <Row align='middle' justify='center'>
                <Space direction='vertical' size='large'>
                    {userData?.firstName}
                    {userData?.lastName}
                    {userData?.email}
                    {userData?.phone}
                </Space>
            </Row>
        </Layout>
    );
};

export default Home;