import React, { FC } from "react";
import { ConfigProvider, theme } from "antd";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const App: FC = () => {
    return (
        <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>
            <RouterProvider router={router} />
        </ConfigProvider>
    );
};

export default App;