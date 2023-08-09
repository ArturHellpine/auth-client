import React, { FC } from "react";
import { Button, Form } from "antd";

interface CustomButtonProps {
    children: React.ReactNode
    icon?: React.ReactNode
    onClick?: () => void
    htmlType?: 'button' | 'submit' | 'reset' | undefined
    type?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined
    danger?: boolean
    loading?: boolean
    shape?: 'default' | 'circle' | 'round' | undefined
}

export const CustomButton: FC<CustomButtonProps> = ({children, htmlType = 'button', type, danger, loading, shape, icon, onClick}) => {
    return (
        <Form.Item>
            <Button
                htmlType={htmlType}
                type={type}
                danger={danger}
                loading={loading}
                shape={shape}
                icon={icon}
                onClick={onClick}
            >
                {children}
            </Button>
        </Form.Item>
    );
};

