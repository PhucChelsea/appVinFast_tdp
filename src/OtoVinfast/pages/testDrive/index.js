import { Button, DatePicker, Form, Input, notification } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import MasterLayoutVinFast from "../../components/MasterLayout";

const DriveComponent = () => {
  const { RangePicker } = DatePicker;
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const history = useHistory();

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Gửi yêu cầu thành công",
      description: "Nhân viên sẽ liên lạc với quý khách trong ít phút !!",
    });
  };
  const onFinish = (values) => {
    console.log("ttt Success:", values);
    openNotificationWithIcon("success");
    history.push("/");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("ttt Failed:", errorInfo);
  };
  const onReset = () => {
    form.resetFields();
  };
  return (
    <MasterLayoutVinFast>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        {" "}
        Đăng kí lái thử
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <Form
          name="form-test-drive"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Tên Khách hàng"
            name="username"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên của bạn!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Số điện thoại"
            name="numberPhone"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập số điện thoại của bạn!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            // rules={[
            //   {
            //     required: true,
            //     message: "Vui lòng nhập email của bạn!",
            //   },
            // ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Địa chỉ" name="address">
            <Input />
          </Form.Item>
          <Form.Item label="Mẫu xe" name="carType">
            <Input />
          </Form.Item>
          <Form.Item label="Thời gian" name="time">
            <RangePicker />
          </Form.Item>
          <Form.Item label="Ghi chú" name="note">
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button
              style={{ marginLeft: "15px" }}
              htmlType="button"
              onClick={onReset}
            >
              Reset
            </Button>
          </Form.Item>
        </Form>
      </div>
    </MasterLayoutVinFast>
  );
};
export default DriveComponent;
