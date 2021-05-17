import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Row, Col } from "antd";

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
//   const [errorLogin, setErrorLogin] = useState(" ");
//   const history = useHistory();
//   const onFinish = (values) => {
//     let user = values.username;
//     let pass = values.password;
//     let tokenn = api.checkUserLogin(user, pass);
//     if (tokenn !== null) {
//       // console.log(tokenn);
//       // luu tokenn
//       // setErrorLogin("");
//       helpers.saveTokenn(tokenn);
//       history.push("/");
//     } else {
//       setErrorLogin("account invalid");
//     }

//     // let token = api.LoginUser(user, pass);
//     // if (token !== null) {
//     //   setErrorLogin("");
//     //   // console.log(token);
//     //   // luu token
//     //   helpers.saveToken(token);
//     //   history.push("/");
//     // } else {
//     //   setErrorLogin("account invalid");
//     // }
//   };

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  //};
  return (
    <Row style={{ marginTop: "50px" }}>
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
  );
};

export default React.memo(LoginPage);
