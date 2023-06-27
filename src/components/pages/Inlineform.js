import type { CascaderProps } from 'antd';
import '../UserProfilePage.css';
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from 'antd';
import axios from 'axios';
import React, { useState } from 'react';


const { Option } = Select;

interface DataNodeType {
  value: string;
  label: string;
  children?: DataNodeType[];
}

const states = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
];

const stateOptions = states.map(state => (
  <Option key={state} value={state}>{state}</Option>
));

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Inline_Form: React.FC = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [form] = Form.useForm();
  const handleEditProfile = () => {
    setFormVisible(true); // Set the form visibility to true when the user clicks on the edit profile button
  };

  const onFinish = async (values: any) => {
    // console.log('Received values of form: ', values);
    try {
      // Send the HTTP POST request using Axios
      console.log(values)
      const response = await axios.post('http://localhost:8080/auth', values);
  
      // Handle the response
      console.log('Registration successful:', response.data);
      // Reset the form and hide it after successful registration
      form.resetFields();
      setFormVisible(false);
    } catch (error) {
      // Handle any errors that occur during the registration process
      console.error('Registration error:', error);
    }
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value: string) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  const initialValues = {
    photo: null,
  };

  return (

   <div>
     <div className="form-control1">
            <div className="photo-upload-container">
              <input type="file" id="photo" name="photo" style={{ display: 'none' }} input/>
              {initialValues.photo ? (
                <img src={URL.createObjectURL(initialValues.photo)} alt="Uploaded" className="uploaded-photo" />
              ) : (
                <div className="empty-photo-circle">
                  <label htmlFor="photo" className="upload-icon">
                    <span className="material-icons-outlined">sports_tennis</span>
                  </label>
                </div>
              )}
            </div>
     </div>
     {!formVisible && (
    <Button  className = 'save-button' onClick={handleEditProfile}>Edit Profile</Button>
     )}

    {formVisible && (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
      style={{ maxWidth: 600 }}
      scrollToFirstError
    >  
    <Form.Item name="photo">
     
    </Form.Item>

      <Form.Item
        name="First Name"
        label="First Name"
        rules={[
          {
            type: 'First Name',
            message: 'The input is not valid Name',
          },
          {
            required: true,
            message: 'Please input your Name!',
          },
        ]}
      >
        <Input />  
      </Form.Item>

      <Form.Item
        name="Last Name"
        label="Last Name"
        rules={[
          {
            type: 'Last Name',
            message: 'The input is not valid Name',
          },
          {
            required: true,
            message: 'Please input your Name!',
          },
        ]}
      >
        <Input />
      </Form.Item>


   
      <Form.Item
        name="address"
        label="Address"
        rules={[
          {
            required: true,
            message: 'Please input your Address!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name ="city"  label="City"  style={{ marginBottom: 0}} rules={[{ required: true }]} help="">
          <Form.Item 
            name="city"
            label=''
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(40% - 1px)' }}
          >
            <Input placeholder="" />
          </Form.Item>
          <Form.Item label="Country"
            name="Country"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(60% - 1px)', margin: '0 1px' }}
          >
            <Input placeholder="Zip Code" />
          </Form.Item>
      </Form.Item>

      
      
      <Form.Item name ="state"  label="State"  style={{ marginBottom: 0}} rules={[{ required: true }]} help="">
          <Form.Item 
            name="state"
            label=''
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(40% - 1px)' }}
          >
             <Select placeholder="Select your state">
            {stateOptions} 
            </Select>
          </Form.Item>
          <Form.Item label="Zip Code"
            name="Zip Code"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(60% - 1px)', margin: '0 1px' }}
          >
            <Input placeholder="Zip Code" />
          </Form.Item>
      </Form.Item>

      <Form.Item
        name="nickname"
        label="Nickname"
        tooltip="What do you want others to call you?"
        rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input  style={{ width: '100%' }} />
      </Form.Item>
      {/* addonBefore={prefixSelector} */}

 

      <Form.Item
        name="website"
        label="Website"
        rules={[{ required: true, message: 'Please input website!' }]}
      >
        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
          <Input />
        </AutoComplete>
      </Form.Item>

      <Form.Item
        name="intro"
        label="Intro"
        rules={[{ required: true, message: 'Please input Intro' }]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[{ required: true, message: 'Please select gender!' }]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
      <Button type="primary" htmlType="submit" Click={onFinish
      }>
         Save 
      </Button>
      </Form.Item>
    </Form>)}
  </div>
  );
};

export default Inline_Form;