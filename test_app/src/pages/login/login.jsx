import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './login.less'

export default class Login extends Component {
    render() {
        // 检测功能
        const onFinish = (values) => {
            console.log('Received values of form: ', values);
        };
        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo)
        }        
        return (
            <div className="login">
                <div className="login-content">
                    <h1>User Login</h1>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: '请输入您的用户名！' },
                                { type:'enum',enum: ['','M-OC00-00', 'J-OC312-01', 'J-OC312-03', 'J-OC312-04'], message: '请输入开发者提供的用户名'}]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: '请输入您的密码！' },
                                ({ getFieldValue }) => ({
                                    validator(value) {
                                        const username = getFieldValue('username');
                                        const password = getFieldValue('password');
                                        if (username === 'M-OC00-00' && password === 'zhuim') {
                                            return Promise.resolve();
                                        } else if (username === 'J-OC312-01' && password === 'gaoqinyue') {
                                            return Promise.resolve();
                                        } else if (username === 'J-OC312-03' && password === 'wangtianmin') {
                                            return Promise.resolve();
                                        } else if (username === 'J-OC312-04' && password === 'simajinyang') {
                                            return Promise.resolve();
                                        } else if ( password === '') {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('密码错误!'))
                                    }
                                })]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="#/forgot">
                                Forgot password
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in</Button>
                            Or <a href="#/register">register now!</a>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

