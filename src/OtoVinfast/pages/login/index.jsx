import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Row, Col } from "antd";
import { api_login } from "../../services/api_login";

import { helpers } from "../../helpers/common";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const LoginPage = () => {
  const history = useHistory();
  const [errorLogin, setErrorLogin] = useState("");
  const onFinish = (values) => {
    // console.log("Success:", values);
    const user = values.username;
    const pass = values.password;
    let token = api_login.loginUser(user, pass);
    if (token !== null) {
      // luu token
      helpers.saveToken(token);
      setErrorLogin("");
      history.push("/");
    } else {
      setErrorLogin(`nhập linh tinh or account invalid`);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Row style={{ margin: "10px 10px" }}>
        <Col span={10} style={{ float: "left" }}></Col>
      </Row>
      <Row style={{ marginTop: "50px" }}>
        <Col span={10} offset={7}>
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <h3 style={{ textAlign: "center", color: "red" }}>{errorLogin}</h3>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        {/* <Col span={12} offset={6}>
        <h4 style={{ textAlign: "center", color: "red" }}>{errorLogin}</h4>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              login
           
            </Button>
          </Form.Item>
        </Form>
      </Col> */}
      </Row>
    </>
  );
};

export default React.memo(LoginPage);
