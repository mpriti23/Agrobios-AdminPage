import React from 'react';
import './App.css';
import {Layout, DatePicker} from 'antd';
import {Typography, Input,Row,Col} from 'antd';
import {Menu, Breadcrumb, Button} from 'antd';
import {Select} from 'antd';
import {Table} from 'antd';
import {Collapse} from 'antd';
import {Radio, Checkbox} from 'antd';
import {useState} from 'react';


import {UploadOutlined} from '@ant-design/icons';

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};


function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}


function callback(key) {
    console.log(key);
}


const {Option} = Select;

const {SubMenu} = Menu;


const {Title} = Typography;


const {Header, Footer, Sider, Content} = Layout;

function handleChange(value) {
    console.log(`selected ${value}`);
}


function App6() {
    return (
        <div className="App">

            <Layout>
                <Header style={{padding: 10}}>
                    <Title style={{color: 'white'}} level={5}>LOGO</Title>
                </Header>
                <Layout>
                    <Sider>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['3']}

                        >
                        
                        <Menu.Item key="1"  >Manage Books</Menu.Item>
                                    <Menu.Item key="2" >Transactions</Menu.Item>
                                    <Menu.Item key="3">Receipts</Menu.Item>
                              
                            <Menu.Item key="Ledgers">Ledgers</Menu.Item>

                        </Menu>
                    </Sider>
                    <Layout>
                        <Content style={{padding: '0 20px'}}>
                            <Breadcrumb style={{margin: '0 0'}}>
                            </Breadcrumb>
                            <div className="site-layout-content" style={{
                                background: '#fff',
                                padding: 2,
                                margin: 0,
                                minHeight: 520,
                            }}
                            >
                                <h2>New Receipt Entry</h2>
                                
                               <h4><b>Receipt Details</b></h4>
                                <Row>
                                    <Col span={4}>Select Customer:</Col>
                                    <Col>
                               <Select defaultValue="lucy" style={{width: 180,margin:5}}
                                             onChange={handleChange}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">--Select client type--</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                    </Select>&nbsp;&nbsp;
                                </Col>
                                <Col span={10}>
                                <Input style={{width: 180,margin:5}} placeholder="Client Name"/></Col>
                                </Row>
                                
                                <Row>
                                    <Col span={4}>
                                    Receipt against:</Col>
                                <Col span={18}>
                                <Radio>General</Radio>&nbsp;&nbsp;&nbsp;
                                <Radio>Against Invoice</Radio>
                                </Col>
                                </Row>

                                  <Row>
                                      <Col span={4}>
                                      Amount:&nbsp;&nbsp;
                                     </Col>
                                      <Col span={18}>
                                      <Input style={{width: 200,margin:5}} placeholder="Amount"/>      </Col>
                                  </Row>
                                
                                    <Row>
                                      <Col span={4}>
                                      Mode of Payment:
                                      </Col>
                                      <Col span={18}>
                                      <Select defaultValue="lucy" style={{width: 200, margin: 5}}
                                                            onChange={handleChange}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">--Select --</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                                      </Col>
                                  </Row>
                                <Row>
                                    <Col span={4}>
                                    Pay Bank:
                                    </Col>
                                    <Col span={18}>
                                    <Select defaultValue="lucy" style={{width: 200,margin: 5}}
                                                     onChange={handleChange}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">--Select --</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                                    </Col>
                                </Row>
                                    <Row>
                                        <Col span={4}>
                                        Pay Branch:
                                        </Col>
                                        <Col span={18}>
                                        <Input style={{width: 200, margin:5}}/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={4}>
                                        Pay Ref No.:
                                        </Col>
                                        <Col span={18}>
                                        <Input style={{width: 200,margin:5}}/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={4}>
                                        Pay Date:
                                        </Col>
                                        <Col span={18}>
                                        <DatePicker style={{width: 200,margin:5}} onChange={onChange}/>
                                        </Col>
                                    </Row>
                                    
                                    <Row>
                                        <Col span={4}>
                                        Remarks:
                                        </Col>
                                        <Col span={18}>
                                        <Input style={{width: 200, margin: 5}}/>
                                        </Col>
                                    </Row>
                                    
                                    
                                     
                                
                            
                            
                                

                                <div>
                                    <Button type="primary">Save</Button>

                                </div>


                            </div>
                        </Content>

                        <Footer style={{textAlign: 'center'}}>@Agrobios</Footer>
                    </Layout>

                </Layout>
            </Layout>
        </div>
    );
}


export default App6;
