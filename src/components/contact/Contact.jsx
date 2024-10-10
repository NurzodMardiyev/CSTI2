import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "../../App.css";
import TextArea from "antd/es/input/TextArea";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function Contact() {
  return (
    <div className="contact">
      <div className="container md:max-w-9xl md:mx-auto flex flex-col  md:py-3 py-1.5 max-w-[90%] mx-auto justify-start h-full gap-3 ">
        <div className="bg-[#162b4bd3] w-[800px] px-10 py-14 rounded-[40px] mb-[-100px] mt-[80px] ms-auto">
          <div className="text-center">
            <h2 className="lg:text-[42px] text-[30px] font-[600] text-[#fff] my-8">
              Let's take off!
            </h2>
          </div>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input placeholder="FullName" className="py-3 rounded-lg" />
            </Form.Item>
            <Form.Item
              name="number"
              rules={[
                {
                  required: true,
                  message: "Please input your number!",
                },
              ]}
            >
              <Input placeholder="Number" className="py-3 rounded-lg" />
            </Form.Item>

            <Form.Item
              name="message"
              rules={[
                {
                  required: true,
                  message: "Please input your number!",
                },
              ]}
            >
              <TextArea placeholder="Message" rows={4} />
            </Form.Item>

            <Form.Item name="remember">
              <Checkbox className="text-white">Remember me</Checkbox>
            </Form.Item>

            <Form.Item className="flex justify-center">
              <Button
                type="primary"
                htmlType="submit"
                className="px-10 py-5 bg-[#FFBF20] text-black text-[18px] font-[500]"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
