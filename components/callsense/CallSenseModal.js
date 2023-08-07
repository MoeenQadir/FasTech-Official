import React, {useState} from 'react';
import Link from "next/link";
import { Modal} from 'antd';
import {message, Steps, theme} from 'antd';
import {Button, Result, Form, Input} from 'antd';
const {TextArea} = Input;
import {Upload} from 'antd';
import {InboxOutlined} from "@ant-design/icons";
import axios from "axios";
import {API, BASEURL_DASHBOARD} from "../../const/APIs";
const {Dragger} = Upload;
const fileList = [];

const CallSenseModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {token} = theme.useToken();
    const [current, setCurrent] = useState(0);
    const [roleId, setRoleId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [file, setFile] = useState();
    const [fileUrl, setFileUrl] = useState();
    const [roleData, setRoleData] = useState({
        roleName: '',
        roleDescription: '',
        imageIco : ''
    })
    const [profileData, setProfileData] = useState({
        fullName: '',
        username: '',
        email: '',
        address: '',
        phone: '',
        password: '',
        about: '',
        profileImage: "",
        roleId: '',
    })
    const registerUser = async () => {
        setIsLoading(true)
        if (file) {
            const form = new FormData()
            form.append("file", file)
            await axios.post(API.Images.uploadImage, form).then(async (imageUrl) => {
                setProfileData({...profileData, profileImage: imageUrl.data})
                profileData.profileImage = imageUrl.data
                await axios.post(API.USER.REGISTER, profileData).then(async res => {
                    setCurrent(current + 1);
                    setIsLoading(false)
                    setProfileData({
                        fullName: '',
                        username: '',
                        email: '',
                        address: '',
                        phone: '',
                        password: '',
                        about: '',
                        profileImage: "",
                        roleId: '',
                    })
                }).catch(err => {
                    console.log(err.response.data.message)
                    setIsLoading(false)
                })
            });
        }
    }



    const createRole = async () => {
        setIsLoading(true)
        if (file) {
            const form = new FormData()
            form.append("file", file)
            await axios.post(API.Images.uploadImage, form).then(async (imageUrl) => {
                setRoleData({...roleData, imageIcon: imageUrl.data})
                roleData.imageIcon = imageUrl.data
                if (roleData.imageIcon) {
                    await axios.post(API.ROLE.CREATE, roleData).then(async res => {
                        setRoleId(res.data.response[0].id)
                        setProfileData({...profileData, roleId: res.data.response[0].id})
                        setCurrent(current + 1);
                        setIsLoading(false)
                        setRoleData({
                            roleName: '',
                            roleDescription: '',
                            parentId: '',
                            imageIcon: ''
                        })
                    }).catch(err => {
                        console.log(err.response.data)
                        message.error(`Something went wrong`);
                        setIsLoading(false)
                    })
                }
            }).catch(err => {
                console.log(err)
                setIsLoading(false)
            });
        }
    }


    const onFinish = (values) => {
        // console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        // console.log('Failed:', errorInfo);
    };

    const handleChange = (e) => {
        setProfileData({...profileData, [e.target.name]: e.target.value})
    }

    const props = {
        name: "file",
        multiple: true,
        defaultFileList: [...fileList],
        listType: "picture",
        async onChange(info) {
            const {status} = info.file;
            if (status !== 'uploading') {
                setFile(info.file.originFileObj)
                if (file) {
                    const form = new FormData()
                    form.append("file", info.file.originFileObj)
                    await axios.post(API.Images.uploadImage, form).then(async (imageUrl) => {
                        setFileUrl(imageUrl.data)
                        setRoleData({...roleData, imageIco: imageUrl.data})
                        setProfileData({...profileData, profileImage: imageUrl.data})
                    }).catch(err => {
                        console.log(err)
                    });
                }
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },

    };

    const layout = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 18,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };

    const steps = [
        {
            title: 'Company Details',
            content: <div>
                <Input placeholder="Company Name" value={roleData.roleName} onChange={(e) => {
                    setRoleData({...roleData, roleName: e.target.value})
                }}/>
                <TextArea
                    className={'mt-2'}
                    value={roleData.roleDescription}
                    onChange={(e) => {
                        setRoleData({...roleData, roleDescription: e.target.value})
                    }}
                    placeholder="Company Description"
                    autoSize={{
                        minRows: 3,
                        maxRows: 5,
                    }}
                />
                <Dragger {...props} className={'mt-2 w-100'}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined/>
                    </p>
                    <p className="ant-upload-text">Drop & Drop </p>
                    <p className="ant-upload-hint">
                        or Click to Upload Logo
                    </p>
                </Dragger>
            </div>,
        },
        {
            title: 'Admin Details',
            content: <div>

                <Form
                    className={' bg-white'}
                    {...layout}
                    labelAlign={'left'}
                    name="personal-information"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >

                    <Form.Item
                        label="FullName"
                        name="fullname"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input name={'fullName'} value={profileData.fullName} onChange={(e) => {
                            handleChange(e)
                        }}/>
                    </Form.Item>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input name={'username'} value={profileData.username} onChange={(e) => {
                            handleChange(e)
                        }}/>
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                        ]}
                    >
                        <Input name={'email'} value={profileData.email} onChange={(e) => {
                            handleChange(e)
                        }}/>
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password name={'password'} value={profileData.password} onChange={(e) => {
                            handleChange(e)
                        }}/>
                    </Form.Item>

                    <Form.Item
                        label="Address"
                        name="address"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter you address!',
                            },
                        ]}
                    >
                        <Input name={'address'} value={profileData.address} onChange={(e) => {
                            handleChange(e)
                        }}/>
                    </Form.Item>

                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Please input Phone number!',
                            },
                        ]}
                    >
                        <Input name={'phone'} value={profileData.phone} onChange={(e) => {
                            handleChange(e)
                        }}/>
                    </Form.Item>

                    <Form.Item
                        label="About Yourself"
                        name="about"
                        rules={[
                            {
                                required: true,
                                message: 'Please write about yourself!',
                            },
                        ]}
                    >
                        <Input name={'about'} value={profileData.about} onChange={(e) => {
                            handleChange(e)
                        }}/>
                    </Form.Item>

                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined/>
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Support for a single or bulk upload. Strictly prohibited from uploading company data or
                            other
                            banned files.
                        </p>
                    </Dragger>
                </Form>
            </div>,
        },
        {
            title: 'Done',
            content: <div>
                <Result
                    status="success"
                    title="Your requested has been submited successfully !"
                    subTitle="You will be notified once you account approved."
                />
            </div>,
        },
    ];
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const next = (current) => {
        if (current == 0) {
            createRole()
        } else if (current == 1) {
            registerUser()
        }

    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));
    const contentStyle = {
        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        marginTop: 16,
    };
    return (
        <>
            <span onClick={showModal} className="theme-btn btn-style-seven"><span className="txt" >Lets Start</span></span>
            <Modal title="Subscription" footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Steps current={current} items={items}/>
                <div style={contentStyle}>{steps[current].content}</div>
                <div
                    style={{
                        marginTop: 24,
                    }}
                >
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => next(current)} disabled={isLoading ? true : false}>
                            {
                                isLoading ? 'loading ...' : 'Next'
                            }

                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => {
                            message.success('Processing complete!')
                            setIsModalOpen(false)
                        }
                        }>
                            Done
                        </Button>
                    )}
                    {(current > 0 && current < 2) && (
                        <Button
                            style={{
                                margin: '0 8px',
                            }}
                            onClick={() => prev()}
                        >
                            Previous
                        </Button>
                    )}
                </div>
            </Modal>
        </>
    );
};

export default CallSenseModal;